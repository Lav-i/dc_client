<template>
  <div style="margin-top:45px">
    <div v-if="this.$store.getters.orderState===-1">
      <group>
        <x-table :cell-bordered="false" style="background-color:#fff;">
          <thead>
            <tr>
              <th style="width:33%;">品名</th>
              <th style="width:33%;">数量</th>
              <th style="width:33%;">价格</th>
            </tr>
          </thead>
        </x-table>
        <div v-for='(item) in this.list' :key='item.id'>
          <item :details="item"></item>
        </div>
        <cell :title='"合计"' :value='"￥"+cartTotalPrice'></cell>
      </group>
      <toast v-model="isEmptyToast" type="text" :time="1600" is-show-mask text="Empty~"></toast>
      <x-button type="primary" @click.native="hunger">I AM HUNGER !!!</x-button>
    </div>
    <msg v-else :title="'操作成功'" :description="'请稍等片刻'">
      <template slot="buttons">
        <router-link to='/'>
          <div>共计消费{{price}}元</div>
          <br>
          <x-button plain type="primary">好的</x-button>
        </router-link>
        <br>
        <toast v-model="isCall" type="text" :time="1600" is-show-mask text="已呼叫请稍等"></toast>
        <x-button plain type="primary" @click.native="call" :disabled="isCall">呼叫服务员</x-button>
      </template>
    </msg>
  </div>
</template>


<script>
  import {
    Group,
    Cell,
    Toast,
    XButton,
    Msg,
    XTable
  } from 'vux'
  import item from './children/item.vue'
  import {
    finishOrder,
    callWaiter
  } from '@/api/order'

  export default {
    components: {
      Group,
      Cell,
      Toast,
      XButton,
      Msg,
      XTable,
      'item': item
    },
    methods: {
      call () {
        callWaiter({
          'id': this.$store.getters.orderState
        }).then((response) => {
          if (response.data.code === 0) {
            console.log(response.data)
            this.isCall = true
          }
        })
      },
      hunger: function () {
        console.log(this.$store.getters.tableId)
        this.isEmptyToast = !(this.cartTotalPrice > 0)
        if (this.cartTotalPrice > 0) {
          let data = []
          for (let i in this.list) {
            data.push({
              name: this.list[i].name,
              price: this.list[i].price,
              menuId: this.list[i].id,
              count: this.list[i].count
            })
          }
          finishOrder({
            'tableId': this.$store.getters.tableId,
            'state': '已点餐',
            'data': data
          }).then((response) => {
            if (response.data.code === 0) {
              this.price = response.data.data.price
              this.$store.dispatch('finishOrder', response.data.data.id)
            }
          })
        }
      }
    },
    computed: {
      'list': function () {
        return this.$store.getters.cartList
      },
      'cartTotalPrice': function () {
        return this.$store.getters.cartTotalPrice
      }
    },
    data () {
      return {
        isEmptyToast: false,
        price: 0,
        isCall: false
      }
    }
  }
</script>