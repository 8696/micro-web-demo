import React from 'react'

import Menu from '@/layout/Menu'
import Header from '@/layout/Header'
import { Redirect, Route } from 'react-router-dom'
import style from './index.module.less'

const SystemList = React.lazy(() => import('@/view/system/list'))
const SystemUpdate = React.lazy(() => import('@/view/system/update'))
// 404 页面不能使用异步组件，否则在构建后重定向可能不渲染
import Error404 from '@/view/error/404'
import { Spin } from 'antd'
import { microApps } from '@/micro.config'
import microApp from '@micro-zoe/micro-app'
microApp.start()
import MicroReact01 from '@/view/micro-app/react-app-01'
import MicroReact02 from '@/view/micro-app/react-app-02'
import MicroVue01 from '@/view/micro-app/vue-app-01'
import MicroAngular from '@/view/micro-app/angular-app-01'
export default () => {


  const PageLoading = () => <div className={style.pageLoading}><Spin/></div>

  return (
    <div className={style.layoutMain}>
      <Menu/>
      <div style={{ width: 'calc(100% - 196px)' }}>
        <Header/>
        <div className={style.bodyMain} style={{ height: 'calc(100% - 50px)' }}>
          {/*{<PageLoading/>}*/}
          {/** 主应用内置页面 */}
          <React.Suspense fallback={<PageLoading/>}>
            <Route exact path='/404' component={Error404}/>
            <Route exact path='/system' component={SystemList}/>
            <Route exact path='/system/update' component={SystemUpdate}/>
            {/** 子应用 404 重定向到主应用的 404 */}
            {
              microApps.map((item) => (
                <Route key={item.name} exact path={`/${item.name}/404`} render={() => <Redirect to='/404' />} />
              ))
            }
            <Route path='/react-app-01' component={MicroReact01}/>
            <Route path='/react-app-02' component={MicroReact02}/>
            <Route path='/vue-app-01' component={MicroVue01}/>
            <Route path='/angular-app-01' component={MicroAngular}/>
          </React.Suspense>
        </div>
      </div>
    </div>
  )
}
