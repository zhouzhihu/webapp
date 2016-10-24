<template>
  <li class="news-item">
    <span class="score" v-on:click="clickItem" v-if="active"><img src="../../assets/img/favorite-unactive.png"></span>
    <span class="score" v-on:click="clickItem" v-if="!active"><img src="../../assets/img/favorite-active.png"></span>
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
  import {toggleFavorite} from '../../api/addressList'
export default {
  name: 'item',
  props: ['item', 'type'],
  data(){
    return {
      active : (this.item.favorite == "true" || this.type == 'favorite') ? true : false
    }
  },
  methods: {
    clickItem : function(){
      this.active = !this.active
      toggleFavorite(this.type, this.item.id)
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
      border-bottom 1px solid #eee
      padding: 5px
    .score
      color #ff6600
      font-size 1.1em
      font-weight 700
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