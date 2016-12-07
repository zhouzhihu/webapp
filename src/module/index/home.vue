<template>
  <div class="home">
    <div class="icon">
      <img src="../../assets/img/logo.png"/>
    </div>
    <div class="text">
      <span>追求卓越，成功就会在不经意间追上你！</span>
    </div>
  </div>
</template>

<style lang="stylus" scoped>
  .home
    position absolute
    top 50px
    left 0px
    right 0px
    bottom 0px
    width 100%
    overflow hidden
    background -webkit-gradient(linear, 100% 0%, 0% 100%, from(#fff), to(#31abc2))
    .icon
      position absolute
      text-align center
      width 100%
      top 39%
      color #fff
      font-weight bold
      img
        box-shadow 0 1px 1px 0px rgba(0,0,0,0.4)
    .text
      position absolute
      text-align center
      width 100%
      top 50%
      color #fff
      span
        text-shadow 1px 1px 1px #000
</style>