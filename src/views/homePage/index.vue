<template>
  <section class="homePage">
    <nav class="homePage-nav">
      <router-link v-for="item in navOptions" :key="item.name" :to="item.path" active-class="activeClass">
        {{item.name}}
      </router-link>
    </nav>
    <router-view class="homePage-main"/>
  </section>
</template>

<script>
export default {
  name: 'homePage',
  data () {
    return {
      navOptions: [
        {
          name: 'HTML',
          path: '/homePage/htmlPage'
        },
        {
          name: 'CSS',
          path: '/homePage/cssPage'
        },
        {
          name: 'JavaScript',
          path: '/homePage/javaScriptPage'
        },
        {
          name: 'ECMAScript6',
          path: '/homePage/ECMAScriptPage'
        },
        {
          name: 'Vue',
          path: '/homePage/vuePage'
        },
        {
          name: 'React',
          path: '/homePage/reactPage'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
  .homePage {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    .homePage-nav {
      height: 50px;
      background-color: #2f567e;
      a {
        display: inline-block;
        font-size: 1rem;
        font-weight: 500;
        line-height: 50px;
        text-decoration: none;
        color: #ffffff;
        padding: 0 10px;
        &:hover {
          color: #e8110e;
        }
      }
      .activeClass {
        color: #e8110e;
      }
    }
    .homePage-main {
      height: 100%;
      box-sizing: border-box;
    }
  }
</style>
