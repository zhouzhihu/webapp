<template>
  <div class="mint-tabbar" :class="{
      'is-fixed': fixed
    }">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name : 'egd-tabbar',
    componentName: 'egd-tabbar',
    props : {
      fixed : {
        type : Boolean,
        default : {}
      },
      value : {
        type : String,
        default : ''
      }
    },
    mounted(){
      this.$on("egd-tabItem-click", (...params) => {
        let [id] = params
        this.$parent.$emit("egd-tabItem-click", id);
      })
    }
  }
</script>

<style lang="css">
  .mint-tabbar {
    background-color: #58B7FF;
    display: -ms-flexbox;
    display: flex;
    display: -webkit-box;
    right: 0;
    bottom: 0;
    left: 0;
    position: absolute;
    text-align: center;
  }
  .mint-tabbar > .mint-tab-item.is-selected {
    background-color: #20a0ff;
    color: #fff;
  }
  .mint-tabbar::after {
    color: #d9d9d9;
    content: " ";
    width: 100%;
    height: 1;
    border-top: 1px solid;
    top: 0;
    left: 0;
    position: absolute;
    -webkit-transform-origin: 0 0;
    transform-origin: 0 0;
  }
  @media screen and (-webkit-min-device-pixel-ratio: 2) {
    .mint-tabbar::after {
      -webkit-transform: scaleY(.5);
      transform: scaleY(.5);
    }
  }
  .mint-tabbar.is-fixed {
    right: 0;
    bottom: 0;
    left: 0;
    position: fixed;
    z-index: 1;
  }
</style>