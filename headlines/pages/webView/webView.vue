<template>
	<view class="content">
		<view class="status-bar1"></view>
		<view class="title-bar1">
			<!-- left 是为了解决在iPhone 6 plus等部分机型中自定义导航栏不显示的问题-->
			<view class="left"></view>
			<view class="back" @click="goBack">
				<image class="icon" src="/static/img/common/icon_back.png"></image>
			</view>
			<image class="logo" src="/static/img/home/bitmap@3x.png"></image>
			<image class="right-icon" @click="clickFs()" src="/static/img/common/more@3x.png"></image>
		</view>

		<!-- #ifdef H5 -->
		<!-- h5页面使用内嵌的web-view APP-PLUS 使用createWebView方法中添加的web-view -->
		<web-view class="web-view" progress='false' :src="webUrl" @message="handleMessage"></web-view>
		<!-- #endif -->
	</view>
</template>
<script>
	var wv; //计划创建的webview
	export default {
		components: {},
		data() {
			return {
				webUrl: '',
				webTitle: '',
				webPic: '',
				adFlag: false
			}
		},
		onLoad(options) {
			console.log("options: " + JSON.stringify(options));
			if (options.adFlag) {
				this.adFlag = options.adFlag;
			}
			this.webUrl = decodeURIComponent(options.webUrl);

			if (this.webUrl == "yhxy") {
				this.webUrl = 'http://ncrb.wx.0791look.com/app/?p=cloud&action=app&id=16461';
			} else if (this.webUrl == "yszc") {
				this.webUrl = 'http://ncrb.wx.0791look.com/app/?p=cloud&action=app&id=16460';
			}
			this.webTitle = options.webTitle ? options.webTitle : "查看详情";
			this.webPic = options.webPic ? options.webPic : "";
			
			this.createWebView();
		},
		onHide() {
			console.log('222')
		},
		methods: {
			handleMessage(evt) {
				// console.log('接收到的消息：' + JSON.stringify(evt.detail.data));
				uni.setStorageSync("switchTabIndex", evt.detail.data.action)

			},
			// 返回上级页面
			goBack: function() {
				if (this.adFlag) {
					if (!(uni.getStorageSync("launchGuide") === "hide")) {
						uni.reLaunch({
							url: "/pages/index/launchGuide"
						})
					} else {
						uni.switchTab({
							url: "/pages/news/index"
						})
					}
				} else {
					uni.navigateBack({})
				}
			},
			// 创建APP-PLUS的AppWebview
			createWebView: function() {

				// #ifdef APP-PLUS
				var hasNotch = plus.navigator.hasNotchInScreen(); //是否含有刘海屏
				var titleHeight = "95";
				if (uni.getSystemInfoSync().platform == "android") {
					titleHeight = "75"
				}
				wv = plus.webview.create(this.webUrl, "custom-webview", {
					'uni-app': 'none', //不加载uni-app渲染层框架，避免样式冲突
					top: hasNotch ? titleHeight : "70",
					hardwareAccelerated:true,
					bottom: "-15"
					//放置在titleNView下方，添加自定义的导航栏等等
					// titleNView:{titleText:this.webTitle}
				});

				var currentWebview = this.$mp.page.$getAppWebview() //获取当前页面的webview对象
				currentWebview.append(wv); //一定要append到当前的页面里！！！才能跟随当前页面一起做动画，一起关闭

				// #endif
			},
			//分享弹窗
			clickFs() {
				var wvs=plus.webview.all();
				for(var i=0;i<wvs.length;i++){
					var url = wvs[i].getURL();
					if(url.startsWith("http://") || url.startsWith("https://")){
						this.webUrl = url;
					}
				}
				const app = getApp();
				app.globalData.webUrl = this.webUrl;
				app.globalData.webTitle = this.webTitle;
				app.globalData.webPic = this.webPic;
				const subNvue = uni.getSubNVueById('fenxiang');
				subNvue.show();
			},
		}
	};
</script>

<style lang="scss">
	@import "../../common/css/common.scss";

	body {
		background-color: #FFFFFF;
	}

	.content {
		padding-bottom: 200rpx;
		margin-bottom: 200rpx;
		background-color: #FFFFFF;
	}

	.status-bar1 {
		/* #ifndef APP-NVUE */
		height: var(--status-bar-height);
		/* #endif */
		width: 100vw;
		z-index: 1;
		background-color: #FFFFFF;
		position: fixed;
	}

	.title-bar1 {
		z-index: 2;
		/* #ifndef APP-NVUE */
		top: var(--status-bar-height);
		/* #endif */
		width: 100vw;
		height: 88rpx;
		position: fixed;
		display: flex;
		flex-direction: row;
		align-items: center;
		background-color: #FFFFFF;

		.left {
			width: 1rpx;
			height: 88rpx;
			background-color: #FFFFFF;
		}

		.back {
			width: 88rpx;
			height: 88rpx;
			z-index: 3;

			.icon {
				width: 40rpx;
				height: 40rpx;
				margin: 22rpx;
			}
		}

		.logo {
			width: 172rpx;
			height: 48rpx;
			margin-left: 200rpx;
			;
			margin-right: auto;
			z-index: 4;
		}
	}
</style>
