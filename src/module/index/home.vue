<template>
    <div class="news-view">
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
  import EgdTabBar from 'tabbar'
  import EgdTabItem from 'tab-item'

  export default {
    beforeMount(){
      this.$Progress.start()
    },
    components:{
      EgdTabBar,
      EgdTabItem
    },
    mounted(){
      this.$Progress.finish()
      this.$on("egd-tabItem-click", (id) => {
        this.$router.push(`/AddressList/${id}`)
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
    .news-list-bottom
      height: 50px
</style>