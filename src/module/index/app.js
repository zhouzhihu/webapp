import Vue from 'vue'
import App from './App.vue'
import router from '../../router'
import store from '../../store'
import { sync } from 'vuex-router-sync'
import VueProgressBar from 'vue-progressbar'
import EgdSideBar from 'sidebar'

sync(store, router)

Vue.use(VueProgressBar, {
  color: '#0e77f1',
  failedColor: 'red',
  height: '2px'
})

const app = new Vue({
  data(){
    return {
      showSidebar : false
    }
  },
  methods : {
    showBar: function(){
      window.document.body.classList.add = 'scroll-stop'
      window.document.querySelector('html').classList.add = 'scroll-stop'
      this.showSidebar = !this.showSidebar
    },
    hiddenBar () {
      window.document.body.className = ''
      window.document.querySelector('html').className = ''
      this.showSidebar = !this.showSidebar
    }
  },
  components: {
    EgdSideBar
  },
  store,
  router,
  ...App
}).$mount("#app")
export { app}
