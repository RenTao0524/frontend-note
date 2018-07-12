<template>
  <section class="html-container">
    <side-bar :options="options" :show="show"/>
    <section>
      <header>
        <button @click="handleClose">close</button>
        <span>当前所在位置：</span>
      </header>
      <router-view/>
    </section>
  </section>
</template>

<script>
import SideBar from '@/components/SideBar'
export default {
  name: 'htmlPage',
  components: {
    SideBar
  },
  data () {
    return {
      options: [
        {
          name: 'HTML 标签列表',
          path: '/homePage/htmlPage/htmlLabelPage'
        },
        {
          name: 'HTML 全局属性',
          path: '/homePage/htmlPage/htmlPropertyPage'
        }
      ],
      show: true
    }
  },
  methods: {
    handleClose () {
      this.show = !this.show
    }
  }
}
</script>

<style lang="scss" scoped>
  .html-container {
    display: flex;
  }
</style>
