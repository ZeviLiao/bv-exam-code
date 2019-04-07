<template>
  <span>
    <div class="card mb-4 box-shadow d-none d-md-block">
      <div class="card-body">
        <a href>
          <h5 class="card-title">{{ news.title }}</h5>
        </a>
        <div
          class="card-image"
          :style="{ backgroundImage: 'url(' + news.thumbnailUrl + ')' }"
        ></div>
        <p class="card-text">{{ news.body }}</p>
        <p class="d-flex justify-content-between align-items-center">
          {{ formatDate(news.updated) }}
        </p>
      </div>
    </div>
    <div class="card mb-4 box-shadow d-block d-md-none">
      <div class="row">
        <div class="col">
          <div class="card-header border-0">
            <!-- <img src="//placehold.it/200" alt> -->
            <div
              class="card-image"
              :style="{ backgroundImage: 'url(' + news.thumbnailUrl + ')' }"
            ></div>
          </div>
        </div>
        <div class="col">
          <div class="card-block px-2">
            <h4 class="card-title">{{ news.title }}</h4>
            <p class="card-text">{{ news.body }}</p>
            <!-- {{ news.body }} -->
            <p class="d-flex justify-content-between align-items-center">
              {{ formatDate(news.updated) }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </span>
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

<style lang="scss" scoped>
.card-text {
  height: 198px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 8;
  -webkit-box-orient: vertical;
}
div.card-image {
  width: 100%;
  height: 160px;
  background-size: cover;
  background-position: center;
}
@media (max-width: 767px) {
  .card-text {
    height: 150px;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 6;
    -webkit-box-orient: vertical;
  }
  div.card-image {
    width: 200px;
    height: 160px;
  }
}
</style>
