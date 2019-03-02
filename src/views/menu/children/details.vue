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
  import { Divider, XNumber, Group, Cell } from 'vux'
  import {getMenu} from '@/api/menu'
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
      categoryMsg: String
    },
    watch: {
      'categoryMsg': function () {
        getMenu({categoryMsg: this.categoryMsg}).then((response) => {
          console.log(response.data)
        }).catch((error) => {
          console.log(error)
          // TODO:"模拟数据"
          this.menuList = [{
            id: 1,
            name: '麻婆豆腐',
            price: 12
          }, {
            id: 2,
            name: '酸辣土豆丝',
            price: 6
          }, {
            id: 3,
            name: '回锅肉',
            price: 24
          }, {
            id: 4,
            name: '水煮肉',
            price: 12
          }]
        })
      }
    },
    data () {
      return {
        menuList: [{
          id: 1,
          name: '麻婆豆腐',
          price: 12
        }]
      }
    }
  }
</script>

<style>
</style>