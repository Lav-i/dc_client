<template>
  <div>
    <tab style="width:100%;position:fixed;left:0;top:0;z-index:100;margin-top:45px">
      <tab-item @on-item-click="categoryMsg='所有'" selected>所有</tab-item>
      <tab-item @on-item-click="categoryMsg='正餐'">正餐</tab-item>
      <tab-item @on-item-click="categoryMsg='小食'">小食</tab-item>
      <tab-item @on-item-click="categoryMsg='套餐'">套餐</tab-item>
    </tab>
    <v-details :categoryMsg="categoryMsg" style="margin-top:100px"></v-details>

  </div>
</template>

<script>
  import { Tab, TabItem } from 'vux'
  import details from '@/components/menu/details.vue'

  export default {
    components: {
      Tab,
      TabItem,
      'v-details': details
    },
    methods: {},
    created () {},
    data () {
      return {
        categoryMsg: '所有'
      }
    }
  }
</script>

<style>
</style>