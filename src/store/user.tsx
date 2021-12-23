//简单功能的模块一个文件即可
import { makeAutoObservable } from "mobx";

class User {
  userName = "LiuJie";

  constructor() {
    makeAutoObservable(this);
  }

  changeName() {
    this.userName = "liujie";
  }
}

export default new User();
