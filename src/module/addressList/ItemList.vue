<template>
    <div class="news-list" id="news">
      <div class="loading" v-if="loading">
        loading...
      </div>
      <ul :show="!loading">
        <Item v-for="item in addressList" :key="item.id" :item="item" :type="type"></Item>
      </ul>
    </div>
</template>

<script>
  import Vue from 'vue'
  import { mapGetters, mapActions } from 'vuex'
  import Item from './Item.vue'
  import {toggleFavorite} from '../../api/addressList'
  import * as types from '../../store/modules/addressList/mutation-type'
  import EgdToast from 'toast'

  export default {
    name: 'item-list',
    componentName: 'item-list',
    components : {
      Item
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
      document.getElementById("news").style.height = window.screen.height - 155 + "px"
      this.$on("item-click", (...params) => {
        let [id, active] = params;
        toggleFavorite(id, active).then(() => {
          if(active)
            EgdToast({message : "收藏成功!", duration : 1000})
          else
            EgdToast({message : "取消收藏成功！", duration : 1000})
        })
      })
      this.$on("item-delete", (...params) => {
        let [id] = params
        alert("delete = " + id)
      })
      this.$on("item-info", (...params) => {
        let [id] = params
        this.$router.push(`/AddressList/${id}`)
      })
    }
  }
</script>

<style lang="css">
  .news-list {
    position: relative;
    width: 100%;
    height: 100%;
    padding-bottom: 50px;
    background: #fff;
    filter:alpha(opacity=90);
    -moz-opacity:0.9;
    -khtml-opacity: 0.9;
    opacity: 0.9;
  }
  .news-list .loading {
    text-align:center;
    position: fixed;
    top: 40%;
    left: 40%;
  }
  .news-list ul{
    list-style-type: none;
    padding: 0;
    margin: 0;
    background: #fff;
  }
</style>