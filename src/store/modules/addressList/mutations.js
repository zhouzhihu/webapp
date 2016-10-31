import * as types from './mutation-type'

export const state = {
  activeType: "all",
  items: [],
}

export const mutations = {
  [types.SET_AL_ACTIVE_TYPE](state, type){
    state.activeType = type;
  },
  [types.FETCH_ADDRESS_LIST](state, addressList){
    state.items = addressList;
  }
}