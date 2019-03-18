<template>
  <div>
    <search @on-change="getResult" v-model="keyName" position="absolute" auto-scroll-to-top top="46px" ref="search"></search>
    <v-details :keyName="keyName"></v-details>
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
    methods: {
      getResult: function () {
        console.log(this.keyName)
      }
    },
    data () {
      return {
        keyName: ''
      }
    }
  }
</script>