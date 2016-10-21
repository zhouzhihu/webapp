import * as types from './mutation-type'

export const state = {
  activeType: "all",
  selectedItemIds: []
}

export const mutations = {
  [types.SET_AL_ACTIVE_TYPE](state, type){
    state.activeType = type;
  }
}