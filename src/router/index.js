/* Router Modules */
import newsRouter from './modules/news'

export const constantRoutes = [
  newsRouter,

  { path: '*', redirect: '/404', hidden: true }
]
