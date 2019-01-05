/**
 * 自定义路由文件，用于页面管理
 * 创建者：dingtao
 * 时间：2019-01-04
 */
import store from '../vuex/index.js'
import Tool from '../common/tool.js'

// 所有的页面
const _routers = [
	{ title: '首页',name: 'home',path: '/pages/home/index' },
	{ title: '产品',name: 'product',path: '/pages/product/index' },
	{ title: '消息',name: 'message',path: '/pages/message/index' },
	{ title: '我的',name: 'my',path: '/pages/my/index' },
	
	{ title: '登录',name: 'login',path: '/pages/login/index' },
];

//游客可以页面
const userNotAuth = [
];

//跳转方法
let beforeEach = function(pageName){
	return _findUrlByName(pageName);
// 	if(!Tool.defFun.isInAarry(userNotAuth, pageName)){
// 		// 判断是否登录
// 		if(!store.state.hasLogin){
// 			return _findUrlByName('login');
// 		}else{
// 			return _findUrlByName(pageName);
// 		}
// 	}else{
// 		return _findUrlByName(pageName);
// 	}
};

// 根据name查找页面url
function _findUrlByName(name){
	let url = '/pages/home/index';// 默认跳转到首页
	for(let i=0,len=_routers.length;i<len;i++){
		if(name == _routers[i].name)url = _routers[i].path; 
	}
	return url;
}

export default {
	beforeEach
};