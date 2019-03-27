<template>
  <div>
    <search v-model="keyName" auto-scroll-to-top top="46px" ref="search" style="width:100%;position:fixed;left:0;top:0;z-index:100;margin-top:45px"></search>
    <v-details :keyName="keyName" style="margin-top:100px"></v-details>
  </div>
</template>

<script>
  import details from '@/components/menu/details.vue'

  import {
    Search,
    Group,
    Cell,
    XButton
  } from 'vux'

  export default {
    components: {
      Search,
      Group,
      Cell,
      XButton,
      'v-details': details
    },
    data () {
      return {
        keyName: ''
      }
    }
  }
</script>