<template>
  <div>
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <Header />
    <Content />
    <Footer class="d-none d-md-block" />
    <!-- <b-alert show> Hello {{ name }}! </b-alert> -->
  </div>
</template>
<script>
import Header from './components/Header'
import Content from './components/Content'
import Footer from './components/Footer'
export default {
  components: {
    Header,
    Content,
    Footer
  }
}
</script>

<style lang="scss">
/* #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
} */
</style>
