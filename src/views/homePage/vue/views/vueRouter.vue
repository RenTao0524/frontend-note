<template>
  <section class="vueRouter-container">
    <ul>
       <li v-for="(item, index) in notes" :key="index">
        <span>{{index + 1}}</span>
        <span>{{item.title}}</span>
        <span>{{item.date}}</span>
       </li>
    </ul>
    <div>
      <select :value="value">
        <option value="1">1</option>
        <option value="2">2</option>
      </select>
    </div>
  </section>
</template>

<script>
import { vueRouterNotes } from '@/utils/vueRouterNotes'
export default {
  name: 'vueRouter',
  data () {
    return {
      notes: vueRouterNotes,
      value: 1
    }
  }
}
</script>

<style lang="scss" scoped>
  .vueRouter-container {
    ul {
      margin: 0;
      padding: 0;
    }
  }
</style>
