<template>
	<view class="user">
		<view class="panel panel-form">
			<view class="cell line-bottom">
				<text class="label">手机号</text>
				<view class="cell-bd-input">
					<input class="input" type="number" placeholder="请输入手机号" placeholder-style="color:#e5e5e5" v-model="mobile"/>
				</view>
			</view>
			<view class="cell">
				<text class="label">验证码</text>
				<view class="cell-bd-input cell-bd-input-btn">
					<input class="input" type="number" placeholder="请输入验证码" placeholder-style="color:#e5e5e5" v-model="code"/>
					<view v-if="timeDownFlag" class="text-code" style="color: #000000;">{{timeDown}}秒</view>
					<view v-else class="captcha" @click="getVerifyCode">获取验证码</view><!-- 显示倒计时增加class：active -->
				</view>
			</view>
		</view>
		<view class="btnbar">
			<view class="btn" @tap="loginButonClick">确定</view>
		</view>
	</view>
	
</template>

<script>
	export default {
		data() {
			return {
				hashCode: '',
				mobile: '',
				code: '',
				isSendCode: false,
				timeDown: 120,
				timeDownFlag: false
			}
		},
		onLoad() {
			this.getHashCode();
		},
		methods: {
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
				if (!this.checker.checkPhone(this.mobile)) return;
				let data = {
					action: 'sendsec',
					formhash: this.hashCode,
					mobile: this.mobile
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
				if (!this.checker.checkPhone(this.mobile)) return;
				if(this.isSendCode){//已经发送验证码
					this.updateMobile();
				}else{//获取验证码
					uni.showToast({
						title: '请先获取验证码',
						icon: 'none',
						duration: 1500
					})
				}
			},
			updateMobile(){
				let url = 'api/ncrb/';
				let sendData = {
					action: 'mbbind',
					mobile: this.mobile,
					smsseccode: this.code
				}
				this.request.get(url,sendData).then(res =>{
					if(res.code == 200){
						this.request.toastTips(res.message);
					}else{
						this.request.toastTips("绑定失败");
					}
				})
			}
		}
	}
</script>

<style lang="scss">
	@import "../../../common/css/common.scss";
	@import "../../../common/css/other.scss";
	page{
		background-color: #F2F0F3;
	}
</style>
