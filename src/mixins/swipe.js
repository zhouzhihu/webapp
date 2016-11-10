export default {
  methods: {
    startDrag(evt) {
      evt = evt.changedTouches ? evt.changedTouches[0] : evt
      this.broadcast("egd-swipe", "egd-swipe-startDrag", evt.pageX, evt.pageY)
    },
    onDrag(evt){
      evt = evt.changedTouches ? evt.changedTouches[0] : evt
      this.broadcast("egd-swipe", "egd-swipe-onDrag", evt.pageX, evt.pageY)
    },
    endDrag(){
      this.broadcast("egd-swipe", "egd-swipe-endDrag")
    }
  }
};
