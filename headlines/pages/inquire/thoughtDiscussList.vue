<template>
	<view class="inquiredetails">
		<view class="status-bar"></view>
		<view class="header">
			<image @click="goBack()" class="back" src="/static/img/common/back@3x.png"></image>
			<image class="logo" src="../../static/img/home/bitmap@3x.png"></image>
			<view></view>
		</view>
		<mescroll-uni @down="downCallBack"  @init ="initMescroll" @up="upCallback">
		<view class="bg" style="margin-top: 150upx;position: absolute;">
			<image class="img" src="../../static/img/home/sxdtl_bg.png" mode="widthFix"></image>
		</view>
			<view class="main" style="width: 100%;">
				<view class="inner">
					<view class="message-btn" @click="toReleaseMessage()">
						<image class="btn" src="../../static/img/home/sxdtl_btn.png"></image>
					</view>
					<view class="listbox">
						<view class="list" v-for="(item,index) in dataList" :key="index"  @click="toDetail(item)">
							<view class="top">
								<text class="txt" style="color: #DF0000;">留言回复</text>
								<text class="more">更多</text>
							</view>
							<view class="list-con">
								<view class="title">{{item.title}}</view>
								<view class="txt">{{item.content}}</view>
							</view>
						</view>
					</view>
					<!-- <view class="listbox">
						<view class="list message-show">
							<view class="left">
								<text class="txt-top">留言</text>
								<text class="txt-bottom">选登</text>
							</view>
							<view class="righttxt">异地报销咋就那么难异地报销咋就那么难异地报销咋就那么难异地报销咋就那么难异地报销咋就那么难</view>
						</view>
					</view> -->
				</view>
			</view>
		
		</mescroll-uni>
	</view>
</template>

<script>
	import utils from '@/common/js/util.js';
	export default {
		data() {
			return {
				mescroll: '',
				dataList: [],
			};
		},
		onShow() {
			if(this.mescroll){
				this.downCallBack(this.mescroll);
			}
		},
		methods: {
			initMescroll(mescroll) {
				this.mescroll = mescroll;
			},
			downCallBack(mescroll) {
				this.dataList = [];
				mescroll.resetUpScroll();
			},
			upCallback(mescroll) {
				const url = 'api/ncrb/';
				let data = {
					action: 'wenzheng',
					type: 12,
					loadnum: (mescroll.num - 1) * mescroll.size,
					tpp: mescroll.size,
				};
				var that = this;
				this.request.get(url, data, mescroll).then(res => {
					if (res.code == 200) {
						let newData = res.data;
						newData.forEach(item => {
							item.dateline = utils.friendlyDate(item.dateline + "000");
						});
						that.dataList = that.dataList.concat(newData); //追加新数据
					}
				})
			},
			//详情
			toDetail(item) {
				if (item.style == 'h5' || item.style=='h5_bigpic') {
					gotoWebView(item.url, item.title);
				} else {
					uni.navigateTo({
						url: '/pages/inquire/details?id=' + item.id
					})
				}
			},
			toReleaseMessage() {
				if(this.request.alreadyLogin()){
					uni.navigateTo({
						url: '/pages/inquire/replyMessage?type=12' 
					})
				}
			},
			goBack() {
				uni.navigateBack({});
			}
		}

	}
</script>

<style lang="scss">
	@import "../../common/css/common.scss";
	@import "../../common/css/other.scss";
/* 状态栏高度 */
	.status-bar {
		/* #ifndef APP-NVUE */
		height: var(--status-bar-height);
		/* #endif */
		width: 750rpx;
		position: fixed;
		background-color: #FFFFFF;
		top: 0;
		z-index: 3;
	}
	.header{
		padding:0rpx 30rpx 30rpx 30rpx;
		display: flex;
		/* #ifndef APP-NVUE */
		margin-top: var(--status-bar-height);
		/* #endif */
		margin-bottom: 30rpx;
		justify-content: space-between;
		align-items: center;
		height: 90rpx;
	}
	.mescroll-empty{
		margin-top:300rpx;
	}
	page {
		background: #feece0;
	}
	.inquiredetails .bg{
		background-color: #feece0;
	}
</style>
