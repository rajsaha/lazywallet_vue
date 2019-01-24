import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Status from './views/Status.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/status',
      name: 'status',
      component: Status
    },
    {
      path: '/regulars',
      name: 'regulars',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Regulars.vue')
    }
  ]
})
