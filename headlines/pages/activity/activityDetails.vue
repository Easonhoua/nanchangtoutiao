<template>
	<view class="page activitydetails">
		<view v-if="scrollFlag" class="status-bar"></view>
		<view v-if="scrollFlag" class="header line-bottom">
			<image @click="goback()" class="back" style="width: 40rpx; height: 40rpx;" src="/static/img/common/icon_back.png"></image>
			<image class="logo" src="../../static/img/home/bitmap@3x.png"></image>
			<view></view>
		</view>
		<view v-else class="header" style="background:none;">
			<image @click="goback()" class="back" src="/static/img/common/fanhui@3x.png"></image>
		</view>
		<image class="bg" src="/static/img/activity/ac_bg@3x.png"></image>
		<view class="activity-infor">
			<view class="top">
				<view class="imgbox">
					<image class="img" :src="detailData.pic ? detailData.pic : ''"></image>
				</view>
				<view class="inforbox">
					<view class="title">{{detailData.title}}</view>
					<view class="statistics"><text class="txt">浏览{{detailData.pv}}次</text><text class="txt">收藏{{detailData.boxnum}}次</text></view>
					<view class="price">{{detailData.cost}}</view>
					<view class="time">
						<view class="left">
							<image class="icon" src="/static/img/activity/ac_time@3x.png"></image>
							<text class="txt">{{startDay}}　{{detailData.starttime}} - {{detailData.endtime}}</text>
						</view>
						<!-- <image class="icon" src="/static/img/activity/ac_week@3x.png"></image> -->
					</view>
					<view class="time">
						<view class="left">
							<image class="icon" src="/static/img/activity/ac_dw@3x.png"></image>
							<text class="txt">{{detailData.tag}}</text>
						</view>
					</view>
				</view>
			</view>
			<!-- <view class="infor-details">
				<view class="article" style="padding-top:40rpx;padding-bottom:30rpx;"> 
					<view class="userbox">
						<image class="userlogo" src="/static/img/user/user_logo@3x.png"></image>
						<view class="righttxt">
							<view class="name">南昌发布</view>
							<view class="time">南昌市委、市政府官方发布；最权威、最快速、最精彩。</view>
							<view class="statistics">
								<view class="subitem">
									<image class="icon" src="/static/img/activity/ac_fs@3x.png"></image>
									<text class="txt">粉丝</text>
									<text class="number">1234</text>
								</view>
								<view class="subitem">
									<image class="icon" src="/static/img/activity/ac_fs@3x.png"></image>
									<text class="txt">粉丝</text>
									<text class="number">1234</text>
								</view>
							</view>
						</view>
						<view class="attention">+关注</view>
					</view>
				</view>
			</view> 
			<view class="line20"></view>
			<view class="participate">
				<text class="txt">最近参与</text>
				<view class="user">
					<view class="iconbox">
						<image class="icon" src="/static/img/user/user_logo@3x.png"></image>
						<image class="icon" src="/static/img/user/user_logo@3x.png"></image>
						<image class="icon" src="/static/img/user/user_logo@3x.png"></image>
						<image class="icon" src="/static/img/user/user_logo@3x.png"></image>
						<image class="icon" src="/static/img/user/user_logo@3x.png"></image>
						<image class="icon" src="/static/img/user/user_logo@3x.png"></image>
						<image class="icon" src="/static/img/user/user_logo@3x.png"></image>
					</view>
					<image class="right-arrow" src="/static/img/user/user_arrow_r@3x.png"></image>
				</view>
			</view>-->
			<view class="" v-show="videoShow" style="background-color: #FFFFFF;">
				<view class="activity-video" v-for="(item,index) in detailData.videolist" :key="index">
					<video class="video" :id="detailData.id" :src="item" :poster="detailData.pic" play-btn-position="center" style="width:100%;height:389upx;"></video>
				</view>
			</view>
			<view class="line20"></view>
			<view class="introduction">
				<view class="title">活动简介</view>
				<view class="introduction-con">
					<rich-text :nodes="detailData.content" @tap="readImage"></rich-text>
				</view>
			</view>
		</view>
		<view class="bt-bar">
			<view class="iconbox" @click="clickPl">
				<image class="icon" src="/static/img/common/d_pl@3x.png"></image>
				<view class="txt">评论</view>
			</view>
			<view class="iconbox" @tap="clickSc">
				<image class="icon" :src="detailData.isbox === 1 ? '/static/img/common/l_sc_pre@3x.png' : '/static/img/common/l_sc@3x.png'"></image>
				<view class="txt">收藏</view>
			</view>
			<view class="btnbar">
				<view class="baoming-btn" :class="btnStyle" @tap="jumpH5Page(detailData)">{{btn}}</view>
			</view>
		</view>
	</view>
</template>

<script>
	import utils from '@/common/js/util.js';
	export default {
		data() {
			return {
				id: '',
				detailData: {},
				startDay: '', //活动日期
				currtime: '', //当前时间戳
				btn: '',
				videoShow: false,
				btnStyle:'',
				scrollFlag:false,
				imgList:[]
			}
		},
		onLoad(e) {
			if (e.id) {
				this.id = e.id;
				this.currtime = new Date().getTime(); //获取当前时间戳
				this.getActivityDetail();
			}
		},
		onPageScroll(e){
			if(e.scrollTop > 15){
				this.scrollFlag = true;
			}else{
				this.scrollFlag = false;
			}
		},
		methods: {
			//活动详情
			getActivityDetail() {
				let url = "api/ncrb/";
				let sendData = {
					action: 'activity',
					mod: 'view',
					id: this.id
				}
				this.request.get(url, sendData).then(res => {
					//console.log(res);
					if (res.code === 200) {
						
						res.data.cost = res.data.cost ? res.data.cost : '0元';
						res.data.cost = res.data.cost == '免费' ? res.data.cost : '￥' + res.data.cost;
						if (this.currtime < res.data.starttime + '000') { //活动未开始
							this.btn = res.data.btn[0];
							this.btnStyle="baoming-yellow";
						} else if (this.currtime > res.data.endtime + '000') { //活动已结束
							this.btn = res.data.btn[2];
							this.btnStyle="baoming-grey";
						} else { //活动进行中
							this.btn = res.data.btn[1];
							this.btnStyle="baoming-red";
						}
						this.startDay = utils.formatMonthDay(res.data.starttime + '000');
						res.data.starttime = utils.formatMinutesTime(res.data.starttime + '000');
						res.data.endtime = utils.formatMinutesTime(res.data.endtime + '000');
						//console.log("内容: "+res.data.content);
						res.data.content = res.data.content.replace(/\\\\/g, '').replace(/\\"/g, '');
						//console.log("内容1: "+res.data.content);
						res.data.content = res.data.content.replace(/\<img/g, '<img style="width:100%;height:auto;display:block"').replace(
							/\width: (\d*)px/g, '').replace(/\height: (\d*)px/g, '');
						//console.log("内容3: "+res.data.content);
						if (res.data.length > 0) {
							this.videoShow = true;
						}
						this.detailData = res.data;
						this.imgList.concat(this.detailData.imglist);
					}
				})
			},
			//点击是否收藏
			clickSc() {
				if (this.request.alreadyLogin()) {
					//获取商家订座配置
					const url = 'api/ncrb/';
					var sendData = {
						id: this.id,
						mod: 'box',
						action: 'view'
					}
					this.request.get(url, sendData).then(res => {
						this.detailData.isbox = res.data.isbox;
						//console.log("res: " + JSON.stringify(res));
						if (res.data.isbox == 1) {
							this.request.toastTips("收藏成功");
						} else {
							this.request.toastTips("取消成功");
						}
					});
				}
			},
			//点击评论
			clickPl() {
				uni.navigateTo({
					url: '/pages/detail/comment?id=' + this.id
				})
			},
			goback() {
				uni.navigateBack({})
			},
			//跳转活动h5页面
			jumpH5Page(detail) {
				if (detail.link) {
					if (detail.link.indexOf("unionid={unionid}") >= 0) {
						if (this.request.alreadyLogin()) {
							detail.link = detail.link.replace(/{unionid}/, uni.getStorageSync("unionid"));
							console.log(detail.link);
							utils.gotoWebView(detail.link, detail.title);
						}
					} else {
						utils.gotoWebView(detail.link, detail.title);
					}
				}
			},
			readImage: function() {
				if(this.imgList.length >0){
					uni.previewImage({
						urls: this.imgList,
						current: 0,
						indicator:'number'
					})
				}
			}
		}
	}
</script>

<style lang="scss">
	@import "../../common/css/common.scss";
	@import "../../common/css/other.scss";
	.status-bar {
		/* #ifndef APP-NVUE */
		top:var(--status-bar-height);
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
		// margin-top: calc(var(--status-bar-height) + 30rpx);
		// margin-top: calc(var(--status-bar-height)+30);
		/* #ifndef APP-NVUE */
		margin-top:var(--status-bar-height);
		/* #endif */
		margin-bottom: 30rpx;
		justify-content: space-between;
		align-items: center;
		height: 90rpx;
	}
	.infor-details .article .userbox .righttxt .time {
		font-size: 20rpx;
		@extend %txt-cut;
	}

	.baoming-btn {
		width: 100%;
		height: 32px;
		line-height: 32px;
		// background-image: -webkit-linear-gradient(#527cc4, #527cc4);
		//background-image: linear-gradient(#527cc4, #527cc4);
		color: #ffffff;
		font-size: 13px;
		text-align: center;
		border-radius: 25px;
	}

	.baoming-grey {
		background-image: linear-gradient(#A9A9A9, #A9A9A9);
	}

	.baoming-red {
		
		background-image: linear-gradient(#DF0000, #DF0000);
	}
	.baoming-yellow {
		background-image: linear-gradient(#FBBD08, #FBBD08);
	}

	p {
		margin-bottom: 60rpx;
	}

	.activity-video {
		padding: 0 30rpx 30rpx 30rpx;
		font-size: 36rpx;
	}
</style>
