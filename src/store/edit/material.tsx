import { makeAutoObservable } from "mobx";

class Material {
  material = "螺丝刀";
  constructor() {
    makeAutoObservable(this);
  }
  changeMaterial() {
    this.material = "手电筒";
  }
}
export default new Material();
