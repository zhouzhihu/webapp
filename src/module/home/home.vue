<template>
    <div class="news-view">
      <div class="news-list-nav">
        <router-link to="/Home/A">A</router-link>
        <router-link to="/Home/B">B</router-link>
      </div>
      <transition name="fade" mode="out-in">
        <router-view></router-view>
      </transition>
    </div>
</template>

<script>
  export default {
    data(){
      return {
        home : 'home'
      }
    },
    beforeMount(){
      this.$Progress.start()
    },
    mounted(){
      this.$Progress.finish()
    }
  }
</script>
<style lang="stylus">
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
        z-index 998
        box-shadow 0 1px 2px rgba(0,0,0,.1)
        a
            margin 0 1em
        .disabled
            color #ccc
</style>