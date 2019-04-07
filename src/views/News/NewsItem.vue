<template>
  <div class="card mb-4 box-shadow">
    <div class="card-body">
      <h5 class="card-title">{{ news.title }}</h5>
      <img
        class="card-img-top"
        :src="news.thumbnailUrl"
        alt="Generic placeholder image"
        height="160"
      />
      <p class="card-text">
        {{ news.body }}
      </p>
      <p class="d-flex justify-content-between align-items-center">
        {{ formatDate(news.updated) }}
      </p>
    </div>
  </div>
  <!-- <div>
    <p>{{ news.newsId }}</p>
    <p>{{ news.title }}</p>
    <p>{{ news.body }}</p>
    <p>{{ news.thumbnailUrl }}</p>
    <p>{{ formatDate(news.updated) }}</p>
  </div> -->
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
