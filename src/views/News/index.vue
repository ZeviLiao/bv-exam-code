<template>
  <div class="album py-5 bg-light">
    <div class="container">
      <SearchBox></SearchBox>
      <div class="row">
        <div class="col-md-4" v-for="news in tableFilter()" :key="news.newsId">
          <NewsItem :news="news"></NewsItem>
        </div>
      </div>
      <LoadMore :eof="eof"></LoadMore>
    </div>
  </div>
</template>

<script>
// import _ from 'lodash'
// import { fetchList } from '@/api/news'
import NewsItem from './NewsItem'
import LoadMore from './LoadMore'
import store from '@/store'
import SearchBox from '@/components/SearchBox'
import { mapGetters } from 'vuex'

export default {
  name: 'News',
  created() {
    this.getList()
  },
  mounted() {
    this.$root.$on('searchData', data => {
      // console.log(data)
      this.search = data
    })
    this.$root.$on('loadMore', () => {
      // console.log('load more!' + this.loadCount)
      store.dispatch('loadMoreAsync', this.loadCount + 1)
    })
  },
  data() {
    return {
      // newsList: [],
      search: ''
    }
  },
  methods: {
    getList() {
      store.dispatch('loadMoreAsync', this.loadCount + 1)
      // this.listLoading = true
      // fetchList(this.listQuery).then(response => {
      //   let tmpList = response.data.map(o => {
      //     return {
      //       ...o,
      //       updated: new Date(o.updated)
      //     }
      //   })
      //   this.newsList = _.orderBy(tmpList, ['updated'], ['desc'])
      //   this.listLoading = false
      // })
    },
    tableFilter() {
      // return this.newsList
      const searchTerm = this.search.toLowerCase()
      if (this.newsList) {
        return this.newsList.filter(
          item =>
            (item.title !== null &&
              item.title.toLowerCase().includes(searchTerm)) ||
            (item.body !== null && item.body.toLowerCase().includes(searchTerm))
        )
      }
    }
  },
  components: {
    NewsItem,
    LoadMore,
    SearchBox
  },
  computed: {
    ...mapGetters(['loadCount', 'newsList', 'eof'])
  }
}
</script>

<style lang="scss" scoped>
.container {
  /* background-color: yellow; */
}
</style>
