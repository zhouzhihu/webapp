<template>
    <div class="play" id="play">
      <div class="info" id="info">
        <div class="music">
          歌手：萌萌哒天团 专辑：《帝都》
        </div>
        <audio
          id="music"
          :src="dataUrl"
          autoplay="autoplay"
          @timeupdate="updateTime"
          v-on:ended="playContinue"></audio>
        <div class="progress-bar">
          <div class="progress" :style="{'margin-left':indicatorPosition+'%'}"><i class="fa fa-play">{{time}}</i></div>
        </div>
        <div class="op">
          <i class="fa fa-random random"></i>
          <i class="fa fa-backward backward" v-on:click="backward"></i>
          <i class="fa fa-play-circle" v-if="0 == status || 1 == status" v-on:click="play"></i>
          <i class="fa fa-pause-circle" v-if="2 === status" v-on:click="pause"></i>
          <i class="fa fa-forward forward" v-on:click="forward"></i>
          <i class="fa fa-retweet retweet" @click.native="popupVisible3 = true"></i>
        </div>
      </div>
      <div class="list" id="list">
        <div class="top" id="top">
          <div class="row">
            <span class="col" v-on:click="list('my')" :class="{active: 'my'== type}">播放列表</span>
            <span class="col" v-on:click="list('all')" :class="{active: 'all'== type}">所有歌曲</span>
          </div>
        </div>
        <div class="content" id="content">
          <div v-for="item in musicList" class="row" v-on:click='playMusic(item.id)'>
            <div class="img" :class="{active: curId == item.id}">
              <i class="fa fa-play-circle-o"></i>
            </div>
            <div class="name" :class="{active: curId == item.id}">
              <span>{{item.name}}</span>
            </div>
            <div class="time" :class="{active: curId == item.id}">
              <span>{{item.time}}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
  const SINGLE = 0
  const SEQUENTIAL = 1
  const RANDOM = 2
  export default {
    name: 'paly',
    data() {
      return {
        popupVisible3 : true,
        status : 2,
        playMode: RANDOM,
        indicatorPosition : 0,
        curMusic : 1,
        time : '00:00',
        type : 'my',
        musicList : [
          {id : 1, name : '帝都', time : '03:03', dataUrl : 'http://ws.stream.qqmusic.qq.com/101835195.m4a?fromtag=46'},
          {id : 2, name : '花千骨', time : '03:42', dataUrl : 'http://ws.stream.qqmusic.qq.com/103540151.m4a?fromtag=46'},
          {id : 3, name : '到不了', time : '04:54', dataUrl : 'http://ws.stream.qqmusic.qq.com/108172613.m4a?fromtag=46'},
          {id : 4, name : '演员', time : '04:21', dataUrl : 'http://ws.stream.qqmusic.qq.com/102636799.m4a?fromtag=46'}
        ]
      }
    },
    mounted(){
      let playHeight = document.getElementById("play").style.height = window.screen.height - 55 + "px"
      let listHeight = document.getElementById("list").style.height = parseInt(playHeight) - document.getElementById("info").clientHeight + "px"
      document.getElementById("content").style.height = parseInt(listHeight) - document.getElementById("top").clientHeight + "px"
    },
    computed: {
      curId : function(){
        if(this.musicList.length >= this.curMusic)
          return this.musicList[this.curMusic -1].id
      },
      dataUrl : function(){
        if(this.musicList.length >= this.curMusic)
          return this.musicList[this.curMusic -1].dataUrl
      }
    },
    methods: {
      playContinue : function(){
        switch(this.playMode){
          case SINGLE:
            break
          case SEQUENTIAL :
            this.forward()
            break
          case RANDOM :
            this.curMusic = Math.floor(1 + Math.round(Math.random()*(this.musicList.length - 1)))
            break;
        }
      },
      pause : function(){
        this.status = 0
        document.getElementById('music').pause()
      },
      play : function(){
        this.status = 2
        document.getElementById('music').play()
      },
      list : function(type){
        this.type = type
      },
      playMusic : function(id){
        this.curId = id
      },
      backward : function(){
        this.curMusic--
        if(this.curMusic <= 0)
          this.curMusic = this.musicList.length
      },
      forward : function(){
        this.curMusic++
        if(this.curMusic > this.musicList.length)
          this.curMusic = 1
      },
      updateTime : function(){
        var currentTime = parseInt(document.getElementById('music').currentTime)
        var duration = parseInt(document.getElementById('music').duration)
        var m = parseInt(currentTime/60).toString();
        var s = (currentTime - m*60).toString()
        this.time = (1 == m.length ? "0" + m : m) + ":" + (1 == s.length ? "0" + s : s)
        this.indicatorPosition = currentTime / duration * 100
      }
    },
    beforeDestroy(){
      this.pause()
    }
  }
</script>

<style scoped lang="stylus">
  .play
    .mint-popup-3
      width 100%
      height 100%
      background-color #fff
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
      .progress-bar
        position absolute
        height 2px
        bottom 56px
        width 100%
        .progress
          height 12px
          width 2px
          margin-left 0px
          color #fff
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
        .random
          font-size 20px
          margin-right 20px
        .backward
          margin-right 30px
          font-size 30px
        .forward
          margin-left 30px
          font-size 30px
        .retweet
          font-size 20px
          margin-left 20px
    .list
      position relative
      background #232121
      .top
        position absolute
        max-width 800px
        width 100%
        top 0
        height 35px
        line-height 35px
        background #000
        opacity 0.8
        .row
          text-align center
          width 100%
          height 100%
          .col
            padding 7px 10px 7px 10px
            width 70px
            height 35px
            color #fff
          .active
            border-bottom 2px solid #a09b9b
      .content
        padding-top 35px
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
            color #a09b9b
            span
              font-size 14px
              height 40px
              line-height 40px
              margin-left 5px
          .active
            color red
          .time
            float right
            color #a09b9b
            span
              font-size 14px
              height 40px
              line-height 40px
              margin-right 15px
          .active
            color red
</style>