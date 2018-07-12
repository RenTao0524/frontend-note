import Vue from 'vue'
import Router from 'vue-router'
import homePage from '@/views/homePage/index'
import vuePage from '@/views/homePage/vue/index'
import vueLearningPage from '@/views/homePage/vue/views/vueLearning'
import vueRouterPage from '@/views/homePage/vue/views/vueRouter'
import vuexPage from '@/views/homePage/vue/views/vuex'
import htmlPage from '@/views/homePage/html/index'
import htmlLabelPage from '@/views/homePage/html/views/htmlLabel'
import htmlPropertyPage from '@/views/homePage/html/views/htmlProperty'
import cssPage from '@/views/homePage/css/index'
import javaScriptPage from '@/views/homePage/javaScript/index'
import ECMAScriptPage from '@/views/homePage/ECMAScript/index'
import reactPage from '@/views/homePage/react/index'
import errorPage from '@/views/errorPage/errorPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/homePage'
    },
    {
      path: '/404Page',
      component: errorPage
    },
    {
      path: '/homePage',
      component: homePage,
      redirect: '/homePage/htmlPage',
      children: [
        {
          path: 'htmlPage',
          component: htmlPage,
          redirect: '/homePage/htmlPage/htmlLabelPage',
          children: [
            {
              path: 'htmlLabelPage',
              component: htmlLabelPage
            },
            {
              path: 'htmlPropertyPage',
              component: htmlPropertyPage
            }
          ]
        },
        {
          path: 'cssPage',
          component: cssPage
        },
        {
          path: 'javaScriptPage',
          component: javaScriptPage
        },
        {
          path: 'ECMAScriptPage',
          component: ECMAScriptPage
        },
        {
          path: 'vuePage',
          component: vuePage,
          redirect: '/homePage/vuePage/vueLearningPage',
          children: [
            {
              path: 'vueLearningPage',
              component: vueLearningPage
            },
            {
              path: 'vueRouterPage',
              component: vueRouterPage
            },
            {
              path: 'vuexPage',
              component: vuexPage
            }
          ]
        },
        {
          path: 'reactPage',
          component: reactPage
        }
      ]
    },
    {
      path: '*',
      redirect: '/404Page'
    }
  ]
})
