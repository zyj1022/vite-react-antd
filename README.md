# Vite + React + Antd + Typescript

用`vite2.x`搭建的`react17.x`项目，支持`TypeScript4.x`、`Antd4.x`，`mobx`等。
## 开发

```sh
# clone
git clone https://github.com/zyj1022/vite-react-antd.git

# install
yarn install

# start
yarn start
```

## 特性支持

- 用 `Typescript`、`Antd`可以支持主题样式覆盖
- 用 `Mobx` 管理 `store`
- 支持`Proxy`代理、`alias`别名
- 支持`HMR`快速热更新
- 开发启动速度快，以秒计算
- 支持懒加载和`chunk`分割

## 目录结构

```js
├── dist                                // 默认的 build 输出目录
├── config                              // 全局配置文件
└── src                                 // 源码目录
    ├── assets                          // 公共的文件（如image、font等）
    ├── components                      // 项目组件
    ├── constants                       // 常量定义
    ├── layout                          // 全局布局
    ├── routes                          // 路由
    ├── stores                          // 状态管理器
    ├── styles                          // 样式相关
    ├── utils                           // 工具库
    ├── pages                           // 页面模块
        ├── xxx                         // 开发页面模块
        ├── ...
    ├── App.tsx                         // react顶层文件
    ├── main.ts                         // 项目入口文件
    ├── typing.d.ts                     // ts类型文件
├── .editorconfig                       // IDE格式规范
├── .env                                // 环境变量
├── .eslintignore                       // eslint忽略
├── .eslintrc                           // eslint配置文件
├── .gitignore                          // git忽略
├── .npmrc                              // npm配置文件
├── .prettierignore                     // prettierc忽略
├── .prettierrc                         // prettierc配置文件
├── index.html                          // 项目入口文件
├── LICENSE.md                          // LICENSE
├── package.json                        // package
├── pnpm-lock.yaml                      // pnpm-lock
├── postcss.config.js                   // postcss
├── README.md                           // README
├── tsconfig.json                       // typescript配置文件
└── vite.config.ts                      // vite
```

## 版本记录

- v0.0.1：初始化项目
