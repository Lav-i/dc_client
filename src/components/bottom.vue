<template>
  <div>
    <tabbar>
      <tabbar-item link="/" selected>
        <span slot="label">Home</span>
      </tabbar-item>
      <tabbar-item link="/menu">
        <span slot="label">Menu</span>
      </tabbar-item>
      <tabbar-item link="/search">
        <span slot="label">Search</span>
      </tabbar-item>
      <tabbar-item link="/order">
        <span slot="label">Order</span>
      </tabbar-item>
    </tabbar>
  </div>
</template>

<script>
  import Vue from 'vue'
  import {
    Tabbar,
    TabbarItem
  } from 'vux'

  Vue.component('tabbar', Tabbar)
  Vue.component('tabbar-item', TabbarItem)

  export default {
  }
</script>

<style lang="less">
  @import '~vux/src/styles/reset.less';
</style>