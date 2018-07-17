import Vue from 'vue'
import Router from 'vue-router'
import homePage from '@/views/homePage/index'
import childenPage from '@/views/login/children/children'
import errorPage from '@/views/errorPage/errorPage'
import header from '@/views/layout/header'
import sidebar from '@/views/layout/sidebar'

Vue.use(Router)

export default new Router({
  scrollBehavior (to, from, savedPosition) {
    console.log(to)
    console.log(savedPosition)
  },
  routes: [
    {
      path: '/',
      // redirect: '/homePage/HTML'
      redirect: to => {
        console.log(to)
        return '/homePage/HTML'
      }
    },
    {
      path: '/loginPage',
      alias: '/login',
      name: 'loginPage',
      component: () => import('@/views/login'),
      children: [
        {
          path: '',
          component: childenPage
        },
        {
          path: 'childrenPage',
          component: childenPage
        }
      ]
    },
    {
      path: '/layout',
      components: {
        default: header,
        sidebar: sidebar
      }
    },
    {
      path: '/404Page',
      component: errorPage
    },
    {
      path: '/homePage/:pageIndex',
      name: 'homePage',
      // redirect: '/homePage/HTML',
      component: homePage,
      // props: true
      props: (route) => ({
        pageIndex: route.params.pageIndex,
        sidebarKey: route.query.sidebarKey
      }),
      beforeEnter: (to, from, next) => {
        // ...
        console.log('beforeEnter')
        next()
      },
      meta: {
        role: 'admin',
        name: 'name',
        imgUrl: 'imgUrl'
      }
    },
    {
      path: '*',
      redirect: '/404Page'
    }
  ]
})
