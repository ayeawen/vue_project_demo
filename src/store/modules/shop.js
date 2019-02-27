import {
  RECEIVE_INFO,
  RECEIVE_RATINGS,
  RECEIVE_GOODS
} from '../mutation-types'

import {
  reqRatings,
  reqGoods,
  reqInfo
} from '../../api/index'

const state = {
  goods: [], // 商品列表
  ratings: [], // 商家评价列表
  info: {}, // 商家信息
}

const actions = {
// 异步获取商家信息
  async getInfo ({commit}) {
    const result = await reqInfo()
    if (result.code===0) {
      const info = result.data
      commit(RECEIVE_INFO, {info})
    }
  },

  // 异步获取分类列表
  async getGoods ({commit}) {
    const result = await reqGoods()
    if (result.code===0) {
      const goods = result.data
      commit(RECEIVE_GOODS, {goods})
    }
  },

  // 异步获取商家信息
  async getRatings ({commit}) {
    const result = await reqRatings()
    if (result.code===0) {
      const ratings = result.data
      commit(RECEIVE_RATINGS, {ratings})
    }
  },
}

const mutations = {
  [RECEIVE_INFO](state, {info}) {
    state.info = info
  },

  [RECEIVE_RATINGS](state, {ratings}) {
    state.ratings = ratings
  },

  [RECEIVE_GOODS](state, {goods}) {
    state.goods = goods
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