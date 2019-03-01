/*
入口js
 */

import VueLazyload from 'vue-lazyload'
import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import Header from './components/Header/Header.vue'
import Star from './components/Star/Star.vue'
import CartControl from './components/CartControl/CartControl.vue'
import Split from './components/Split/Split.vue'
import store from './store/index'
import './mock/mockServer' //mockServer.js会被打包执行
import './filters'
import loading from './common/imgs/loading.gif'
// import Button from 'mint-ui'

//注册全局组件
Vue.component('Header', Header)
Vue.component('Star', Star)
Vue.component('CartControl', CartControl)
Vue.component('Split', Split)
// Vue.component(Button.name, Button)

Vue.use(VueLazyload, { //内部会定义一个指令: lazy
  loading
})

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
