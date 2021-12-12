import { NavLink, Redirect } from 'react-router-dom'
import { Switch, Route } from 'react-router-dom'
import React from 'react'
import './main.less'
const Home = React.lazy(() => import('@/view/home'))
const About = React.lazy(() => import('@/view/about'))
const Static = React.lazy(() => import('@/view/static'))
const Component = React.lazy(() => import('@/view/component'))

export default () => {
  return (
    <div>
      <div className='nav'>
        <NavLink to='/home'>Home</NavLink>
        &nbsp;|&nbsp;
        <NavLink to='/static'>静态资源</NavLink>
        &nbsp;|&nbsp;
        <NavLink to='/component'>组件</NavLink>
        &nbsp;|&nbsp;
        <NavLink to='/hello-world'>404</NavLink>
      </div>
      <React.Suspense fallback={<></>}>
        <Switch>
          <Route exact path={'/home'} component={Home} />
          <Route exact path={'/about'} component={About} />
          <Route exact path={'/static'} component={Static} />
          <Route exact path={'/component'} component={Component} />
          <Route exact path='*' render={() => <Redirect to='/404' />} />
        </Switch>
      </React.Suspense>
    </div>
  )
}
