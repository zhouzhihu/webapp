<template>
    <div class="bodyer">
        {{home}}
    </div>
</template>

<script>
  export default {
    data(){
        return {
            home : 'home'
        }
    },
    beforeMount(){
      this.$Progress.start()
    },
    mounted(){
      this.$Progress.finish()
    }
  }
</script>