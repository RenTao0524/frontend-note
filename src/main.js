// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import 'normalize.css/normalize.css'
// import './styles/index.scss'

Vue.component('test-button', {
  props: ['value'],
  template: `<div>
    <h2>{{ value }}</h2>
    <button @click="$emit('changeValue', {name: 'zhangsan', age: 16})">test</button>
  </div>`
})

Vue.directive('focus', {
  inserted: function (el) {
    el.focus()
  }
})

Vue.mixin({
  created: function () {
    var myOption = this.$options.myOption
    if (myOption) {
      console.log(myOption)
    }
  }
})

// Vue.config.silent = true
// Vue.config.optionMergeStrategies.my_option = function (toValue, fromValue) {
//   console.log(toValue)
//   console.log(fromValue)
//   return toValue + 1
// }

// const Profile = Vue.extend({
//   _my_option: 1
// })

// Vue.config.devtools = true
Vue.config.keyCodes = {
  v: 12
}
Vue.config.productionTip = false

// console.log(router.currentRoute)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  myOption: 'hello!',
  router,
  store,
  components: { App },
  template: '<App/>'
})
