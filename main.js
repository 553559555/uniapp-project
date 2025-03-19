import App from './App'
import Vue from 'vue'
import './uni.promisify.adaptor'
import uView from 'uview-ui'
Vue.use(uView)

// 注意：使用uView前需要初始化配置
uni.$u.config.unit = 'rpx'

Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
  ...App
})
app.$mount()