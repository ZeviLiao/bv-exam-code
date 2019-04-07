<template>
  <div>
    <h1>{{ title }}</h1>
    <hr />
    <p>{{ title }} content ...</p>
  </div>
</template>

<script>
export default {
  props: {
    title: String
  }
}
</script>

<style scoped></style>
