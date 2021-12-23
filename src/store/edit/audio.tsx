import { makeAutoObservable } from "mobx";

class Audio {
  audio = "七里香";
  constructor() {
    makeAutoObservable(this);
  }
  changeAudio() {
    this.audio = "四季与你";
  }
}

export default new Audio();
