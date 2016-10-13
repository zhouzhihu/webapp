import addressList from '../api/addressList.js'
import * as types from './mutation-types.js'

export const FETCH_AL_DATA = ({commit, dispatch, state}, type) => {
  commit(types.SET_AL_ACTIVE_TYPE, type);
  addressList.getAL(addressList => {
    commit(types.SET_AL_ITEMS, addressList)
  })
}