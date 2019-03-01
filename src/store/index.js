/*
vuex最核心的管理对象: store
 */

import Vue from 'vue'
import Vuex from 'vuex'

import getters from './getters'
import actions from './actions'
import msite from './modules/msite'
import shop from './modules/shop'
import user from './modules/user'

Vue.use(Vuex)

export default new Vuex.Store({
  getters,
  actions,
  modules: {
    msite,
    shop,
    user
  }
})