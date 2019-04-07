<template>
  <!-- <div class="card mb-4 box-shadow">
    <img
      class="card-img-top"
      data-src="holder.js/100px225?theme=thumb&bg=55595c&fg=eceeef&text=Thumbnail"
      alt="Card image cap"
    />
    <div class="card-body">
      <p class="card-text">
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
      </p>
      <div class="d-flex justify-content-between align-items-center">
        <div class="btn-group">
          <button type="button" class="btn btn-sm btn-outline-secondary">
            View
          </button>
          <button type="button" class="btn btn-sm btn-outline-secondary">
            Edit
          </button>
        </div>
        <small class="text-muted">9 mins</small>
      </div>
    </div>
  </div> -->
  <div class="card mb-4 box-shadow">
    <img
      class="card-img"
      :src="news.thumbnailUrl"
      alt="Generic placeholder image"
      height="160"
    />
    <div class="card-body">
      <h5 class="card-title">{{ news.title }}</h5>
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
