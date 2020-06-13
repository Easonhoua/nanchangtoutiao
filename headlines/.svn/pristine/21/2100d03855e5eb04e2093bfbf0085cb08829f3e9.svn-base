<template>
	<view class="content-white">
		<image class="login-bg" src="/static/img/login/bg.png" mode=" widthFix"></image>
		<image class="login-close" src="/static/img/user/login-close.png" @click="back"></image>
	<view class="loginmain">
		<view class="logobox">
				<image class="logo" src="/static/img/login/l_logo@3x.png"></image>
		</view>
		<!-- 手机号输入 -->
		<view class="phone-view" style="margin-top: 100rpx;">
			<text style="width: 75rpx;">+86</text>
			<view class="phone-line"></view>
			<input class="phone-input" type="number" placeholder-style="color: #989898" v-model="data.mobilePhone" placeholder="请输入手机号码" />
		</view>
		<!-- 验证码输入 -->
		<view class="phone-view">
			<input class="phone-input" type="number" v-model="data.code" placeholder-style="color: #989898" placeholder="请输入验证码" />
			<view v-if="timeDownFlag" class="text-code" style="color: #000000;">{{timeDown}}秒</view>
			<view v-else class="text-code" @click="getVerifyCode">获取验证码</view>
		</view>
		<view v-if="codeLogin" class="text-tip">未注册的手机号验证后自动创建南昌头条账户</view>
		<!-- 登录按钮 -->
		<view class="circle-corner-button" style="margin-top: 55rpx;" @click="loginButonClick">{{loginButtonTitle}}</view>
		
		<!-- 第三方登录 -->
		<view class="auth-view">
			<image class="auth-image" src="/static/img/user/login-weixin.png" mode="scaleToFill" @click="oauthLogin('weixin')"></image>
			<!-- <image class="auth-image" style="margin-left: auto;" src="/static/img/user/login-qq.png" mode="scaleToFill" @click="oauthLogin('qq')"></image> -->
		</view>
		<view class="bottom-view">
		登录代表同意<text class="deal-text" @click="readPrivacy">《南昌头条隐私政策》</text>以及<text class="deal-text" @click="readUserDeal">《南昌头条用户协议》</text>,并授权使用您的南昌头条账号信息(如昵称、头像)以便您统一管理
		</view>
	</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				fatherPage:"",//上一级界面
				codeLogin: true,//验证码登录
				timeDown: 120,
				timeDownFlag:false,
				isSendCode: false,//是否已发送验证码
				loginButtonTitle: "登录",
				data:{
					mobilePhone:"",//手机号
					code:"",//验证码
					type:"1",//登录方式:1:手机验证码、2:密码、3:QQ、4:微信、5:微博
					//微信相关
					unionid:"",
					appopenid:"",
					nickname:"",
					headimgurl:"",
					sex:"",
					city:"",
					province:"",
					country:""
				},
				hashCode:''//hash码
			}
		},
		onLoad(option) {
			if(option.fatherPage){
				this.fatherPage = option.fatherPage;
			}
			uni.setStorageSync("hasLogin", false);
			//this.loginButtonTitle = this.codeLogin ? "获取短信验证码" : "登录";
			//获取hash码
			this.getHashCode();
		},
		methods: {
			back:function(){
				if(this.fatherPage == "setting"){
					uni.switchTab({
						// url:"/pages/user/userIndex/user"
						url:"/pages/user/user"
					})
				}else{
					uni.navigateBack({})
				}
				
			},
			//获取hash码
			getHashCode(){
				let url = "api/ncwb/";
				let sendData = {
					action:'formhash'
				}
				this.request.get(url,sendData).then(res => {
					if(res.code === 200){
						this.hashCode = res.data;
						console.log(this.hashCode);
					}
				})
			},
			//获取短信验证码
			getVerifyCode() {
				if (!this.checker.checkPhone(this.data.mobilePhone)) return;
				let data = {
					action: 'sendsec',
					formhash: this.hashCode,
					mobile: this.data.mobilePhone
				}
				this.request.get("api/ncrb/", data).then(res => {
					if(res.code === 200){
						console.log(res);
						this.isSendCode=true;
						this.timeDownFlag = true;
						var time = 120;
						let a = setInterval(() => {
							this.timeDown = time;
							if (time <= 0) {
								this.timeDownFlag = false;
								clearInterval(a);
							}
							time--;
						}, 1000);
					}
				}).catch(res=>{
					this.isSendCode = false;
					this.timeDownFlag = false;
					uni.showToast({
						title: '获取验证码失败',
						icon: 'none',
						duration: 1500
					})
				})
			},
			//登录按钮
			loginButonClick() {
				if (!this.checker.checkPhone(this.data.mobilePhone)) return;
				// uni.navigateTo({
				// 	url:"/pages/user/bindingWX/bindingWX"
				// })
				if (this.codeLogin) {//验证码登录
					// if(this.isSendCode){//已经发送验证码
						this.checkLogin();
					// }else{//获取验证码
					// 	uni.showToast({
					// 		title: '请先获取验证码',
					// 		icon: 'none',
					// 		duration: 1500
					// 	})
					// }
					//this.checkLogin();
				} 
			},
			// bindingPhone:function(){
			// 	if (!this.checker.checkPhone(this.data.mobilePhone)) return;
			// 	this.data.userName = this.data.mobilePhone;
			// 	this.request.get("/memberapi/api/members/bindingPhone.do",this.data).then(res=>{
			// 		//this.checkLogin();
			// 	})
			// },
			//短信验证码登录
			checkLogin:function(){
				this.data.type = "1";
				//清空用户缓存信息
				uni.removeStorageSync("tokens");
				uni.removeStorageSync("wid");
				uni.removeStorageSync("unionid");
				let url = "api/ncrb/";
				let sendData = {
					action : 'smslogin',
					mobile : this.data.mobilePhone,
					smsseccode : this.data.code
				};
				this.request.get(url, sendData).then(res => {
					if(res.code === 200){
						console.log(res);
						uni.setStorageSync("tokens",res.data.token);
						uni.setStorageSync("wid",res.data.wid);
						uni.setStorageSync("hasLogin",true);
						//请求成功后置空验证码和还原计时
						this.data.code = '';
						this.isSendCode = false;
						this.timeDownFlag = false;
						if(!res.data.unionid){//unionid不存在，则说明第一次登陆没有绑定微信，跳转绑定微信页面
							uni.navigateTo({
								url:"/pages/user/bindingWX/bindingWX"
							})
						}else{//unionid存在，则已绑定微信，跳转用户信息页面
							uni.setStorageSync("unionid",res.data.unionid);
							this.readUserInfo();
						}
					}
					
				})
			},
			//读取用户信息 
			readUserInfo:function(){
				this.request.getUserInfo().then(res=>{
					uni.navigateBack({});
				})
			},
			//获取南昌头条隐私政策
			readPrivacy: function() {
				let webUrl = "yszc";
				this.util.gotoWebView(webUrl,"南昌头条隐私政策");
			},
			//获取南昌头条用户协议
			readUserDeal:function(){
				let webUrl = "yhxy";
				this.util.gotoWebView(webUrl,"南昌头条用户协议");
			},
			// 第三方授权登录
			oauthLogin(type) {
				var self = this;
				uni.getProvider({//获取服务供应商。
				    service: 'oauth',//服务类型：鉴权登录
				    success: function (res) {
				        //console.log(res.provider)
						if(~res.provider.indexOf('weixin')&&type=='weixin'){
							uni.login({
							    provider: 'weixin',
							    success: function (loginRes) {
							        //console.log("loginRes = " + loginRes);
									self.data.type = "4";
									uni.getUserInfo({
										provider: 'weixin',
										  success: function (infoRes) {//获取微信账户信息
											console.log('infoRes = ' + infoRes);
											console.log('userInfo = ',infoRes.userInfo);
											self.data.appopenid = infoRes.userInfo.openId;
											self.data.nickname = infoRes.userInfo.nickName;
											self.data.headimgurl = infoRes.userInfo.avatarUrl;
											// self.data.sex = infoRes.userInfo.sex;
											self.data.city = infoRes.userInfo.city;
											self.data.province = infoRes.userInfo.province;
											self.data.country = infoRes.userInfo.country;
											self.data.unionid = infoRes.userInfo.unionId;
											//console.log("data = ",self.data);
											//微信登录
											self.wxCheckLogin();
										  }
									});
							    }
							});
						}
				    }
				});
			},
			//微信登录
			wxCheckLogin(){
				if(this.data.type != "4"){
					this.request.toastTipsTime("登陆失败",1500);
					return false;
				}
				uni.removeStorageSync("tokens");
				uni.removeStorageSync("wid");
				uni.removeStorageSync("unionid");
				let url = "api/ncrb/";
				let sendData = {
					action : "wxlogin",
					appopenid : this.data.appopenid,
					unionid : this.data.unionid,
					nickname : this.data.nickname,
					headimgurl : this.data.headimgurl,
					sex : this.data.sex,
					city : this.data.city,
					province : this.data.province,
					country : this.data.country
				};
				console.log("sendData = ",sendData);
				this.request.get(url,sendData).then(res =>{
					if(res.code === 200){
						console.log("微信登录成功：",res);
						uni.setStorageSync("tokens",res.data.token);
						uni.setStorageSync("wid",res.data.wid);
						uni.setStorageSync("unionid",this.data.unionid);
						uni.setStorageSync("hasLogin",true);
						this.readUserInfo();
					}
				}).catch(res=>{
					console.log("微信登录失败 res = ",res);
					if(this.data.type == 4){//第三方登录
						//this.request.toastTipsTime("您还未绑定手机号,请先绑定手机号",2000);
						this.request.toastTipsTime("微信登陆失败",2000);
					}
				})
			}
		}
	}
</script>

<style lang="scss">
	/* 白色背景页 */
	.content-white {
		display: flex;
		flex-direction: column;
		background-color: #FFFFFF;
		width: 100vw;
		font-size: 28rpx;
	}
	.login-close {
		position: absolute;
		top: 60rpx;
		left: 40rpx;
		width: 40rpx;
		height: 40rpx;
		z-index: 6;
	}
.loginmain{
	background: none;
}
	.login-bg {
		width: 750rpx;
		height: 328rpx;
	}

	.phone-view {
		width: 550rpx;
		height: 100rpx;
		margin-left: 100rpx;
		/* margin-top: 96.52rpx; */
		/* border-radius: 12.5rpx;
	border: 1.38rpx solid #4490FD; */
		display: flex;
		flex-direction: row;
		align-items: center;
		border-bottom: 1rpx solid #EEEEEE;
	}

	.phone-icon {
		width: 24.3rpx;
		height: 38.88rpx;
		padding: 35.41rpx;
	}

	.phone-line {
		width: 2rpx;
		height: 34rpx;
		z-index: 100;
		/* margin-left: 20rpx; */
		margin-right: 20rpx;
		background-color: #EEEEEE;

	}

	.phone-input {
		width: 450rpx;
		font-size: 30rpx;
		text-align: left;
	}

	.text-tip {
		font-size: 24rpx;
		color: #989898;
		margin-left: 100rpx;
		margin-top: 12rpx;
	}

	.code-view {
		width: 638.88rpx;
		height: 88.88rpx;
		margin-left: 55.55rpx;
		margin-top: 27.77rpx;
		border-radius: 12.5rpx;
		border: 1.38rpx solid #D8D8D8;
		display: flex;
		flex-direction: row;
		align-items: center;
	}

	.text-code {
		font-size: 28rpx;
		width: 180rpx;
		color: #264980;
		text-align: right;
		background-color: #FFFFFF;
		
	}

	.code-icon {
		width: 24.3rpx;
		height: 38.88rpx;
		padding: 35.41rpx;
	}

	.code-line {
		width: 2rpx;
		height: 47.22rpx;
		z-index: 100;
		background-color: #D8D8D8;
	}

	.code-input {
		width: 308.33rpx;
		margin-left: 20.8rpx;
		font-size: 27.77rpx;
	}

	.login-left {
		margin-left: 100rpx;
		height: 80rpx;
		font-size: 30rpx;
		background: linear-gradient(to right, #57ADFE, #267EFF);
		-webkit-background-clip: text;
		color: transparent;
	}

	.login-right {
		margin-left: auto;
		margin-right: 100rpx;
		height: 80rpx;
		font-size: 30rpx;
		background: linear-gradient(to right, #57ADFE, #267EFF);
		-webkit-background-clip: text;
		color: transparent;

	}

	.password-eye {
		width: 50rpx;
		height: 50rpx;
	}

	.auth-view {
		position: fixed;
		left: 300rpx;
		bottom: 250rpx;
		width: 120rpx;
		display: flex;
		flex-direction: row;
	}

	.auth-image {
		width: 120rpx;
		height: 120rpx;
		border-radius: 120rpx;
	}

	.deal-text {
		font-size: 24rpx;
		background: linear-gradient(to right, #57ADFE, #267EFF);
		-webkit-background-clip: text;
		color: transparent;
	}

	.bottom-view {
		position: fixed;
		bottom: 80rpx;
		left: 30rpx;
		width: 690rpx;
		height: 80rpx;
		line-height: 40rpx;
		font-size: 24rpx;
		color: #989898;
	}
	
	.display-row {
	    display: flex;
	    -webkit-box-orient: horizontal;
	    -webkit-box-direction: normal;
	    flex-direction: row;
	    -webkit-box-align: center;
	    align-items: center;
	}
	/* 带圆角的button */
	.circle-corner-button {
		
		background:linear-gradient(90deg,rgba(172,192,212,1) 0%,#264980);
		
	}
	.logobox{
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.logo{
		width: 341rpx;
		height:87rpx;
	}
</style>
