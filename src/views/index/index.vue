<template>
  <div id="app">
    <v-welcome></v-welcome>
    <v-hotCakes></v-hotCakes>
  </div>
</template>

<script>
  import welcome from './welcome.vue'
  import hotCakes from './hotcakes.vue'
  import { getUrlKey } from '@/assets/scripts/utils.js'

  export default {
    components: {
      'v-welcome': welcome,
      'v-hotCakes': hotCakes
    },
    created () {
      if (this.$store.getters.tableId === '0000') {
        this.$store.dispatch('setTableId', getUrlKey('table'))
      }
    }
  }
</script>

<style lang="less">
  @import '~vux/src/styles/reset.less';
</style>