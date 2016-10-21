import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import About from '../module/about/about.vue'
import AddressList from '../module/addressList/index.vue'
import createListView from '../module/addressList/CreateListView.js'

export default new Router({
  mode: 'history',
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    {
      path: '/AddressList',
      component: AddressList,
      children: [
        { path : '', redirect: '/AddressList/all'},
        { path : '/AddressList/all',component: createListView('all') },
        { path : '/AddressList/favorite',component: createListView('favorite') }
      ]
    },
    { path: '/About', component: About },
    { path: '*', redirect: '/AddressList' }
  ]
})
