<template>
  <div>
    <panel :header='"Hot Cakes:"' :list='menuList' :type='"1"'></panel>
  </div>
</template>

<script>
  import { Panel } from 'vux'
  import {getHotCakes} from '@/api/menu'

  export default {
    components: {
      Panel
    },
    data () {
      return {
        menuList: []
      }
    },
    created () {
      getHotCakes().then((response) => {
        // TODO:
        console.log(response)
      }).catch((error) => {
        console.log(error)
        this.menuList = [{
          src: 'http://fs1.shop123.com.tw/400178/upload/standard/4001781607source_picture_719982.jpg',
          title: '冠军',
          desc: '销售量冠军，月销售量200',
          url: '/'
        }, {
          src: 'http://fs1.shop123.com.tw/400178/upload/standard/4001781607source_picture_719982.jpg',
          title: '亚军',
          desc: '销售量亚军，月销售量100',
          url: '/'
        }, {
          src: 'http://fs1.shop123.com.tw/400178/upload/standard/4001781607source_picture_719982.jpg',
          title: '季军',
          desc: '销售量季军，月销售量50',
          url: '/'
        }]
      })
    }
  }
</script>

<style>
</style>


