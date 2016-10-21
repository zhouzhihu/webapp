import addressList from '../../../api/addressList'
import * as types from './mutation-type.js'
require('es6-promise').polyfill()

export const ACTIVE_AL_TYPE = ({commit, dispatch, state}, type) => {
  commit(types.SET_AL_ACTIVE_TYPE, type);
}