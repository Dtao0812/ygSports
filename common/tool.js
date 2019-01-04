import Vue from 'vue'
import Store from '../vuex/index'
import Config from './config.js'
// import Router from '../router/index.js'


var wait = 60; //倒计时数值
/**
 * 默认方法
 */
let defFun = {
	//判断是否存在数组中
	isInAarry: function(arr, obj) {
		let i = arr.length;
		while (i--) {
			if (arr[i] == obj) {
				return true;
			}
		}
		return false;
	},
	//判断内容是否为空(排除0)
	isNull: function(obj, type, msg) {
		type = type || 0;
		msg = msg || '暂无内容';
		if ((obj == '' || obj == null || obj == 'null' || obj == 'undefined') && obj !== 0) return type == 0 ? false : msg;
		if (typeof(obj) == 'undefined') return type == 0 ? false : msg;
		if (typeof(obj) == 'object' && (obj.length == 0 || JSON.stringify(obj) == '{}')) return type == 0 ? false : msg;
		return obj;
	},
	/**
	 * 手机号码合法性验证
	 * @author liuwenjn
	 **/
	phoneVerfication: function(id) {
		let reg =
			/^13[0-9]{1}[0-9]{8}$|15[0-9]{1}[0-9]{8}$|18[0-9]{1}[0-9]{8}$|17[0-9]{1}[0-9]{8}$|14[0-9]{1}[0-9]{8}$|16[0-9]{1}[0-9]{8}$|19[0-9]{1}[0-9]{8}/;
		if (!reg.test(id)) {
			return false;
		}
		return true;
	},
	// 隐藏部分类型
	plusXing: function(str, length, fromBegin, mask) {
		fromBegin = fromBegin || false;
		mask = mask ? mask : '*';
		var replacement = '';
		for (var i = 0; i < length; i++) {
			replacement += mask;
		}
		if (fromBegin) {
			var regexp = new RegExp('.{1,' + length + '}');
			return str.replace(regexp, replacement);
		} else {
			var regexp = new RegExp('.{' + (str.length - length) + ',' + str.length + '}');
			return str.substring(0, (str.length - length)) + str.replace(regexp, replacement);
		}
	},
	// 倒计时
	disableWait: function(obj) {
		if (wait == 0) {
			obj.removeAttribute("disabled");
			obj.value = "获取验证码";
			wait = 60;
		} else {
			obj.setAttribute("disabled", true);
			obj.value = "重新发送(" + wait + ")";
			wait--;
			setTimeout(function() {
				disableWait(obj)
			}, 1000)
		}
	},
	// obj转url参数
	encodeSearchParams: function(param, key, encode) {
		if (!param) return '';
		var paramStr = '';
		var t = typeof(param);
		if (t == 'string' || t == 'number' || t == 'boolean') {
			paramStr += '&' + key + '=' + ((encode == null || encode) ? encodeURIComponent(param) : param);
		} else {
			for (var i in param) {
				var k = key == null ? i : key + (param instanceof Array ? '[' + i + ']' : '.' + i)
				paramStr += defFun.encodeSearchParams(param[i], k, encode)
			}
		}
		return paramStr;

	},
	//除法
	accDiv(arg1, arg2) {
		var t1 = 0,
			t2 = 0,
			r1, r2;
		try {
			t1 = arg1.toString().split(".")[1].length
		} catch (e) {}
		try {
			t2 = arg2.toString().split(".")[1].length
		} catch (e) {}
		r1 = Number(arg1.toString().replace(".", ""))
		r2 = Number(arg2.toString().replace(".", ""))
		return accMul((r1 / r2), pow(10, t2 - t1));
	},
	//乘法 
	accMul(arg1, arg2) {
		var m = 0,
			s1 = arg1.toString(),
			s2 = arg2.toString();
		try {
			m += s1.split(".")[1].length
		} catch (e) {}
		try {
			m += s2.split(".")[1].length
		} catch (e) {}
		return Number(s1.replace(".", "")) * Number(s2.replace(".", "")) / Math.pow(10, m)
	},
	//加法  
	accAdd(arg1, arg2) {
		var r1, r2, m;
		try {
			r1 = arg1.toString().split(".")[1].length
		} catch (e) {
			r1 = 0
		}
		try {
			r2 = arg2.toString().split(".")[1].length
		} catch (e) {
			r2 = 0
		}
		m = Math.pow(10, Math.max(r1, r2))
		return (arg1 * m + arg2 * m) / m
	},
	//减法  
	Subtr(arg1, arg2) {
		var r1, r2, m, n;
		try {
			r1 = arg1.toString().split(".")[1].length
		} catch (e) {
			r1 = 0
		}
		try {
			r2 = arg2.toString().split(".")[1].length
		} catch (e) {
			r2 = 0
		}
		m = Math.pow(10, Math.max(r1, r2));
		n = (r1 >= r2) ? r1 : r2;
		return ((arg1 * m - arg2 * m) / m).toFixed(n);
	},
	//判断是否为数字
	isRealNum: function(val) {
		if (val === "" || val == null) {
			return false;
		}
		if (!isNaN(val)) {
			return true;
		} else {
			return false;
		}
	},
	//数组反序排列
	arrReverse: function(data) {
		let _list = [];
		for (var i = data.length - 1; i >= 0; i--) {
			_list.push(data[i]);
		}
		return _list;
	}
};

/**
 * 存储方法
 */
let localStorage = {
	set(key, val) {
		uni.setStorage({
			key: key,
			data: val,
			success: (res) => {
				return true;
			},
			fail: () => {
				return false;
			}
		});
	},
	get(key) {
		try {
			return uni.getStorageSync(key);
		} catch (e) {
			return '';
		}
	},
	clear() {
		uni.clearStorageSync();
	}
};



/**
 * 时间相关方法
 */
let dateFun = {
	pad: function(num, n) {
		var len = num.toString().length;
		while (len < n) {
			num = "0" + num;
			len++;
		}
		return num;
	},
	// 日期对比
	compareDate: function(s1, s2) {
		return ((new Date(s1.replace(/-/g, "\/"))) > (new Date(s2.replace(/-/g, "\/"))));
	},
	//获得当前时间
	getNowFormatDate: function() {
		var date = new Date();
		var seperator1 = "-";
		var year = date.getFullYear();
		var month = date.getMonth() + 1;
		var strDate = date.getDate();
		if (month >= 1 && month <= 9) {
			month = "0" + month;
		}
		if (strDate >= 0 && strDate <= 9) {
			strDate = "0" + strDate;
		}
		var currentdate = year + seperator1 + month + seperator1 + strDate;
		return currentdate;
	},
	// 格式化时间(YYYY-MM-DD H:m)
	getFormatDate: function(datetime, type) {
		var _datetime;
		if (/^[0-9]+$/.test(datetime)) {
			_datetime = parseInt(datetime);
		} else {
			_datetime = datetime;
		}
		var datetime = new Date(_datetime);
		var year = datetime.getFullYear();
		var month = datetime.getMonth() + 1; //js从0开始取 
		var date = datetime.getDate();
		var hour = datetime.getHours();
		var minutes = datetime.getMinutes();
		var second = datetime.getSeconds();
		if (month < 10) month = "0" + month;
		if (date < 10) date = "0" + date;
		if (type == 1) {
			return year + "-" + month + "-" + date + ' ' + dateFun.pad(hour, 2) + ':' + dateFun.pad(minutes, 2) + ':' +
				dateFun.pad(second, 2);
		} else {
			return year + "-" + month + "-" + date;
		}
	},
	// 计算年龄
	countAge: function(datetime) {
		var r = datetime.match(/^(\d{1,4})(-|\/)(\d{1,2})\2(\d{1,2})$/);
		if (r == null) return false;
		var d = new Date(r[1], r[3] - 1, r[4]);
		if (d.getFullYear() == r[1] && (d.getMonth() + 1) == r[3] && d.getDate() == r[4]) {
			var Y = new Date().getFullYear();
			return Y - r[1];
		}
	},
	// 获得时间戳
	getTime: function() {
		return new Date().getTime();
	},
	setFormat: function(x) {
		if (x < 10) {
			x = "0" + x;
		}
		return x;
	},
	//获取当前时间（Y-m-d h:i:s）
	getNowtime: function() {
		var date = new Date(); //日期对象
		var now = "";
		now = date.getFullYear() + "-"; //读英文就行了
		now = now + (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-'; //取月的时候取的是当前月-1如果想取当前月+1就可以了
		now = now + dateFun.setFormat(date.getDate()) + " ";
		now = now + dateFun.setFormat(date.getHours()) + ":";
		now = now + dateFun.setFormat(date.getMinutes()) + ":";
		now = now + dateFun.setFormat(date.getSeconds()) + "";
		return now;
	},
	//获取从现在到 beforetime 分钟前的时间
	beforeNowtimeByMinu: function(beforetime) {
		var date = new Date(); //日期对象
		date.setMinutes(date.getMinutes() - beforetime);
		var now = "";
		now = date.getFullYear() + "-"; //读英文就行了
		now = now + (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-'; //取月的时候取的是当前月-1如果想取当前月+1就可以了
		now = now + dateFun.setFormat(date.getDate()) + " ";
		now = now + dateFun.setFormat(date.getHours()) + ":";
		now = now + dateFun.setFormat(date.getMinutes()) + ":";
		now = now + dateFun.setFormat(date.getSeconds()) + "";
		return now;
	},
	//计算时间(13位时间戳)
	getDateFromNowBy13: function(timestamp,type) {
		var prmdate = new Date(parseInt(timestamp));
		var nowDate = new Date();
		var nTime = new Date(parseInt(timestamp));
		var nYear = nTime.getFullYear();
		var nMonth = nTime.getMonth() + 1;
		var nDate = nTime.getDate();
		var nHour = nTime.getHours();
		var nMinute = nTime.getMinutes();
		var second = nTime.getSeconds();
		if(type == 1){
			var _date = nYear + '-' + dateFun.pad(nMonth, 2) + '-' + dateFun.pad(nDate, 2) + ' ' +  dateFun.pad(nHour, 2) + ':' + dateFun.pad(nMinute, 2) + ':' +
					dateFun.pad(second, 2);
		}else{
			var _date = nYear + '-' + dateFun.pad(nMonth, 2) + '-' + dateFun.pad(nDate, 2);
		}
		
		return _date;
	},
	//计算多少时间前
	getShortTime: function(timestamp) {
		var nowtime = (new Date).getTime(); /*当前时间戳*/
		/*转换时间，计算差值*/
		var secondNum = parseInt((nowtime - timestamp) / 1000); //计算时间戳差值 
		if (secondNum < 0) secondNum = 1;
		if (secondNum >= 0 && secondNum < 60) {
			if (secondNum >= 0 && secondNum < 5) {
				return '刚刚';
			} else {
				return '1分钟前';
			}
		} else if (secondNum >= 60 && secondNum < 3600) {
			var nTime = parseInt(secondNum / 60);
			return nTime + '分钟前';
		} else if (secondNum >= 3600 && secondNum < 3600 * 24) {
			var nTime = parseInt(secondNum / 3600);
			return nTime + '小时前';
		} else {
			var nTime = new Date(parseInt(timestamp));
			var nYear = nTime.getFullYear();
			var nMonth = nTime.getMonth() + 1;
			var nDate = nTime.getDate();
			var nHour = nTime.getHours();
			var nMinute = nTime.getMinutes();
			var year = (new Date).getFullYear();
			if (year == nYear) {
				return dateFun.pad(nMonth, 2) + '-' + dateFun.pad(nDate, 2) + ' ' + dateFun.pad(nHour, 2) + ':' + dateFun.pad(
					nMinute, 2);
			} else {
				return nYear + '-' + dateFun.pad(nMonth, 2) + '-' + dateFun.pad(nDate, 2) + ' ' + dateFun.pad(nHour, 2) + ':' +
					dateFun.pad(nMinute, 2);
			}
		}
	},
	//判断时间戳是否为今天
	isToday: function(str) {
		if (!str) return false;
		if (new Date(str).toDateString() === new Date().toDateString()) {
			//今天
			return true;
		} else if (new Date(str) < new Date()) {
			//之前
			return false;
		}
		return false;
	},
	//计算红包剩余使用天数
	getdateDiff: function(endTime) {
		var day = 24 * 60 * 60 * 1000;
		var date = new Date(); /*当前时间*/
		var now = "";
		now = date.getFullYear() + "-";
		now = now + (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
		now = now + dateFun.setFormat(date.getDate()) + " ";
		try {
			var dateArr = endTime.split("-");
			var checkDate = new Date();
			checkDate.setFullYear(dateArr[0], dateArr[1] - 1, dateArr[2]);
			var checkTime = checkDate.getTime();
			var dateArr2 = now.split("-");
			var checkDate2 = new Date();
			checkDate2.setFullYear(dateArr2[0], dateArr2[1] - 1, dateArr2[2]);
			var checkTime2 = checkDate2.getTime();
			var cha = (checkTime - checkTime2) / day;
			return parseInt(cha);
		} catch (e) {
			return false;
		}
	},
	//倒计时
	InitTime(endDate) {
		var a = endDate;
		var dd, hh, mm, ss = null;
		let endDates = endDate.replace(/\-/g, '\/');
		let endTime = new Date(endDates);
		var time = (parseInt(endTime.getTime()) - new Date().getTime()) / 1000;
		if (isNaN(time) || time <= 0) {
			return '已结束'
		} else {
			dd = Math.floor(time / 60 / 60 / 24);
			hh = Math.floor((time / 60 / 60) % 24);
			mm = Math.floor((time / 60) % 60);
			ss = Math.floor(time % 60);
			var str = dd + "天" + hh + ":" + mm + ":" + ss;
			return str;
		}
	}
};

/**
 * 手机设备
 */
let deviceFun = {
	// 拨打电话
	makePhoneCall: function(callVal) {
		uni.makePhoneCall({
			phoneNumber: callVal,
			success: function() {
				// 成功拨打电话
			},
			fail: function() {
				tipsFun.toast.error('拨打失败');
			}
		});
	},
	// 扫描二维码
	scanQRCode: function(successCallback, errorCallback) {
		uni.scanCode({
			scanType: 'qrCode',
			success: function(res) {
				successCallback && successCallback(res.result);
			},
			fail: function(res) {
				tipsFun.toast.error('识别失败');
				errorCallback && errorCallback(res);
			}
		})
	},
	// 设置内容到剪切板
	setClipboard: function(data) {
		if (data.length === 0) {
			tipsFun.toast.error('复制内容失败')
		} else {
			uni.setClipboardData({
				data: data,
				success: () => {
					tipsFun.toast.default('已复制')
				},
				fail: () => {
					tipsFun.toast.error('储存数据失败')
				}
			});
		}
	},
	// 获得剪切板内容
	getClipboard: function() {
		uni.getClipboardData({
			success: (res) => {
				return res.data;
			},
			fail: () => {
				tipsFun.toast.error('读取剪贴板失败')
			}
		});
	},
	//获取当前位置
	getCurrentPosition: function(callback) {
		try {
			let currentPosition = new Object();
			plus.geolocation.getCurrentPosition(function(position) {
				var codns = position.coords;
				currentPosition.address = position.address;
				currentPosition.addresses = position.addresses;
				currentPosition.timestamp = position.timestamp;
				currentPosition.latitude = codns.latitude;
				currentPosition.longitude = codns.longitude;
				callback(currentPosition);
			}, function(e) {
				callback(false);
			}, {
				provider: 'baidu'
			});
		} catch (e) {
			callback(false)
		}
	},
	//获取系统信息
	getSystemInfo:function(){
		uni.getSystemInfo({
			success: (res) => {
				Store.commit("setSate",{id:'platform',value:res.platform});
				Store.commit("setSate",{id:'version',value:res.version});
				Store.commit("setSate",{id:'windowHeight',value:res.windowHeight});
				Store.commit("setSate",{id:'windowWidth',value:res.windowWidth});
			},
			fail: () => {
				tipsFun.toast.error('读取剪贴板失败')
			}
		});
	}
};

/**
 * 页面跳转
 */
let webViewFun = {
	// 跳转新页面
	default: function(url, objData,type) {
		if(type == undefined)type = true;
		if(type){
			let _url = Router.beforeEach(url);
			uni.navigateTo({
				url: _url + '?' + defFun.encodeSearchParams(objData)
			})
		}else{
			uni.navigateTo({
				url: url + '?' + defFun.encodeSearchParams(objData)
			})
		}
	},
	// 关闭当前页面，跳转到指定页面
	redirectTo: function(url, objData) {
		uni.redirectTo({
			url: url + '?' + defFun.encodeSearchParams(objData)
		})
	},
	// 关闭所有页面，打开指定页面
	reLaunch: function(url, objData) {
		uni.reLaunch({
			url: url + '?' + defFun.encodeSearchParams(objData)
		});
	},
	// 跳转到 tabBar 页面，并关闭其他所有非 tabBar 页面
	switchTab: function(url, objData) {
		uni.switchTab({
			url: url + '?' + defFun.encodeSearchParams(objData)
		});
	},
	// 关闭当前页面，返回上一页面或多级页面
	back: function(delta) {
		uni.navigateBack({
			delta: delta || 1
		});
	}
};

/**
 * 分享方法
 * provider 分享供应商（weixin 微信，sinaweibo 新浪微博，qq QQ）
 * scene 微信分享的场景（WXSceneSession 分享到聊天界面，WXSenceTimeline 分享到朋友圈，WXSceneFavorite 分享到微信收藏）
 * type 分享内容类型（0 图文，1 纯文字，2 纯图片，3 音乐，4 视频，5 小程序）
 * title 分享标题
 * summary 分享摘要
 * href 跳转地址
 * imageUrl 分享图片地址
 * mediaUrl 音视频地址
 * miniProgram 分享小程序必要参数
 */
let shareFun = {
	// 分享图文
	async default (opt, successCallback, errorCallback) {
		if (plus.os.name === 'iOS') {
			//ios平台，则压缩图片 
			opt.imageUrl = await shareFun.compress(opt.imageUrl);
		}
		uni.share({
			provider: opt.provider,
			scene: opt.scene,
			type: 0,
			href: opt.href,
			imageUrl: opt.imageUrl,
			summary: opt.summary,
			success: function(res) {
				successCallback && successCallback(res);
			},
			fail: function(err) {
				tipsFun.toast.error('分享失败')
				errorCallback && errorCallback(err);
			},
			complete: function() {

			}
		});
	},
	// 分享纯文字
	text: function(opt, successCallback, errorCallback) {
		uni.share({
			provider: opt.provider,
			scene: opt.scene,
			type: 1,
			summary: opt.summary,
			success: function(res) {
				successCallback && successCallback(res);
			},
			fail: function(err) {
				tipsFun.toast.error('分享失败')
				errorCallback && errorCallback(err);
			},
			complete: function() {

			}
		});
	},
	// 分享纯图片
	img: function(opt, successCallback, errorCallback) {
		uni.share({
			provider: opt.provider,
			scene: opt.scene,
			type: 2,
			imageUrl: opt.imageUrl,
			success: function(res) {
				successCallback && successCallback(res);
			},
			fail: function(err) {
				tipsFun.toast.error('分享失败')
				errorCallback && errorCallback(err);
			},
			complete: function() {

			}
		});
	},
	//分享到小程序
	applet: function(opt, successCallback, errorCallback) {
		uni.share({
			provider: opt.provider,
			type: 5,
			imageUrl: opt.imageUrl,
			title: opt.title,
			miniProgram: opt.miniProgram,
			success: function(res) {
				successCallback && successCallback(res);
			},
			fail: function(err) {
				tipsFun.toast.error('分享失败')
				errorCallback && errorCallback(err);
			},
			complete: function() {

			}
		});
	},
	//压缩图片 图文分享要求分享图片大小不能超过20Kb
	compress: function(image) {
		var img = image || "/_www/logo.png";
		return new Promise((res) => {
			var localPath = plus.io.convertAbsoluteFileSystem(img.replace('file://', ''));
			// 压缩size
			plus.io.resolveLocalFileSystemURL(localPath, (entry) => {
				entry.file((file) => { // 可通过entry对象操作图片 
					if (file.size > 20480) { // 压缩后size 大于20Kb
						plus.zip.compressImage({
							src: img,
							dst: img.replace('.jpg', '2222.jpg').replace('.JPG', '2222.JPG'),
							width: '10%',
							height: '10%',
							quality: 1,
							overwrite: true
						}, (event) => {
							let newImg = img.replace('.jpg', '2222.jpg').replace('.JPG', '2222.JPG');
							res(newImg);
						}, function(error) {
							uni.showModal({
								content: "分享图片太大,需要请重新选择图片!",
								showCancel: false
							})
						});
					}
				});
			}, (e) => {
				uni.showModal({
					content: "分享图片太大,需要请重新选择图片!",
					showCancel: false
				})
			});
		})
	}
};


/**
 * 提示方法
 */
let tipsFun = {
	toast: {
		// 默认提示
		default: function(title) {
			uni.showToast({
				title: title,
				icon: 'none'
			});
		},
		// 成功提示
		success: function(title) {
			uni.showToast({
				title: title,
				icon: 'success'
			});
		},
		// 失败提示
		error: function(title) {
			//#ifdef APP-PLUS
			uni.showToast({
				title: title,
				icon: 'none',
				image: "/_www/static/images/ico/ico_error_white.png",
			});
			//#endif
			//#ifdef H5
			image: "../images/ico/ico_error_white.png",
			uni.showToast({
				title: title,
				icon: 'none',
				image: "../../../static/images/ico/ico_error_white.png",
			});
			//#endif
		},
		// 加载中
		loading: function(title, mask) {
			var _title = title || Config.WY_LoadingWords;
			uni.showToast({
				title: _title,
				mask: mask || true,
				icon: 'loading'
			});
		},
		// 关闭toast
		close: function() {
			uni.hideToast();
		}
	},
	/**
	 * 弹框提示
	 * content 提示内容
	 * title 提示标题，默认从配置文件中读取
	 * opt 相关配置
	 */
	model: function(content, successCallback, errorCallback, opt) {
		var _title = Config.WY_TipsTitle;
		var _showCancel = true, //是否显示取消按钮
			_cancelText = '取消', //取消按钮的文字，最多 4 个字符
			_cancelColor = '#000000', //取消按钮的文字颜色
			_confirmText = '确定', //确定按钮的文字，最多 4 个字符
			_confirmColor = '#3CC51F'; //确定按钮的文字颜色
		if (opt) {
			_title = opt.title || _title;
			_showCancel = opt.showCancel || _showCancel;
			_cancelText = opt.cancelText || _cancelText;
			_cancelColor = opt.cancelColor || _cancelColor;
			_confirmText = opt.confirmText || _confirmText;
			_confirmColor = opt.confirmColor || _confirmColor;
		}
		uni.showModal({
			title: _title,
			content: content,
			showCancel: _showCancel,
			cancelText: _cancelText,
			cancelColor: _cancelColor,
			confirmText: _confirmText,
			confirmColor: _confirmColor,
			success: function(res) {
				if (res.confirm) {
					// 点击确定
					successCallback && successCallback(res);
				} else if (res.cancel) {
					// 点击取消
					errorCallback && errorCallback(res);
				}
			}
		});
	},
	/**
	 * 下方弹出菜单
	 * itemList 按钮的文字数组，数组长度最大为6个
	 * opt 其他设置
	 */
	actionSheet: function(itemList, successCallback, errorCallback, opt) {
		var _itemColor = '#000000';
		if (opt) {
			_itemColor = opt.itemColor || _itemColor;
		}
		uni.showActionSheet({
			itemList: itemList,
			itemColor: _itemColor,
			success: function(res) {
				successCallback && successCallback(res.tapIndex + 1)
			},
			fail: function(res) {
				// 失败
				errorCallback && errorCallback(res)
			}
		});
	}
};

/**
 * 媒体方法
 */
let mediaFun = {
	// 打开相册或拍照
	getImages: function(count, successCallback, errorCallback) {
		uni.chooseImage({
			count: count || 1,
			sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
			sourceType: ['album', 'camera'],
			success: function(res) {
				successCallback && successCallback(res.tempFiles);
			},
			fail: function(err) {
				errorCallback && errorCallback(err);
			}
		});
	},
	// 打开相册
	getImagesByAlbum: function(count, successCallback, errorCallback) {
		uni.chooseImage({
			count: count || 1,
			sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
			sourceType: ['album'],
			success: function(res) {
				successCallback && successCallback(res.tempFiles)
			},
			fail: function(err) {
				errorCallback && errorCallback(err);
			}
		});
	},
	// 打开拍照
	getImagesByCamera: function(count, successCallback, errorCallback) {
		uni.chooseImage({
			count: count || 1,
			sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
			sourceType: ['camera'],
			success: function(res) {
				successCallback && successCallback(res.tempFiles)
			},
			fail: function(err) {
				errorCallback && errorCallback(err);
			}
		});
	},
	// 图片预览
	previewImage:function(current,urls, indicator, loop,successCallback,errorCallback) {
		uni.previewImage({
			current: current||"",//当前显示图片的链接，不填则默认为 urls 的第一张
			indicator: indicator||'number',//图片指示器样式，可取值： "default" - 底部圆点指示器； "number" - 顶部数字指示器； "none" - 不显示指示器。
			loop: loop||false, //是否可循环预览，默认值为"false"
			urls: urls,//需要预览的图片链接列表,['1.png','2.png']
			success: function(res) {
				successCallback && successCallback(res)
			},
			fail: function(err) {
				errorCallback && errorCallback(err);
			}
		});
	},
};

/**
 * 设置tabBar
 */
let tabBarFun = {
	/**
	 * 设置tabBar 某一项右上角文本角标
	 * index tabBar的哪一项，从左边算起，起始是0
	 * text 显示的文本，不超过 3 个半角字符
	 */
	setBadge(index, text) {
		uni.setTabBarBadge({
			index: index,
			text: text.toString()
		})
	},
	/**
	 * 移除 tabBar 某一项右上角的文本
	 * index tabBar的哪一项，从左边算起，起始是0
	 */
	removeBadge(index) {
		uni.removeTabBarBadge({
			index: index
		})
	},
	/**
	 * 显示 tabBar 某一项的右上角的红点
	 */
	showRedDot(index) {
		uni.showTabBarRedDot({
			index: index
		})
	},
	/**
	 * 隐藏 tabBar 某一项的右上角的红点
	 */
	hideRedDot(index) {
		uni.hideTabBarRedDot({
			index: index
		})
	}
};

/**
 * 接口请求方法
 */
let apiFun = {
	/**
	 * 通用请求服务器接口
	 * apiName 接口地址
	 * data 请求数据
	 * successCallback 请求成功回调方法
	 * errorCallback 请求失败回调方法
	 */
	getDataFromServer(apiName, data, successCallback, errorCallback) {
		if (data.loading != 1) tipsFun.toast.loading();
		data.Platform = Store.state.Platform;
		data.deviceId = Store.state.deviceId;
		data.version = Store.state.version;
		data.user_token = Store.state.user_token;
		uni.request({
			url: Config.WY_AbyUrl + 'aby/' + apiName,
			method: 'POST',
			header: {
				'Content-Type': 'application/x-www-form-urlencoded'
			},
			data: 'data=' + encodeURIComponent(JSON.stringify(data)),
			success: (res) => {
				// 请求接口成功
				tipsFun.toast.close();
				if (res.data.errorcode == 0) {
					successCallback && successCallback(res.data);
				} else {
					errorCallback && errorCallback(res.data);
					if (data.loading != 1) tipsFun.toast.error(res.data.msg);
				}
			},
			fail: (err) => {
				// 请求接口失败
				tipsFun.toast.close();
				errorCallback && errorCallback(err);
				if (data.loading != 1) tipsFun.toast.error('请求服务器超时');
			},
			complete: () => {
				// 成功、失败都执行

			}
		})
	},
	/**
	 * 上传文件
	 * apiName 接口地址
	 * files 需要上传的文件，arrr类型
	 * data 请求数据
	 * successCallback 请求成功回调方法
	 * errorCallback 请求失败回调方法
	 */
	UploadFileFromServer(apiName, files, data, successCallback, errorCallback) {
		if (data.loading != 1) tipsFun.toast.loading('正在上传...');
		data.Platform = Store.state.Platform;
		data.deviceId = Store.state.deviceId;
		data.version = Store.state.version;
		data.user_token = Store.state.user_token;
		uni.uploadFile({
			url: Config.WY_AbyUrl + 'aby/' + apiName,
			files: files,
			header: {
				'Content-Type': 'application/x-www-form-urlencoded'
			},
			formData: 'data=' + encodeURIComponent(JSON.stringify(data)),
			success: (res) => {
				// 上传成功
				tipsFun.toast.close();
				if (res.data.errorcode == 0) {
					sucesscallback && sucesscallback(res.data);
				} else {
					if (data.loading != 1) tipsFun.toast.error(res.data.msg)
					errorcallback && errorcallback(res.data);
				}
			},
			fail: (err) => {
				// 上传失败
				tipsFun.toast.close();
				errorcallback && errorcallback(err);
				if (data.loading != 1) tipsFun.toast.error('上载文件失败')
			},
			complete: () => {
				// 成功、失败都执行

			}
		})
	},
	//下载文件
	downLoadFile(webUrl, localFilename, sucesscallback, errorcallback) {
		let dtask = plus.downloader.createDownload(webUrl, {
			filename: '_doc/download/abyty/' + localFilename
		}, function(d, status) {
			//下载完成
			if (status == 200) {
				sucesscallback(d.filename);
			} else {
				sucesscallback('/_www/logo.png');
			}
		});
		dtask.start();
	},
	// 压缩图片
	compressImage(src, dst, overwrite, quality, sucessCallback, errorCallBack) {
		plus.zip.compressImage({
				src: src,
				dst: dst,
				overwrite: overwrite,
				quality: quality
			},
			function(e) {
				sucessCallback && sucessCallback(e);
			},
			function(error) {
				errorCallBack && errorCallBack(false);
			});
	}
};


export default {
	defFun,
	apiFun,
	tipsFun,
	mediaFun,
	webViewFun,
	deviceFun,
	localStorage,
	dateFun,
	tabBarFun
};
