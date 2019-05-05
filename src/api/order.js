import {_post, _get} from './index'

export const finishOrder = (data) => {
  let req = {
    data,
    url: '/api/order/new'
  }
  return _post(req)
}

export const callWaiter = (data) => {
  let req = {
    data,
    url: '/api/order/callwaiter'
  }
  return _get(req)
}
