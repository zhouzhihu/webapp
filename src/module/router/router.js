import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import About from '../about/about.vue'
import Home from '../home/home.vue'

export default new Router({
  mode: 'history',
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    { path: '/', component: Home },
    { path: '/About', component: About }
  ]
})
