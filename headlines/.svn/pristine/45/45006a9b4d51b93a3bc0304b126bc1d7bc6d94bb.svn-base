<template>
	<view class="listbox">
		<view class="list line-bottom list-default">
			<view class="imgbox">
				<image class="img" src="../../../static/img/nanchang/nc_img1@3x.png"></image>
			</view>
			<view class="righttxt">
				<view class="title">刘奇同志主持召开省委应对疫情工作领导小组会议刘奇同志主持召开省委应对疫情工作领导小组会议</view>
				<view class="source">
					<text class="txt">南昌东湖区发布</text>
					<text class="time">1天前</text>
				</view>
			</view>
		</view><!-- 左图列表结束 -->
		<view class="list-block list line-bottom">
			<view class="title">刘奇同志主持召开省委应对疫情工作领导小组会议刘奇同志主持召开省委应对疫情工作领导小组会议刘奇同志主持召开省委应对疫情工作领导小组会议刘奇同志主持召开省委应对疫情工作领导小组会议刘奇同志主持召开省委应对疫情工作领导小组会议</view>
			<view class="imgbox">
				<image class="img" src="../../../static/img/nanchang/nc_img2@3x.png" mode="widthFix"></image>
			</view>
				<view class="source">
					<text class="txt">南昌东湖区发布</text>
					<text class="txt">1天前</text>
				</view>
		</view><!-- 大图列表结束 -->
		<view class="list-block list line-bottom">
			<view class="title">刘奇同志主持召开省委应对疫情工作领导小组会议刘奇同志主持召开省委应对疫情工作领导小组会议刘奇同志主持召开省委应对疫情工作领导小组会议刘奇同志主持召开省委应对疫情工作领导小组会议刘奇同志主持召开省委应对疫情工作领导小组会议</view>
			<!-- <view class="imgbox-more">
				<image class="img" src="../../../static/img/nanchang/nc_img2@3x.png"></image>
				<image class="img" src="../../../static/img/nanchang/nc_img2@3x.png"></image>
				<image class="img" src="../../../static/img/nanchang/nc_img2@3x.png"></image>
			</view> -->
			<scroll-view class="near-scroll imgbox-more" scroll-x="true">
				<image class="img" src="../../../static/img/nanchang/nc_img2@3x.png"></image>
				<image class="img" src="../../../static/img/nanchang/nc_img2@3x.png"></image>
				<image class="img" src="../../../static/img/nanchang/nc_img2@3x.png"></image>
				<image class="img" src="../../../static/img/nanchang/nc_img2@3x.png"></image>
				<image class="img" src="../../../static/img/nanchang/nc_img2@3x.png"></image>
				<image class="img" src="../../../static/img/nanchang/nc_img2@3x.png"></image>
			</scroll-view>
				<view class="source">
					<text class="txt">南昌东湖区发布</text>
					<text class="time">1天前</text>
				</view>
		</view><!-- 多图列表结束 -->
		<view class="important-notice line-bottom">
			<view class="title">
				<text class="txt">南昌这个区发布重要公告!</text>
				<image class="icon-arrow" src="../../../static/img/user/user_arrow_r@3x.png"></image>
			</view>
			<view class="imgbox">
				<image class="img" src="../../../static/img/home/gs_img2@3x.png" mode="widthFix"></image>
				<view class="tag">
					南昌新闻 · 2小时前
				</view>
			</view>
			<view class="source">
				<text class="txt">南昌东湖区发布</text>
				<text class="time">1天前</text>
			</view>
		</view><!-- 视频列表结束 -->
		<view class="list-default list line-bottom" style="flex-direction: column;">
			<view class="lianbo-title"><text class="bold"><text class="red">07 : 52</text>【赣深铁路顺利完成柳城制梁场首榀箱梁架设 作业】</text> 3月30日上午9时整，在中铁二十五局高沙坝 大桥施工现场，作业人员经过</view>
			<view class="tagbox-lianbo">
				<text class="label">赣深铁路</text>
				<text class="label">大桥施工现场</text>
			</view>
			<view class="statistics2">
				<view class="item">287764 阅读</view>
				<view class="item">
					<image class="icon" src="../../../static/img/common/l_sc@3x.png"></image>
					<text>10</text>
				</view>
				<view class="item">
					<image class="icon" src="../../../static/img/common/l_pl@3x.png"></image>
					<text>8888</text>
				</view>
				<view class="item">
					<image class="icon" src="../../../static/img/common/l_fx@3x.png"></image>
					<text>355</text>
				</view>
			</view>
		</view><!-- 联播列表样式 -->
		<view class="slidebox" style="padding:24rpx;"> 
			<swiper class="screen-swiper" :class="dotStyle?'square-dot':'round-dot'" :indicator-dots="true" :circular="true"
			 :autoplay="true" interval="5000" duration="500">
				<swiper-item v-for="(item,index) in swiperList" :key="index">
					<image :src="item.url" mode="aspectFill" v-if="item.type=='image'" style="width: 100%;;"></image>
					<video :src="item.url" autoplay loop muted :show-play-btn="false" :controls="false" objectFit="cover" v-if="item.type=='video'"></video>
				</swiper-item>
			</swiper>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				cardCur: 0,
				swiperList: [{
					id: 0,
					type: 'image',
					url: '../../../static/img/home/banner@3x.png'
				}, {
					id: 1,
					type: 'image',
					url: '../../../static/img/home/banner@3x.png',
				}, {
					id: 2,
					type: 'image',
					url: '../../../static/img/home/banner@3x.png'
				}, {
					id: 3,
					type: 'image',
					url: '../../../static/img/home/banner@3x.png'
				}, {
					id: 4,
					type: 'image',
					url: '../../../static/img/home/banner@3x.png'
				}, {
					id: 5,
					type: 'image',
					url: '../../static/img/home/banner@3x.png'
				}, {
					id: 6,
					type: 'image',
					url: '../../../static/img/home/banner@3x.png'
				}],
				dotStyle: false,
				towerStart: 0,
				direction: ''
			};
		},
		onLoad() {
			this.TowerSwiper('swiperList');
			// 初始化towerSwiper 传已有的数组名即可
		},
		methods: {
			DotStyle(e) {
				this.dotStyle = e.detail.value
			},
			// cardSwiper
			cardSwiper(e) {
				this.cardCur = e.detail.current
			},
			// towerSwiper
			// 初始化towerSwiper
			TowerSwiper(name) {
				let list = this[name];
				for (let i = 0; i < list.length; i++) {
					list[i].zIndex = parseInt(list.length / 2) + 1 - Math.abs(i - parseInt(list.length / 2))
					list[i].mLeft = i - parseInt(list.length / 2)
				}
				this.swiperList = list
			},

			// towerSwiper触摸开始
			TowerStart(e) {
				this.towerStart = e.touches[0].pageX
			},

			// towerSwiper计算方向
			TowerMove(e) {
				this.direction = e.touches[0].pageX - this.towerStart > 0 ? 'right' : 'left'
			},

			// towerSwiper计算滚动
			TowerEnd(e) {
				let direction = this.direction;
				let list = this.swiperList;
				if (direction == 'right') {
					let mLeft = list[0].mLeft;
					let zIndex = list[0].zIndex;
					for (let i = 1; i < this.swiperList.length; i++) {
						this.swiperList[i - 1].mLeft = this.swiperList[i].mLeft
						this.swiperList[i - 1].zIndex = this.swiperList[i].zIndex
					}
					this.swiperList[list.length - 1].mLeft = mLeft;
					this.swiperList[list.length - 1].zIndex = zIndex;
				} else {
					let mLeft = list[list.length - 1].mLeft;
					let zIndex = list[list.length - 1].zIndex;
					for (let i = this.swiperList.length - 1; i > 0; i--) {
						this.swiperList[i].mLeft = this.swiperList[i - 1].mLeft
						this.swiperList[i].zIndex = this.swiperList[i - 1].zIndex
					}
					this.swiperList[0].mLeft = mLeft;
					this.swiperList[0].zIndex = zIndex;
				}
				this.direction = ""
				this.swiperList = this.swiperList
			},
		}
	}
</script>

<style lang="scss">
	// 左图列表
.list-default{
			@extend %flex;
			padding:30rpx;
			.imgbox{
				width:177rpx;
				height:177rpx;
				margin-right:25rpx;
				.img{
					width:177rpx;
					height:177rpx;
				}
			}
			.righttxt{
				flex: 1;
			}
			.title{
				font-size: $font-size32;
				height:80rpx;
				@extend %txt-cut-two;
				margin-bottom:40rpx;
			}
			.imgbox-more{
				@extend %flex-justify-content;
				margin-bottom:30rpx;
				overflow: hidden;
				white-space: nowrap;
				.img{
					width:210rpx;
					height:177rpx;
					margin-right:30rpx;
				}
			}
			.source{
				@extend %flex;
				font-size: $font-size24;
				color:$txt-color-lightgrey;
				.txt{
					margin-right:100rpx;
					display: inline-block;
				}
			}
		}
// 大图列表
.list-block{
			flex-direction: column;
			padding:30rpx;
			.title{
				height:auto;
				@extend %txt-cut-two;
				margin-bottom: 30rpx;
				font-size: $font-size32;
			}
			.imgbox{
				width:100%;
				height:auto;
				margin-bottom:28rpx;
				.img{
					width:100%;
					height:auto;
				}
			}
			.source{
				@extend %flex;
				font-size: $font-size24;
				color:$txt-color-lightgrey;
				.txt{
					margin-right:100rpx;
					display: inline-block;
				}
			}
		}
// 多图列表
.list-block{
	flex-direction: column;
	padding:24rpx;
	.title{
		height:auto;
		@extend %txt-cut-two;
		margin-bottom: 30rpx;
		font-size: $font-size32;
	}
	.imgbox{
		width:100%;
		height:auto;
		margin-bottom:28rpx;
		.img{
			width:100%;
			height:auto;
		}
	}
	.source{
		@extend %flex;
		font-size: $font-size24;
		color:$txt-color-lightgrey;
		.txt{
			margin-right:100rpx;
			display: inline-block;
		}
	}
}
.imgbox-more{
	@extend %flex-justify-content;
	margin-bottom:24rpx;
	overflow: hidden;
	white-space: nowrap;
	.img{
		width:210rpx;
		height:177rpx;
		margin-right:30rpx;
	}
}
// 视频列表
.important-notice{
	padding:24rpx;
	.title{
		@extend %flex-justify-content;
		margin-bottom:20rpx;
		.txt{
			flex: 1;
			margin-right:20rpx;
			font-size:$font-size32;
			font-weight: 700;
		}
		.icon-arrow{
			width:30rpx;
			height:30rpx;
		}
	}
	.imgbox{
		width:100%;
		height:auto;
		position: relative;
		margin-bottom:30rpx;
		.img{
			width:100%;
			height:auto;
			border-radius: 10rpx;
		}
		.tag{
			padding:5rpx 20rpx;
			background:rgba(0,0,0,1);
			opacity:0.6;
			border-radius:10px;
			display: inline-block;
			color:rgba(182,182,182,1);
			position: absolute;
			bottom:30rpx;
			left:30rpx;
			font-size: $font-size24;
		}
	}
	.source{
		@extend %flex;
		font-size: $font-size24;
		color:$txt-color-lightgrey;
		.txt{
			margin-right:100rpx;
			display: inline-block;
		}
	}
}
// 联播列表
.lianbo-title{
	font-size:32rpx;
}
.statistics2{
	@extend %flex;
	justify-content:flex-end;
	.item{
		color:$txt-color-lightgrey;
		margin-left:50rpx;
		font-size:24rpx;
		.icon{
			width:30rpx;
			height:30rpx;
			margin-right:20rpx;
			vertical-align: middle;
		}
		.txt{
			font-size:24rpx;
		}
	}
}
.tagbox-lianbo{
	margin-bottom:16rpx;
	.label{
		border:1rpx solid $border-grey-color;
		border-radius: $border-radius5;
		display: inline-block;
		margin-right:14rpx;
		font-size:$font-size20;
		padding:5rpx 15rpx;
	}
}
</style>
