import _ from 'lodash'
import { fetchList } from '@/api/news'

const loadMore = {
  state: {
    loadCount: 0,
    newsList: []
  },
  mutations: {
    APPEND_NEWS: (state, { newList, count }) => {
      state.loadCount = count
      state.newsList = _.concat(state.newsList, newList)
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
        let tmpList = response.data.map(o => {
          return {
            ...o,
            updated: new Date(o.updated)
          }
        })
        let newsList = _.orderBy(tmpList, ['updated'], ['desc'])
        commit('APPEND_NEWS', { newList: newsList, count })
        // this.listLoading = false
      })
    }
  }
}

export default loadMore
