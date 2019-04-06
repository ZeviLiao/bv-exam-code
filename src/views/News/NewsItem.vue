<template>
  <div>
    <p>{{ news.newsId }}</p>
    <p>{{ news.title }}</p>
    <p>{{ news.body }}</p>
    <p>{{ news.thumbnailUrl }}</p>
    <p>{{ news.updated }}</p>
  </div>
</template>

<script>
export default {
  name: 'NewsItem',
  props: {
    news: Object
  }
}
</script>

<style scoped></style>
