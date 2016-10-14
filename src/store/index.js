import Vue from 'vue'
import Vuex from 'vuex'
import * as getters from './getters.js'
import addressList from '../module/addressList/store'

Vue.use(Vuex)

export default new Vuex.Store({
  getters,
  modules : {
    addressList
  }
})