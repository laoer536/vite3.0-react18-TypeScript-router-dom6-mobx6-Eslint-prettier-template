// import React,{ useEffect, useState, Fragment, useMemo } from "react";
import { useEffect, useState, Fragment, useMemo } from "react";
/*less => import "./index.module.less"; 这样写无效*/
import AboutStyle from "./index.module.less";
import cccIcon from "@assets/Images/ccc.jpg";
import { observer } from "mobx-react";
import user from "@store/user";
import edit from "@store/edit";

const Index = () => {
  /**state  state部分**/

  /**effect  effect部分**/

  /**methods 方法部分**/
  function changeName() {
    user.changeName();
  }

  function changeMaterial() {
    edit.material.changeMaterial();
  }
  /**styles 样式部分**/

  /**render**/

  return (
    <div className={AboutStyle.home}>
      <h1>这是More界面</h1>
      <img src={cccIcon} alt={"图片未正常加载"} />
      <span>{user.userName}</span>
      <button onClick={() => changeName()}>点击改变名字</button>
      <span>发现一种材料：{edit.material.material}</span>
      <button onClick={() => changeMaterial()}>点击改变名字</button>
    </div>
  );
};

export default observer(Index);
