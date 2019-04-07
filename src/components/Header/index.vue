<template>
  <header>
    <nav class="navbar navbar-expand-md navbar-dark bg-dark">
      <a class="navbar-brand" href="#">
        <Logo />
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarCollapse"
        aria-controls="navbarCollapse"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <NavBar />
    </nav>
  </header>
  <!-- <header>
    
    
  </header>-->
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
