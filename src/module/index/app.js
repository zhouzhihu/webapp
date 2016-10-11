import Vue from 'vue'
import App from './App.vue'
import router from '../../router/router.js'
import VueProgressBar from 'vue-progressbar'
import Sidebar from '../../components/Sidebar.vue'

Vue.use(VueProgressBar, {
  color: 'rgb(119, 182, 255)',
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
    Sidebar
  },
  router,
  ...App
}).$mount("#app")
export { app}
