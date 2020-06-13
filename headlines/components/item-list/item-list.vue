<template>
	<view @click="click">
		
		<view v-if="newsItem.style=='default' && picPosition =='right'" class="list line-bottom list-default">
			<view class="righttxt">
				<view class="title">{{newsItem.title}}</view>
				<view class="source">
					<text class="txt">{{newsItem.nchname}}</text>
					<text class="time">{{newsItem.datetime}}</text>
				</view>
			</view>
			<view class="imgbox" v-if="newsItem.pic">
				<image class="img" :src="newsItem.pic?newsItem.pic:'../../static/img/nanchang/nc_img1@3x.png'"></image>
			</view>
		</view>
		<view v-else-if="newsItem.style=='h5'" class="list line-bottom list-default">
			<view class="imgbox" v-if="newsItem.pic">
				<image class="img" :src="newsItem.pic?newsItem.pic:'../../static/img/nanchang/nc_img1@3x.png'"></image>
			</view>
			<view class="righttxt">
				<view class="title">{{newsItem.title}}</view>
				<view class="source">
					<text class="txt">{{newsItem.nchname}}</text>
					<text class="time">{{newsItem.datetime}}</text>
				</view>
			</view>
		</view>
		<view v-else-if="newsItem.style=='activity' || newsItem.style=='bigpig'|| newsItem.style=='h5_bigpic'" class="list-block list line-bottom">
			<view class="title">{{newsItem.title}}</view>
			<view class="imgbox">
				<image class="img" :src="newsItem.pic?newsItem.pic:'../../static/img/nanchang/nc_img2@3x.png'" mode="aspectFill" style="width: 690rpx;height: 392rpx;"></image>
			</view>
			<view class="source">
				<text class="txt">{{newsItem.nchname}}</text>
				<text class="time">{{newsItem.datetime}}</text>
			</view>
		</view>
		<view v-else-if="newsItem.style=='pics'" class="list-block list line-bottom">
			<view class="title">{{newsItem.title}}</view>
			<scroll-view class="near-scroll imgbox-more" scroll-x="true">
				<image class="img" :src="item" v-for="(item, index) in newsItem.imglist" :key="item.id"></image>
			</scroll-view>
			<view class="source">
				<text class="txt">{{newsItem.nchname}}</text>
				<text class="time">{{newsItem.datetime}}</text>
			</view>
		</view>
		<view v-else class="list line-bottom list-default">
			<view class="imgbox" v-if="newsItem.pic">
				<image class="img" :src="newsItem.pic?newsItem.pic:'../../static/img/nanchang/nc_img1@3x.png'"></image>
			</view>
			<view class="righttxt">
				<view class="title">{{newsItem.title}}</view>
				<view class="source">
					<text class="txt">{{newsItem.nchname}}</text>
					<text class="time">{{newsItem.datetime}}</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			picPosition: {
				type: String,
				default: 'left'
			},
			newsItem: {
				type: Object,
				default: function(e) {
					return {}
				}
			}
		},
		created() {
		},
		methods: {
			click() {
				this.$emit('click');
			},
			close(e) {
				e.stopPropagation();
				this.$emit('close');
			}
		}
	}
</script>

<style lang="scss">
	// 左图列表
	.list-default {
		@extend %flex;
		padding: 30rpx;

		.imgbox {
			width: 177rpx;
			height: 177rpx;
			margin-right: 25rpx;

			.img {
				width: 177rpx;
				height: 177rpx;
			}
		}

		.righttxt {
			flex: 1;
		}

		.title {
			font-size: $font-size32;
			height: 80rpx;
			@extend %txt-cut-two;
			margin-bottom: 40rpx;
		}

		.imgbox-more {
			@extend %flex-justify-content;
			margin-bottom: 30rpx;
			overflow: hidden;
			white-space: nowrap;

			.img {
				width: 210rpx;
				height: 177rpx;
				margin-right: 30rpx;
			}
		}

		.source {
			@extend %flex;
			font-size: $font-size24;
			color: $txt-color-lightgrey;

			.txt {
				margin-right: 100rpx;
				display: inline-block;
			}
		}
	}

	// 大图列表
	.list-block {
		flex-direction: column;
		padding: 30rpx;

		.title {
			height: auto;
			@extend %txt-cut-two;
			margin-bottom: 30rpx;
			font-size: $font-size32;
		}

		.imgbox {
			width: 100%;
			height: auto;
			margin-bottom: 28rpx;

			.img {
				width: 100%;
				height: auto;
			}
		}

		.source {
			@extend %flex;
			font-size: $font-size24;
			color: $txt-color-lightgrey;

			.txt {
				margin-right: 100rpx;
				display: inline-block;
			}
		}
	}

	// 多图列表
	.list-block {
		flex-direction: column;
		padding: 24rpx;

		.title {
			height: auto;
			@extend %txt-cut-two;
			margin-bottom: 30rpx;
			font-size: $font-size32;
		}

		.imgbox {
			width: 100%;
			height: auto;
			margin-bottom: 28rpx;

			.img {
				width: 100%;
				height: auto;
			}
		}

		.source {
			@extend %flex;
			font-size: $font-size24;
			color: $txt-color-lightgrey;

			.txt {
				margin-right: 100rpx;
				display: inline-block;
			}
		}
	}

	.imgbox-more {
		@extend %flex-justify-content;
		margin-bottom: 24rpx;
		overflow: hidden;
		white-space: nowrap;

		.img {
			width: 210rpx;
			height: 177rpx;
			margin-right: 30rpx;
		}
	}

	// 视频列表
	.important-notice {
		padding: 24rpx;

		.title {
			@extend %flex-justify-content;
			margin-bottom: 20rpx;

			.txt {
				flex: 1;
				margin-right: 20rpx;
				font-size: $font-size32;
				font-weight: 700;
			}

			.icon-arrow {
				width: 30rpx;
				height: 30rpx;
			}
		}

		.imgbox {
			width: 100%;
			height: auto;
			position: relative;
			margin-bottom: 30rpx;

			.img {
				width: 100%;
				height: auto;
				border-radius: 10rpx;
			}

			.tag {
				padding: 5rpx 20rpx;
				background: rgba(0, 0, 0, 1);
				opacity: 0.6;
				border-radius: 10px;
				display: inline-block;
				color: rgba(182, 182, 182, 1);
				position: absolute;
				bottom: 30rpx;
				left: 30rpx;
				font-size: $font-size24;
			}
		}

		.source {
			@extend %flex;
			font-size: $font-size24;
			color: $txt-color-lightgrey;

			.txt {
				margin-right: 100rpx;
				display: inline-block;
			}
		}
	}

	// 联播列表
	.lianbo-title {
		font-size: 32rpx;
	}

	.statistics2 {
		@extend %flex;
		justify-content: flex-end;

		.item {
			color: $txt-color-lightgrey;
			margin-left: 50rpx;
			font-size: 24rpx;

			.icon {
				width: 30rpx;
				height: 30rpx;
				margin-right: 20rpx;
				vertical-align: middle;
			}

			.txt {
				font-size: 24rpx;
			}
		}
	}

	.tagbox-lianbo {
		margin-bottom: 16rpx;

		.label {
			border: 1rpx solid $border-grey-color;
			border-radius: $border-radius5;
			display: inline-block;
			margin-right: 14rpx;
			font-size: $font-size20;
			padding: 5rpx 15rpx;
		}
	}
</style>
