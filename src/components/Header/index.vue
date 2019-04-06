<template>
  <header>
    <!-- <TitlePage title="News" /> -->
    <Logo />
    <NavBar />
  </header>
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
