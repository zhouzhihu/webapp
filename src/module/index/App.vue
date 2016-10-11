<template>
  <div id="app">
    <div class="header">
      <div class="inner">
        <img class="logo" src="./img/logo.png" alt="logo" @click="toggleBar">
        <router-link to="/Home">主页</router-link>
        <router-link to="/about">关于我</router-link>
        <span class="github">
          追求卓越，成功就会在不经意间追上你！
        </span>
      </div>
    </div>
    <transition name="fade" mode="out-in">
      <router-view class="view"></router-view>
    </transition>
    <vue-progress-bar></vue-progress-bar>
    <!--侧边栏-->
    <Sidebar :show-sidebar.sync="showSidebar"></Sidebar>
    <!--侧边栏遮罩层-->
    <div v-if="showSidebar" class="sidebar-mask" @click="toggleBar"></div>
  </div>
</template>

<style lang="stylus">
  @font-face {
    font-family: 'iconfont';
    src: url('//at.alicdn.com/t/font_1467357626_5109937.eot'); /* IE9*/
    src: url('//at.alicdn.com/t/font_1467357626_5109937.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
            url('//at.alicdn.com/t/font_1467357626_5109937.woff') format('woff'), /* chrome、firefox */
            url('//at.alicdn.com/t/font_1467357626_5109937.ttf') format('truetype'), /* chrome、firefox、opera、Safari, Android, iOS 4.2+*/
            url('//at.alicdn.com/t/font_1467357626_5109937.svg#iconfont') format('svg'); /* iOS 4.1- */
  }
  body
    font-family Roboto, Helvetica, sans-serif
    font-size 15px
    background-color lighten(#eceef1, 30%)
    margin 0
    padding-top 55px
    color #34495e

  a
    color #34495e
    text-decoration none

  .header
    background-color #ff6600
    position fixed
    z-index 2
    top 0
    left 0
    right 0
    .inner
      max-width 800px
      box-sizing border-box
      margin 0px auto
      padding 15px 5px
    a
      color rgba(255, 255, 255, .8)
      line-height 24px
      transition color .15s ease
      display inline-block
      vertical-align middle
      font-weight 300
      letter-spacing .075em
      margin-right 1.8em
      &:hover
        color #fff
      &.router-link-active
        color #fff
        font-weight 400
      &:nth-child(6)
        margin-right 0
    .github
      color #fff
      font-size .9em
      margin 0
      float right

  .logo
    width 24px
    margin-right 10px
    display inline-block
    vertical-align middle

  .view
    max-width 800px
    margin 0 auto
    position relative

  .fade-enter-active, .fade-leave-active
    transition all .2s ease

  .fade-enter, .fade-leave-active
    opacity 0

  @media (max-width 860px)
    .header .inner
      padding 15px 30px

  @media (max-width 600px)
    body
      font-size 14px
    .header
      .inner
        padding 15px
      a
        margin-right 1em
      .github
        display none
  .sidebar-mask
    position: fixed
    transform: translateZ(0)
    top: 0
    right: 0
    bottom: 0
    left: 0
    z-index: 5
    background: rgba(0, 0, 0, 0.7)
</style>
