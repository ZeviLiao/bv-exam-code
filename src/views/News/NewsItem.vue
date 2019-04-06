<template>
  <div>
    <p>{{ news.newsId }}</p>
    <p>{{ news.title }}</p>
    <p>{{ news.body }}</p>
    <p>{{ news.thumbnailUrl }}</p>
    <p>{{ formatDate(news.updated) }}</p>
  </div>
</template>

<script>
import moment from 'moment'
export default {
  name: 'NewsItem',
  props: {
    news: Object
  },
  methods: {
    formatDate(dt) {
      return moment(dt).format('D MMMM, YYYY HH:mm')
    }
  }
}
</script>

<style scoped></style>
