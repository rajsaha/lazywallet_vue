import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Status from './views/Status.vue'
import Regulars from './views/Regulars.vue'

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
      component: Regulars
    }
  ]
})
