<template>
  <li v-show="isShow" class="news-item" @touchstart="startDrag" @touchmove="onDrag" @touchend="endDrag">
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
    <EgdSwipe>
      <div @click='del(item.id)'>删除</div>
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
        alert(id)
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
    border-bottom 1px solid #eee
    position relative
    line-height 20px
    overflow hidden
    .title
      border-bottom 1px solid #58B7FF
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