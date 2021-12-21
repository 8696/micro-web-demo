
# **micro-web**

### 介绍

基于 `micro-app` 的微前端demo项目

基于 `qiankun` 的在 [master](https://github.com/8696/micro-web-demo) 分支


### 预览

[http://micro-jd.icode.link](http://micro-jd.icode.link/)

### 项目

主应用 [micro-base](./micro-base)：`react^17.0.2`

子应用1 [micro-base](./micro-react-app-01)：`react^17.02`

子应用2 [micro-base](./micro-react-app-02)：`react^17.0.2`

子应用3 [micro-base](./micro-vue-app-01)：`vue^3.2.3`


### 功能

- 主应用
    + 统一监听地址变化，主动拦截未授权页面
    + 拥有主应用单独的页面
    + 统一处理404（实现中）
    + history 模式

- 子应用
  - 可独立开发
  - 可独立运行（在构建后可独立运行）
  - 支持全懒加载
  + history 模式
  
- 扩展
  - 父子通信功能（实现中）

### 开发

使用了 `yarn` 管理依赖包

分别给四个项目安装依赖：`react` 项目在 `.env` 配置端口，`vue` 项目在 `vue.config.js` 配置

**子应用配置**

> micro-base/src/micro.config.ts
> micro-base/src/view/micro-app/xxx.tsx

> react: yarn start:xxx

> vue: yarn serve

主应用运行在 [http://localhost:8881/](http://localhost:8881/)


### 快速测试

快捷安装
> yarn i

打包 & 启动（需要安装pm2）
> yarn build-deploy

运行在 [http://localhost:38004](http://localhost:38004/)

### 部署

**单独部署**

> 删除 `micro-base` 下 `.env.production` 的 `PUBLIC_URL` 配置

> 删除 `micro-react-app-01` 下 `.env.production` 的 `PUBLIC_URL` 配置

> 删除 `micro-react-app-02` 下 `.env.production` 的 `PUBLIC_URL` 配置

> 删除 `micro-vue-app-01` 下 `vue.config.js` 的 `publicPath` 配置

> 更改 `micro-base/src/micro.config.ts` 的 `entry` 配置

**集合部署**

在构建完之后目录需整理如下：

```
|-- index.html 
|-- micro-base
    |-- index.html
    |-- static
|-- micro-react-app-01
    |-- index.html
    |-- static
|-- micro-react-app-02
    |-- index.html
    |-- static
|-- vue-app-01
    |-- index.html
    |-- static
```


**构建后禁止子应用单独运行**

子应用入口文件：

```javascript
// 如果在 micro-app 环境中渲染
if (window.__MICRO_APP_ENVIRONMENT__) {
  __webpack_public_path__ = window.__MICRO_APP_PUBLIC_PATH__
  console.log(__webpack_public_path__)
} else {
  /**
   * @description 构建后不允许单独运行
   * */
  if (process.env.NODE_ENV === 'production') {
    location.href = '/'
  }
}
```

### 通信

实现中...
