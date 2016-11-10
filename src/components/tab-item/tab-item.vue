<template>
  <a class="mint-tab-item"
     @click="clickTabItem"
     :class="{ 'is-selected': $parent.value === id }">
    <div class="mint-tab-item-icon"><slot name="icon"></slot></div>
    <div class="mint-tab-item-label"><slot></slot></div>
  </a>
</template>

<script>
  import emitter from '../../mixins/emitter.js'

  export default {
    name : 'egd-tab-item',
    componentName : 'egd-tab-item',
    props : ['id'],
    mixins : [emitter],
    methods : {
      clickTabItem : function(){
        this.dispatch("egd-tabbar", 'egd-tabItem-click', this.id)
      }
    }
  }
</script>

<style scoped lang="css">
  .mint-tab-item {
    display: block;
    padding: 7px 0;
    -ms-flex: 1;
    flex: 1;
    -webkit-box-flex: 1;
  }
  .mint-tab-item-icon {
    width: 24px;
    height: 24px;
    margin: 0 auto 5px
  }
  .mint-tab-item-icon:empty {
    display: none
  }
  .mint-tab-item-icon > * {
    display: block;
    width: 100%;
    height: 100%
  }
  .mint-tab-item-label {
    color: inherit;
    font-size: 12px;
    line-height: 1
  }
</style>