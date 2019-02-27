<template>
  <div>
    <router-view/>
    <FooterGuide v-show="$route.meta.showFooter"/>
  </div>
</template>

<script>
  import FooterGuide from './components/FooterGuide/FooterGuide.vue'

  export default {

    mounted () {
      //触发vuex的getAddress(), 后台获取address
      this.$store.dispatch('getAddress')
      //触发vuex的getUser(), 获取user信息自动登录
      this.$store.dispatch('getUser')


      // this.$store.dispatch('getInfo') //测试
    },

    components: {
      FooterGuide
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  #app
    width 100%
    height 100%
</style>
