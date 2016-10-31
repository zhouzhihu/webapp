<template>
  <div class="about">
    <div class="header">
      <img src='./img/about.jpg'/>
      <div class="text">追求卓越，成功就会在不经意间追上你！</div>
    </div>
    <div class="body">
      <div class="item">
        <i class="el-icon-star-off"></i>
        <span class="text">github地址：https://github.com/zhouzhihu</span>
      </div>
      <div class="item">
        <i class="el-icon-message"></i>
        <span class="text">电 子 邮 件：web_study2004@163.com</span>
      </div>
      <div class="item">
        <i class="el-icon-time"></i>
        <span class="text">微&nbsp;&nbsp;&nbsp;信&nbsp;&nbsp;&nbsp;号：wiki2008</span>
      </div>
    </div>
    <div class="bottom">
    </div>
  </div>
</template>

<script>
  import {Icon} from 'element-ui'
  import 'element-ui/lib/theme-default/icon.css'

  export default {
    data(){
      return {about : 'about'}
    },
    created : function(){
      this.about = "created"
    },
    beforeMount(){
      this.$Progress.start()
    },
    mounted(){
      this.$Progress.finish()
    }
  }
</script>



<style lang="stylus" scoped>
  .about
    .header
      position relative
      height 150px
      text-align center
      background-image url('./img/about-bj.png')
      background-size cover
      img
        margin 30px 0 15px 0
        width 60px
        height 60px
        border-radius 50%
        border 5px solid #fff
      .text
        color #fff
        font-weight bold
    .body
      height 100%
      .item
        background-color #fff
        height 50px
        border-bottom 1px solid #eee
        i
          color #58B7FF
          margin 15px 10px
          font-size 1.5em
          vertical-align middle
        span
          font-size 12px
</style>