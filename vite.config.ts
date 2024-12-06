import react from '@vitejs/plugin-react-swc'
import { resolve } from 'path'
import AutoImport from 'unplugin-auto-import/vite'
import type { ConfigEnv } from 'vite'
import { defineConfig, loadEnv } from 'vite'

// https://vitejs.dev/config/
export default ({ command, mode }: ConfigEnv) => {
  const currentEnv = loadEnv(mode, process.cwd())
  console.log('Current mode:', command)
  console.log('Current environment configuration:', currentEnv) //loadEnv即加载根目录下.env.[mode]环境配置文件
  return defineConfig({
    plugins: [
      react(),
      AutoImport({
        imports: ['react', 'react-router-dom'],
        dts: './src/auto-imports.d.ts',
        dirs: ['src/store'],
        eslintrc: {
          enabled: true, // Default `false`
          filepath: './.eslintrc-auto-import.json', // Default `./.eslintrc-auto-import.json`
        },
      }),
    ],
    //项目部署的基础路径,
    base: currentEnv.VITE_PUBLIC_PATH,
    mode: mode,
    resolve: {
      //别名
      alias: {
        '@': resolve(__dirname, './src'),
      },
    },
    //服务
    server: {
      //自定义代理---解决跨域
      proxy: {
        // 选项写法
        '/api': {
          target: 'http://xxxxxx.com',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, ''),
        },
      },
    },
    css: {
      // css预处理器
      preprocessorOptions: {
        sass: {},
      },
    },
    //构建
    build: {
      outDir: mode === 'docker' ? 'dist' : 'docs', //输出路径
      //构建后是否生成 source map 文件
      sourcemap: mode != 'production',
      rollupOptions: {
        output: {
          manualChunks: {
            vc: ['vconsole'],
          },
        },
      },
      //打包去掉打印信息 保留debugger vite3需要单独安装terser才行
      // minify: 'terser',
      // terserOptions: {
      //   compress: {
      //     drop_console: true,
      //     drop_debugger: false,
      //   },
      // },
    },
  })
}
