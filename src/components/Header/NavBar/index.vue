<template>
  <div class="collapse navbar-collapse" id="navbarCollapse">
    <LinkList />
    <SearchBox class="d-none d-md-block" />
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

<style lang="scss" scoped></style>
