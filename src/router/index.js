import Vue from 'vue'
import Router from 'vue-router'
import homePage from '@/views/homePage/index'
import errorPage from '@/views/errorPage/errorPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/homePage/HTML'
    },
    {
      path: '/404Page',
      component: errorPage
    },
    {
      path: '/homePage/:pageIndex',
      name: 'homePage',
      component: homePage
    },
    {
      path: '*',
      redirect: '/404Page'
    }
  ]
})
