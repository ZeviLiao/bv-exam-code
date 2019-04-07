<template>
  <button
    type="button"
    class="btn btn-outline-secondary btn-lg btn-block"
    @click="loadMore"
    :disabled="eof"
  >
    Load more
  </button>
</template>

<script>
export default {
  name: 'LoadMore',
  methods: {
    loadMore() {
      this.$root.$emit('loadMore')
    }
  },
  props: {
    eof: Boolean
  }
}
</script>

<style scoped></style>
