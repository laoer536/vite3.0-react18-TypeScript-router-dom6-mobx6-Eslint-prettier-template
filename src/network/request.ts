import axios from "axios";
import {
  AxiosRequestConfig,
  AxiosResponse,
  AxiosError,
  AxiosInstance,
} from "axios";
// import secretTool from "@/network/secret-transmission/secret-tool";  前端涉及加密解密时启用
import { resBaseInfo } from "@/network/api-res-model";

/** 定义axios基础配置 */
const axiosBaseOptions: AxiosRequestConfig = {
  //未配置跨域下启用(后端处理了跨域问题的情况下)
  //baseURL: process.env.VUE_APP_API_BASE_URL,

  //vue.config.js已配置跨域，并且用/api替换baseUrl下启用
  //优化：如果本地定义了跨域 那么在本地测试时 跨域生效 api base url 需要为跨域的配置
  // 但是上线时跨域便不再生效 需要使用线上的baseurl 而不是跨域配置的  于是需要动态加入base url 到axios中 于是需要在打包环境和本地测试环境中设定不同的base url
  baseURL: import.meta.env.VITE_API_BASE_URL as string,

  //最终发现直接在.env环境文件中配置好即可
  timeout: 8000,
  // 自定义请求头
  /* headers: {
            // "Accept": "application/json, text/plain, *!/!*",
            // "Content-Type": "application/json;charset=utf-8",
            // 'access-token': 'Bearer' + getItem('token'),
            // 'x-client-id': getItem('clientId'),
            // 'x-client-type': 1,
            // "x-client-ver": 1,
        }*/
};

class MyAxios {
  private readonly axiosInstance: AxiosInstance;
  constructor(options: AxiosRequestConfig) {
    this.axiosInstance = axios.create(options);
    this.initInterceptors();
  }

  private initInterceptors() {
    // 请求拦截  上传数据的加密处理在这里配置
    this.axiosInstance.interceptors.request.use(
      (config: AxiosRequestConfig) => {
        //headers的access-token部分在请求拦截中加入
        const token: string | null = localStorage.getItem("token");
        if (token) {
          // config.headers["access-token"] = token;
          if (config.headers) {
            config.headers["access-token"] = token;
          } else {
            alert("axios中config.headers不存在！");
          }
        } else {
          alert("获取token失败！");
        }

        //对config中的上传数据部分进行处理
        //需要上传时间戳数据？
        // let timestamp = new Date().getTime();

        //需要做加密处理？
        /*
          let data = config.data || {};
          *
          * 这里放对data做加密处理的代码  比如我们给加密后的data取名叫endata
          *
          *
          config.data = {
              endata: endata,
              enkey: ******,
              timestamp: timestamp,
              nonce: ******,
              appkey: ******,
              signature: ******,
          }
          */

        //不需要做任何处理
        console.log(`本次请求的config信息：`, config);
        return config;
      },
      (error) => {
        console.log(`axios请求拦截部分报错，错误信息error`, error);
        return Promise.reject(error);
      }
    );

    //响应拦截  从接口响应的数据在这里处理 例如解密等  时间发生在then catch前
    this.axiosInstance.interceptors.response.use(
      (response: AxiosResponse) => {
        //console.log('返回的config信息')
        //获取到的response含有配置信息等 通常情况下这里我们只需要其中的data部分 即从接口返回的数据
        // const { data } = response;

        //需要对收到的数据进行解密处理？
        //传入拿到的值的加密key,通过rsa解密方法得到解密的key
        // let endata = data.data.endata,
        //     enkey = data.data.enkey;
        // let key = secretTool.rsaDecrypt(enkey);
        //得到解密的key,和原来存在数据加密key一起传入再通过rsa解密方法得到最终的纯文本数据
        // let plainText = secretTool.aesDecrypt(endata, key);
        // let rdata = JSON.parse(plainText);
        // data.data = rdata;

        //最后返回data给then
        return response; //由于以下 单独封装了请求 所以这里不用再解构data 为了得到TS对返回值类型的提示  这里修改并不会造成类型的自动识别
      },
      (error: AxiosError) => {
        console.log("axios响应拦截部分发生错误，错误信息为", error);

        //需要对错误进行提示？
        //以下Message是ElementUI库的全局提示组件 当然我们可以更改
        //若ElementUI 需要在头部引入   import { Message } from 'element-ui';
        /*    if(error?.response){
              switch (error.response.status){
                  case 400:
                      Message.error('请求错误');
                      break;
                  case 401:
                      Message.error('未授权访问');
                      break;
                  case 404:
                      Message.error('资源未找到');
                      break;
                  default:
                      Message.error('其他错误信息');
              }
          }*/

        return Promise.reject(error);
      }
    );
  }

  /** 基于axios实例封装新的Promise请求（get、post，其他也差不多） 主要是能够吃到返回类型的香 */
  /** async声明异步函数 Promise<T> T代表定义该Promise函数的返回值 即代表async的return返回值*/
  async get<T>(
    url: string,
    params?: unknown,
    otherConfig?: AxiosRequestConfig
  ): Promise<T> {
    const { data } = await this.axiosInstance.request<resBaseInfo<T>>({
      url,
      method: "get",
      params,
      ...otherConfig,
    });

    return data.data;
  }

  async post<T>(
    url: string,
    params?: unknown,
    otherConfig?: AxiosRequestConfig
  ): Promise<T> {
    const { data } = await this.axiosInstance.request<resBaseInfo<T>>({
      url,
      method: "post",
      data: params,
      ...otherConfig,
    });

    if (data.rsCode !== "0") {
      /** 这里rsCode代表后台给的操作码 表示操作状态 */
      /** 这里可以提示操作失败啊 啥的 这里根据后台业务变 每个公司resBaseInfo返回类型大都不一样*/
      return Promise.reject(data.rsCode);
    }

    /**全局提示*/
    // alert(data.rsCause)

    /** 将业务需要的数据返回出去  以上get方法同理*/
    return data.data;
  }
}

export default new MyAxios(axiosBaseOptions);
