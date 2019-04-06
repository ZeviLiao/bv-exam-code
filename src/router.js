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
      component: News,
      meta: { title: 'News', noCache: true }
    },
    {
      path: '/news',
      redirect: '/',
      hidden: true
    },
    {
      path: '/regions',
      name: 'regions',
      component: () => import('@/views/Regions'),
      meta: { title: 'Regions', noCache: true }
    },
    {
      path: '/video',
      name: 'video',
      component: () => import('@/views/Video'),
      meta: { title: 'Video', noCache: true }
    },
    {
      path: '/tv',
      name: 'tv',
      component: () => import('@/views/TV'),
      meta: { title: 'TV', noCache: true }
    },
    {
      path: '/404',
      component: () => import('@/views/errorPage/404'),
      hidden: true
    },
    { path: '*', redirect: '/404', hidden: true }
  ]
})
