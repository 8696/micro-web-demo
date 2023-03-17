
import { createApp } from 'vue'
import App from './App.vue'
// import './registerServiceWorker'
import createRoute from './router'
import store from './store'


declare const window: {
  __MICRO_APP_BASE_ROUTE__: string;
  __MICRO_APP_ENVIRONMENT__: boolean;
  __MICRO_APP_PUBLIC_PATH__: string;
  addEventListener: any;
}
let vueApp: null | any = null

function render(props: {basePath?: string}) {
  const { basePath } = props
  vueApp = createApp(App).use(store).use(createRoute(basePath))
  vueApp?.mount('#app')
}


// 如果在 micro-app 环境中渲染
if (window.__MICRO_APP_ENVIRONMENT__) {
  // @ts-ignore
  __webpack_public_path__ = window.__MICRO_APP_PUBLIC_PATH__
  window.addEventListener('unmount',  () => {
    // 卸载应用
    vueApp?.unmount('#app')
  })
} else {
  /**
   * @description 构建后不允许单独运行
   * */
  if (process.env.NODE_ENV === 'production') {
    location.href = '/'
  }
}


render({
  basePath: window.__MICRO_APP_BASE_ROUTE__ || '/'
});
