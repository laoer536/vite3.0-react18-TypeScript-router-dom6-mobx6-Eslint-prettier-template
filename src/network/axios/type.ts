import { AxiosRequestConfig } from "axios";

export interface Upload {
  url: string;
  file: FormData | File;
  controller?: AbortController;
  onUploadProgress?: (progressEvent: any) => void;
}

export interface AxiosDownload {
  url: string;
  data?: object;
  fileName?: string; //用于自定义文件名
  otherConfig?: AxiosRequestConfig;
  controller?: AbortController;
  onDownloadProgress?: (progressEvent: any) => void;
}

export interface UrlDownload {
  fileUrl: string;
  fileName: string;
  serveBaseUrl?: string;
}
