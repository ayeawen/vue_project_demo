import {
  RECEIVE_USER,
  RESET_USER,
} from '../mutation-types'

import {
  reqUser,
  reqLogout,
} from '../../api/index'

const state = {
  user: {},
}

const actions = {
//同步保存用户action
  saveUser ({commit}, user) {
    commit(RECEIVE_USER, user)
  },

  //异步获取当前用户信息的action
  async getUser({commit}){
    const result = await reqUser()
    if (result.code===0) {
      const user = result.data
      commit(RECEIVE_USER, user)
    }
  },

  //退出登录
  async logout({commit}){
    const result = await reqLogout()
    if (result.code===0) {
      commit(RESET_USER)
    }
  },
}

const mutations = {
  [RECEIVE_USER] (state, user) {
    state.user = user
  },

  [RESET_USER] (state) {
    state.user = {}
  },
}

const getters = {

}

export default {
  state,
  actions,
  mutations,
  getters,
}