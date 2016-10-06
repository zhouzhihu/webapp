import Vue from 'vue'
import App from './App.vue'
import router from '../router/router.js'

const app = new Vue({
  router,
  ...App
}).$mount("#app")
export { app}
