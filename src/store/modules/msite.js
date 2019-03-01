import {
  RECEIVE_ADDRESS,
  RECEIVE_CATEGORYS,
  RECEIVE_SHOPS,
} from '../mutation-types'

import {
  reqAddress,
  reqCategorys,
  reqShops,
} from '../../api/index'

const state = {
  latitude: "40.10038", //纬度
  longitude: "116.36867", //经度
  address: {},
  categorys: [],
  shops: [],
}

const actions = {
//异步获取地址的action
  async getAddress ({commit, state}) {
    //1.发ajax请求
    const {latitude, longitude} = state
    const result = await reqAddress(latitude, longitude)
    //2.成功后提交到mutations
    if (result.code===0) {
      commit(RECEIVE_ADDRESS, result.data)
    }
  },

  //异步获取分类的action
  async getCategorys ({commit}) {
    //1.发ajax请求
    const result = await reqCategorys()
    //2.成功后提交到mutations
    if (result.code===0) {
      commit(RECEIVE_CATEGORYS, result.data)
    }
  },

  //异步获取商家的action
  async getShops ({commit, state}) {
    //1.发ajax请求
    const {longitude, latitude} = state
    const result = await reqShops({longitude, latitude})
    //2.成功后提交到mutations
    if (result.code===0) {
      commit(RECEIVE_SHOPS, result.data)
    }
  },
}

const mutations = {
  [RECEIVE_ADDRESS] (state, address) {
    state.address = address
  },

  [RECEIVE_CATEGORYS] (state, categorys) {
    state.categorys = categorys
  },

  [RECEIVE_SHOPS] (state, shops) {
    state.shops = shops
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