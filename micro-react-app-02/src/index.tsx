import ReactDOM from 'react-dom'
import reportWebVitals from './reportWebVitals'
import 'modern-normalize/modern-normalize.css'
import './style/global.style.less'

import App from './App'

declare const window : {
  __POWERED_BY_QIANKUN__: boolean
  __INJECTED_PUBLIC_PATH_BY_QIANKUN__: string
}
declare let __webpack_public_path__: string

type RenderPropsType = {
  container?: Element
  basePath?: string
}

function render(props: RenderPropsType) {
  const { container, basePath } = props
  console.log('container', container)
  console.log('basePath', basePath)
  ReactDOM.render(<App basePath={basePath} />, container ? container.querySelector('#root') : document.querySelector('#root'))
}

if (window.__POWERED_BY_QIANKUN__) {
  __webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__
  console.log(__webpack_public_path__)
} else {
  /**
   * @description 构建后不允许单独运行
   * */
  if (process.env.NODE_ENV === 'production') {
    location.href = '/'
  } else {
    render({})
  }
}

export async function bootstrap() {
  // console.log()
}

export async function mount(props: { container?: any }) {
  console.log('[react17] props from main framework')
  console.log(JSON.stringify(props, null, '\t'))
  render(props)
}

export async function unmount(props: { container: any }) {
  const { container } = props
  ReactDOM.unmountComponentAtNode(container ? container.querySelector('#root') : document.querySelector('#root'))
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()


