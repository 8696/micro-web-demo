import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'

const Main = React.lazy(() => import('@/layout/main'))

declare const window: {__POWERED_BY_QIANKUN__: boolean}

type AppPropsType = {
  basePath?: string
}

export default (props: AppPropsType) => {
  return (
    <BrowserRouter basename={window.__POWERED_BY_QIANKUN__ ? props?.basePath : '/'}>
      <React.Suspense fallback={<></>}>
        <Switch>
          <Route exact path='/' render={() => <Redirect to='/home' />} />
          <Route exact path='/404' render={() => <></>} />
          <Route path='/' component={Main} />
        </Switch>
      </React.Suspense>
    </BrowserRouter>
  )
}
