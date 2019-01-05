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
	{ title: '产品详情',name: 'proDetail',path: '/pages/product/detail' },
	
	{ title: '消息',name: 'message',path: '/pages/message/index' },
	{ title: '我的',name: 'my',path: '/pages/my/index' },
	
	{ title: '个人信息',name: 'setUser',path: '/pages/my/set' },
	
	{ title: '登录',name: 'login',path: '/pages/login/index' },
	{ title: '注册-手机',name: 'registerOne',path: '/pages/register/registerOne' },
	{ title: '注册-验证',name: 'registerTwo',path: '/pages/register/registerTwo' },
	{ title: '注册-设置',name: 'registerThree',path: '/pages/register/registerThree' },
	
	{ title: '货运物流',name: 'logistics',path: '/pages/logistics/index' },
	
	{ title: '施工团队',name: 'team',path: '/pages/team/index' },
	{ title: '报名团队',name: 'enrollTeam',path: '/pages/team/enroll' },
	
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