<template>
  <div>
    <div v-if="!getState">
      <group>
        <cell :title='"Total"' :value='"￥"+list.sum'></cell>
        <cell-form-preview :list="list" v-if="show"> </cell-form-preview>
      </group>
      <toast v-model="isToast" type="text" :time="1600" is-show-mask text="Empty~"></toast>
      <x-button type="primary" @click.native="addOrder">I AM HUNGER!</x-button>
    </div>
    <msg :title="'操作成功'" :description="'请稍等片刻'" v-else>
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
    CellFormPreview,
    Group,
    Cell,
    Toast,
    XButton,
    dateFormat,
    Msg
  } from 'vux'
  import store from '@/store'

  export default {
    components: {
      CellFormPreview,
      Group,
      Cell,
      Toast,
      XButton,
      Msg
    },
    store,
    created: function () {
      var date = dateFormat(new Date(), 'YYYY-MM-DD')
      console.log(date)
    },
    methods: {
      init: function () {
        var menuList = JSON.parse(window.sessionStorage.getItem('orderList'))
        if (menuList !== null && menuList !== 'null') {
          var sum = 0
          menuList.forEach(element => {
            if (element.count === 0) {
              element = null
            } else {
              element.label = element.name
              element.value = element.price + '*' + element.count
              sum += element.price * element.count
            }
          })
          menuList.sum = sum
          if (sum !== 0) {
            window.sessionStorage.setItem('state', 1)
          }
        } else {
          menuList = []
          menuList.sum = 0
        }
        return menuList
      },
      isEmpty: function () {
        var state = parseInt(window.sessionStorage.getItem('state'))
        return state !== 1
      },
      addOrder: function () {
        var order = JSON.parse(window.sessionStorage.getItem('orderList'))
        var result = []
        console.log(order)
        for (var i = 0; i < order.length; i++) {
          if (order[i].count !== 0) {
            result.push(order[i])
          }
        }
        console.log(result)
        store.commit('finish')
      }
    },
    computed: {
      getState () {
        return store.state.isFinish
      },
      getOrder () {
        return store.state.isOrder
      }
    },
    data () {
      return {
        list: this.init(),
        show: !this.isEmpty(),
        isToast: this.isEmpty()
      }
    }
  }
</script>