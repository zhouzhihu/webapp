<template>
  <transition name="mint-toast-pop">
    <div class="mint-toast" v-show="visible" :class="customClass" :style="{ 'padding': iconClass === '' ? '10px' : '20px' }">
      <i class="mint-toast-icon" :class="iconClass" v-if="iconClass !== ''"></i>
      <span class="mint-toast-text" :style="{ 'padding-top': iconClass === '' ? '0' : '10px' }">{{ message }}</span>
    </div>
  </transition>
</template>

<script>
  export default {
    name : 'egd-toast',
    props: {
      message: String,
      iconClass: {
        String,
        default: ''
      },
      customName: {
        String,
        default: ''
      },
      position : {
        String,
        default: 'middle'
      }
    },
    data(){
      return {
        visible : false
      }
    },
    computed: {
      customClass(){
        let classes = []
        "top" == this.position ? classes.push("is-placetop") :
                ("bottom" == this.position ? classes.push("is-placebottom") :
                        classes.push("is-placemiddle"))
        classes.push(this.customName)
        return classes.join(" ");
      }
    }
  }
</script>

<style lang="css">
  .mint-toast {
    position: fixed;
    max-width: 80%;
    border-radius: 5px;
    background: #58B7FF;
    color: #fff;
    box-sizing: border-box;
    text-align: center;
    z-index: 1000;
    -webkit-transition: opacity .3s linear;
    transition: opacity .3s linear
  }
  .mint-toast.is-placebottom {
    bottom: 50px;
    left: 50%;
    -webkit-transform: translate(-50%, 0);
    transform: translate(-50%, 0)
  }
  .mint-toast.is-placemiddle {
    left: 50%;
    top: 50%;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%)
  }
  .mint-toast.is-placetop {
    top: 50px;
    left: 50%;
    -webkit-transform: translate(-50%, 0);
    transform: translate(-50%, 0)
  }
  .mint-toast-icon {
    display: block;
    text-align: center;
    font-size: 56px
  }
  .mint-toast-text {
    font-size: 14px;
    display: block;
    text-align: center
  }
  .mint-toast-pop-enter, .mint-toast-pop-leave-active {
    opacity: 0
  }
</style>