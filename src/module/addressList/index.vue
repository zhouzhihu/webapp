<template>
    <div class="news-view">
      <div class="news-list-nav">
        <div class="nav">
            <div class="main" v-if="!search">
              <router-link to="/AddressList/all">所有联系人</router-link>
              <router-link to="/AddressList/favorite">我收藏的联系人</router-link>
              <div class="icon">
                <i class="el-icon-plus"></i>
              </div>
              <div class="icon" @click="toggleSearch">
                <i class="el-icon-search"></i>
              </div>
            </div>
            <div v-if="search">
              <el-row :gutter="5">
                <el-col :span="18"><el-input placeholder="请输入要搜索联系人"></el-input></el-col>
                <el-col :span="6"><div @click="toggleSearch"><el-button type="primary" icon="circle-cross">取消</el-button></div></el-col>
              </el-row>
            </div>
        </div>
      </div>
      <transition name="fade" mode="out-in">
        <router-view></router-view>
      </transition>
    </div>
</template>

<script>
  import {Button as ElButton, Input as ElInput, Row as ElRow, Col as ElCol} from 'element-ui'
  export default {
    beforeMount(){
      this.$Progress.start()
    },
    components:{
      ElButton,
      ElInput,
      ElRow,
      ElCol
    },
    mounted(){
      this.$Progress.finish()
    },
    data(){
      return {
        loading: false,
        search: false
      }
    },
    computed: {
      activeType(){
        return this.$store.state.addressList.activeType
      }
    },
    methods: {
      toggleSearch : function(){
        this.search = !this.search
      }
    }
  }
</script>
<style lang="stylus" scoped>
    .news-view
      padding-top 45px
    .news-list-nav
      padding 3px 10px 3px 3px
      position fixed
      text-align center
      top 55px
      left 0
      right 0
      z-index 3
      box-shadow 0 1px 2px rgba(0,0,0,.1)
      background-color #58B7FF
      .nav
        max-width 800px
        box-sizing border-box;
        margin 0px auto
        text-align center
        a
          color:rgba(255,255,255,0.8)
          margin 0 0.2em
          font-size 12px
        .router-link-active
          color #fff
          font-weight 400
        .disabled
          color #ccc
        .main
          padding 10px 10px
          .icon
            color #fff
            float right
            margin-left 10px
            font-size 1.2em
</style>