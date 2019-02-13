import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0,
    retult: [],
    isOrder: false,
    isFinish: false
  },
  mutations: {
    increment (state) {
      state.count ++
    },
    addMenu (state, paload) {
      state.retule.push(paload)
    },
    finish (state) {
      state.isFinish = true
    },
    order (state) {
      state.order = true
    }
  }
})
