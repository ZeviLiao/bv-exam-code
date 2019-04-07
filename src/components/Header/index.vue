<template>
  <header>
    <nav class="navbar navbar-expand-md navbar-dark bg-dark">
      <div class="container">
        <a class="navbar-brand" href="#">
          <Logo device="dsk" class="d-block d-md-none" />
          <Logo device="mob" class="d-none d-md-block" />
        </a>
        <h5 class="d-block d-md-none">News</h5>
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
        <NavBar></NavBar>
      </div>
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

<style lang="scss" scoped>
@media (min-width: 768px) {
  .bg-dark {
    background-color: white !important;
  }
}
</style>
