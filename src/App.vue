<template>
  <div id="app">
    <transition name="fade">
      <router-view/>
      <router-view name="sidebar"/>
      <router-view name=""/>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
  @import './styles/index.scss';
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
</style>
