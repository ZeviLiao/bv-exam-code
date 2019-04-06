<template>
  <div>
    <MenuButtonList />
    <SearchBox />
  </div>
</template>

<script>
import MenuButtonList from './MenuButtonList'
import SearchBox from './SearchBox'
export default {
  name: 'NavBar',
  components: {
    MenuButtonList,
    SearchBox
  }
}
</script>

<style scoped></style>
