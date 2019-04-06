import json from './json/data.json'

const newData = json

export default {
  getNews({ body }) {
    let { page, limit } = JSON.parse(body)
    console.log(page)
    return newData.slice((page - 1) * limit + 1, (page - 1) * limit + limit)
  },
  getNewsById(newId) {
    return newData.filter(o => o.newId == newId)
  }
}
