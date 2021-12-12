import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import reportWebVitals from './reportWebVitals'
import 'modern-normalize/modern-normalize.css'
import './style/global.style.less'

import App from './App'

ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('root'))

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
