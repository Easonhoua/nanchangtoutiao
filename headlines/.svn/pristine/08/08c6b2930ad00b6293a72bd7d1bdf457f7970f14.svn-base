<template>
	<view class="content-white">
		<view class="logo-view">
			<image class="logo-icon shadow-border" src="/static/img/common/logo.png"></image>
		</view>
		<view class="desc-info ">
			<text class="desc">“南昌头条”客户端是继政务微博、政务微信之后又一政务新媒体形态，是端上的党报，致力打造成为南昌政务服务平台。客户端充分利用视频直播技术大数据分析技术、物联网技术，为政务客户群及其服务对象提供在线互动、线下延伸、定制服务、多元查询等细分功能。</text>
		</view>
		<view class="cell-height-50 border-top-gray-line  display-row">
			<view class="text-edit">{{current}}</view>
		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				current: '1.0.0', // 当前版本信息
			}
		},
		onLoad() {
			this.getAppVersion();
		},
		methods: {
			getAppVersion: function() {
				// #ifdef APP-PLUS
				var that = this;
				plus.runtime.getProperty(plus.runtime.appid, (wgtinfo) => {
					that.current = wgtinfo.version;
				})
				// #endif
			}
		}
	}
</script>

<style>
	.minorContent {
		width: 650rpx;
		padding: 0 50rpx;
	}

	.bottom_aera {
		margin: 75px auto 0;
	}

	.logo-view {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		width: 100vw;
		height: 300rpx;
	}

	.logo-icon {
		width: 140rpx;
		height: 140rpx;
		border-radius: 20rpx;
	}

	/* 行高为50的行样式 */
	.cell-height-50 {
		width: 100vw;
		height: 100rpx;
		align-items: center;
	}

	/* 给view底部加上灰色的细线 */
	.border-top-gray-line {
		margin-top: 200rpx;
		border-top: 2rpx solid #F5F5F5;
	}

	/* 从左至右排列 */
	.display-row {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
	}


	/* 可编辑或者提示占位符的文字样式(灰色14号字体) */
	.text-edit {
		font-size: 28rpx;
		color: #989898;
	}

	.desc-info {
		padding-left: 40rpx;
		padding-right: 40rpx;
	}

	.desc {
		font-size: 28rpx;
		color: #000000;
		text-align: justify;
	}
	
</style>
