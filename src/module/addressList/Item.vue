<template>
  <li v-show="isShow" class="news-item" @touchstart="startDrag" @touchmove="onDrag" @touchend="endDrag" @click="hiddenDrag">
    <span class="score" @click="clickItem">
      <i :class="favorite"></i>
    </span>
    <div class="title">
      {{item.name}}：{{item.desc}}
    </div>
    <div class="meta">
        手机号码：{{item.tel}}
        <br/>
        电子邮件：{{item.mail}}
    </div>
    <EgdSwipe bgcolor="#58B7FF" w="70">
      <div @click='del(item.id)' class="button">
        <i class="el-icon-delete"></i>
        <div class="text">删除</div>
      </div>
      <div @click='info(item.id)' class="button">
        <i class="el-icon-document"></i>
        <div class="text">详情</div>
      </div>
    </EgdSwipe>
  </li>
</template>
<script>
  import emitter from '../../mixins/emitter'
  import swipe from '../../mixins/swipe'
  import EgdSwipe from '../../components/swipe'

  export default {
    name: 'item',
    componentName: 'item',
    components :{
      EgdSwipe
    },
    mixins : [emitter, swipe],
    props: {
      item : {
        type : Object,
        default : []
      },
      type : {
        type : String,
        default : ''
      }
    },
    data(){
      return {
        active : this.item.favorite ? true : false,
        isShow : true
      }
    },
    methods: {
      clickItem : function(){
        this.active = !this.active
        "all" != this.type ? this.isShow = false : ""
        this.dispatch("item-list", "item-click", this.item.id, this.active)
      },
      del : function(id){
        this.dispatch("item-list", "item-delete", id)
      },
      info : function(id){
        this.dispatch("item-list", "item-info", id)
      }
    },
    computed:{
      favorite : function(){
        return this.active ? "el-icon-star-on" : "el-icon-star-off"
      }
    }
  }
</script>

<style lang="stylus">
  .news-item
    padding 5px 10px 5px 70px
    border-bottom 1px solid #ccc
    position relative
    line-height 20px
    overflow hidden
    .button
      font-size 12px
      color #fff
      padding 5px 20px
      i
        font-size 25px
      .text
        text-align center
    .title
      border-bottom 1px solid #f5f3f3
      padding: 5px
    .score
      color #58B7FF
      font-size 1.5em
      position absolute
      top 50%
      left 0
      width 80px
      text-align center
      margin-top -10px
    .meta, .host
      font-size .85em
      color #999
      padding 5px
      a
        color #999
        text-decoration underline
        &:hover
          color #ff6600
    .mint-swipe
      height 100%
</style>