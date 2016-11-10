<template>
  <div class="sidebar-box" :class="{'show-sidebar':showSidebar}">
    <div class="swiper-slide">
      <!--侧边栏头部-->
      <div class="sidebar-header">

      </div>
      <!--侧边栏列表-->
      <div class="sidebar-list">

      </div>
    </div>
  </div>
</template>

<script>
  export default{
    name: 'egd-sidebar',
    componentName: 'egd-sidebar',
    props: ['showSidebar'],
    data () {
      return {
        list: []
      }
    }
  }
</script>

<style scoped lang="scss" rel="stylesheet/scss">
  .show-sidebar{
    transform: translateX(240px);
    -webkit-transform: translateX(240px);
  }
  .sidebar-box{
    position: fixed;
    transform: translateZ(0);
    -webkit-transform: translateZ(0);
    height: 100%;
    overflow: auto;
    width: 240px;
    left: -240px;
    z-index: 99;
    top: 0;
    bottom: 0;
    transition: all .3s ease;
    background: #fff;
    &.show-sidebar{
      transform: translateX(240px);
      -webkit-transform: translateX(240px);
    }
    .swiper-slide {
      height: auto;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
    }
  }
  .sidebar-box{
    .sidebar-header{
      padding: 15px;
      background: #20A0FF;
    }
  }
  .sidebar-list{
    padding-bottom: 20px;
    background: #f9f9f9;
  }
</style>

