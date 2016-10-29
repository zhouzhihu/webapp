<template>
    <div class="news-view">
      <div class="news-list-nav">
        <div class="nav">
          <router-link to="/AddressList/all">所有联系人</router-link>
          <router-link to="/AddressList/favorite">我收藏的联系人</router-link>
        </div>
      </div>
      <transition name="fade" mode="out-in">
        <router-view></router-view>
      </transition>
    </div>
</template>

<script>
  export default {
    beforeMount(){
      this.$Progress.start()
    },
    mounted(){
      this.$Progress.finish()
    },
    data(){
      return {
        loading: false
      }
    },
    computed: {
      activeType(){
        return this.$store.state.addressList.activeType
      }
    }
  }
</script>
<style lang="stylus" scoped>
    .news-view
      padding-top 45px
    .news-list-nav, .news-list
      background-color #fff
      border-radius 2px
    .news-list-nav
      padding 15px 30px
      position fixed
      text-align center
      top 55px
      left 0
      right 0
      z-index 3
      box-shadow 0 1px 2px rgba(0,0,0,.1)
      background-color #58B7FF
      .nav
        max-width 800px
        box-sizing border-box;
        margin 0px auto
        text-align center
        a
          color:#ccc
          margin 0 0.2em
          font-size 12px
        .router-link-active
          color #fff
          font-weight 400
        .disabled
          color #ccc
</style>