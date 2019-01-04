import Vue from 'vue'
import store from '../vuex/index.js'
import Tool from './tool.js'

/******************************      cpIndexNew 同业订单模块      *****************************/
const User = {
	//根据关键字和条件查询供应商列表
	getSupplierListSearch(requestInfo, successCallback, errorCallback) {
		let requestData = {
			loading: requestInfo.loading,
			act: 'CSH009',
			searchType:requestInfo.searchType,
			cityName: requestInfo.cityName,
			keyword: requestInfo.keyword,
			cpRoute:requestInfo.cpRoute,
			pageNum: requestInfo.pageNum,	
			keywordHtml:requestInfo.keywordHtml
		};
		Tool.apiFun.getDataFromServer('cpSearch', requestData, successCallback, errorCallback);
	},

};

export default {
	User
}