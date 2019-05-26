import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/home.vue'

Vue.use(Router)

export default new Router({
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
      path: '/orderlist',
      name: 'orderlist',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "orderlist" */ './views/orderlist.vue')
    },
    {
      path: '/my',
      name: 'my',
      component: () => import('./views/my.vue')
    },
    {
      path: '/pano',
      name: 'pano',
      component: () => import('./views/pano.vue')
    },
    {
      path: '/phonepano',
      name: 'phonepano',
      component: () => import('./views/phonepano.vue')
    }
  ]
})
