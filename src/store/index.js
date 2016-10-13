import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions.js'
import * as getters from './getters.js'
import addressList from './modules/addressList.js'

Vue.use(Vuex)

export default new Vuex.Store({
  actions,
  getters,
  modules : {
    addressList
  }
})