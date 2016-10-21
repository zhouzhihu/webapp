<template>
  <li class="news-item">
    <span class="score" v-on:click="clickItem" v-if="!active">不收藏</span>
    <span class="score" v-on:click="clickItem" v-if="active">收藏</span>
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
      position absolute
      cursor pointer
      top 50%
      left 30px
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