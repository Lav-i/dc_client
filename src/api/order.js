import {_post} from './index'

export const finishOrder = (data) => {
  let req = {
    data,
    url: '/api/order/new'
  }
  return _post(req)
}
