<template>
	<view class="media-item view">
		<view class="notice">
			<image class="title-img" src="../../static/img/home/title.png"></image><!-- 联播政务信息图片 -->
			<swiper class="screen-swiper" :class="dotStyle?'square-dot':'round-dot'" :indicator-dots="false"
			 :circular="true" :vertical="true" :autoplay="true" interval="3000" current="0" duration="500">
				<swiper-item v-for="(item,index) in swiperList" :key="index" @click="click(item)">
					<view class="notice-con">
						<text class="time">{{item.time}}</text>
						<text class="notice-con-txt">{{item.desc}}</text>
					</view>
				</swiper-item>
			</swiper>
		</view>
		<view class="media-item-line" style="position: absolute;"></view>
	</view>
</template>

<script>
	import utils from '@/common/js/util.js';
	export default {
		props: {
			newsList: {
				type: Array,
				default: function(e) {
					return []
				}
			}
		},
		data() {
			return {
				swiperList: [],
				cardCur: 0,
				dotStyle: false,
				towerStart: 0,
				direction: ''
			};
		},
		created() {
			this.swiperList = this.newsList;
			// console.log(lidenewsItem: " + JSON.stringify(this.newsItem));
		},
		onLoad() {
			this.TowerSwiper('swiperList');
			// 初始化towerSwiper 传已有的数组名即可
		},
		methods: {
			click(detail) {
				// console.log(etail1: " + JSON.stringify(detail));
				utils.gotoDetail(detail);
				// if(detail.url){
				// 	gotoWebView(detail.url,'');
				// }else{
				// 	uni.navigateTo({
				// 		url: '/pages/detail/details?id=' + detail.id
				// 	});
				// }
			},
			setNewsItem(item) {
				this.newsItem = item;
			},
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
			}

		}
	}
</script>

<style lang="scss">
	.slidebox {
		padding: 20rpx;
		padding-right: 30rpx;
	}

	.slidebox-img {
		position: sticky;
		top: 0;
		border-radius: 10rpx;
		width: 710rpx;
		margin-right: 34rpx;
	}

	.screen-swiper {
		width: 750upx;
		height:90rpx;
	}

	.media-item-line {
		position: absolute;
		left: 0upx;
		right: 0upx;
		bottom: 0;
		height: 1upx;
		background-color: #ebebeb;
	}
.notice{
	margin-top:25rpx;
}
	.notice-con {
		background-color: #F0F0F0;
		padding: 20rpx 24rpx 20rpx 24rpx;
		flex-direction: row;

	}

	.time {
		font-size: 24rpx;
		width: 80rpx;
		margin-right: 20rpx;
		font-weight: bold;
	}

	.notice-con-txt {
		font-size: 26rpx;
		width: 580rpx;
		margin-right: 20rpx;
		lines: 2;
		text-overflow: ellipsis;
	}

	.title-img {
		width: 192rpx;
		height: 30rpx;
		margin-bottom: 15rpx;
		margin-left: 16rpx;
	}
</style>
