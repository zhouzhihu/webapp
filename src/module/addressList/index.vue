<template>
    <div class="news-view">
      <div class="news-list-nav" mode="out-in">
        <div v-if="!search" class="nav">
          <router-link to="/AddressList/all">所有联系人</router-link>
          <router-link to="/AddressList/favorite">我收藏的联系人</router-link>
          <div class="icon">
            <i class="el-icon-plus"></i>
          </div>
          <div class="icon" @click="toggleSearch">
            <i class="el-icon-search"></i>
          </div>
        </div>
        <div v-if="search" class="nav">
          <div class="input">
            <input type="text" placeholder="请输入要搜索联系人" />
          </div>
          <div @click="toggleSearch">
            <i class="el-icon-search"></i>
          </div>
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
        loading: false,
        search: false
      }
    },
    computed: {
      activeType(){
        return this.$store.state.addressList.activeType
      }
    },
    methods: {
      toggleSearch : function(){
        this.search = !this.search
      }
    }
  }
</script>
<style lang="stylus" scoped>
    .news-view
      padding-top 45px
    .news-list-nav
      padding 15px 10px
      position fixed
      text-align center
      top 55px
      left 0
      right 0
      z-index 3
      box-shadow 0 1px 2px rgba(0,0,0,.1)
      background-color #58B7FF
      .fade-enter-active
        transition opacity .5s
      .fade-leave-active
        transition opacity .5s
      .fade-enter
        opacity 0
      .fade-leave-active
        opacity 0
      .nav
        max-width 800px
        box-sizing border-box;
        margin 0px auto
        text-align center
        a
          color:rgba(255,255,255,0.8)
          margin 0 0.2em
          font-size 12px
        .router-link-active
          color #fff
          font-weight 400
        .disabled
          color #ccc
        div
          display inline
        .icon
          color #fff
          float right
          margin-left 10px
          font-size 1.2em
        input
          display block
          padding 3px 10px
          box-sizing border-box
          width 100%
          height 28px
          color #1f2d3d
          background-color #fff
          background-image none
          border 1px solid #c0ccda
          border-radius 4px
          -webkit-transition border-color .2s cubic-bezier(.645,.045,.355,1)
          transition border-color .2s cubic-bezier(.645,.045,.355,1)
          outline none
          line-height normal
</style>