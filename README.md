
# **micro-web**

### 介绍

基于 `qiankun` 的微前端demo项目

基于 `micro-app` 的在 [micro-app-jd](https://github.com/8696/micro-web-demo/tree/micro-app-jd) 分支


### 预览

[http://micro.icode.link](http://micro.icode.link/)

### 项目

主应用 [micro-base](./micro-base)：`react^17.0.2`

子应用1 [micro-base](./micro-react-app-01)：`react^17.02`

子应用2 [micro-base](./micro-react-app-02)：`react^17.0.2`

子应用3 [micro-base](./micro-vue-app-01)：`vue^3.2.3`


### 功能

- 主应用
    + 统一监听地址变化，主动拦截未授权页面
    + 拥有主应用单独的页面
    + 统一处理404
    + history 模式

- 子应用
  - 可独立开发
  - 可独立运行（在构建后可独立运行）
  - 支持全懒加载
  + history 模式
  
- 扩展
  - 父子通信功能

### 开发

使用了 `yarn` 管理依赖包

分别给四个项目安装依赖：`react` 项目在 `.env` 配置端口，`vue` 项目在 `vue.config.js` 配置

**子应用配置**

> micro-base/src/micro.config.ts

> react: yarn start:xxx

> vue: yarn serve

主应用运行在 [http://localhost:8881/](http://localhost:8881/)


### 快速测试

快捷安装
> yarn i

打包 & 启动（需要安装pm2）
> yarn build-deploy

运行在 [http://localhost:38003](http://localhost:38003/)

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
if (window.__POWERED_BY_QIANKUN__) {
  __webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__
} else {
  /**
   * @description 构建后不允许单独运行
   * */
  if (process.env.NODE_ENV === 'production') {
    // 集合部署
    location.href = '/'
    // 单独部署则跳转至主应用地址
    // location.href = '//main'
  } else {
    render({});
  }
}
```

### 通信

主子应用可以自定义 [事件](http://nodejs.cn/api/events.html) 进行通信，可查看 demo 示例

**实现**

主应用：

主应用新建一个单例事件对象，该 `events` 对象来自 nodejs
```javascript
import EventEmitter from 'events'
export default new EventEmitter()
```

在注册子应用时将该事件传入 `props`

```typescript
const micro = microApps.map(item => {
  return {
    props: {
      microEvent
    }
  }
})
```

子应用：

子应用新建设置和获取单例事件的方法

```typescript
import { EventEmitter as Type } from 'events'

type EventEmitterType = Type | null

let microEvent: EventEmitterType = null

export const setMicroEvent = (_: EventEmitterType) => {
  microEvent = _
}
export const getMicroEvent = (): EventEmitterType => microEvent
```

子应用接受事件单例对象并保存

```typescript
export async function mount(props) {
  setMicroEvent(props.microEvent)
}
```

子应用使用

```typescript
import { getMicroEvent } from '@/micro/event'
getMicroEvent()?.on('main-message', onMicroMessageHandle)
```


