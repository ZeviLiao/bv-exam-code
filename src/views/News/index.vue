<template>
  <div>
    News - {{ search }}
    <ul>
      <li v-for="news in tableFilter()" :key="news.newsId">
        <NewsItem :news="news" />
      </li>
    </ul>
    <hr />
    <LoadMore />
  </div>
</template>

<script>
import _ from 'lodash'
import { fetchList } from '@/api/news'
import NewsItem from './NewsItem'
import LoadMore from './LoadMore'
export default {
  name: 'News',
  created() {
    this.getList()
  },
  mounted() {
    this.$root.$on('searchData', data => {
      console.log(data)
      this.search = data
    })
    this.$root.$on('loadMore', () => {
      console.log('load more!')
    })
  },
  data() {
    return {
      newsList: [],
      search: ''
    }
  },
  methods: {
    getList() {
      this.listLoading = true
      fetchList().then(response => {
        let tmpList = response.data.map(o => {
          return {
            ...o,
            updated: new Date(o.updated)
          }
        })
        this.newsList = _.orderBy(tmpList, ['updated'], ['desc'])
        this.listLoading = false
      })
    },
    tableFilter() {
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
    LoadMore
  }
}
</script>

<style lang="scss" scoped>
.container {
  background-color: yellow;
}
</style>
