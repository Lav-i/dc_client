<template>
  <swipeout>
    <swipeout-item transition-mode="follow">
      <div slot="right-menu">
        <swipeout-button @click.native="deleteFood()" type="warn">{{'Delete'}}</swipeout-button>
      </div>
      <x-table :cell-bordered="false" style="background-color:#fff;" slot="content" class="demo-content vux-1px-t">
        <tbody>
          <tr>
            <td style="width:33%;"> {{details.name}}</td>
            <td style="width:33%;">{{details.count}}</td>
            <td style="width:33%;"> {{details.price}}￥</td>
          </tr>
        </tbody>
      </x-table>
    </swipeout-item>
  </swipeout>
</template>


<script>
  import {
    XTable,
    Swipeout,
    SwipeoutItem,
    SwipeoutButton
  } from 'vux'

  export default {
    components: {
      XTable,
      Swipeout,
      SwipeoutItem,
      SwipeoutButton
    },
    props: {
      details: Object
    },
    methods: {
      deleteFood: function () {
        this.$store.dispatch('deleteFood', this.details)
      }
    }
  }
</script>