import React, { Suspense } from 'react'
import { useEffect } from 'react'
import { notification } from 'antd'
import { Route, useHistory, Switch, useLocation } from 'react-router-dom'
import { hasToken } from '@/helper/token'

const Login = React.lazy(() => import('@/view/login'))
const Main = React.lazy(() => import('@/layout/Main'))

import BodySpin from '@/component/BodySpin'
import { toLoginPage } from '@/helper/bom'
import { getMicroDefaultApp } from '@/micro.config'

export default () => {
  const history = useHistory()
  const location = useLocation()
  useEffect(() => {
    const pathname = history.location.pathname
    notification.open({
      message: 'Path changed: ' + pathname
    })
    /**
     * @description micro 不用设置默认应用，在监听到地址为 / 的时候可跳转至默认应用
     * @description 如果默认主页是主应用自带这里更改为对应地址
     * */
    const microDefaultApp = getMicroDefaultApp()
    if (microDefaultApp && pathname === '/') {
      return history.replace('/' + microDefaultApp.name)
    }
  }, [history, history.location.pathname, location.pathname])

  /**
   * @description 路由白名单
   * */
  const routeWhitePath = [
    '/login'
  ]
  if (!routeWhitePath.includes(history.location.pathname) && !hasToken()) {
    /**
     * @description 不支持重复注册应用、在注册一次后 props 数据传递，不在支持修改，所以这里采用刷新的方向跳转至登录
     * */
    toLoginPage()
    return <></>
  }
  return (
    <Suspense fallback={<BodySpin />}>
      <Switch>
        <Route exact path='/login' component={Login} />

        {/** layout 布局 */}
        <Route path='/' component={Main} />
      </Switch>
    </Suspense>
  )
}

