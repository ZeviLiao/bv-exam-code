<template>
  <div class="collapse navbar-collapse nav-bar" id="navbarCollapse">
    <LinkList />
    <SearchBox class="d-none d-md-block search-box" />
  </div>
</template>

<script>
import LinkList from './LinkList'
import SearchBox from '@/components/SearchBox'
export default {
  name: 'NavBar',
  components: {
    LinkList,
    SearchBox
  }
}
</script>

<style lang="scss" scoped>
.nav-bar {
  background: #00a092;
  .search-box {
    position: relative;
    top: 7px;
    right: 7px;
  }
}
</style>
