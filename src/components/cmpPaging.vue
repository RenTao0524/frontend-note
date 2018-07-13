<template>
  <section class="cmpPaging">
      <!-- 分页 -->
    <select :value="pageSize">
      <option v-for="item in pageRange" :key="item" :value="item">
        {{item}}
      </option>
    </select>
  </section>
</template>

<script>
export default {
  name: 'cmpPaging',
  props: {
    currentPage: {
      type: Number,
      required: true
    },
    pageSize: {
      type: Number,
      required: true
    },
    pageRange: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
  .cmpPaging {
    height: 40px;
  }
</style>
