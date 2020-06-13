<template>
	<view class="page user">
		<view class="panel">
			<view class="cell line-bottom">
				<text class="label">头像</text>
				<view class="cell-bd" @tap="openPopup('headimgurl')">
					<image class="headimgurl" :src="userInfo.headimgurl ? userInfo.headimgurl : ''"></image>
					<image class="arrow__right" src="/static/img/common/arrow_right.png"></image>
				</view>
			</view>
		</view>
		<view class="line20"></view>
		<view class="panel">
			<view class="cell line-bottom">
				<text class="label">真实姓名</text>
				<view class="cell-bd" @tap="updateRealname">
					<text>{{userInfo.realname ? userInfo.realname : '未设置'}}</text>
					<image class="arrow__right" src="/static/img/common/arrow_right.png"></image>
				</view>
			</view>
			<view class="cell line-bottom">
				<text class="label">昵称</text>
				<view class="cell-bd" @tap="openPopup('nickname')">
					<text>{{userInfo.nickname ? userInfo.nickname : '未设置'}}</text>
					<image class="arrow__right" src="/static/img/common/arrow_right.png"></image>
				</view>
			</view>
		</view>
		<view class="line20"></view>
		<view class="panel">
			<view class="cell line-bottom">
				<text class="label">手机号</text>
				<view class="cell-bd" @tap="updateMobile">
					<text>{{userInfo.mobile ? userInfo.mobile : '未设置'}}</text>
					<image class="arrow__right" src="/static/img/common/arrow_right.png"></image>
				</view>
			</view>
		</view>
		<view class="line20"></view>
		<view class="panel line-bottom" >
			<view class="cell line-bottom">
				<text class="label">性别</text>
				<view class="cell-bd" @tap="openPopup('sex')">
					<text>{{sexText}}</text>
					<image class="arrow__right" src="/static/img/common/arrow_right.png"></image>
				</view>
			</view>
			<view class="cell line-bottom">
				<text class="label">生日</text>
				<picker class="cell-bd" mode="date"  @change="bindDateChange">
						<text>{{userInfo.birthday ? userInfo.birthday : '未设置'}}</text>
						<image class="arrow__right" src="/static/img/common/arrow_right.png"></image>
				</picker>
			</view>
			<view class="cell line-bottom">
				<text class="label">地区</text>
				<view class="cell-bd" @tap="openPopup('country')">
					<text>{{region}}</text>
					<image class="arrow__right" src="/static/img/common/arrow_right.png"></image>
				</view>
			</view>
			<view class="cell line-bottom">
				<text class="label">单位</text>
				<view class="cell-bd" @tap="updateCompany">
					<text>{{userInfo.company ? userInfo.company : '未设置'}}</text>
					<image class="arrow__right" src="/static/img/common/arrow_right.png"></image>
				</view>
			</view>
		</view>
		<!-- 登录按钮 -->
		<view style="padding-bottom: 80rpx;"><view class="circle-corner-buttons" @click="userLogout">退出登录</view></view>
		
		
		<!-- 弹窗 -->
		<uni-popup ref="popup" type="bottom">
			<view class="" v-if="showSexPopup">
				<view class="sexPopup" @tap="updateSex('1')">男</view>
				<view class="sexSpace"></view>
				<view class="sexPopup" @tap="updateSex('2')">女</view>
				<view class="sexSpace"></view>
			</view>
			<view class="" v-if="showWXPopup">
				<view class="sexPopup" @tap="syncWechat">{{showText}}</view>
				<view class="sexSpace"></view>
				<view class="sexPopup" @tap="cancel()">取消</view>
				<view class="sexSpace"></view>
			</view>
		</uni-popup>
	</view>
</template>

<script>
	import uniPopup from "@/components/uni-popup/uni-popup.vue"
	export default {
		components: {
			uniPopup
		},
		data() {
			return {
				userInfo: {},
				showSexPopup: false,
				showWXPopup: false,
				showText: '',
				region: '',
				sexText: ''
			}
		},
		onShow() {
			this.getUserInfo();
		},
		methods: {
			getUserInfo(){
				this.request.getUserInfo().then(res => {
					this.userInfo = res;
					if(this.userInfo.sex === '1'){
						this.sexText = '男'
					}else if(this.userInfo.sex === '2'){
						this.sexText = '女'
					}else{
						this.sexText = '未设置'
					}
					this.userInfo.birthday = this.util.timestampToDateString(this.userInfo.birthday);
					if(this.userInfo.country){
						if(this.userInfo.city){
							this.region = this.userInfo.country + ',' + this.userInfo.province + ',' + this.userInfo.city;
						}else if(this.userInfo.province){
							this.region = this.userInfo.country + ',' + this.userInfo.province;
						}else{
							this.region = this.userInfo.country;
						}
					}else{
						this.region = "未设置";
					}
				})
			},
			//修改真实姓名
			updateRealname(){
				uni.navigateTo({
					url: '/pages/user/userInfo/userRealname?realname='+this.userInfo.realname
				})
			},
			//修改手机号
			updateMobile(){
				uni.navigateTo({
					url:'/pages/user/userInfo/userMobile'
				})
			},
			//修改生日
			bindDateChange(e){
				console.log("时间："+e.target.value);
				this.userInfo.birthday = this.util.dateStringToTimestamp(e.target.value);
				console.log("时间戳："+this.userInfo.birthday);
				this.cancel();
				let url = 'api/ncrb/';
				let sendData = {
					action: 'upuserinfo',
					birthday: this.userInfo.birthday
				}
				this.request.get(url,sendData).then(res =>{
					if(res.code == 200){
						this.request.toastTips("更新生日成功");
						this.userInfo.birthday = e.target.value;
					}else{
						this.request.toastTips("更新生日失败");
					}
				})
			},
			//修改单位
			updateCompany(){
				uni.navigateTo({
					url:'/pages/user/userInfo/userCompany?company='+this.userInfo.company
				})
			},
			//弹窗
			openPopup(value){
				console.log(value);
				if(!value){
					return false;
				}
				if(value == 'sex'){
					this.showWXPopup = false;
					this.showSexPopup = true;
				}else if(value == 'nickname'){
					this.showWXPopup = true;
					this.showSexPopup = false;
					this.showText = '同步微信昵称';
				}else if(value == 'headimgurl'){
					this.showWXPopup = true;
					this.showSexPopup = false;
					this.showText = '同步微信头像';
				}else if(value == 'country'){
					this.showWXPopup = true;
					this.showSexPopup = false;
					this.showText = '同步微信地区';
				}
				this.$refs.popup.open()
			},
			//弹窗-取消
			cancel(){
				this.$refs.popup.close()
			},
			//同步微信
			syncWechat(){
				this.cancel();
				let url = "api/ncrb/";
				let sendData = {
					action: 'connect',
					mod: 'upwxinfo',
				}
				this.request.get(url,sendData).then(res =>{
					console.log("res: " + JSON.stringify(res));
					if(res.code === 200){
						this.request.toastTips("同步微信成功");
						setTimeout(this.getUserInfo(),2000);
					}else{
						this.request.toastTips(res.message)
					}
				})
			},
			//修改性别
			updateSex(value){
				this.cancel();
				let url = 'api/ncrb/';
				let sendData = {
					action: 'upuserinfo',
					sex: value
				}
				this.request.get(url,sendData).then(res =>{
					if(res.code == 200){
						this.request.toastTips(res.message);
						this.userInfo.sex = value
						if(value === '1'){
							this.sexText = '男'
						}else{
							this.sexText = '女'
						}
					}else{
						this.request.toastTips("更新失败");
					}
				})
			},
			//退出登录
			userLogout(){
				this.request.removeStorage();
				uni.navigateBack({})
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
	.headimgurl{
		width: 35px;
		height: 35px;
		border-radius: 40px;
		margin-left: auto;
	}
	.sexPopup{
		width: auto;
		height: 80rpx;
		background-color: #ffffff;
		line-height: 80rpx;
		text-align: center;
		border-radius: 10rpx;
		margin: 0rpx 20rpx;
	}
	.sexSpace{
		width: auto;
		height: 26rpx;
	}
	.circle-corner-buttons{
		margin: 0 auto;
		width: 275px;
		height: 40px;
		line-height: 40px;
		border-radius: 5px;
		text-align: center;
		color: #FFFFFF;
		background-color: #264980;
		/* background: linear-gradient(90deg,rgba(87,173,254,1) 0%,rgba(38,126,255,1) 100%); */
		font-size: 15px;
		margin-top: 80rpx;
		margin-bottom: 80rpx;
	}
</style>
