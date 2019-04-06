<template>
  <section slot="header">
    News
    <ul>
      <li>
        <NewsItem />
      </li>
    </ul>
  </section>
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
