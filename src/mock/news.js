import json from './json/data.json'

const newData = json

export default {
  getNews({ body }) {
    debugger
    let { page, limit } = JSON.parse(body)
    // 0 , 5
    // 6 , 10
    debugger
    return newData.slice((page - 1) * limit + 1, (page - 1) * limit + limit)
  },
  getNewsById(newId) {
    return newData.filter(o => o.newId == newId)
  }
}
