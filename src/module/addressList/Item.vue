<template>
  <li class="news-item">
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
  </li>
</template>
<script>
  import emitter from '../../mixins/emitter'
  import {Icon} from 'element-ui'
  import 'element-ui/lib/theme-default/icon.css'

  export default {
    name: 'item',
    componentName: 'item',
    mixins : [emitter],
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
        active : this.item.favorite ? true : false
      }
    },
    methods: {
      clickItem : function(){
        this.active = !this.active
        this.dispatch("item-list", "item-click", this.type, this.item.id, this.active)
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
    background-color #fff
    padding 20px 30px 20px 80px
    border-bottom 1px solid #eee
    position relative
    line-height 20px
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
      padding: 5px
      a
        color #999
        text-decoration underline
        &:hover
          color #ff6600
</style>