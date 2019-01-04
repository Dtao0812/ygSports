import Vue from 'vue'
import Vuex from 'vuex'
import Config from '../common/config.js'
import Tool from '../common/tool.js'

Vue.use(Vuex)

const state = {
	/*设备相关*/
	platform: Config.C_Platform,//客户端平台
	deviceId: Config.C_DeviceId,//设备id
	version: Config.C_Version,//当前版本
	windowHeight:"",//屏幕高度
	windowWidth:"",//屏幕宽度
}

// 同步加载
const mutations = {
	login(state, provider) {
		state.hasLogin = true;
		state.loginProvider = provider;
	},
	logout(state) {
		state.hasLogin = false
		state.openid = null
	},
	setSate(state,info){
		state[info.id] = info.value;
	}
}

// 异步加载
const actions = {
	addAction(context) {
		context.commit('add', 10)
	},
	reduceAction({
		commit
	}) {
		commit('reduce')
	}
}

// 计算属性
const getters = {
	count: function(state) {
		return state.count += 100;
	}
}

export default new Vuex.Store({
	state,mutations,getters
})

Tool.deviceFun.getSystemInfo();