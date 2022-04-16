import { AxiosRequestConfig } from "axios";

/** 定义axios基础配置 */
export const axiosBaseOptions: AxiosRequestConfig = {
  baseURL: import.meta.env.VITE_API_BASE_URL as string, //如果本地配置了跨域 那么.env.development VITE_API_BASE_URL请修改为你的替换字符串 例如'/api'
  timeout: 8000,
};
