<template>
  <section>
    <input v-bind:value="value" ref="input"
      v-on:input="$emit('input', $event.target.value)" type="text" >
    <!-- <slot/> -->
  </section>
</template>

<script>
export default {
  name: 'cmpInput',
  props: {
    value: {
      type: String
    }
  },
  created () {
    // this.$refs.input.focus()
  },
  mounted () {
  },
  methods: {
    focus () {
      this.$refs.input.focus()
    }
  }
}
</script>
