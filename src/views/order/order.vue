<template>
  <div>
    <div>
      <group>
        <cell :title='"Total"' :value='"￥"+list.sum'></cell>
        <cell-form-preview :list="cartList"> </cell-form-preview>
      </group>
      <toast v-model="isToast" type="text" :time="1600" is-show-mask text="Empty~"></toast>
      <x-button type="primary" @click.native="addOrder">I AM HUNGER!</x-button>
    </div>
    <!-- <msg :title="'操作成功'" :description="'请稍等片刻'">
      <template slot="buttons">
        <router-link to='/'>
          <x-button plain type="primary">好的</x-button>
        </router-link>
      </template>
    </msg> -->
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
    created: function () {
      this.cartList = this.$store.getters.cartList
      if (this.cartList != null) {
        for (const key in this.cartList) {
          this.cartList[key].label = this.cartList[key].name + '*' + this.cartList[key].count
          this.cartList[key].value = this.cartList[key].count * this.cartList[key].price
        }
      }
    },
    data () {
      return {
        list: []
      }
    }
  }
</script>