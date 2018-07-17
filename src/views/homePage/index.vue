<template>
  <section class="homePage">
    <nav class="homePage-nav">
      <router-link v-for="item in navOptions" :key="item" :class="{ activeClass: item === pageIndex}"
        :to="{ name: 'homePage', params: { pageIndex: item }}">
        {{item}}
      </router-link>
      <span>{{date}}</span>
    </nav>
    <section class="homePage-main">
      <side-bar :options="sideBarOptions[pageIndex]" :show="show"/>
      <section class="homePage-main-view">
        <header>
          <button @click="show = !show">close</button>
          <span title="ssss">当前所在位置：</span>
        </header>
        <section class="homePage-main-view-body">
          <cmp-body/>
          <cmp-paging :currentPage="currentPage" :pageSize="pageSize" :pageRange="[10, 20, 30, 40, 50]"/>
        </section>
      </section>
    </section>
  </section>
</template>

<script>
import SideBar from '@/components/SideBar'
import cmpBody from '@/components/cmpBody'
import cmpPaging from '@/components/cmpPaging'
// import { getDate } from '@/utils/getDate'
import { sideBarOptions } from '@/utils/sideBarOptions'
import { mapState, mapGetters } from 'vuex'
export default {
  name: 'homePage',
  mixins: [{
    data () {
      return {
        my_option: 1
      }
    }
  }],
  components: {
    SideBar,
    cmpBody,
    cmpPaging
  },
  // props: ['pageIndex'],
  props: {
    pageIndex: {
      type: String,
      required: true
    },
    sidebarKey: {
      type: String
      // required: true
    }
  },
  data () {
    return {
      // my_option: 1,
      navOptions: ['HTML', 'CSS', 'JavaScript', 'ECMAScript6', 'Vue', 'React'],
      date: undefined,
      sideBarOptions: sideBarOptions,
      show: true,
      // 分页相关
      currentPage: 1,
      pageSize: 10
    }
  },
  computed: {
    // pageIndex: function () {
    //   return this.$route.params.pageIndex
    // },
    // userInfo: function () {
    //   return this.$store.state.userInfo
    // },
    ...mapState([
      'userInfo'
    ]),
    ...mapGetters([
      'name',
      'getNumber'
    ])
  },
  // watch: {
  //   '$route' (to, from) {
  //     console.log(to)
  //     console.log(from)
  //   }
  // },
  beforeEach (to, from, next) {
    console.log('beforeEach')
    next()
  },
  beforeRouterEnter (to, from, next) {
    next(vm => {
      console.log('beforeRouterEnter')
    })
  },
  beforeRouteUpdate (to, from, next) {
    console.log(to)
    // console.log(from)
    console.log('beforeRouteUpdate')
    next()
  },
  beforeCreate () {
    console.log(this)
    console.log('beforeCreate')
  },
  created () {
    const _this = this
    setInterval(function () {
      _this.date = new Date().toLocaleString()
    }, 1000)
    this.$store.commit('SET_USERINFO', {
      name: 'test',
      role: 'admin'
    })
    this.$store.dispatch('set_userInfo', {
      name: 'test',
      role: 'test'
    }).then(res => {
      // console.log(res)
    })
    this.$store.dispatch('setNumber')
    // console.log(window.history)
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
      display: flex;
      box-sizing: border-box;
      .homePage-main-view {
        height: 100%;
        width: 100%;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        & > header {
          height: 40px;
          font-size: 0.875rem;
          line-height: 40px;
          border-bottom: 1px solid #dddddd;
          box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
        }
        .homePage-main-view-body {
          height: 100%;
          width: 100%;
          display: flex;
          flex-direction: column;
        }
      }
    }
  }
</style>
