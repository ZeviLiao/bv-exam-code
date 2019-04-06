<template>
  <div>
    <LinkList />
    <SearchBox />
  </div>
</template>

<script>
import LinkList from '@/components/LinkList'
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
