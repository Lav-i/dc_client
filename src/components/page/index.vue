<template>
  <div>
    <swiper :list='imgsList' auto></swiper>
    <br>
    <marquee>
      <marquee-item v-for="i in welcomeList" :key="i" style="text-align: center">{{i}}</marquee-item>
    </marquee>
    <panel :header='"Hot List:"' :list='menuList' :type='"1"'></panel>
    <divider>我是有底线的</divider>
  </div>
</template>

<script>
  import utils from '../../assets/scripts/utils'
  import {
    Swiper,
    GroupTitle,
    SwiperItem,
    XButton,
    Divider,
    Panel,
    Group,
    Radio,
    Marquee,
    MarqueeItem
  } from 'vux'

  const imgsList = [{
    url: 'javascript:',
    img: 'https://ww1.sinaimg.cn/large/663d3650gy1fq66vvsr72j20p00gogo2.jpg',
    title: '送你一朵fua'
  }, {
    url: 'javascript:',
    img: 'https://ww1.sinaimg.cn/large/663d3650gy1fq66vw1k2wj20p00goq7n.jpg',
    title: '送你一辆车'
  }, {
    url: 'javascript:',
    img: 'https://static.vux.li/demo/5.jpg', // 404
    title: '送你一次旅行',
    fallbackImg: 'https://ww1.sinaimg.cn/large/663d3650gy1fq66vw50iwj20ff0aaaci.jpg'
  }]

  export default {
    components: {
      Swiper,
      SwiperItem,
      GroupTitle,
      XButton,
      Divider,
      Panel,
      Group,
      Radio,
      Marquee,
      MarqueeItem
    },
    created: function () {
      window.sessionStorage.setItem('tableId', utils.getUrlKey('tableId'))
    },
    data () {
      return {
        imgsList: imgsList,
        menuList: [{
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
        }],
        welcomeList: [
          '欢迎',
          'welcome',
          'benvenuto',
          'herzlich willkommen'
        ]
      }
    }
  }
</script>

<style>
</style>