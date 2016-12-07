<template>
    <div class="info">
      <div class="head">
        <div class="img">
          <img src='../../assets/img/about.jpg'/>
          <div class="name">{{info.name}}</div>
        </div>
      </div>
      <div class="body">
        <div class="item">
          <div class="name">电话号码</div>
          <div class="line">
            <i class="fa fa-phone"></i>
          </div>
          <div class="value">{{info.tel}}</div>
        </div>
        <div class="item">
          <div class="name">电子邮件</div>
          <div class="line">
            <i class="fa fa-envelope"></i>
          </div>
          <div class="value">{{info.mail}}</div>
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
    </div>
</template>

<script>
  import {getAddressList} from '../../api/addressList'
  export default {
    name: 'info-item',
    data(){
      return {
        info : {}
      }
    },
    beforeMount(){
      getAddressList(this.$router.currentRoute.params.id).then(value => {
        this.info = value
      })
    }
  }
</script>

<style lang="stylus" scoped>
  .info
    position relative
    overflow hidden
    margin: 5px;
    border-radius 2%
    background-color #fcfcfd
  .head
      height 180px
      width 100%
      position relative
      .img
        position absolute
        left 50%
        top 40%
        margin-left -60px
        margin-top -60px
        img
          border-radius 50%
          width 120px
        .name
          padding 5px
          font-weight bold
          text-align center
          letter-spacing 2px
    .body
      width 100%
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
            font-size 22px
            color #FF4949
        .value
          padding 5px 5px 5px 10px
          color #20a0ff

</style>