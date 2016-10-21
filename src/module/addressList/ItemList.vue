<template>
    <div class="news-list">
      <Spinner :show="loading"></Spinner>
      <ul :show="!loading">
        <Item v-for="item in addressList" :key="item.id" :item="item" :type="type"></Item>
      </ul>
    </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'
  import Item from './Item.vue'
  import Spinner from '../../components/Spinner.vue'
  import {getALByType, watchList} from '../../api/addressList'

  export default {
    name: 'item-list',
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
</style>