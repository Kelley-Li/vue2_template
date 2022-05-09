import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 全局引入并挂载请求url
import * as api from './utils/reuest/api'
Vue.prototype.$api = api.default
// 全局引入并挂载公共函数
import publicFunction from './utils/public_function/index'
Vue.prototype.$publicFunction = publicFunction
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
