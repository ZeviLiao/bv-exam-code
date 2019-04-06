<template>
  <div>
    <ul>
      <li v-for="(menu, index) in linkList" :key="index">
        <router-link :to="{ path: menu.path }" active-class="active">
          {{ menu.title }}
        </router-link>
      </li>
    </ul>
  </div>
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
