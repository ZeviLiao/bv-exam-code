<template>
  <div class="container">
    content
    <ul>
      <li>
        <NewsItem />
      </li>
    </ul>
  </div>
</template>

<script>
import NewsItem from './NewsItem'
export default {
  name: 'Content',
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
