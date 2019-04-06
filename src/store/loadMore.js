import _ from 'lodash'
import { fetchList } from '@/api/news'

const loadMore = {
  state: {
    loadCount: 0,
    newsList: [],
    eof: false
  },
  mutations: {
    APPEND_NEWS: (state, { newList, count, total }) => {
      debugger
      state.loadCount = count
      state.newsList = _.concat(state.newsList, newList)
      state.eof = state.newsList.length === total
    }
  },
  actions: {
    loadMoreAsync({ commit }, count) {
      // this.listLoading = true
      let listQuery = {
        page: count,
        limit: 6
      }
      fetchList(listQuery).then(response => {
        let tmpList = response.data.items.map(o => {
          return {
            ...o,
            updated: new Date(o.updated)
          }
        })
        let total = response.data.total
        let newsList = _.orderBy(tmpList, ['updated'], ['desc'])
        commit('APPEND_NEWS', { newList: newsList, count, total })
        // this.listLoading = false
      })
    }
  }
}

export default loadMore
