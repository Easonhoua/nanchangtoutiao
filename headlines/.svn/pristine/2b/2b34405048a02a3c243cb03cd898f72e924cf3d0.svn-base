// 管理账号信息

 const URL_BASE = 'https://api.0791look.com/';
 const IMAGE_PATH = 'https://ye.ncnews.com.cn';

/**
 * 方法名称: 请求的基础方法
 * 方法注释: post\get\json请求都会调这个方法
 * 传入参数: data->请求的参数 mescroll->可以传上下拉刷新的控件mescroll也可以传字符串"N",传字符串"N"表示请求的时候不显示加载中的动画 loadingFlag->是否显示加载动画传bool值
 * 返回数值: 请求的结果 returncode === 0 的时候才会返回res.data 
 */
const request = (opts, data, mescroll,loadingFlag) => {
	//如果是上下拉刷新不显示，非上下拉刷新都显示
	if(loadingFlag==true&&!mescroll){
		showLoading("加载中,请稍后...");
	}
	data.token = uni.getStorageSync("tokens");
	data.wid = uni.getStorageSync("wid");
	
	// console.log("请求的UserAgent = ",plus.navigator.getUserAgent());
	// const res = uni.getSystemInfoSync();
	//    console.log("getSystemInfoSync="+JSON.stringify(res));
	   
	//  uni.getSystemInfo({
	//      success: function (res) {
	// 		 console.log("getSystemInfo="+JSON.stringify(res));
	//      }
	//  });
	let httpDefaultOpts = {
		url: URL_BASE + opts.url,
		data: data,
		method: opts.method === 'json' ? 'post' : opts.method,
		header: (opts.method == 'get' || opts.method == 'json') ? {
			'X-Requested-With': 'XMLHttpRequest',
			"Accept": "application/json",
			"Content-Type": "application/json; charset=UTF-8"
		} : {
			'X-Requested-With': 'XMLHttpRequest',
			'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
		},
		dataType: 'text'
	}
	let promise = new Promise(function(resolve, reject) {
		uni.request(httpDefaultOpts).then(data => {
			//如果是上下拉刷新，下拉刷新的时候显示，上拉加载不显示，非上下拉刷新都显示,或者第三个参传字符N就不显示加载动画
			if ((!mescroll || mescroll === "N")&&loadingFlag!=false) {
				uni.hideLoading();
			}
			let [error, res] = data;
			if (res) {
				if (res.data.constructor !== Object) {
					res.data = JSON.parse(res.data);
				}
				if (res.data.code === 200) {
					if (mescroll && mescroll != "N") {
						if (res.data.data.length>0) {
							var hasNext = res.data.data.length == mescroll.size;
							console.log("加载下一页 == ",hasNext);
							if(hasNext){
								mescroll.endSuccess(res.data.data.length,true);
							}else{
								mescroll.endSuccess(1, false);
							}	
						} else {
							console.log("已经加载完");
							mescroll.endSuccess(0, false); //1为当前页获取的数据量，false为没有下一页的数据
						}
					}
					resolve(res.data);
				} else if (res.data.code === 403) {
					removeStorage();
					openLoginPage();
				} else {
					if (res.data.message === "token不存在,请重新登录") {
						removeStorage();
						openLoginPage();
					}
					if (mescroll && mescroll != "N") {
						mescroll.endErr("出错了，请稍后重试");
					}
					if (res.data.message && res.data.message.length && !(res.data.message === "token不存在,请重新登录")) {
						toastTips(res.data.message);
					} else {
						toastTips("出错了，请稍后重试");
					}
					reject(res.data);
				}
			} else {
				// toastTips("暂时无法访问网络");
				if (mescroll && mescroll != "N") {
					mescroll.endErr("暂时无法访问网络");
				}
				reject(error);
			}
		}).catch(response => {
			if ((!mescroll || mescroll != "N")&&loadingFlag!=false) { //如果是上下拉刷新，下拉刷新的时候显示，上拉加载不显示，非上下拉刷新都显示
				uni.hideLoading();
			}
			toastTips("出错了，请稍后重试");
			if (mescroll && mescroll != "N") {
				mescroll.endErr("出错了，请稍后重试");
			}
			//console.log("请求出错了", response);
			reject(response);
		})
	})
	return promise
};

/**
 * 方法名称: 上传单文件
 * 方法注释: 文件上传成功之后需要把返回的json转成字符串作为参数提交更新,比如logo:"{"fileName":"11111.png","filePath":"			  /storage/shop/77/info/logo.png","fileSize":255}"
 * 传入参数: attachment->手机获取的照片二进制文件, attachmentsFolder->保存在服务器图片的路径，比如shopLogo存放的店铺logo
 * 返回数值: 服务器文件路径的json数据,json格式为data.list,其中单文件上传取第一个元素即:data.list[0]={"fileName":"11111.png","filePath":"/storage/shop/77/info/logo.png","fileSize":255}
 */
function uploadFile(attachment,fromData) {
	let promise = new Promise(function(resolve, reject) {
		showLoading("加载中,请稍后...");
		let httpDefaultOpts = {
			url: URL_BASE + '/upload/upload/file.do',
			filePath: attachment,
			name: 'file',
			formData: {
				"fileType": attachmentsFolder
			},
			header: {
				'X-Requested-With': 'XMLHttpRequest',
				"token": uni.getStorageSync("tokens") || ' ',
				"wid": uni.getStorageSync("wid") || ' '
			}
		}
		//console.log("单文件上传的参数 = ", httpDefaultOpts);
		uni.uploadFile(httpDefaultOpts).then(
			(data) => {
				uni.hideLoading();
				let [error, res] = data;
				if (res) {
					if (res.data.constructor !== Object) {
						res.data = JSON.parse(res.data);
					}
					//console.log("单文件上传的结果 = ", res);
					if (res.data.returncode === 0) {
						resolve(res.data)
					} else if (res.data.returncode === 1009) {
						removeStorage();
						openLoginPage();
					} else {

						toastTips(res.data.message).then(() => {
							reject(res.data);
						});
					}
				} else {
					toastTips("暂时无法访问网络");
				}
			}
		).catch(
			(response) => {
				uni.hideLoading();
				reject(response)
			}
		)
	})
	return promise;
}
/**
 * 方法名称: 缓存数据到本地
 * 方法注释: 可已通过setStorageSync相对应的getStorageSync传入相应的key值获取缓存数据
 * 传入参数: res 要缓存的数据
 * 返回数值: 无
 */
const setStorage = function(res) {
	uni.setStorageSync("hasLogin", true);
	uni.setStorageSync("user", res.data);
};
/**
 * 方法名称: 清除本地缓存的数据
 * 方法注释: 清除特定的userName/hasLogin/token数据
 * 传入参数: 无
 * 返回数值: 无
 */
const removeStorage = function() {
	uni.setStorageSync("hasLogin", false);
	uni.removeStorage({
		key: 'user',
	}).then(() => {
		uni.removeStorage({
			key: 'tokens'
		});
		uni.removeStorageSync("wid");
		uni.removeStorageSync("unionid");
	});
	uni.removeStorageSync("tokens");
	uni.removeStorageSync("wid");
	uni.removeStorageSync("unionid");
};

/**
 * 方法名称: 获取服务器路径前缀
 * 方法注释: 
 * 传入参数: 无
 * 返回数值: 服务器路径前缀
 */
function getBaseUrl() {
	return URL_BASE;
}
/**
 * 方法名称: 获取图片路径前缀
 * 方法注释: 
 * 传入参数: 无
 * 返回数值: 图片路径前缀
 */
function getBaseImagePath() {
	return IMAGE_PATH;
}

/**
 * 方法名称: 获取当前用户的信息
 * 方法注释: 
 * 传入参数: mescroll(上下拉刷新，非必传)
 * 返回数值: 用户信息数据
 */
function getUserInfo(mescroll) {

	let thePromise = new Promise(function(resolve, reject) {
		let url = "api/ncrb/";
		let data = {
			action : 'userinfo'
		};
		post(url, data, mescroll).then(res => {
			if(res.data.nickname){
				res.data.nickname = decodeURI(res.data.nickname);
			}
			uni.setStorageSync("user",res.data);
			uni.setStorageSync("haslogin",true);
			resolve(res.data);
		}).catch(res => {
			reject(res);
		})
	})
	return thePromise;
}
/**
  * 方法名称: 修改用户信息
  * 方法注释: 修改用户信息成功后会直接再读取用户信息,保证获取用户的信息最新
  * 传入参数: data 要修改的用户信息参数,比如修改昵称的话传{nick:"曾先森"}
  * 返回数值: 修改是否成功的返回值
*/
function updateUserInfo(data) {

	let thePromise = new Promise(function(resolve, reject) {
		let url = 'api/ncrb/';
		data.action = "upuserinfo";
		data.nickname = encodeURI(data.nickname);
		post(url,data).then(res => {
			getUserInfo();
			resolve(res.data);
		}).catch(res => {
			reject(res);
		})
	})
	return thePromise;
}

/**
 * 方法名称: 重新跳到登录页
 * 方法注释: 需要用户登录或登陆失效时才使用此方法
 * 传入参数: 无
 * 返回数值: 无
 */
const openLoginPage = function() {
	// uni.reLaunch({
	// 	url: "/pages/user/login/login"
	// });
	// let pages = getCurrentPages();
	//console.log("pagespagespages = ",pages);
	var pages = getCurrentPages();
	var page = pages[pages.length - 1];
	var route = page.route;
	if(route && route == "pages/user/login/login"){
	}else{
		uni.navigateTo({
			url:"/pages/user/login/login",
			animationType:"slide-in-bottom",
			animationDuration: 200
		})
	}
}
//toast提示
const toastTips = function(txt) {
	return uni.showToast({
		title: txt,
		icon: "none"
	})
};
//toast提示，可以设置等待时长
const toastTipsTime = function(txt, time) {
	return uni.showToast({
		title: txt,
		duration: time,
		icon: "none"

	})
};
//弹窗提示
const showModal = function(txt) {
	return uni.showModal({
		title: '提示',
		content: txt,
		showCancel: false,
	})
};
//loading
const showLoading = function(txt) {
	setTimeout(function() {
		uni.hideLoading();
	}, 15000);
	return uni.showLoading({
		title: txt,
		mask: false //数据请求时App界面无法操作
	});
};
/**
 * 方法名称: get请求
 * 方法注释: url为必填，data和mescroll为非必填
 * 传入参数: url->请求的接口路径，data->请求的参数 mescroll->上下拉组件 laodingFlag->是否显示加载动画传bool值
 * 返回数值: 请求之后的json数据
 */
function get(url, data, mescroll,loadingFlag) {
	const option = {
		"url": url,
		"method": "get"
	}
	return request(option, data, mescroll,loadingFlag);
}
/**
 * 方法名称: post请求
 * 方法注释: url为必填，data/mescroll/loadingFlag为非必填
 * 传入参数: url->请求的接口路径，data->请求的参数 mescroll->上下拉组件 laodingFlag->是否显示加载动画传bool值
 * 返回数值: 请求之后的json数据
 */
function post(url, data, mescroll,loadingFlag) {
	const option = {
		"url": url,
		"method": "post"
	}
	if (!data) {
		data = {}
	}
	return request(option, data, mescroll,loadingFlag);
}
/**
 * 方法名称: post请求
 * 方法注释: url为必填，data和mescroll为非必填
 * 传入参数: url->请求的接口路径，data->请求的参数 mescroll->上下拉组件 loadingFlag->是否显示加载动画传bool值
 * 返回数值: 请求之后的json数据
 */
function json(url, data, mescroll,loadingFlag) {
	const option = {
		"url": url,
		"method": "json"
	}
	return request(option, data, mescroll,loadingFlag);
}
/* 
	只是返回用户登录状态的bool值，不会跳转到登录界面
*/
function loginState() {
	return uni.getStorageSync("hasLogin");
}
/* 
	用户登录之后才能进行下一步的操作，否则跳登录页,返回用户是否登录的bool值 
*/
function alreadyLogin() {
	let loginState = uni.getStorageSync("hasLogin");
	console.log("loginStateloginState == ",loginState);
	if (!loginState || loginState === false) {
		removeStorage();
		openLoginPage();
	}
	return loginState;
}

export default {
	request,
	get,
	post,
	json,
	loginState,
	alreadyLogin,
	openLoginPage,
	setStorage,
	removeStorage,
	getUserInfo,
	updateUserInfo,
	toastTips,
	toastTipsTime,
	showModal,
	showLoading,
	getBaseUrl,
	getBaseImagePath
	
}
