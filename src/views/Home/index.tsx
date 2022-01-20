import { useState } from "react";
import { useNavigate, Outlet } from "react-router-dom"; //react-router-dom 6 路由跳转废弃useHistory 用useNavigate
import HomeStyle from "./index.module.less";
import aaaIcon from "@assets/Images/aaa.jpg";
import viteIcon from "../../favicon.svg";
import reactIcon from "../../logo.svg";
import addIcon from "@assets/Images/add.svg";
import meIcon from "@assets/Images/me.svg";

const Index = () => {
  /**state  state部分**/
  const [num, setNum] = useState(1);
  const [obj, setObj] = useState([
    { name: "liu", age: "23" },
    { name: "liu", age: "23" },
  ]);
  const navigate = useNavigate();

  /**effect  effect部分**/

  /**methods 方法部分**/
  function addNum(params: number) {
    setNum(() => num + params);
  }

  function goToAbout() {
    navigate("/about/LJ/23", {
      //这里path这样写就相当于params传参了  前提route.js已定义： <Route path={"/about/:name/:age"} element={<About/>} />
      state: { name: "LiuJie" },
      //search: "?name=liujie&age=23", //search传参为字符串，格式务必以'?'开头，若涉及到多个参数，用'&'拼接   react-router-dom6已废弃  但是useLocation中可以获取到 如果链接有参数问号拼接的话
      //query: { name: "liujie" }, //react-router-dom6已废弃
    });
  }

  console.log("11111");

  function goToMore() {
    navigate("/more");
  }

  function goToChild1() {
    navigate("/1", { state: { content: "这是Home的第1个子路由" } });
  }

  function goToChild2() {
    navigate("/2", { state: { content: "这是Home的第二个子路由" } });
  }

  const goToGitHub = () => {
    window.open("https://github.com/laoer536/");
  };
  /**styles 样式部分**/

  /**render**/
  return (
    <div className={HomeStyle.home}>
      <div className={HomeStyle.viteReact}>
        <img src={viteIcon} className={HomeStyle.vite} alt={"vite"} />
        <img src={addIcon} className={HomeStyle.add} alt={"add"} />
        <img src={reactIcon} className={HomeStyle.react} alt={"react"} />
      </div>
      <div className={HomeStyle.me}>
        <span className={HomeStyle.span}>Template made by LiuJie.</span>
        <img
          className={HomeStyle.img}
          src={meIcon}
          alt="LiuJie"
          onClick={goToGitHub}
        />
      </div>
      <img src={aaaIcon} className={HomeStyle.girl} alt={"图片未正常加载"} />
      <br />
      <br />
      <button onClick={() => addNum(5)}>点击增加数字:{num}</button>
      <button onClick={() => goToAbout()}>点击跳转到About界面</button>
      <button onClick={() => goToMore()}>点击跳转到More界面</button>
      <button onClick={() => goToChild1()}>点击显示子路由1</button>
      <button onClick={() => goToChild2()}>点击显示子路由2</button>
      <br />
      <br />
      {obj.map((item, index) => (
        <div key={index}>
          {/** 这里仅仅是测试当后端意外修改了一个字段 前端还是按照原来的字段取 取值也能取 并且控制台不会报错
             因为取到的值为undefined 框架可以渲染undefined 渲染为空白 相当于'' 如果是null也是一样的效果
           卧槽了  暂时没有找到只要取到值为undefined都报错的方法 所以以后从后端取来的数据字段
             ，以及对应的类型都要严格同步，把关，这，不报错就很老火，不好排查问题 */}
          {"1111"}-{item.a}-{"1111"}
          {"2222"}-{undefined}-{"2222"}
          {"3333"}-{null}-{"3333"}
        </div>
      ))}
      <Outlet />
    </div>
  );
};

export default Index;
