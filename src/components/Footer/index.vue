<template>
  <footer class="text-muted">
    <div class="container">
      <p class="float-right">Copy right &copy; AMPOS</p>
      <p>
        <LinkList />
      </p>
    </div>
  </footer>
</template>

<script>
import LinkList from './FooterLinkList'
export default {
  name: 'Footer',
  components: {
    LinkList
  }
}
</script>

<style lang="scss" scoped>
footer {
  height: 70px;
  line-height: 70px;
  /* background-color: yellow; */
  * {
    margin: 0;
  }
}
</style>
