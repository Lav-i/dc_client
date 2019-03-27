<template>
  <div>
    <tab style="width:100%;position:fixed;left:0;top:0;z-index:100;margin-top:45px">
      <tab-item @on-item-click="categoryMsg='all'" selected>All</tab-item>
      <tab-item @on-item-click="categoryMsg='cold'">Cold </tab-item>
      <tab-item @on-item-click="categoryMsg='hot'">Hot</tab-item>
      <tab-item @on-item-click="categoryMsg='soup'">Soup </tab-item>
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
        categoryMsg: 'all'
      }
    }
  }
</script>

<style>
</style>