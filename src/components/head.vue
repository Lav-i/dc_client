<template>
  <div>
    <x-header title='DC_Client'></x-header>
    <!-- <x-header>
      <span>DC_Client</span>
      <x-icon slot="overwrite-left" type="navicon" size="35" style="fill:#fff;position:relative;top:-8px;left:-3px;"></x-icon>
    </x-header> -->
  </div>
</template>

<script>
  import Vue from 'vue'
  import { XHeader } from 'vux'

  Vue.component('x-header', XHeader)

  export default {
  }
</script>

<style lang="less">
  @import '~vux/src/styles/reset.less';
</style>