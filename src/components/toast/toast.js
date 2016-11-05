import Vue from 'vue'

const ToastConstructor = Vue.extend(require('./toast.vue'))
let toastPool = []

/**
 * 取得一个toast实例
 * @returns toast实例
 */
let sliceInstance = () => {
  if(toastPool.length > 0){
    let instance = toastPool[0]
    toastPool.slice(0, 1);
    return instance
  }
  return new ToastConstructor({
    el : document.createElement("div")
  })
}

/**
 * 添加一个toast实例
 * @param instance toast实例
 */
let pushInstance = instance => {
  if(instance) toastPool.push(instance)
}
/**
 * 移除toast的DOM
 */
let removeDom = () => {
  if(event.target.parentNode) event.target.parentNode.removeChild(event.target)
}

/**
 * 关闭toast
 */
ToastConstructor.prototype.close = function(){
  this.visible = false
  this.$el.addEventListener('transitionend', removeDom)
  this.closed = true
  pushInstance(this);
}

let Toast = ({
    message = '',
    position = 'middle',
    className = '',
    iconClass = '',
    duration = 3000}) =>{
    let instance = sliceInstance();
    instance.closed = false
    clearTimeout(instance.timer)
    instance.message = message;
    instance.position = position
    instance.className = className
    instance.iconClass = iconClass
    document.body.appendChild(instance.$el)
    Vue.nextTick(function(){
      instance.visible = true
      instance.$el.removeEventListener("transitionend", removeDom)
      instance.timer = setTimeout(function(){
        if(instance.closed) return
        instance.close();
      }, duration)
    })
  return instance
}

export default Toast