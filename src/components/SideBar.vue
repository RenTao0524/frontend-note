<template>
  <aside class="cmp-sidebar" v-if="show">
    <ul>
      <router-link v-for="item in options" :key="item.name" :class="{ activeClass: sidebarKey=== item.key }"
        :to="{ path: $route.path, query: { sidebarKey: item.key }}" tag='li'>
        <a>{{item.name}}</a>
      </router-link>
    </ul>
  </aside>
</template>

<script>
export default {
  name: 'sidebar',
  props: {
    options: {
      type: Array,
      require: true
    },
    show: {
      type: Boolean
    }
  },
  computed: {
    sidebarKey: function () {
      return this.$route.query.sidebarKey
    }
  }
}
</script>

<style lang="scss" scoped>
  .cmp-sidebar {
    width: 150px;
    height: 100%;
    box-sizing: border-box;
    display: inline-block;
    background-color: #F5F5F5;
    ul {
      width: 150px;
      margin: 0;
      padding: 0;
      li {
        a {
          display: inline-block;
          font-size: 0.875rem;
          line-height: 1.5;
          text-decoration: none;
          width: 100%;
          padding: 0 10px;
          box-sizing: border-box;
          color: #000000;
        }
      }
      .activeClass {
        a {
          color: #ffffff;
        }
      }
    }
  }
</style>
