<template>
  <button @click="loadMore">load more</button>
</template>

<script>
export default {
  name: 'LoadMore',
  methods: {
    loadMore() {
      this.$root.$emit('loadMore')
    }
  }
}
</script>

<style scoped></style>
