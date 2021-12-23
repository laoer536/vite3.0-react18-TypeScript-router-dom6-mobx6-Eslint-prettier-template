import { useEffect } from "react";
/*less => import "./index.module.less"; 这样写无效   在vite中有效*/
import {
  useLocation,
  useMatch,
  useParams,
  useNavigate,
} from "react-router-dom";
import AboutStyle from "./index.module.less";
import bbbIcon from "@assets/Images/bbb.jpg";

const Index = () => {
  /**state  state部分**/
  const location = useLocation();
  const match = useMatch("about/:name/:age");
  const params = useParams();
  const history = useNavigate();

  /**effect  effect部分**/
  useEffect(() => {
    //函数体部分相当于componentDidMount
    console.log("222");
    //return部分componentWillUnMount
    //return console.log("333333");  这样写会直接执行 componentWillUnMount不生效 就直接在componentDidMount周期中执行了
    //return使用回调函数没有问题 正常在componentWillUnMount中执行
    return () => {
      console.log("3333333");
    };
  }, []); //依赖处相当于componentDidUpdate
  /**methods 方法部分**/
  /*新的发现 hook中 如果一个方法是直接执行的，那么他的执行是先于生命周期useEffect的 可能相当于类式组件的componentWillMount*/
  console.log("11111");
  /*以下分别拿到了 history的location(含有路由state、query数据)、match(中含有路由params数据) 第三个比较特殊 直接就拿到了路由match中的params参数对象*/
  console.log("location", location);
  // console.log("match", match);  react-router-dom 6 中废弃useRouteMatch
  console.log("match", match);
  console.log("params", params);
  console.log("history", history);

  /**styles 样式部分**/

  /**render**/

  return (
    <div className={AboutStyle.home}>
      <h1>这是about界面</h1>
      <img src={bbbIcon} alt={"图片未正常加载"} />
    </div>
  );
};

export default Index;
