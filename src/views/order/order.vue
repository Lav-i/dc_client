<template>
  <div>
    <div v-if="this.$store.getters.orderState">
      <group>
        <cell :title='"Total"' :value='"￥"+cartTotalPrice'></cell>
        <cell-form-preview :list="list"> </cell-form-preview>
      </group>
      <toast v-model="isEmptyToast" type="text" :time="1600" is-show-mask text="Empty~"></toast>
      <x-button type="primary" @click.native="hunger">I AM HUNGER !!!</x-button>
    </div>
    <msg v-else  :title="'操作成功'" :description="'请稍等片刻'">
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
    Msg
  } from 'vux'

  export default {
    components: {
      CellFormPreview,
      Group,
      Cell,
      Toast,
      XButton,
      Msg
    },
    methods: {
      hunger: function () {
        this.isEmptyToast = !(this.cartTotalPrice > 0)
        if (this.cartTotalPrice > 0) {
          this.$store.dispatch('finishOrder')
        }
      }
    },
    data () {
      return {
        list: this.$store.getters.cartList,
        cartTotalPrice: this.$store.getters.cartTotalPrice,
        isEmptyToast: false
      }
    }
  }
</script>