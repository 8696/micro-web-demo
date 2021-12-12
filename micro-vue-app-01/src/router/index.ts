import {createRouter, createWebHistory, Router, RouteRecordRaw} from 'vue-router';

export default (baseUrl?: string): Router => {

  const routes: Array<RouteRecordRaw> = [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'Home',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue')
    },
    {
      path: '/about',
      name: 'About',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    },
    {
      path: '/404',
      name: 'E404',
      component: () => import(/* webpackChunkName: "404" */ '../views/404.vue')
    },
    {
      path: '/:catchAll(.*)',
      name: 'any',
      redirect: '/404'
    }
  ];
  return createRouter({
    history: createWebHistory(baseUrl || process.env.BASE_URL),
    routes,
  });
}
