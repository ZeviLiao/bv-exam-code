<template>
  <div class="collapse navbar-collapse" id="navbarCollapse">
    <LinkList />
    <SearchBox />
  </div>
</template>

<script>
import LinkList from './LinkList'
import SearchBox from './SearchBox'
export default {
  name: 'NavBar',
  components: {
    LinkList,
    SearchBox
  }
}
</script>

<style scoped></style>
