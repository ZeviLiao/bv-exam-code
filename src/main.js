import Vue from 'vue'
import 'bootstrap'
import 'font-awesome/css/font-awesome.css'
import App from './App.vue'
import router from './router'
import store from './store'
import './styles/app.scss'
import './mock' // simulation data

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
