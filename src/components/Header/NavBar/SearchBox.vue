<template>
  <div>
    <input type="text" @keyup="searchData" />
  </div>
</template>

<script>
export default {
  naem: 'SearchBox',
  methods: {
    searchData(e) {
      //console.log(e.target.value)
      this.$root.$emit('searchData', e.target.value)
    }
  }
}
</script>

<style scoped></style>
