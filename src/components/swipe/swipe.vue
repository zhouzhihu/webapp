<template>
  <div :style="{background:'#58B7FF',height: height + 'px',width: width + 'px',float: 'right',position: 'absolute',top:'0px',right:'0px',transform:'translate3d(' + width + 'px' + ', 0px, 0px)',display:isShow}">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name : 'egd-swipe',
    componentName : 'egd-swipe',
    data(){
      return {
        height : 0,
        width : 0,
        isShow : 'none',
        start: { x: 0, y: 0 }
      }
    },
    methods : {
      translate3d(offset) {
        return `translate3d(${offset}px, 0, 0)`
      },
      swipeMove(offset = 0) {
        this.$el.style.webkitTransform = this.translate3d(this.width + offset)
        this.swiping = true
      },
      swipeLeaveTransition(direction) {
        setTimeout(() => {
          this.swipeLeave = true
          // left
          if (direction > 0 && -this.offsetLeft > this.width * 0.4) {
            this.swipeMove(-this.width)
            this.swiping = false
            this.opened = true
            return
          }
          this.swipeMove(0)
      }, 0)
      }
    },
    mounted(){
      this.height = this.$parent.$el.clientHeight
      this.width = this.$parent.$el.clientWidth/2
      this.$on("egd-swipe-startDrag", function (...params){
        this.isShow = "block"
        let [pageX, pageY] = params
        this.start.x = pageX
        this.start.y = pageY
        this.dragging = true
      })
      this.$on("egd-swipe-onDrag", function (...params){
        if(!this.dragging) return
        let [pageX, pageY] = params
        const offsetTop = pageY - this.start.y
        const offsetLeft = this.offsetLeft = pageX - this.start.x

        if ((offsetLeft < 0 && -offsetLeft > this.width) ||
                (offsetLeft < 0 && !this.width)) {
          return
        }

        const y = Math.abs(offsetTop)
        const x = Math.abs(offsetLeft)
        let swiping = !(x < 5 || (x >= 5 && y >= x * 1.73))
        if (!swiping) return
        this.swipeMove(offsetLeft)
      })
      this.$on("egd-swipe-endDrag", function(){
        if (!this.swiping) return
        this.swipeLeaveTransition(this.offsetLeft > 0 ? -1 : 1)
      })
    }
  }
</script>

<style scoped lang="css">

</style>