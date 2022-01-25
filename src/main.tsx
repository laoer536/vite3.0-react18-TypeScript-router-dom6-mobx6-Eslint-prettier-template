/**文档说明
 * @Description: 该模板是基于vite官方提供的react-ts模板进一步封装得到的基础模板 囊括了项目的基础需要
 * @author liuJie
 * @Email 1547698569@qq.com
 * @date 2022/1/26 0:27
 */

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter basename={import.meta.env.VITE_PUBLIC_PATH as string}>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
