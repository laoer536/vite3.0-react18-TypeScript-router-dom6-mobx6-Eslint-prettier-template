import axios from "axios";
import {
  // ResponseType,
  AxiosRequestConfig,
  AxiosResponse,
  AxiosError,
  AxiosInstance,
} from "axios";

//创建一个axios实例request 在其中进行基本config配置
const request: AxiosInstance = axios.create({
  //baseURL: process.env.VUE_APP_API_BASE_URL,

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
});

// 请求拦截  上传数据的加密处理在这里配置
request.interceptors.request.use(
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
    * 这里放对data做加密处理的代码
    *
    *
    config.data = {
        xxx: ******,
        xxx: ******,
        xxxx: ******,
        xxxx: ******,
        xxxxxx: ******,
        xxxxxx: ******,
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
request.interceptors.response.use(
  (response: AxiosResponse) => {
    //console.log('返回的config信息')
    //获取到的response含有配置信息等 通常情况下这里我们只需要其中的data部分 即从接口返回的数据
    const { data } = response;

    /*
      *
      * 需要解密处理？？ 解密处理部分
      *
      *
      * */

    //最后返回data给then
    return data;
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

//封装axios的get和post请求

interface ApiMoudle {
  get<T>(url: string, params?: T): void;
  post<T>(url: string, params?: T): void;
}

class ApiRequest implements ApiMoudle {
  Axios: AxiosInstance;
  constructor(Axios: AxiosInstance) {
    this.Axios = Axios;
  }
  get<T>(url: string, params?: T) {
    return this.Axios({
      url,
      method: "get",
      params,
    });
  }
  post<T>(url: string, params?: T) {
    return this.Axios({
      url,
      method: "post",
      data: params,
    });
  }
}

export default new ApiRequest(request);
