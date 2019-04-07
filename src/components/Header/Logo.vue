<template>
  <div>
    <img class="rounded-circle" :src="imgUrl" alt="Logo" />
  </div>
</template>

<script>
export default {
  name: 'Logo',
  props: {
    device: String
  },
  computed: {
    imgUrl() {
      if (this.device === 'mob') {
        return 'https://via.placeholder.com/120?text=Logo'
      } else {
        return 'https://via.placeholder.com/120/fff?text=Logo'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@media (max-width: 767px) {
  img {
    width: 40px;
  }
}
</style>
