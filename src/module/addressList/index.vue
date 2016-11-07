<template>
    <div class="news-view">
      <div class="news-list-nav">
        <div class="nav">
            <div>
              <el-row :gutter="5">
                <el-col :span="18"><el-input placeholder="请输入要搜索联系人"></el-input></el-col>
                <el-col :span="6"><el-button type="primary" icon="search">搜索</el-button></el-col>
              </el-row>
            </div>
        </div>
      </div>
      <transition name="fade" mode="out-in">
        <router-view></router-view>
      </transition>
      <EgdTabBar fixed class="news-list-bottom" :value="activeType">
        <EgdTabItem id="all">
          <img slot="icon" src="../../assets/img/all.png"/>
          所有联系人
        </EgdTabItem>
        <EgdTabItem id="favorite">
          <img slot="icon" src="../../assets/img/favorite.png"/>
          我收藏的联系人
        </EgdTabItem>
        <EgdTabItem id="add">
          <img slot="icon" src="../../assets/img/add.png"/>
          添加联系人
        </EgdTabItem>
      </EgdTabBar>
    </div>
</template>

<script>
  import {Button as ElButton, Input as ElInput, Row as ElRow, Col as ElCol} from 'element-ui'
  import EgdTabBar from '../../components/tabbar/tabbar.vue'
  import EgdTabItem from '../../components/tab-item/tab-item.vue'

  export default {
    beforeMount(){
      this.$Progress.start()
    },
    components:{
      ElButton,
      ElInput,
      ElRow,
      ElCol,
      EgdTabBar,
      EgdTabItem
    },
    mounted(){
      this.$Progress.finish()
      this.$on("egd-tabItem-click", (id) => {
        this.$router.push("/AddressList/" + id)
        this.activeType = this.$router.currentRoute.path.split('/')[2]
      })
    },
    data(){
      return {
        loading: false,
        activeType : 'all'
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
    .news-list-bottom
      height: 50px
</style>