<template>
  <div>
    <h1>I am a component!</h1>
    <a href="">
      <BuggerBar />
    </a>
  </div>
</template>

<script>
import BuggerBar from './BuggerBar'
export default {
  components: {
    BuggerBar
  }
}
</script>

<style lang="scss" scoped>
@import '../styles/components/example.scss';
</style>
