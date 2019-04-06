import request from '@/utils/request'

export function fetchList() {
  return request({
    url: '/news',
    method: 'get'
  })
}

export function fetchNews(id) {
  return request({
    url: `/news/${id}`,
    method: 'get'
  })
}
