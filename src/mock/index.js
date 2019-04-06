import Mock from 'mockjs'
import newsAPI from './news'

Mock.setup({
  timeout: '350-600'
})

// 登录相关
Mock.mock(/\/news/, 'get', newsAPI.getNews)
Mock.mock(/\/news\/\.*/, 'get', newsAPI.getNewsById)

export default Mock
