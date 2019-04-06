<template>
  <div>
    <p>{{ news.id }}</p>
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
