import request from '@/utils/request'

export function fetchList(query) {
  return request({
    url: '/news',
    method: 'get',
    params: query,
    data: query
  })
}

export function fetchNews(id) {
  return request({
    url: `/news/${id}`,
    method: 'get'
  })
}
