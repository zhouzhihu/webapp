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
  import * as types from '../../store/modules/addressList/mutation-type'

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
      this.$store.dispatch(types.FETCH_ADDRESS_LIST, this.type).then(() => {
        this.addressList = this.$store.state.addressList.items
        this.loading = false
      })
    },
    mounted(){
      this.$on("item-click", (...parames) => {
        let [id, active] = parames;
        toggleFavorite(id, active).then(() => {
          if(active)
            Message({message : "收藏成功!", duration : 1000})
          else
            Message({message : "取消收藏成功！", duration : 1000})
        })
      })
    }
  }
</script>

<style lang="css">
  .news-list {
    position : absolute;
    width: 100%;
    transition: all .5s cubic-bezier(.55, 0, .1, 1);
  }
  .news-list ul{
      list-style-type: none;
      padding: 0;
      margin: 0;
  }
</style>