<template>
  <footer class="text-muted">
    <div class="container">
      <p class="float-right">
        &copy; Copyright 2019 HTML.am
      </p>
      <p>
        <LinkList />
      </p>
    </div>
  </footer>
</template>

<script>
import LinkList from '@/components/LinkList'
export default {
  name: 'Footer',
  components: {
    LinkList
  }
}
</script>

<style scoped></style>
