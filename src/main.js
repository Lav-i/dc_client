// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import VueRouter from 'vue-router'
import App from './App'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Vuex from 'vuex'
import store from './store'
import index from './components/page/index'
import menu from './components/page/menu/menu'
import search from './components/page/search/search'
import order from './components/page/order/order'

Vue.use(VueRouter)
Vue.use(VueAxios, axios)
Vue.use(Vuex)

const routes = [{
  path: '/',
  component: index
}, {
  path: '/menu',
  component: menu
}, {
  path: '/search',
  component: search
}, {
  path: '/order',
  component: order
}]

const router = new VueRouter({
  routes
})

FastClick.attach(document.body)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount('#app-box')
