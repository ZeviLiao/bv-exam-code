import json from './json/data.json'

const newData = json

export default {
  getNews({ body }) {
    let { page, limit } = JSON.parse(body)
    console.log(page)
    let pageList = newData.slice((page - 1) * limit, (page - 1) * limit + limit)
    debugger
    return {
      total: newData.length,
      items: pageList
    }
  },
  getNewsById(newId) {
    return newData.filter(o => o.newId == newId)
  }
}
