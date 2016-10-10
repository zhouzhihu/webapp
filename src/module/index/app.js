import Vue from 'vue'
import App from './App.vue'
import router from '../router/router.js'
import VueProgressBar from 'vue-progressbar'

Vue.use(VueProgressBar, {
  color: 'rgb(119, 182, 255)',
  failedColor: 'red',
  height: '2px'
})

const app = new Vue({
  router,
  ...App
}).$mount("#app")
export { app}
