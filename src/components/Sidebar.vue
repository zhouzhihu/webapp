<template>
  <div class="sidebar-box" :class="{'show-sidebar':showSidebar}">
    <div class="swiper-slide">
      <!--侧边栏头部-->
      <div class="sidebar-header">
        <div class="user">
          <img src="http://7xqch8.com1.z0.glb.clouddn.com/4.pic_hd.jpg">
          <span>yatessss</span>
        </div>
        <div class="function">
          <div class="function-sub">
            <i class="iconfont">&#xe614</i>
            <span>我的收藏</span>
          </div>
          <div class="function-sub">
            <i class="iconfont">&#xe60f</i>
            <span>离线下载</span>
          </div>
        </div>
      </div>
      <!--侧边栏列表-->
      <div class="sidebar-list">
        <div class="sidebar-list-first">
          <i class="iconfont">&#xe61b</i>
          <span>首页</span>
        </div>
        <ul class="sidebar-list-ul">
          <li class="sidebar-list-li">
            <span>测试</span>
            <div>+</div>
          </li>
          <li class="sidebar-list-li">
            <span>测试</span>
            <div>+</div>
          </li>
          <li class="sidebar-list-li">
            <span>测试</span>
            <div>+</div>
          </li>
          <li class="sidebar-list-li">
            <span>测试</span>
            <div>+</div>
          </li>
          <li class="sidebar-list-li">
            <span>测试</span>
            <div>+</div>
          </li>
          <li class="sidebar-list-li">
            <span>测试</span>
            <div>+</div>
          </li>
          <li class="sidebar-list-li">
            <span>测试</span>
            <div>+</div>
          </li>
          <li class="sidebar-list-li">
            <span>测试</span>
            <div>+</div>
          </li>
          <li class="sidebar-list-li">
            <span>测试</span>
            <div>+</div>
          </li>
          <li class="sidebar-list-li">
            <span>测试</span>
            <div>+</div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  export default{
    props: ['showSidebar'],
    data () {
      return {
        list: []
      }
    }
  }
</script>

<style scoped lang="stylus">
  .iconfont
    font-family:"iconfont"
    font-size: 14px
    font-style:normal
    color: #ffffff
  .show-sidebar
    transform: translateX(290px)
  .sidebar-box
    position: fixed
    transform: translateZ(0)
    height: 100%
    overflow: auto
    width: 290px
    left: -290px
    z-index: 99
    top: 0
    bottom: 0
    transition: all .3s ease
    &.show-sidebar
      transform: translateX(290px)
    .swiper-slide
      font-size: 15px
      height: auto
      -webkit-box-sizing: border-box
      box-sizing: border-box
  .sidebar-box
    .sidebar-header
      padding: 15px
      background: #00A2EA
      .user
        display: flex
        flex-direction: row
        img
          width: 30px
          height: 30px
          border-radius: 50%
        span
          margin-left: 20px
          line-height: 30px
          flex: 1;
          font-size: 18px
          font-weight: 300
          color: #ffffff
    .function
      margin-top: 25px
      display: flex
      flex-direction: row
      color: #ffffff
      .function-sub
        padding-left: 52px
        flex: 1
        font-size: 13px
        font-weight: 300
        position: relative
        i
          position: absolute
          top: 0
          left: 20px
  .sidebar-list
    padding-bottom: 20px
    background: #f9f9f9
    .sidebar-list-first
      background: #f9f9f9
      color: #00A2EA
      height: 35px
      line-height: 35px
      font-size: 15px
      padding-left: 42px
      position: relative
      i
        color: #00A2EA
        font-size: 20px
        position: absolute
        left: 20px
    .sidebar-list-li
      height: 47px
      line-height: 47px
      display: flex
      flex-direction: row
      padding-left: 15px
      span
        width: 200px
      div
        padding-right: 40px
        font-size: 25px
        font-weight: 200
        color: #868686
</style>

