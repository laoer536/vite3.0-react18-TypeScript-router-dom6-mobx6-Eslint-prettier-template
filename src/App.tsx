import { Suspense } from "react";
import "./App.moudle.less";
import Router from "@/router";
import Loading from "@views/Loading";
function App() {
  return (
    <div className="App">
      {/*组件中只要使用了lazy懒加载组件 那么就必须用Suspense组件包裹  显示加载时这段时间的显示效果 否则react报错 页面无法正常显示 用于性能优化 在被包裹的组件 */}
      {/*如果没有用懒加载 或者异步操作（例如数据请求） 当然就没必要用它了 太快了会闪屏 后续找找解决办法*/}

      <Suspense fallback={<Loading />}>
        <Router />
      </Suspense>
    </div>
  );
}

export default App;
