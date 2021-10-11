import { defineConfig, loadEnv } from 'vite'
import type { Plugin, ConfigEnv, UserConfig } from 'vite'
import path from 'path'

import reactRefresh from '@vitejs/plugin-react-refresh'
import legacy from '@vitejs/plugin-legacy' // 兼容传统浏览器
import styleImport from 'vite-plugin-style-import'
import visualizer from 'rollup-plugin-visualizer'

import { antdThemeVariables } from './config/antd-theme'
import config from './config'

const env = process.argv[process.argv.length - 1] // 获取环境变量


const root = process.cwd()
// const env = loadEnv(ConfigEnv.mode, root)
console.log('loadEnv', root, env)

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactRefresh(), legacy(), setStyleImport(), setVisualizer()],
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true, // 支持内联 JavaScript
        modifyVars: antdThemeVariables, // 重写 less 变量，定制样式
      },
    },
  },
  server: setServerProxy(),
  resolve: setResolve(),
  build: setBuild(),
})

// 静态资源合并分类打包
function setBuild() {
  return {
    assetsDir: 'static/images/',
    brotliSize: false, // 关闭计算包大小
    rollupOptions: {
      output: {
        chunkFileNames: 'static/js/[name]-[hash].js',
        entryFileNames: 'static/js/[name]-[hash].js',
        assetFileNames: 'static/[ext]/[name]-[hash].[ext]',
      },
    },
  }
}

function setResolve() {
  return {
    alias: {
      '~': path.resolve(__dirname, './'),
      '@': path.resolve(__dirname, 'src'),
      '/images': 'src/assets/images', // 图片使用 <img src="/images/logo.svg" />
    },
  }
}

function setServerProxy() {
  return {
    port: config.dev.port, // 开发环境启动的端口
    proxy: {
      '/api': {
        target: config.proxy.target, // 当遇到 /api 路径时，将其转换成 target 的值
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  }
}

function setStyleImport() {
  return styleImport({
    libs: [
      {
        libraryName: 'antd',
        esModule: true,
        resolveStyle: (name) => {
          return path.resolve(__dirname, `node_modules/antd/es/${name}/style/index`)
        },
      },
    ],
  })
}

function setVisualizer() {
  return visualizer({
    filename: './node_modules/.cache/visualizer/stats.html',
    open: true,
    gzipSize: true,
    brotliSize: true,
  }) as Plugin
}
