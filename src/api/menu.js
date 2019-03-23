import {_get} from './index'

// 获取销售榜单
export const getHotCakes = (data) => {
  let req = {
    data,
    url: '/api/menu/hotcake'
  }
  return _get(req)
}

// 按照(分类)获取菜单
export const getMenu = (data) => {
  let req = {
    data,
    url: '/api/menu/category'
  }
  return _get(req)
}

// 按照名称模糊获取菜单
export const getMenuByNameLike = (data) => {
  let req = {
    data,
    url: '/api/menu/name'
  }
  return _get(req)
}
