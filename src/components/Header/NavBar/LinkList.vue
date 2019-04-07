<template>
  <ul class="navbar-nav mr-auto">
    <li class="nav-item" v-for="(menu, index) in linkList" :key="index">
      <router-link
        class="nav-link"
        :to="{ path: menu.path }"
        active-class="active"
      >
        {{ menu.title }}
      </router-link>
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
  methods: {},
  components: {
    // LinkItem
  }
}
</script>

<style scoped></style>
