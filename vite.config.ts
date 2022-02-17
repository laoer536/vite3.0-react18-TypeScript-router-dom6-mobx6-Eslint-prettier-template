import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import format from "date-fns/format";

// https://vitejs.dev/config/

export default ({ mode }: { mode: string }) => {
  console.log("当前环境", mode);
  console.log("当前环境配置", loadEnv(mode, process.cwd())); //loadEnv即加载根目录下.env.[mode]环境配置文件

  return defineConfig({
    plugins: [react()],
    //项目部署的基础路径,
    base: loadEnv(mode, process.cwd()).VITE_PUBLIC_PATH,
    //项目根目录
    root: process.cwd(),
    //模式配置
    mode: mode,
    //类型： 'info' | 'warn' | 'error' | 'silent'---调整控制台输出的级别，默认为 'info'。
    logLevel: "info",
    resolve: {
      //别名
      alias: {
        "@": path.resolve(__dirname, "./src"),
        "@components": path.resolve(__dirname, "./src/components"),
        "@store": path.resolve(__dirname, "./src/store"),
        "@views": path.resolve(__dirname, "./src/views"),
        "@assets": path.resolve(__dirname, "./src/assets"),
      },
    },
    //服务
    server: {
      //服务器主机名
      host: "localhost",
      //端口号
      port: 8080,
      strictPort: true, //设为 true 时若端口已被占用则会直接退出,而不是尝试下一个可用端口
      https: false,
      open: false, //为true时，服务器启动时自动在浏览器中打开应用程序。      //当此值为字符串时，会被用作 URL 的路径名
      //自定义代理---解决跨域
      proxy: {
        // 选项写法
        "/api": {
          target: "http://xxxxxx.com",
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, ""),
        },
      },
    },
    //构建
    build: {
      outDir: `dist_${format(new Date(), "yyyyMMdd_HHmm")}`, //输出路径  新增更据日期定义打包名
      assetsDir: "assets", //指定生成静态资源的存放路径（相对于 build.outDir）。
      assetsInlineLimit: 4096, //小于此阈值的导入或引用资源将内联为 base64 编码，以避免额外的 http 请求。设置为 0 可以完全禁用此项
      //构建后是否生成 source map 文件
      sourcemap: mode != "production",
      reportCompressedSize: true, //设置为 false 以禁用报告压缩块大小。可以略微提高构建速度。
      brotliSize: true, //启用/禁用 brotli 压缩大小报告。压缩大型输出文件可能会很慢，因此禁用该功能可能会提高大型项目的构建性能。

      //打包去掉打印信息 保留debugger
      minify: "terser",
      terserOptions: {
        compress: {
          drop_console: true,
          drop_debugger: false,
        },
      },
    },
  });
};
