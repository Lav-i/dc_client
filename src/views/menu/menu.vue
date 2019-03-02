<template>
  <div>
    <tab>
      <tab-item @on-item-click="categoryMsg='all'" selected>All</tab-item>
      <tab-item @on-item-click="categoryMsg='cold'">Cold </tab-item>
      <tab-item @on-item-click="categoryMsg='hot'">Hot</tab-item>
      <tab-item @on-item-click="categoryMsg='soup'">Soup </tab-item>
    </tab>
    <v-details :categoryMsg="categoryMsg"></v-details>

  </div>
</template>

<script>
  import { Tab, TabItem } from 'vux'
  import details from './children/details.vue'

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