/*
入口js
 */

import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import Header from './components/Header/Header.vue'
import Star from './components/Star/Star.vue'
import CartControl from './components/CartControl/CartControl.vue'
import store from './store/index'

import './mock/mockServer' //mockServer.js会被打包执行
// import Button from 'mint-ui'

//注册全局组件
Vue.component('Header', Header)
Vue.component('Star', Star)
Vue.component('CartControl', CartControl)
// Vue.component(Button.name, Button)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  /*
  components: { App },
  template: '<App/>'
  */

  /*
  render: function (createElement) {
    return createElement(App) //<App/>
  },
  */

  render: h => h(App),
  router,
  store,
})
