import Vue from 'vue'
import 'bootstrap'
// import BootstrapVue from 'bootstrap-vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './styles/app.scss'
import './mock' // simulation data
import 'font-awesome/css/font-awesome.css'

// Vue.use(BootstrapVue)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
