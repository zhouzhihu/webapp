import addressList from '../../../api/addressList.js'
import * as types from './mutation-type.js'
require('es6-promise').polyfill()

export const FETCH_AL_DATA = ({commit, dispatch, state}, {type, callback}) => {
  commit(types.SET_AL_ACTIVE_TYPE, type);
  addressList.getALByType(type, addressList => {
    commit(types.SET_AL_ITEMS, addressList)
    callback();
  })
}