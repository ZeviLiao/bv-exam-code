<template>
  <div class="container">
    News
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
  name: 'News',
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
