<template>
  <div>
    News
    <ul>
      <li v-for="news in newsList" :key="news.id">
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
  data() {
    return {
      newsList: []
    }
  },
  methods: {
    getList() {
      this.listLoading = true
      fetchList().then(response => {
        this.newsList = response.data
        this.listLoading = false
      })
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
