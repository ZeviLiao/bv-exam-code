import json from './json/data.json'

const newData = json

export default {
  getNews() {
    return newData
  },
  getNewsByKey(newId) {
    return newData.filter(o => o.newId == newId)
  }
}
