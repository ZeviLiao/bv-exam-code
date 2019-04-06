<template>
  <div>
    <!-- <TitlePage title="News" /> -->
    <Logo />
    <NavBar />
  </div>
</template>

<script>
import Logo from './Logo'

import NavBar from './NavBar'
export default {
  name: 'Header',
  components: {
    Logo,
    NavBar
  }
}
</script>

<style scoped></style>
