
import { createApp } from 'vue'
import App from './App.vue'
// import './registerServiceWorker'
import createRoute from './router'
import store from './store'


declare const window: {
  __POWERED_BY_QIANKUN__: boolean
  __INJECTED_PUBLIC_PATH_BY_QIANKUN__: string
}
let vueApp: null | any = null

function render(props: {container?: any, basePath?: string}) {
  const { container, basePath } = props
  vueApp = createApp(App).use(store).use(createRoute(basePath))
  vueApp?.mount(container ? container.querySelector('#app') : '#app')
}


if (window.__POWERED_BY_QIANKUN__) {
  __webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__
} else {
  /**
   * @description 构建后不允许单独运行
   * */
  if (process.env.NODE_ENV === 'production') {
    location.href = '/'
  } else {
    render({});
  }
}

export async function bootstrap() {
  // console.log('[vue] vue app bootstraped');
}
export async function mount(props: any) {
  console.log('[vue] props from main framework');
  console.log(JSON.stringify(props, null, '\t'))
  render(props);
}

export async function unmount(props: any) {
  const { container } = props
  vueApp?.unmount(container ? container.querySelector('#app') : '#app')
}
