import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 全局引入并挂载请求url
import * as api from './utils/reuest/api'
Vue.prototype.$api = api.default
// 局引入并挂载时间格式化工具
// import formatTime from './utils/public_function/formatTime.js'
// Vue.prototype.$formatTime = formatTime
import publicFunction from './utils/public_function/index'
Vue.prototype.$publicFunction = publicFunction
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
