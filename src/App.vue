<template>
  <view-box ref="viewBox">
    <x-header title='智能点餐系统' slot="header" style="width:100%;position:fixed;left:0;top:0;z-index:100;"></x-header>

    <router-view></router-view>

    <tabbar slot="bottom">
      <tabbar-item link="/" selected>
        <span slot="label">主页</span>
      </tabbar-item>
      <tabbar-item link="/menu">
        <span slot="label">菜单</span>
      </tabbar-item>
      <tabbar-item link="/search">
        <span slot="label">搜索</span>
      </tabbar-item>
      <tabbar-item link="/order">
        <span slot="label">订单</span>
      </tabbar-item>
    </tabbar>
  </view-box>
</template>

<script>
  import {
    ViewBox,
    XHeader,
    Tabbar,
    TabbarItem
  } from 'vux'

  export default {
    components: {
      ViewBox,
      XHeader,
      Tabbar,
      TabbarItem
    }
  }
</script>

<style lang="less">
  @import '~vux/src/styles/reset.less';

  html,
  body {
    height: 100%;
    width: 100%;
    overflow-x: hidden;
  }
</style>