<template>
    <div class="add-info" id="add">
      待完善...
    </div>
</template>

<script>
  export default {
    name: 'add-item',
    mounted(){
      document.getElementById("add").style.height = window.screen.height - 155 + "px"
    }
  }
</script>

<style scoped lang="css">
  .add-info {
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
</style>