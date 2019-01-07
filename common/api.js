import Vue from 'vue'
import store from '../vuex/index.js'
import Tool from './tool.js'

/******************************      Default 默认通用模块      *****************************/
const Default = {
	//统一上传文件接口
	UploadMany(requestInfo,successCallback, errorCallback) {
		let requestData = {};
		requestData.bus_type = requestInfo.bus_type;
		requestData.bus_id = requestInfo.bus_id;
		let files = {
			name: requestInfo.files.name,
			url: requestInfo.files.path
		};
		Tool.apiFun.UploadFileFromServer('AppCore/UploadMany', files,successCallback, errorCallback);
	},
};

/******************************      home 首页模块      *****************************/
const Home = {
	//获得banner
	getBannerList(successCallback, errorCallback) {
		let requestData = {};
		requestData.loading = 1;
		Tool.apiFun.getDataFromServer('AppMain/getBannerList', requestData,'GET',successCallback, errorCallback);
	},
	//获得动态
	getCompanyDynamic(successCallback, errorCallback) {
		let requestData = {};
		requestData.loading = 1;
		Tool.apiFun.getDataFromServer('AppMain/getCompanyDynamic', requestData,'GET',successCallback, errorCallback);
	},
	//获取施工团队
	getConstructionTeamList(requestInfo,successCallback, errorCallback) {
		let requestData = {};
		requestData.loading = 1;
		requestData.page = requestInfo.page;
		if(requestInfo.provinces)requestData.provinces = requestInfo.provinces;
		if(requestInfo.city)requestData.city = requestInfo.city;
		if(requestInfo.area)requestData.area = requestInfo.area;
		Tool.apiFun.getDataFromServer('AppMain/getConstructionTeamList', requestData,'POST',successCallback, errorCallback);
	},
	//申请施工团队
	saveConstructionTeam(requestInfo,successCallback, errorCallback) {
		let requestData = {};
		requestData.teamName = requestInfo.teamName;
		requestData.attention = requestInfo.attention;
		requestData.tel = requestInfo.tel;
		requestData.bz2 = requestInfo.bz2;
		requestData.introduce = requestInfo.introduce;
		requestData.provinces = requestInfo.provinces;
		requestData.city = requestInfo.city;
		requestData.area = requestInfo.area;
		Tool.apiFun.getDataFromServer('AppMain/saveConstructionTeam', requestData,'POST',successCallback, errorCallback);
	},
	//获取货运物流列表
	getFreightLogisticsList(requestInfo,successCallback, errorCallback) {
		let requestData = {};
		requestData.loading = 1;
		requestData.page = requestInfo.page;
		if(requestInfo.provinces)requestData.provinces = requestInfo.provinces;
		if(requestInfo.city)requestData.city = requestInfo.city;
		if(requestInfo.area)requestData.area = requestInfo.area;
		Tool.apiFun.getDataFromServer('AppMain/getFreightLogisticsList', requestData,'POST',successCallback, errorCallback);
	},
	//申请货运物流
	saveFreightLogistics(requestInfo,successCallback, errorCallback) {
		let requestData = {};
		requestData.logisticsName = requestInfo.logisticsName;
		requestData.attention = requestInfo.attention;
		requestData.tel = requestInfo.tel;
		requestData.bz2 = requestInfo.bz2;
		requestData.introduce = requestInfo.introduce;
		requestData.provinces = requestInfo.provinces;
		requestData.city = requestInfo.city;
		requestData.area = requestInfo.area;
		Tool.apiFun.getDataFromServer('AppMain/saveFreightLogistics', requestData,'POST',successCallback, errorCallback);
	},
};

/******************************      User 用户模块      *****************************/
const User = {
	//获得登录验证码
	getLoginAuthCode(mobilePhone,successCallback, errorCallback) {
		let requestData = {};
		requestData.mobilePhone = mobilePhone;
		Tool.apiFun.getDataFromServer('AppCore/getLoginAuthCode', requestData,'POST',successCallback, errorCallback);
	},
	//获得注册验证码
	getRegisteredAuthCode(mobilePhone,successCallback, errorCallback) {
		let requestData = {};
		requestData.mobilePhone = mobilePhone;
		Tool.apiFun.getDataFromServer('AppCore/getRegisteredAuthCode', requestData,'POST',successCallback, errorCallback);
	},
	//帐号密码登录
	loginByPwd(requestInfo,successCallback, errorCallback) {
		let requestData = {};
		requestData.type = requestInfo.type;
		requestData.mobilePhone = requestInfo.mobilePhone;
		requestData.password = requestInfo.password;
		requestData.authcode = requestInfo.authcode;
		Tool.apiFun.getDataFromServer('AppCore/AppLogin', requestData,'POST',(res)=>{
			store.commit("login",res.data);
			successCallback && successCallback(res)
		}, errorCallback);
	},
	//注册帐号
	register(requestInfo,successCallback, errorCallback) {
		let requestData = {};
		requestData.tpye = requestInfo.tpye;
		requestData.mobilePhone = requestInfo.mobilePhone;
		requestData.username = requestInfo.username;
		requestData.authcode = requestInfo.authcode;
		Tool.apiFun.getDataFromServer('AppCore/AppRegistered', requestData,'POST',(res)=>{
			store.commit("login",res.data);
			successCallback && successCallback(res)
		}, errorCallback);
	},
	//我的收货地址
	getShippingAddressList(requestInfo,successCallback, errorCallback) {
		let requestData = {};
		requestData.limit = requestInfo.limit;
		Tool.apiFun.getDataFromServer('AppMyCenter/getShippingAddressList', requestData,'POST',successCallback, errorCallback);
	},
	//新增收货地址
	saveShippingAddress(requestInfo,successCallback, errorCallback) {
		let requestData = {};
		requestData.consigneeName = requestInfo.consigneeName;
		requestData.mobilePhone = requestInfo.mobilePhone;
		requestData.address = requestInfo.address;
		Tool.apiFun.getDataFromServer('AppMyCenter/saveShippingAddress', requestData,'POST',successCallback, errorCallback);
	},
	//修改收货地址
	updateShippingAddress(requestInfo,successCallback, errorCallback) {
		let requestData = {};
		requestData.id = requestInfo.id;
		requestData.consigneeName = requestInfo.consigneeName;
		requestData.mobilePhone = requestInfo.mobilePhone;
		requestData.address = requestInfo.address;
		Tool.apiFun.getDataFromServer('AppMyCenter/updateShippingAddress', requestData,'POST',successCallback, errorCallback);
	},
	//删除收货地址
	deleteShippingAddress(requestInfo,successCallback, errorCallback) {
		let requestData = {};
		requestData.id = requestInfo.id;
		Tool.apiFun.getDataFromServer('AppMyCenter/deleteShippingAddress', requestData,'POST',successCallback, errorCallback);
	},
	//我的收藏列表
	getMyCollectionList(requestInfo,successCallback, errorCallback) {
		let requestData = {};
		requestData.page = requestInfo.page;
		Tool.apiFun.getDataFromServer('AppMyCenter/getMyCollectionList', requestData,'POST',successCallback, errorCallback);
	},
	//保存收藏
	saveMyCollection(requestInfo,successCallback, errorCallback) {
		let requestData = {};
		requestData.productId = requestInfo.productId;
		requestData.productName = requestInfo.productName;
		requestData.productImg = requestInfo.productImg;
		Tool.apiFun.getDataFromServer('AppMyCenter/saveMyCollection', requestData,'POST',successCallback, errorCallback);
	},
	//删除我的收藏
	delMyCollection(requestInfo,successCallback, errorCallback) {
		let requestData = {};
		requestData.id = requestInfo.id;
		Tool.apiFun.getDataFromServer('AppMyCenter/delMyCollection', requestData,'POST',successCallback, errorCallback);
	},
	//我的客户列表
	getMyClientList(requestInfo,successCallback, errorCallback) {
		let requestData = {};
		requestData.page = requestInfo.page;
		Tool.apiFun.getDataFromServer('AppMyCenter/getMyClientList', requestData,'POST',successCallback, errorCallback);
	},
	//修改我的客户
	updateMyClient(requestInfo,successCallback, errorCallback) {
		let requestData = {};
		requestData.id = requestInfo.id;
		requestData.clientName = requestInfo.clientName;
		requestData.clientTel = requestInfo.clientTel;
		Tool.apiFun.getDataFromServer('AppMyCenter/updateMyClient', requestData,'POST',successCallback, errorCallback);
	},
	//删除我的客户
	deleteMyClient(requestInfo,successCallback, errorCallback) {
		let requestData = {};
		requestData.id = requestInfo.id;
		Tool.apiFun.getDataFromServer('AppMyCenter/deleteMyClient', requestData,'POST',successCallback, errorCallback);
	},
};

/******************************      Product 产品模块      *****************************/
const Product = {
	//我的产品设计清单
	getProdListingList(requestInfo,successCallback, errorCallback) {
		let requestData = {};
		requestData.listingState = requestInfo.listingState;
		requestData.page = requestInfo.page;
		requestData.limit = requestInfo.limit;
		Tool.apiFun.getDataFromServer('AppProd/getProdListingList', requestData,'POST',successCallback, errorCallback);
	},
	//获取清单详情
	getProdListingInfo(requestInfo,successCallback, errorCallback) {
		let requestData = {};
		requestData.listingId = requestInfo.listingId;
		Tool.apiFun.getDataFromServer('AppProd/getProdListingInfo', requestData,'POST',successCallback, errorCallback);
	},
	//修改指定设计清单主体
	updateProdListingMain(requestInfo,successCallback, errorCallback) {
		let requestData = {};
		requestData.listingId = requestInfo.listingId;
		requestData.listingName = requestInfo.listingName;
		requestData.listingAmount = requestInfo.listingAmount;
		requestData.listingRealAmount = requestInfo.listingRealAmount;
		Tool.apiFun.getDataFromServer('AppProd/updateProdListingMain', requestData,'POST',successCallback, errorCallback);
	},
	//修改指定产品设计清单详情
	updateProdListingInfo(requestInfo,successCallback, errorCallback) {
		let requestData = {};
// 		requestData.listingId = requestInfo.listingId;
// 		requestData.listingName = requestInfo.listingName;
// 		requestData.listingAmount = requestInfo.listingAmount;
// 		requestData.listingRealAmount = requestInfo.listingRealAmount;
		Tool.apiFun.getDataFromServer('AppProd/updateProdListingInfo', requestData,'POST',successCallback, errorCallback);
	},
	//删除我的清单
	delProdListingInfo(requestInfo,successCallback, errorCallback) {
		let requestData = {};
		requestData.listingId = requestInfo.listingId;
		Tool.apiFun.getDataFromServer('AppProd/delProdListingInfo', requestData,'POST',successCallback, errorCallback);
	},
	//获取产品大类
	getProdCategoryList(successCallback, errorCallback) {
		Tool.apiFun.getDataFromServer('AppProd/getProdCategoryList', {},'POST',successCallback, errorCallback);
	},
	//根据产品大类获取产品小类
	getProdCategoryChildList(categoryId,successCallback, errorCallback) {
		let requestData = {};
		requestData.categoryId = categoryId;
		Tool.apiFun.getDataFromServer('AppProd/getProdCategoryChildList', {},'POST',successCallback, errorCallback);
	},
	//根据条件查询产品列表
	getProdInfoList(requestInfo,successCallback, errorCallback) {
		let requestData = requestInfo;
		Tool.apiFun.getDataFromServer('AppProd/getProdInfoList', requestData,'POST',successCallback, errorCallback);
	},
	//获取产品详情
	getProdInfo(requestInfo,successCallback, errorCallback) {
		let requestData = {};
		requestData.id = requestInfo.id;
		Tool.apiFun.getDataFromServer('AppProd/getProdInfo', requestData,'POST',successCallback, errorCallback);
	},
	//新增产品评论
	saveProdComments(requestInfo,successCallback, errorCallback) {
		let requestData = {};
		requestData.prodId = requestInfo.prodId;
		requestData.prodComments = requestInfo.prodComments;
		Tool.apiFun.getDataFromServer('AppProd/saveProdComments', requestData,'POST',successCallback, errorCallback);
	},
	//根据产品大类获取产品设计方案列表
	getProdSolutionsList(requestInfo,successCallback, errorCallback) {
		let requestData = {};
		requestData.prodCategoryId = requestInfo.prodCategoryId;
		Tool.apiFun.getDataFromServer('AppProd/getProdSolutionsList', requestData,'POST',successCallback, errorCallback);
	},
	//新增新的产品设计清单主体
	saveProdListing(requestInfo,successCallback, errorCallback) {
		let requestData = {};
		requestData.listingName = requestInfo.listingName;
		Tool.apiFun.getDataFromServer('AppProd/saveProdListing', requestData,'POST',successCallback, errorCallback);
	},
	//新增产品设计清单详情列表
	saveProdListingInfo(requestInfo,successCallback, errorCallback) {
		Tool.apiFun.getDataFromServer('AppProd/saveProdListingInfo', requestInfo,'POST',successCallback, errorCallback);
	},
	//获取指定产品设计方案详情
	getBusProdSolutionsInfo(requestInfo,successCallback, errorCallback) {
		let requestData = {};
		requestData.solutionsId = requestInfo.solutionsId;
		Tool.apiFun.getDataFromServer('AppProd/getBusProdSolutionsInfo', requestData,'POST',successCallback, errorCallback);
	},
};

/******************************      Messgae 消息模块      *****************************/
const Messgae = {
	//获取消息列表
	getMsgList(requestInfo,successCallback, errorCallback) {
		let requestData = {};
		Tool.apiFun.getDataFromServer('AppMsg/getMsgList', requestData,'POST',successCallback, errorCallback);
	},
	//删除消息
	delMsg(requestInfo,successCallback, errorCallback) {
		let requestData = {};
		requestData.msgType = requestInfo.msgType;
		requestData.msgId = requestInfo.msgId;
		Tool.apiFun.getDataFromServer('AppMsg/delMsg', requestData,'POST',successCallback, errorCallback);
	},
	//消息已读
	readMsg(requestInfo,successCallback, errorCallback) {
		let requestData = {};
		requestData.msgType = requestInfo.msgType;
		requestData.msgId = requestInfo.msgId;
		Tool.apiFun.getDataFromServer('AppMsg/readMsg', requestData,'POST',successCallback, errorCallback);
	},
};

/******************************      Shopping 购物模块      *****************************/
const Shopping = {
	//获取我的购物车列表
	getBusShopCarList(requestInfo,successCallback, errorCallback) {
		let requestData = {};
		requestData.page = requestInfo.page;
		Tool.apiFun.getDataFromServer('AppShoping//getBusShopCarList', requestData,'POST',successCallback, errorCallback);
	},
	//新增产品到购物车
	saveBusShopCar(requestInfo,successCallback, errorCallback) {
		let requestData = {};
		requestData.productId = requestInfo.productId;
		Tool.apiFun.getDataFromServer('AppShoping//saveBusShopCar', requestData,'POST',successCallback, errorCallback);
	},
};
	
export default {
	Default,Home,User,Product,Messgae,Shopping
}