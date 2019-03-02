const state = {
  cartList: {}
}

const getters = {
  cartList: state => state.cartList
}

const actions = {
  addCart ({commit}, food) {
    commit('addCart', food)
  },
  deleteFood ({commit}, food) {
    commit('deleteFood', food)
  }
}

// mutations
const mutations = {
  addCart (state, food) {
    let cart = state.cartList
    cart[food.id] = {...food}

    // 触发更新
    state.cartList = cart
    localStorage.setItem('cartList', JSON.stringify(state.cartList))
  },
  deleteFood (state, food) {
    let cart = state.cartList
    delete (cart[food.id])

    state.cartList = cart
    localStorage.setItem('cartList', JSON.stringify(state.cartList))
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
