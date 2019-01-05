import Vue from 'vue'
import App from './App'
import store from './vuex'

// 引入自定义组件
import YgIcon from './components/icon/icon.vue'

// 引入自定义js
import Tool from './common/tool.js'
import Api from './common/api.js'
import Config from './common/config.js'

Vue.$store = Vue.prototype.$store = store
Vue.$tool = Vue.prototype.$tool = Tool
Vue.$api = Vue.prototype.$api = Api
Vue.$config = Vue.prototype.$config = Config
Vue.$toast = Vue.prototype.$toast = Tool.tipsFun.toast.default
Vue.$openWin = Vue.prototype.$openWin = Tool.webViewFun.default
Vue.$abyBack = Vue.prototype.$abyBack = Tool.webViewFun.back

Vue.component('yg-icon', YgIcon)

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
