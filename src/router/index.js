import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import createListView from '../module/addressList/CreateListView.js'
import infoAddressList from '../module/addressList/index.vue'

const Home = resolve => require.ensure([], () => resolve(require('../module/index/home.vue')), 'home/home')
const About = resolve => require.ensure([], () => resolve(require('../module/about/about.vue')), 'about/about')
const Play = resolve => require.ensure([], () => resolve(require('../module/play/index.vue')), 'play/index')

export default new Router({
  mode: 'history',
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    {
      path: '/Home',
      component: Home
    },
    {
      path: '/AddressList',
      component: infoAddressList,
      children: [
        { path : '', redirect: '/AddressList/all'},
        { path : '/AddressList/all',component: createListView('all') },
        { path : '/AddressList/favorite',component: createListView('favorite') },
        {
          path : '/AddressList/add',
          component: resolve => require.ensure([], () => resolve(require('../module/addressList/add.vue')), 'addressList/add')
        },
        {
          path : '/AddressList/:id(\\d+)',
          component: resolve => require.ensure([], () => resolve(require('../module/addressList/info.vue')), 'addressList/info')
        }
      ]
    },
    {
      path: '/About',
      component: About
    },
    {
      path: '/Play',
      component: Play
    },
    { path: '*', redirect: '/Home' }
  ]
})
