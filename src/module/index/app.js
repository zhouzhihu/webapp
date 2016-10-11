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
    toggleBar: function(){
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
