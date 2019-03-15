<template>
  <div>
    <div v-if="this.$store.getters.orderState">
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
          <x-button plain type="primary">好的</x-button>
        </router-link>
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
      hunger: function () {
        this.isEmptyToast = !(this.cartTotalPrice > 0)
        if (this.cartTotalPrice > 0) {
          this.$store.dispatch('finishOrder')
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
        isEmptyToast: false
      }
    }
  }
</script>