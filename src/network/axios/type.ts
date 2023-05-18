import type { AxiosProgressEvent, AxiosRequestConfig } from 'axios'

export interface Upload {
  url: string
  formData: FormData
  controller?: AbortController
  onUploadProgress?: (progressEvent: AxiosProgressEvent) => void
}

export interface UploadStream {
  url: string
  file: File
  controller?: AbortController
  onUploadProgress?: (progressEvent: AxiosProgressEvent) => void
}

export interface AxiosDownload {
  url: string
  data?: object
  fileName?: string //用于自定义文件名
  otherConfig?: AxiosRequestConfig
  controller?: AbortController
  onDownloadProgress?: (progressEvent: AxiosProgressEvent) => void
}

export interface UrlDownload {
  fileUrl: string
  fileName: string
  serveBaseUrl?: string
}
