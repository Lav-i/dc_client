const axios = require('axios')

// get
export const _get = (req) => {
  return axios.get(req.url, {
    params: req.data
  })
}

// post
export const _post = (req) => {
  return axios({
    method: 'post',
    url: req.url,
    data: req.data
  })
}

// patch
export const _put = (req) => {
  return axios({
    method: 'put',
    url: req.url,
    data: req.data
  })
}

// delete
export const _delete = (req) => {
  return axios({
    method: 'delete',
    url: req.url,
    data: req.data
  })
}

// post and no withCredentials
export const _postNoWithCredentials = (req) => {
  return axios({
    method: 'post',
    url: req.url,
    data: req.data,
    withCredentials: false
  })
}
