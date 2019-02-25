/*
入口js
 */

import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import Header from './components/Header/Header.vue'
import Star from './components/Star/Star.vue'
import store from './store/index'

//注册全局组件
Vue.component('Header', Header)
Vue.component('Star', Star)

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
