<template>
  <section class="cmpBody">
      <ul>
          <li v-for="i in 100" :key="i">
              {{i}}
          </li>
      </ul>
  </section>
</template>

<script>
export default {
  name: 'cmpBody'
}
</script>

<style lang="scss" scoped>
  .cmpBody {
    overflow-y: auto;
  }
</style>
