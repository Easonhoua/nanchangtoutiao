<template>
	<view class="content">
		
		<list-image-cell titleText="头像" useMode="choose" autoUpload="YES" imageFolder="userLogo" :image="headimgurl" @uploadFinish="uploadUserHeaderCallBack" style="margin-top: 30rpx;"></list-image-cell>
		<list-text-cell :showRightArrow='true' leftText="昵称" :rightText="nickname" @cellClick="updateNickName"></list-text-cell>
		<picker mode="date"  @change="bindDateChange">
			<list-text-cell :showRightArrow='true' leftText="生日" :rightText="birthday"></list-text-cell>
		</picker>
		<!-- <list-text-cell :showRightArrow='true' leftText="收货地址" rightText="查看" @cellClick="gotoShopAddress"></list-text-cell> -->
		<!-- 登录按钮 -->
		<view class="circle-corner-button" style="margin-top: 120rpx;" @click="userLogout">退出登录</view>
		<view v-if="showNickInput" class="back-view">
			<view class="center-view">
				<view class="center-title" style="margin-top: 50rpx;">修改昵称</view>
				<input class="nick-input"  maxlength="10" placeholder="昵称不可大于10个汉字或字符" v-model="nickname"/>
				<view class="display-row">
					<view class="center-button"  @click="cancelClick">取消</view>
					<view class="center-line"></view>
					<view class="center-button" @click="sureClick">确定</view>
				</view>
			</view>
		</view>
		
	</view>
</template>

<script>
	import listTextCell from "@/components/list-cell-view/list-text-cell.vue"
	import listImageCell from "@/components/list-cell-view/list-image-cell.vue"

	export default {

		components: {
			listTextCell,
			listImageCell
		},

		data() {
			return {
				headimgurl: "",
				nickname: "",
				birthday: "设置",
				showNickInput:false
			}
		},
		onLoad() {
			this.request.getUserInfo().then(res => {
				this.headimgurl = res.headimgurl;
				this.nickname = res.nickname;
				this.birthday = this.util.timestampToDateString(res.birthday);
				if(!this.birthday){
					this.birthday = "设置";
				}
			})
		},
		methods: {
			// 退出登录
			userLogout:function(){
				this.request.removeStorage();
				uni.navigateBack({})
			},
			nickInput:function(event){
				//console.log("eventevent = ",event.detail.value.length);
				if(event.detail.value.length>9){
					this.request.toastTips("昵称不可大于10个汉字或字符");
				}
			},
			uploadUserHeaderCallBack: function(imageJson) {
				this.updateUserInfo({photo:imageJson},"更新头像成功");
			},
			updateNickName:function(){
				//console.log("8888888888");
				this.showNickInput = true;
				
			},
			bindDateChange: function(e) {
				this.birthday = e.target.value;
				console.log("this.birthday = ",this.birthday);
				this.birthday = this.util.dateStringToTimestamp(this.birthday);
				this.updateUserInfo({birthday:this.birthday},"更新生日成功");
			},
			cancelClick:function(){
				this.showNickInput = false;
			},
			sureClick:function(){
				if(!this.checker.checkNullText(this.nickname,"昵称不能为空")) return;
				this.updateUserInfo({nickname:this.nickname},"更新昵称成功")
			},
			updateUserInfo:function(data,tip){
				this.request.updateUserInfo(data).then(res => {
					this.showNickInput = false;
					if(tip == "更新生日成功"){
						this.birthday = this.util.timestampToDateString(this.birthday);
					}
					this.request.toastTips(tip);
				})
			},
			gotoShopAddress:function(){
				uni.navigateTo({
					url:"/pages/purchase/shoppingAddressList"
				})
			}
			
		}
	}
</script>

<style>
	.back-view
	{
		position: absolute;
		left: 0;
		top: 0;
		width: 100vw;
		height: 100vh;
		background: rgba(0, 0, 0, 0.3);
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		z-index: 10;
	}
	.center-view {
		width: 600rpx;
		z-index: 100;
		background-color: #FFFFFF;
		text-align: center;
		border-radius: 16rpx;
	}
	.center-title{
		font-size: 32rpx;
	}
	.nick-input{
		border: 1rpx solid #E5E5E5;
		padding: 20rpx;
		margin: 50rpx;
		height: 80rpx;
		font-size: 30rpx;
	}
	.center-line{
		width: 2rpx;
		height: 100rpx;
		background-color: #E5E5E5;
		z-index: 8;
	}
	.center-button{
		color: #264980;
		width: 50%;
		height: 100rpx;
		line-height: 100rpx;
		border-top: 1rpx solid #E5E5E5;
	}
	
</style>
