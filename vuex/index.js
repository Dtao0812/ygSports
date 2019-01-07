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
	
	/*tabbar 加号点击状态*/
	tabBarAddState:false,
	addList:[],
	
	/*用户相关*/
	hasLogin: Tool.localStorage.get('token')?true:false,//登录状态
	token: Tool.localStorage.get('token')?Tool.localStorage.get('token'):'',//用户token
	
}

// 同步加载
const mutations = {
	login(state, token) {
		state.hasLogin = true;
		state.token = token;
		Tool.localStorage.set('token',token);
	},
	logout(state) {
		state.hasLogin = false
		state.token = "";
		Tool.localStorage.clear();
	},
	setState(state,info){
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