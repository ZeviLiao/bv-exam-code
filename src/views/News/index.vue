<template>
  <div>
    News - {{ search }}
    <ul>
      <li v-for="news in tableFilter()" :key="news.newsId">
        <NewsItem :news="news" />
      </li>
    </ul>
  </div>
</template>

<script>
import NewsItem from './NewsItem'
import { fetchList } from '@/api/news'
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
  },
  data() {
    return {
      newsList: [],
      search: ''
      // filterNewsList: []
    }
  },
  methods: {
    getList() {
      this.listLoading = true
      fetchList().then(response => {
        this.newsList = response.data
        // this.filterNewsList = this.newsList
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
    NewsItem
  }
}
</script>

<style lang="scss" scoped>
.container {
  background-color: yellow;
}
</style>
