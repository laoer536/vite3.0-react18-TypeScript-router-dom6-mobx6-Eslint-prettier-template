import { useRoutes } from "react-router-dom";
import { lazy } from "react";
import Home from "@views/Home";
import HomeChildren from "@views/HomeChildren";

/*加入路由懒加载*/
const About = lazy(() => import("@views/About"));
const More = lazy(() => import("@views/More"));
const NotFound = lazy(() => import("@views/NotFound"));

/**react-router-dom6全局配置
 * @Description: 使用react-router-dom6提供的useRoutes() 我们可以更加方便和简洁地配置全局路由
 * @author liuJie
 * @Email 1547698569@qq.com
 * @date 2021/12/23 9:46
 */

const Router = () => {
  return useRoutes([
    {
      path: "/",
      element: <Home />,
      children: [{ path: "/:id", element: <HomeChildren /> }],
    },
    { path: "/about/:name/:age", element: <About /> },
    { path: "/more", element: <More /> },
    // Not found routes work as you'd expect
    { path: "*", element: <NotFound /> },
  ]);
};

export default Router;
