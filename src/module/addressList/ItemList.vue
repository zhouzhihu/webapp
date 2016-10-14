<template>
    <div class="news-list">
      <ul>
        <Item v-for="item in addressList" :key="item.id" :item="item"></Item>
      </ul>
    </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'
  import Item from './Item.vue'
  export default {
    name: 'item-list',
    components : {
      Item
    },
    props: {
      type: String
    },
    data(){
      const isInitialRender = !this.$root._isMounted
      return {
        loading: false
      }
    },
    computed: mapGetters({
      addressList: 'addressList'
    }),
    created () {
      this.$store.dispatch('FETCH_AL_DATA', this.type)
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