<template>
  <div>
    <tab>
      <tab-item selected>All</tab-item>
      <tab-item>Cold </tab-item>
      <tab-item>Hot</tab-item>
      <tab-item>Soup </tab-item>
    </tab>
    <group v-for='(menu, index) in menuList' :key='menu.id'>
      <cell :title='menu.name'>
        <img slot="icon" width="100" style="display:block;margin-right:5px;" src="http://fs1.shop123.com.tw/400178/upload/standard/4001781607source_picture_719982.jpg">
        <x-number :title='menu.price + "￥"' button-style="round" :min="0" v-model="menuList[index].count"
          @on-change="addMenu"></x-number>
      </cell>
    </group>
    <divider>我是有底线的</divider>

  </div>
</template>

<script>
  import {
    Tab,
    TabItem,
    Divider,
    XNumber,
    Group,
    Cell
  } from 'vux'
  import store from '@/store'

  export default {
    components: {
      Group,
      XNumber,
      Tab,
      TabItem,
      Divider,
      Cell
    },
    store,
    methods: {
      init () {
        var state = parseInt(window.sessionStorage.getItem('state'))
        if (state === 1) {
          return JSON.parse(window.sessionStorage.getItem('orderList'))
        } else {
          this.axios.get('/api/menu', {withCredentials: true})
                    .then(function (response) {
                      console.log(response.data.data)
                    })
                    .catch(function (error) {
                      console.log(error)
                    })
          return [{
            id: 1,
            name: '麻婆豆腐',
            price: 12,
            count: 0
          }, {
            id: 2,
            name: '酸辣土豆丝',
            price: 6,
            count: 0
          }, {
            id: 3,
            name: '回锅肉',
            price: 24,
            count: 0
          }, {
            id: 4,
            name: '水煮肉',
            price: 12,
            count: 0
          }]
        }
      },
      addMenu (id) {
        sessionStorage.setItem('orderList', JSON.stringify(this.menuList))
      }
    },
    data () {
      return {
        menuList: this.init()
      }
    }
  }
</script>

<style>
</style>