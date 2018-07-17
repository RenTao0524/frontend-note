import Vue from 'vue'
import Vuex from 'vuex'
import { moduleA } from './modules/moduleA'
// import router from '@/router'
Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    moduleA
  },
  state: {
    userInfo: {
      name: '',
      role: ''
    }
  },
  getters: {
    name: (state) => {
      return state.userInfo.name
    }
  },
  mutations: {
    SET_USERINFO: (state, userInfo) => {
      state.userInfo = userInfo
    }
  },
  actions: {
    set_userInfo ({ commit }, payLoad) {
      return new Promise((resolve, reject) => {
        // console.log(router)
        // router.push({ path: '/homePage/CSS' })
        if (payLoad.name === 'test') {
          commit('SET_USERINFO', {
            name: 'zhangsan',
            role: 'admin'
          })
          resolve('success')
        } else {
          reject(new Error('error'))
        }
      })
    }
  }
})

export default store
