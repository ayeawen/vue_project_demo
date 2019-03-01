/*
包含应用中所有的数组模块
 */
// import Msite from '../pages/Msite/Msite.vue'
// import Search from '../pages/Search/Search.vue'
// import Order from '../pages/Order/Order.vue'
// import Profile from '../pages/Profile/Profile.vue'

/*
路由懒加载:
1. 使用import函数: 被引入的模块单独打包(生成一个单独的打包文件)
2. 配置的component是: 返回import()得到的模块函数, 只有当请求对应的path, 才会执行此函数, 从后台获取对应的包
好处:
  减小首屏需要加载的js
 */
const Msite = () => import('../pages/Msite/Msite.vue')
const Search = () => import('../pages/Search/Search.vue')
const Order = () => import('../pages/Order/Order.vue')
const Profile = () => import('../pages/Profile/Profile.vue')

import Login from '../pages/Login/Login.vue'
import Shop from '../pages/Shop/Shop.vue'
import Goods from '../pages/Shop/Goods/Goods.vue'
import Info from '../pages/Shop/Info/Info.vue'
import Ratings from '../pages/Shop/Ratings/Ratings.vue'

export default [
  {
    path: '/msite',
    component: Msite,
    meta: {
      showFooter: true
    },
  },
  {
    path: '/search',
    component: Search,
    meta: {
      showFooter: true
    },
  },
  {
    path: '/order',
    component: Order,
    meta: {
      showFooter: true
    },
  },
  {
    path: '/profile',
    component: Profile,
    meta: {
      showFooter: true
    },
  },
  {
    path: '/login',
    component: Login,
  },
  {
    path: '/shop',
    component: Shop,
    children: [
      {
        path: '/shop/goods',
        component: Goods,
      },
      {
        path: '/shop/ratings',
        component: Ratings,
      },
      {
        path: '/shop/info',
        component: Info,
      },
      {
        path: '',
        redirect: '/shop/goods'
      },
    ]
  },

  {
    path: '/',
    redirect: '/msite'
  },
]