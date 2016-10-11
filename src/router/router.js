import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import About from '../module/about/about.vue'
import Home from '../module/home/home.vue'
import createListView from '../module/home/CreateListView.js'

export default new Router({
  mode: 'history',
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    {
      path: '/Home',
      component: Home,
      children: [
        { path : '', redirect: '/Home/A'},
        { path : 'A',component: createListView('A') },
        { path : 'B',component: createListView('B') }
      ]
    },
    { path: '/About', component: About },
    { path: '*', redirect: '/Home' }
  ]
})
