<template>
  <div>
    <panel :header='"月度最受欢迎榜单:"' :list='menuList' :type='"1"'></panel>
  </div>
</template>

<script>
  import {
    Panel
  } from 'vux'
  import {
    getHotCakes
  } from '@/api/menu'

  export default {
    components: {
      Panel
    },
    data () {
      return {
        tab: ['冠军', '亚军', '季军'],
        menuList: []
      }
    },
    created () {
      getHotCakes().then((response) => {
        if (response.data.code === 0) {
          let menu = []
          for (let i in response.data.data) {
            menu.push({
              src: './static/img/' + parseInt(Math.random() * 5) + '.jpg',
              title: this.tab[i] + '：' + response.data.data[i].name,
              desc: '榜单销售' + this.tab[i] + '，累计月销售高达' + response.data.data[i].num + '件',
              url: '/'
            })
          }
          this.menuList = menu
        }
      })
    }
  }
</script>

<style>
</style>