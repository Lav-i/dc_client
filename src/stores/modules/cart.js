const state = {
  cartList: JSON.parse(localStorage.getItem('cartList')) ? JSON.parse(localStorage.getItem('cartList')) : {},
  orderState: -1
}

const getters = {
  cartList: state => {
    let list = []
    let cart = state.cartList
    for (let key in cart) {
      list.push({
        id: cart[key].id,
        name: cart[key].name,
        count: cart[key].count,
        price: cart[key].count * cart[key].price
      })
    }
    return list
  },
  cartTotalPrice: state => {
    let sum = 0
    let cart = state.cartList
    for (let key in cart) {
      sum += cart[key].price * cart[key].count
    }
    return sum
  },
  orderState: state => state.orderState
}

const actions = {
  addCart ({commit}, food) {
    let cart = state.cartList
    cart[food.id] = {...food}
    localStorage.setItem('cartList', JSON.stringify(cart))
    commit('addCart', cart)
  },
  deleteFood ({commit}, food) {
    let cart = state.cartList
    delete (cart[food.id])
    localStorage.setItem('cartList', JSON.stringify(cart))
    commit('deleteFood', cart)
  },
  finishOrder ({commit}) {
    localStorage.removeItem('cartList')
    commit('finishOrder')
  }
}

// mutations
const mutations = {
  addCart (state, cartList) {
    // 触发更新
    state.cartList = {...cartList}
  },
  deleteFood (state, cartList) {
    state.cartList = {...cartList}
  },
  finishOrder (state) {
    state.orderState = 0
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
