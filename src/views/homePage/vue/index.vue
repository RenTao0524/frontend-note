<template>
  <section class="vue-view">
    <side-bar :options="options" :show="show"/>
    <section class="vue-main">
      <header>
        <button @click="handleColse">colse</button>
        当前所在位置：
      </header>
      <router-view class="vue-container"/>
    </section>
  </section>
</template>

<script>
import SideBar from '@/components/SideBar'
export default {
  name: 'vuePage',
  components: {
    SideBar
  },
  data () {
    return {
      show: true,
      options: [
        {
          name: 'vue',
          path: '/homePage/vuePage/vueLearningPage'
        },
        {
          name: 'vue-router',
          path: '/homePage/vuePage/vueRouterPage'
        },
        {
          name: 'vuex',
          path: '/homePage/vuePage/vuexPage'
        }
      ]
    }
  },
  methods: {
    handleColse () {
      this.show = !this.show
    }
  }
}
</script>

<style lang="scss" scoped>
  .vue-view {
    position: relative;
    display: flex;
    .vue-main {
      height: 100%;
      width: 100%;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      background-color: #ffffff;
      & > header {
        padding: 0 10px;
        box-sizing: border-box;
        background-color: #e2e8e8;
        height: 30px;
        font-size: 0.875rem;
        line-height: 30px;
      }
      .vue-container {
        height: 100%;
        width: 100%;
        box-sizing: border-box;
        overflow-y: auto;
      }
    }
  }
</style>
