import * as types from '../mutation-types'

const state = {
  activeType: null,
  itemsPerPage: 20,
  items: []
}

const mutations = {
  [types.SET_AL_ACTIVE_TYPE](state, type){
    state.activeType = type;
  },
  [types.SET_AL_ITEMS](state, items){
    state.items = items
  }
}

export default {
  state,
  mutations
}