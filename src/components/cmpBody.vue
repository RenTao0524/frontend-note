<template>
  <section class="cmpBody" v-on:scroll.passive="onScroll">
    <input v-focus type="text">
    <cmp-slot>
      test slot
    </cmp-slot>
    <cmp-input ref="usernameInput" v-model="searchText"/>
    <ul>
      <li v-for="(value, key, index) in object" :key="key">{{ key + value + index}}</li>
    </ul>
    <ul>
      <li v-for="i in 100" :key="i">
        {{i}}
      </li>
    </ul>
    <span :title="'title' + id">{{rawHtml}}</span>
    <span>{{ new Date() }}</span>
    <span v-html="rawHtml"></span>
    <form>
      <input v-model.lazy="value" @input="inputChange" type="text">
      <span v-show="true" :class="classObject">{{ computedValue }}</span>
      <button type="submit" @click.prevent="handleSubmit('message', $event)">submit</button>
    </form>
    <test-button :value="value1" @changeValue="handleChange"/>
  </section>
</template>

<script>
import cmpInput from '@/components/cmpInput'
import CmpSlot from '@/components/CmpSlot'
// import Vue from 'vue'
// var Profile = Vue.extend({
//   template: '<p>{{firstName}} {{lastName}} aka {{alias}}</p>',
//   data: function () {
//     return {
//       firstName: 'Walter',
//       lastName: 'White',
//       alias: 'Heisenberg'
//     }
//   }
// })
export default {
  name: 'cmpBody',
  components: {
    cmpInput,
    CmpSlot
  },
  data () {
    return {
      searchText: '',
      object: {
        firstName: 'John',
        lastName: 'Doe',
        age: 30
      },
      classObject: {
        active: false,
        active2: false
      },
      // active: false,
      // active2: false,
      value: '111',
      value1: '22',
      id: 'testbody',
      rawHtml: '<span style="color: red">v-html</span>'
    }
  },
  computed: {
    computedValue: {
      get: function () {
        return this.value.split('').reverse().join('')
      },
      set: function (value) {
        this.value = value
      }
    }
  },
  watch: {
    value: function (value) {
      console.log(value)
    }
  },
  created () {
    // this.set('setvalue', 'setvalue')
    console.log(this.$root)
    console.log(this.$parent)
    // const data = {
    //   a: 1,
    //   b: 2
    // }
    // console.log(data)
    // Object.keys(data).forEach(key => console.log(key))
    // (function hello () {
    //   // console.log('hello')
    // })()
  },
  mounted () {
    // 创建 Profile 实例，并挂载到一个元素上。
    // new Profile().$mount('.cmpBody')
    console.log(this.$refs.usernameInput)
    // this.$refs.usernameInput.focus()
  },
  methods: {
    handleChange (userinfo) {
      // alert('ss')
      console.log(userinfo)
      this.value1 = 2222
    },
    handleSubmit (msg, event) {
      console.log(msg)
      console.log(event)
      console.log('submit')
    },
    onScroll () {
      console.log('onScroll')
      // this.value = 'aaa'
      // this.$nextTick().then(res => {
      //   console.log('update')
      // })
    },
    inputChange () {

    }
  }
}
</script>

<style lang="scss" scoped>
  .cmpBody {
    overflow-y: auto;
    .active {
      color: red;
    }
    .active2 {
      text-decoration: underline;
    }
  }
</style>
