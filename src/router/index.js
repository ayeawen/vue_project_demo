/*
 路由器模块
 */
import Vue from 'vue'
import VueRouter from 'vue-router'

import routes from './routes'

Vue.use(VueRouter)

export default new VueRouter({
  //去掉#号
  mode: 'history',
  //配置所有路由器
  routes
})