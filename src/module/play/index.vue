<template>
    <div class="play" id="play">
      <div class="info" id="info">
        <div class="music">
          歌手：萌萌哒天团 专辑：《帝都》
        </div>
        <div class="op">
          <i class="fa fa-backward backward"></i>
          <i class="fa fa-play-circle"></i>
          <i class="fa fa-forward forward"></i>
        </div>
      </div>
      <div class="list" id="list">
        <div class="content" id="content">
          <div class="row">
            <div class="img">
              <i class="fa fa-play-circle-o"></i>
            </div>
            <div class="name">
              <span>帝都</span>
            </div>
            <div class="time">
              <span>03:05</span>
            </div>
          </div>
          <div class="row">
            <div class="img">
              <i class="fa fa-play-circle-o"></i>
            </div>
            <div class="name">
              <span>花千骨</span>
            </div>
            <div class="time">
              <span>03:05</span>
            </div>
          </div>
          <div class="row">
            <div class="img">
              <i class="fa fa-play-circle-o"></i>
            </div>
            <div class="name">
              <span> 幽兰香</span>
            </div>
            <div class="time">
              <span>03:05</span>
            </div>
          </div>
          <div class="row">
            <div class="img">
              <i class="fa fa-play-circle-o"></i>
            </div>
            <div class="name">
              <span>三生三世十里桃花</span>
            </div>
            <div class="time">
              <span>03:05</span>
            </div>
          </div>
          <div class="row">
            <div class="img">
              <i class="fa fa-play-circle-o"></i>
            </div>
            <div class="name">
              <span>诛仙</span>
            </div>
            <div class="time">
              <span>03:05</span>
            </div>
          </div>
          <div class="row">
            <div class="img">
              <i class="fa fa-play-circle-o"></i>
            </div>
            <div class="name">
              <span>秦时明月</span>
            </div>
            <div class="time">
              <span>03:05</span>
            </div>
          </div>
          <div class="row">
            <div class="img">
              <i class="fa fa-play-circle-o"></i>
            </div>
            <div class="name">
              <span>青花瓷</span>
            </div>
            <div class="time">
              <span>03:05</span>
            </div>
          </div>
        </div>
        <div class="bottom" id="bottom">
        </div>
      </div>
    </div>
</template>

<script>
  export default {
    name: 'paly',
    mounted(){
      let playHeight = document.getElementById("play").style.height = window.screen.height - 55 + "px"
      let listHeight = document.getElementById("list").style.height = parseInt(playHeight) - document.getElementById("info").clientHeight + "px"
      document.getElementById("content").style.height = parseInt(listHeight) - document.getElementById("bottom").clientHeight + "px"
    }
  }
</script>

<style scoped lang="stylus">
  .play
    position relative
    width 100%
    height 100%
    padding-bottom 50px
    .info
      position relative
      height 280px
      background url(../../assets/img/play.jpg) no-repeat
      background-size 100% 100%
      .music
        position absolute
        bottom 50px
        height 50px
        width 100%
        background #000
        opacity 0.5
        color #fff
        text-align center
        line-height 50px
        border-bottom 1px solid #ccc
      .op
        position absolute
        bottom 0px
        height 50px
        width 100%
        background #000
        opacity 0.5
        color #fff
        text-align center
        line-height 50px
        i
          font-size 35px
          line-height 50px
        .backward
          margin-right 30px
          font-size 30px
        .forward
          margin-left 30px
          font-size 30px
    .list
      position relative
      background #232121
      .content
        overflow auto
        .row
          height 40px
          line-height 40px
          vertical-align middle
          .img
            float left
            i
              color #565555
              margin-left 15px
          .name
            float left
            span
              font-size 14px
              color #a09b9b
              height 40px
              line-height 40px
              margin-left 5px
          .time
            float right
            span
              font-size 14px
              color #a09b9b
              height 40px
              line-height 40px
              margin-right 15px
      .bottom
        position fixed
        max-width 800px
        width 100%
        text-align center
        bottom 0
        height 35px
        line-height 35px
        background #fff
        opacity 0.2
        i
          font-size 30px
</style>