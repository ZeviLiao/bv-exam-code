import Vue from 'vue'
import Router from 'vue-router'
import News from '@/views/News'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'news',
      component: News
    },
    {
      path: '/news',
      redirect: '/'
    },
    {
      path: '/regions',
      name: 'regions',
      component: () => import('@/views/Regions')
    },
    {
      path: '/video',
      name: 'video',
      component: () => import('@/views/Video')
    },
    {
      path: '/tv',
      name: 'tv',
      component: () => import('@/views/TV')
    },
    {
      path: '/404',
      component: () => import('@/views/errorPage/404'),
      hidden: true
    },
    { path: '*', redirect: '/404' }
  ]
})
