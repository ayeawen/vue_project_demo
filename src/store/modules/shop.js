import Vue from 'vue'
import {
  RECEIVE_INFO,
  RECEIVE_RATINGS,
  RECEIVE_GOODS,
  ADD_FOOD_COUNT,
  REDUCE_FOOD_COUNT,
  CLEAR_CART
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
  cartFoods: [], //购物车中所有food的数组
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
  async getGoods ({commit}, cb) {
    const result = await reqGoods()
    if (result.code===0) {
      const goods = result.data
      commit(RECEIVE_GOODS, {goods})
      cb && cb()
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

  //更新指定food的数量
  updateFoodCount ({commit}, {isAdd, food}) {
    if (isAdd) {
      commit(ADD_FOOD_COUNT, {food})
    } else {
      commit(REDUCE_FOOD_COUNT, {food})
    }
  },

  //清空购物车
  clearCart ({commit}){
    commit(CLEAR_CART)
  }
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

  [ADD_FOOD_COUNT](state, {food}) {
    if (food.count) {
      food.count++
    } else {
      Vue.set(food, 'count', 1)

      //将food添加到购物车(cartFoods)
      state.cartFoods.push(food)
    }
  },

  [REDUCE_FOOD_COUNT](state, {food}) {
    if (food.count>0) {
      food.count--
      //当food数量减少到0时,将其从购物车中移出
      if (food.count===0) {
        const index = state.cartFoods.indexOf(food)
        state.cartFoods.splice(index, 1)
      }
    }
  },

  [CLEAR_CART] (state) {
    //将购物车中所有的food的count改成0
    state.cartFoods.forEach(food => food.count = 0)
    //重置购物车数组
    state.cartFoods = []
  }
}

const getters = {
  //返回包含所有count>0的food的数组
  /*cartFoods (state) {
    const arr = []
    state.goods.forEach(good => {
      good.foods.forEach(food => {
        if (food.count>0) {
          arr.push(food)
        }
      })
    })
    return arr
  }*/

  //总数量
  totalCount (state) {
    return state.cartFoods.reduce((preTotal, item) => preTotal + item.count, 0)
  },

  //总价格
  totalPrice (state) {
    return state.cartFoods.reduce((preTotal, item) => preTotal + item.count*item.price, 0)
  }
}

export default {
  state,
  actions,
  mutations,
  getters,
}