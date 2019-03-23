<template>
  <div>
    <group v-for='(menu) in menuList' :key='menu.id'>
      <cell :title='menu.name'>
        <img slot="icon" width="100" style="display:block;margin-right:5px;" src="http://fs1.shop123.com.tw/400178/upload/standard/4001781607source_picture_719982.jpg">
        <selector :details="menu"></selector>
      </cell>
    </group>
    <divider>我是有底线的</divider>

  </div>
</template>

<script>
  import {
    Divider,
    XNumber,
    Group,
    Cell
  } from 'vux'
  import {
    getMenu,
    getMenuByNameLike
  } from '@/api/menu'
  import selector from './children/selector.vue'

  export default {
    components: {
      XNumber,
      Group,
      Divider,
      Cell,
      'selector': selector
    },
    props: {
      categoryMsg: {
        default: 'all'
      },
      keyName: String
    },
    methods: {
      getHistoryMenu: (menuList) => {
        let cart = JSON.parse(localStorage.getItem('cartList'))
        for (let key in menuList) {
          menuList[key].count = cart && cart[menuList[key].id] ? cart[menuList[key].id].count : 0
        }
        return menuList
      }
    },
    watch: {
      'categoryMsg': function () {
        getMenu({
          category: this.categoryMsg
        }).then((response) => {
          if (response.data.code === 0) {
            this.menuList = this.getHistoryMenu(response.data.data)
          }
        })
      },
      'keyName': function () {
        getMenuByNameLike({
          name: this.keyName
        }).then((response) => {
          if (response.data.code === 0) {
            this.menuList = this.getHistoryMenu(response.data.data)
          }
        })
      }
    },
    created () {
      getMenu({
        category: this.categoryMsg
      }).then((response) => {
        if (response.data.code === 0) {
          this.menuList = this.getHistoryMenu(response.data.data)
        }
      })
    },
    data () {
      return {
        menuList: []
      }
    }
  }
</script>

<style>
</style>