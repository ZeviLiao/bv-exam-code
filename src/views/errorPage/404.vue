<template>
  <div>
    <img src="https://via.placeholder.com/240?text=404" alt="404" />
    <p>{{ message }}</p>
  </div>
</template>

<script>
export default {
  name: 'Page404',
  computed: {
    message() {
      return "You can't access this page"
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped></style>
