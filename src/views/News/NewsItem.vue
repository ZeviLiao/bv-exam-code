<template>
  <div class="card mb-4 box-shadow" v-if="!mobile">
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
  <div class="card" v-else>
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
            >{{ formatDate(news.updated) }}
          </p>
        </div>
      </div>
    </div>
  </div>
  <!-- <div class="card mb-4 box-shadow" v-else>
    <div
      class="card-image col"
      :style="{ backgroundImage: 'url(' + news.thumbnailUrl + ')' }"
    ></div>
    <div class="card-body col align-items-start">
      <h3 class="mb-0">
        <a class="text-dark" href="#">{{ news.title }}</a>
      </h3>
      <p class="card-text mb-auto">{{ news.body }}</p>
      <div class="mb-1 text-muted">{{ formatDate(news.updated) }}</div>
    </div>
  </div>-->
  <!-- <div>
    <p>{{ news.newsId }}</p>
    <p>{{ news.title }}</p>
    <p>{{ news.body }}</p>
    <p>{{ news.thumbnailUrl }}</p>
    <p>{{ formatDate(news.updated) }}</p>
  </div>-->
</template>

<script>
import moment from 'moment'
export default {
  name: 'NewsItem',
  created() {
    window.addEventListener('resize', this.handleResize)
    this.handleResize()
  },
  destroyed() {
    window.removeEventListener('resize', this.handleResize)
  },

  props: {
    news: Object
  },
  data() {
    return {
      window: {
        width: 0,
        height: 0
      }
    }
  },
  methods: {
    formatDate(dt) {
      return moment(dt).format('D MMMM, YYYY HH:mm')
    },
    handleResize() {
      this.window.width = window.innerWidth
      this.window.height = window.innerHeight
    }
  },
  computed: {
    mobile() {
      return this.window.width < 768
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
