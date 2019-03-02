<template>
  <div>
    <search @result-click="resultClick" @on-change="getResult" :results="results" position="absolute"
      auto-scroll-to-top top="46px" @on-focus="onFocus" @on-cancel="onCancel" ref="search"></search>
  </div>
</template>

<script>
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
      XButton
    },
    methods: {
      setFocus () {
        this.$refs.search.setFocus()
      },
      resultClick (item) {
        window.alert('you click the result item: ' + JSON.stringify(item))
      },
      getResult (val) {
        console.log('on-change', val)
        this.results = val ? getResult(this.value) : []
      },
      onFocus () {
        console.log('on focus')
      },
      onCancel () {
        console.log('on cancel')
      }
    },
    data () {
      return {
        results: []
      }
    }
  }

  function getResult (val) {
    let rs = []
    for (let i = 0; i < 20; i++) {
      rs.push({
        title: `${val} result: ${i + 1} `,
        other: i
      })
    }
    return rs
  }
</script>