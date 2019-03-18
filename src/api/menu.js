import {_get, _post} from './index'

// 获取销售榜单
export const getHotCakes = (data) => {
  let req = {
    data,
    url: ''
  }
  return _get(req)
}

// 按照(分类)获取菜单
export const getMenu = (data) => {
  let req = {
    data,
    url: ''
  }
  return _get(req)
}

// 按照名称模糊获取菜单
export const getMenuByName = (data) => {
  let req = {
    data,
    url: ''
  }
  return _get(req)
}

export const testApi = (data) => {
  let req = {
    data,
    url: 'login'
  }
  return _post(req)
}
