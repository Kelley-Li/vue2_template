import http from '../../http.js'
const  url = 'xxxxx'

/**
 * methods: 请求
 * @param {Object} params 请求参数
 */
const xx = function (params) {
  return http.post(url, params)
}

const xxx = function (params){
  return http.download(url, params)
}


export default {
  xx,
  xxx
}
