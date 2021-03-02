import { createStore } from 'vuex'

import state from './state'
import * as getters from './getters'
import * as mutations from './mutations'
import * as actions from './actions'

import authModule from './modules/auth'
import productModule from './modules/products'

export default createStore({
  state,
  getters,
  mutations,
  actions,
  modules: {
    authModule,
    productModule
  }
})
