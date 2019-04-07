<template>
  <ul class="menulink">
    <li v-for="(menu, index) in linkList" :key="index">
      <router-link :to="{ path: menu.path }">{{ menu.title }}</router-link>
      <span v-if="!latest(index)">|</span>
    </li>
  </ul>
</template>

<script>
// import LinkItem from './LinkItem'
export default {
  name: 'LinkList',
  data() {
    return {
      linkList: this.$router.options.routes
        .filter(o => !o.hasOwnProperty('hidden') || !o.hidden)
        .map(o => {
          return {
            path: o.path,
            title: o.meta.title
          }
        })
    }
  },
  methods: {
    latest(i) {
      return this.linkList.length === i + 1
    }
  }
}
</script>

<style lang="scss" scoped>
ul.menulink {
  list-style: none;
  li {
    display: inline-block;
  }
}
</style>
