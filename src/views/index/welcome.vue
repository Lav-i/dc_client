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
    title: '欢迎使用智能点餐系统'
  }, {
    url: 'javascript:',
    img: 'https://ww1.sinaimg.cn/large/663d3650gy1fq66vw1k2wj20p00goq7n.jpg',
    title: '欢迎使用智能点餐系统'
  }, {
    url: 'javascript:',
    img: 'https://ww1.sinaimg.cn/large/663d3650gy1fq66vw50iwj20ff0aaaci.jpg',
    title: '欢迎使用智能点餐系统'
  }]

  const welcomeList = [
    '欢迎使用本系统',
    '欢迎使用智能点餐系统'
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