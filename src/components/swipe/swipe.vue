<template>
  <div class="egd-swipe" :style="{background:bgcolor,height: h + 'px',width: w + 'px',transform:'translate3d(' + w + 'px' + ', 0px, 0px)',display:isShow}">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name : 'egd-swipe',
    componentName : 'egd-swipe',
    props :{
      bgcolor :{
        type : String,
        default : '#ccc'
      },
      w : {
        type: String,
        default : 0
      }
    },
    data(){
      return {
        h : 0,
        isShow : 'none',
        start: { x: 0, y: 0 }
      }
    },
    methods : {
      translate3d(offset) {
        return `translate3d(${offset}px, 0, 0)`
      },
      swipeMove(offset = 0) {
        this.$el.style.webkitTransform = this.translate3d(parseInt(this.w) + offset)
        this.swiping = true
      },
      swipeLeaveTransition(direction) {
        setTimeout(() => {
          this.swipeLeave = true
          // left
          if (direction > 0 && -this.offsetLeft > this.w * 0.4) {
            this.swipeMove(-this.w)
            this.swiping = false
            this.opened = true
            return
          }
          this.swipeMove(0)
      }, 0)
      }
    },
    mounted(){
      this.h = this.$parent.$el.clientHeight
      this.$parent.$el.addEventListener("touchstart", (evt) => {
        evt = evt.changedTouches ? evt.changedTouches[0] : evt
        this.isShow = "block"
        let [pageX, pageY] = [evt.pageX, evt.pageY]
        this.start.x = pageX
        this.start.y = pageY
        this.dragging = true
      })
      this.$parent.$el.addEventListener("touchmove", (evt) => {
        if (this.opened) {
          !this.swiping && this.swipeMove(0);
          this.opened = false;
          return;
        }
        if(!this.dragging) return
        evt = evt.changedTouches ? evt.changedTouches[0] : evt
        let [pageX, pageY] = [evt.pageX, evt.pageY]
        const offsetTop = pageY - this.start.y
        const offsetLeft = this.offsetLeft = pageX - this.start.x
        if ((offsetLeft < 0 && -offsetLeft > this.w) ||
                (offsetLeft < 0 && !this.w)) {
          return
        }
        const y = Math.abs(offsetTop)
        const x = Math.abs(offsetLeft)
        let swiping = !(x < 5 || (x >= 5 && y >= x * 1.73))
        if (!swiping) return
        this.swipeMove(offsetLeft)
      })
      this.$parent.$el.addEventListener("touchend", (evt) => {
        if (!this.swiping) return
        this.swipeLeaveTransition(this.offsetLeft > 0 ? -1 : 1)
      })
      this.$parent.$el.addEventListener("click", (evt) => {
        this.swipeMove()
      })
    }
  }
</script>

<style scoped lang="stylus">
  .egd-swipe
    float right
    position absolute
    top 0
    right 0
</style>