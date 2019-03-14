<template>
  <div>
    <x-number :title='details.price + "￥"' button-style="round" :min="0" v-model="count" @on-change="change"></x-number>
  </div>
</template>

<script>
  import { XNumber } from 'vux'

  export default {
    components: {
      XNumber
    },
    props: {
      details: Object
    },
    methods: {
      change: function () {
        this.details.count = this.count
        if (this.count >= 1) {
          this.$store.dispatch('addCart', this.details)
        } else {
          this.$store.dispatch('deleteFood', this.details)
        }
      }
    },
    data () {
      return {
        count: this.details.count
      }
    }
  }
</script>

<style>
</style>