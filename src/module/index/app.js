import Vue from 'vue'
import router from '../router/router.js'

const app = new Vue({
  router,
  template: '<div id="app"><router-link to="/">home</router-link><router-link to="/about">about</router-link><transition name="fade" mode="out-in"><router-view class="view"></router-view></transition></div>'
}).$mount("#app")
export { app}
