import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import loadMore from './loadMore'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    loadMore
  },
  getters
})
