import React, { useState } from 'react'

import Menu from '@/layout/Menu'
import Header from '@/layout/Header'
import { Redirect, Route } from 'react-router-dom'
import style from './index.module.less'

const SystemList = React.lazy(() => import('@/view/system/list'))
const SystemUpdate = React.lazy(() => import('@/view/system/update'))
// 404 页面不能使用异步组件，否则在构建后重定向可能不渲染
import Error404 from '@/view/error/404'
import { registerMicroApps, start } from 'qiankun'
import { Spin } from 'antd'
import { getUserInfo } from '@/api/user.api'
import { useRequest } from 'ahooks'
import { microApps } from '@/micro.config'
import microEvent from '@/micro/event'
export default () => {
  const [microLoading, setMicroLoading] = useState<boolean>(false)

  // 模拟请求一个用户信息
  const userInfoAHook = useRequest(getUserInfo, {
    onSuccess(userInfo: any) {
      console.log('Main app useEffect')
      const micro = microApps.map(item => {
        return {
          ...item,
          container: '#micro-app',
          activeRule: `/${item.name}`,
          props: {
            // 向子应用传递数据
            basePath: `/${item.name}`,
            ...userInfo,
            microEvent
          },
          loader: (loading: boolean) => {
            setMicroLoading(loading)
          }
        }
      })
      registerMicroApps(micro)

      start({
        sandbox: {
          strictStyleIsolation: false,
          experimentalStyleIsolation: false
        },
        prefetch: false
      })
    }
  })


  const PageLoading = () => <div className={style.pageLoading}><Spin/></div>

  return (
    <div className={style.layoutMain}>
      <Menu/>
      <div style={{ width: 'calc(100% - 196px)' }}>
        <Header/>
        <div className={style.bodyMain} style={{ height: 'calc(100% - 50px)' }}>
          {/** 子应用加载 | 接口获取时 */}
          {(userInfoAHook.loading || microLoading) && <PageLoading/>}
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
          </React.Suspense>
          {/** 子应用 */}
          <div id='micro-app' style={{ maxHeight: '100%', overflow: 'auto' }}/>
        </div>
      </div>
    </div>
  )
}
