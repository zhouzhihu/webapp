<template>
  <a v-bind:href="href" v-bind:class="{ active: isActive }">
    <slot></slot>
  </a>
</template>

<script>
  export default {
    props: {
      href: String,
      required: true
    },
    computed: {
      isActive () {
        return this.href === window.location.pathname
      }
    }
  }
</script>

<style scoped>
  .active {
    color: red;
  }
</style>