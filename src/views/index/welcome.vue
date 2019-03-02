<template>
  <div>
    <swiper :list='imgsList' auto></swiper>
    <br>
    <marquee>
      <marquee-item v-for="i in welcomeList" :key="i" style="text-align: center">{{i}}</marquee-item>
    </marquee>
  </div>
</template>

<script>
  import {
    Swiper,
    SwiperItem,
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

  const welcomeList = [
    '欢迎',
    'welcome',
    'benvenuto',
    'herzlich willkommen'
  ]

  export default {
    components: {
      Swiper,
      SwiperItem,
      Marquee,
      MarqueeItem
    },
    data () {
      return {
        imgsList: imgsList,
        welcomeList: welcomeList
      }
    }
  }
</script>

<style>
</style>