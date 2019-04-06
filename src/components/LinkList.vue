<template>
  <div>
    <ul>
      <li v-for="(menu, index) in linkList" :key="index">
        <router-link :to="{ path: menu.path }" active-class="active">
          {{ menu.title }}
        </router-link>
      </li>
    </ul>
    <button @click="getRouteList">getRouteList</button>
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
  methods: {
    getRouteList() {
      console.log(this.linkList)
    }
  },
  components: {
    // LinkItem
  }
}
</script>

<style scoped></style>
