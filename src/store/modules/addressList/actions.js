import * as addressList from '../../../api/addressList'
import * as types from './mutation-type.js'

export const ACTIVE_AL_TYPE = ({commit, dispatch, state}, type) => {
  commit(types.SET_AL_ACTIVE_TYPE, type)
}

export const FETCH_ADDRESS_LIST = ({commit, dispatch, state}, type) => {
  commit(types.SET_AL_ACTIVE_TYPE, type)
  return addressList.getALByType(type).then((addressList) =>{
    commit(types.FETCH_ADDRESS_LIST, addressList)
  });
}