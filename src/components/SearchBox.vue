<template>
  <form class="form mt-2 mt-md-0">
    <div class="form-group has-search">
      <span class="fa fa-search form-control-feedback"></span>
      <input
        type="text"
        class="form-control"
        placeholder="Search"
        @keyup="searchData"
      />
    </div>
  </form>
  <!-- Actual search box -->
</template>

<script>
export default {
  naem: 'SearchBox',
  methods: {
    searchData(e) {
      //console.log(e.target.value)
      this.$root.$emit('searchData', e.target.value)
    }
  }
}
</script>

<style lang="scss" scoped>
/* Styles for wrapping the search box */

/* Bootstrap 4 text input with search icon */

.has-search .form-control {
  padding-left: 2.375rem;
}

.has-search .form-control-feedback {
  position: absolute;
  z-index: 2;
  display: block;
  width: 2.375rem;
  height: 2.375rem;
  line-height: 2.375rem;
  text-align: center;
  pointer-events: none;
  color: #aaa;
}

@media (min-width: 768px) {
  ::placeholder {
    /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: white !important;
    opacity: 1; /* Firefox */
  }

  .has-search .form-control {
    color: white;
    background-color: #27a79b;
    border: none;
  }
  .has-search .form-control-feedback {
    color: white;
    background-color: #27a79b;
  }
}
</style>
