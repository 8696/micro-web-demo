import { NavLink, Redirect } from 'react-router-dom'
import { Switch, Route } from 'react-router-dom'
import React from 'react'
import './main.less'
const Home = React.lazy(() => import('@/view/home'))
const About = React.lazy(() => import('@/view/about'))
const Event = React.lazy(() => import('@/view/event'))

export default () => {
  return (
    <div>
      <div className='nav'>
        <NavLink to='/home'>Home</NavLink>
        &nbsp;|&nbsp;
        <NavLink to='/about'>About</NavLink>
        &nbsp;|&nbsp;
        <NavLink to='/event'>通信测试</NavLink>
        &nbsp;|&nbsp;
        <NavLink to='/hello-world'>404</NavLink>
      </div>
      <React.Suspense fallback={<></>}>
        <Switch>
          <Route exact path={'/home'} component={Home} />
          <Route exact path={'/about'} component={About} />
          <Route exact path={'/event'} component={Event} />
          <Route exact path='*' render={() => <Redirect to='/404' />} />
        </Switch>
      </React.Suspense>
    </div>
  )
}
