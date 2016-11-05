import * as actions from './actions'
import * as getters from './getters'
import {state, mutations} from './mutations'

require('es6-promise').polyfill()
export default {
    getters,
    state,
    mutations,
    actions
}