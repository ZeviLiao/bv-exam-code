<template>
  <section class="container">
    <!-- slot 指定名稱 header，所以這個位置被父元素 <header> 替換 -->
    <slot name="content">
      <router-view />
    </slot>
  </section>
</template>

<script>
export default {}
</script>

<style scoped></style>
