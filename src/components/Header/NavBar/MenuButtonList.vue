<template>
  <div>
    <ul>
      <li v-for="menu in menuList" :key="menu">
        <MenuButton :label="menu" />
      </li>
    </ul>
  </div>
</template>

<script>
import MenuButton from './MenuButton'
export default {
  name: 'MenuButtonList',
  data() {
    return {
      menuList: ['News', 'Regions', 'Video', 'TV']
    }
  },
  components: {
    MenuButton
  }
}
</script>

<style scoped></style>
