<template>
    <div class="news-list">
      <ul>
        <li class="news-item">
          <span class="score">10月</span>
          <span class="title">
            《程序员》10月：浪漫的计算机科学家Alan Kay
            <span class="host">(www.csdn.net)</span>
          </span>
          <br>
          <span class="meta">
            <span class="by">
              by prostoalex
            </span>
            <span class="time">1 day ago</span>
            <span class="comments-link">|84 comments</span>
          </span>
        </li>
        <li class="news-item">
          <span class="score">9月</span>
          <span class="title">
            聚焦和增强卷积神经网络
            <span class="host">(www.csdn.net)</span>
          </span>
          <br>
          <span class="meta">
            <span class="by">
              by prostoalex
            </span>
            <span class="time">1 day ago</span>
            <span class="comments-link">|84 comments</span>
          </span>
        </li>
        <li class="news-item">
          <span class="score">9月</span>
          <span class="title">
            华为IOT，与开发者共建物联网生态
            <span class="host">(www.csdn.net)</span>
          </span>
          <br>
          <span class="meta">
            <span class="by">
              by prostoalex
            </span>
            <span class="time">1 day ago</span>
            <span class="comments-link">|84 comments</span>
          </span>
        </li>
        <li class="news-item">
          <span class="score">77</span>
          <span class="title">
            华为IOT，与开发者共建物联网生态
            <span class="host">(www.csdn.net)</span>
          </span>
          <br>
          <span class="meta">
            <span class="by">
              by prostoalex
            </span>
            <span class="time">1 day ago</span>
            <span class="comments-link">|84 comments</span>
          </span>
        </li>
        <li class="news-item">
          <span class="score">77</span>
          <span class="title">
            华为IOT，与开发者共建物联网生态
            <span class="host">(www.csdn.net)</span>
          </span>
          <br>
          <span class="meta">
            <span class="by">
              by prostoalex
            </span>
            <span class="time">1 day ago</span>
            <span class="comments-link">|84 comments</span>
          </span>
        </li>
        <li class="news-item">
          <span class="score">77</span>
          <span class="title">
            华为IOT，与开发者共建物联网生态
            <span class="host">(www.csdn.net)</span>
          </span>
          <br>
          <span class="meta">
            <span class="by">
              by prostoalex
            </span>
            <span class="time">1 day ago</span>
            <span class="comments-link">|84 comments</span>
          </span>
        </li>
        <li class="news-item">
          <span class="score">77</span>
          <span class="title">
            华为IOT，与开发者共建物联网生态
            <span class="host">(www.csdn.net)</span>
          </span>
          <br>
          <span class="meta">
            <span class="by">
              by prostoalex
            </span>
            <span class="time">1 day ago</span>
            <span class="comments-link">|84 comments</span>
          </span>
        </li>
        <li class="news-item">
          <span class="score">77</span>
          <span class="title">
            华为IOT，与开发者共建物联网生态
            <span class="host">(www.csdn.net)</span>
          </span>
          <br>
          <span class="meta">
            <span class="by">
              by prostoalex
            </span>
            <span class="time">1 day ago</span>
            <span class="comments-link">|84 comments</span>
          </span>
        </li>
        <li class="news-item">
          <span class="score">77</span>
          <span class="title">
            华为IOT，与开发者共建物联网生态
            <span class="host">(www.csdn.net)</span>
          </span>
          <br>
          <span class="meta">
            <span class="by">
              by prostoalex
            </span>
            <span class="time">1 day ago</span>
            <span class="comments-link">|84 comments</span>
          </span>
        </li>
      </ul>
    </div>
</template>

<script>
  export default {
    name: 'item-list',
    props: {
      type: String
    },
    data(){
      const isInitialRender = !this.$root._isMounted
      return {
        loading: false
      }
    }
  }
</script>

<style lang="stylus">
  .news-list
    position absolute
    margin 30px 0
    width 100%
    transition all .5s cubic-bezier(.55,0,.1,1)
    ul
      list-style-type none
      padding 0
      margin 0
  .slide-left-enter, .slide-right-leave-active
    opacity 0
    transform translate(30px, 0)
  .slide-left-leave-active, .slide-right-enter
    opacity 0
    transform translate(-30px, 0)
  .item-move, .item-enter-active, .item-leave-active
    transition all .5s cubic-bezier(.55,0,.1,1)
  .item-enter
    opacity 0
    transform translate(30px, 0)
  .item-leave-active
    position absolute
    opacity 0
    transform translate(30px, 0)
  @media (max-width 600px)
    .news-list
      margin 10px 0
  .news-item
    background-color #fff
    padding 20px 30px 20px 80px
    border-bottom 1px solid #eee
    position relative
    line-height 20px
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
      a
        color #999
        text-decoration underline
        &:hover
          color #ff6600
</style>