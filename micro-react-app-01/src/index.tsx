import ReactDOM from 'react-dom'
import reportWebVitals from './reportWebVitals'
import 'modern-normalize/modern-normalize.css'
import './style/global.style.less'

import App from './App'

declare const window : {
  __MICRO_APP_BASE_ROUTE__: string;
  __MICRO_APP_ENVIRONMENT__: boolean;
  __MICRO_APP_PUBLIC_PATH__: string;
}

declare let __webpack_public_path__: string

type RenderPropsType = {
  basePath?: string
}

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

function render(props: RenderPropsType) {
  const { basePath } = props
  console.log('basePath', basePath)
  ReactDOM.render(<App basePath={basePath} />, document.querySelector('#root'))
}

render({
  basePath: window.__MICRO_APP_BASE_ROUTE__ || '/'
})

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()


