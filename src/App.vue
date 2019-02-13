<template>
  <div id="app">
    <x-header title='DC_Client' :right-options="{showMore:true}"></x-header>
    <router-view></router-view>
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
    XHeader,
    Flexbox,
    FlexboxItem,
    Tabbar,
    TabbarItem,
    Icon
  } from 'vux'

  Vue.component('icon', Icon)
  Vue.component('tabbar', Tabbar)
  Vue.component('tabbar-item', TabbarItem)
  Vue.component('x-header', XHeader)
  Vue.component('flexbox', Flexbox)
  Vue.component('flexbox-item', FlexboxItem)
</script>

<style lang="less">
  @import '~vux/src/styles/reset.less';
</style>