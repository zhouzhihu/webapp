<template>
    <p>{{about}}</p>
</template>

<script>
  export default {
    data(){
      return {about : 'about'}
    },
    created : function(){
      this.about = "created"
    },
    beforeMount(){
      this.$Progress.start()
    },
    mounted(){
      this.$Progress.finish()
    }
  }
</script>