<template>
    <div class="news-list">
      <Spinner :show="loading"></Spinner>
      <ul :show="!loading">
        <Item v-for="item in addressList" :key="item.id" :item="item" :type="type"></Item>
      </ul>
    </div>
</template>

<script>
  import Vue from 'vue'
  import { mapGetters, mapActions } from 'vuex'
  import Item from './Item.vue'
  import Spinner from '../../components/Spinner.vue'
  import {watchList, toggleFavorite} from '../../api/addressList'
  import {Message} from 'element-ui'
  import 'element-ui/lib/theme-default/message.css'

  Vue.component(Message.name, Message);

  export default {
    name: 'item-list',
    componentName: 'item-list',
    components : {
      Item,
      Spinner
    },
    props: {
      type: String
    },
    data(){
      return {
        loading: false,
        addressList: []
      }
    },
    beforeMount(){
      this.loading = true
      this.unwatch = watchList(this.type, snapshot =>{
        this.addressList = snapshot
        this.loading = false
      })
    },
    mounted(){
      this.$on("item-click", (...parames) => {
        let [type, id, active] = parames;
        toggleFavorite(type, id, active).then(() => {
          if(active)
            Message({message : "收藏成功!", duration : 1000})
          else
            Message({message : "取消收藏成功！", duration : 1000})
        })
      })
    }
  }
</script>

<style lang="stylus">
  .news-list
    position absolute
    width 100%
    transition all .5s cubic-bezier(.55,0,.1,1)
    ul
      list-style-type none
      padding 0
      margin 0
</style>