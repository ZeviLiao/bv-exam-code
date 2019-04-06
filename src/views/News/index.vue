<template>
  <div>
    <Header />
    <Content />
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header'
import Content from './components/Content'
import Footer from './components/Footer'
export default {
  name: 'News',
  components: {
    Header,
    Content,
    Footer
  }
}
</script>

<style scoped></style>
