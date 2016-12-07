<template>
  <div class="about">
    <div class="header">
      <img src='../../assets/img/about.jpg'/>
      <div class="text">追求卓越，成功就会在不经意间追上你！</div>
    </div>
    <div class="body">
      <div class="item">
        <div class="name">电话号码</div>
        <div class="line">
          <i class="fa fa-phone"></i>
        </div>
        <div class="value">13560107927</div>
      </div>
      <div class="item">
        <div class="name">电子邮件</div>
        <div class="line">
          <i class="fa fa-envelope"></i>
        </div>
        <div class="value">web_study2004@163.com</div>
      </div>
      <div class="item">
        <div class="name">微信号</div>
        <div class="line">
          <i class="fa fa-user-circle"></i>
        </div>
        <div class="value">Wiki2008</div>
      </div>
      <div class="item">
        <div class="name">QQ号码</div>
        <div class="line">
          <i class="fa fa-qq"></i>
        </div>
        <div class="value">365218616</div>
      </div>
    </div>
    <div class="bottom">
    </div>
  </div>
</template>

<script>
  export default {
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
    overflow hidden
    .header
      position relative
      height 150px
      text-align center
      background-image url('../../assets/img/about-bj.png')
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
        width 100%
        .name
          padding 10px
          font-weight bold
        .line
          border-bottom 1px solid #f3f3f3
          position relative
          i
            position: absolute;
            right: 5px;
            top: -10px;
            font-size: 20px;
            color #FF4949
        .value
          padding 5px 5px 5px 10px
          color #20a0ff
</style>