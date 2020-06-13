<script>
	export default {
		globalData: {
			windowHeight: 0,
			windowWidth: 0,
			ad: {},
			updateTip:'',
			webUrl:'',
			webTitle:'',
			webPic:''
		},
		onLaunch: function() {
			var _this = this;
			var url = "/api/ncrb/";
			var data = {
				action: 'starting'
			}
			_this.request.get(url, data, null, false).then(res => {
				_this.globalData.ad = res.data;
				console.log("res.data: " + JSON.stringify(res.data));
				uni.setStorageSync("globalDataAd", res.data);
			});

			uni.getSystemInfo({
				success: function(res) {
					console.log(res.model);
					_this.globalData.windowWidth = res.windowWidth;
					_this.globalData.windowHeight = res.windowHeight;
				}
			});
			uni.onTabBarMidButtonTap(function() {
				uni.navigateTo({
					url: "/pages/release/release",
					animationType: 'slide-in-bottom'
				})
			});
			//监听消息推送事件（后台发送消息，前端即可实时监听接受到消息的内容）
			this.addJYJPushReceiveNotificationListener();
			//监听推送消息点击事件（推送来了以后，手机会有弹窗或通知栏提示，点击消息时，会触发这个方法；并且会进入APP，如果APP进程被杀死也会打开；）
			this.addJYJPushReceiveOpenNotificationListener();
			//监听后台消息的推送（进程未被杀死）ios有效
			this.addJYJPushReceiveBackgroudNotificationListener();
			//监听自定义消息（穿透消息）
			this.addJYJPushCustomReceiveNotificationListener();
		},
		methods:{
			addJYJPushReceiveOpenNotificationListener() {
				const jyJPush = uni.requireNativePlugin('JY-JPush');
				jyJPush.addJYJPushReceiveOpenNotificationListener(result => {
					// uni.showToast({
					// 	icon: 'none',
					// 	title: 'open' + JSON.stringify(result)
					// })
					console.log('打开了' + JSON.stringify(result));
				});
			},
			addJYJPushReceiveNotificationListener() {
				const jyJPush = uni.requireNativePlugin('JY-JPush');
				jyJPush.addJYJPushReceiveNotificationListener(result => {
					// uni.showToast({
					// 	icon: 'none',
					// 	title: 'rec' + JSON.stringify(result)
					// })
					console.log('收到了' + JSON.stringify(result));
				});
			},
			addJYJPushReceiveBackgroudNotificationListener(){
				if (uni.getSystemInfoSync().platform == "ios") {
					const jyJPush = uni.requireNativePlugin('JY-JPush');
					jyJPush.addJYJPushReceiveBackgroudNotificationListener(result => {
						// uni.showToast({
						// 	icon: 'none',
						// 	title: 'recback' + JSON.stringify(result)
						// })
						console.log('后台收到了' + JSON.stringify(result));
					});
				}
			},
			addJYJPushCustomReceiveNotificationListener() {
				const jyJPush = uni.requireNativePlugin('JY-JPush');
				jyJPush.addJYJPushCustomReceiveNotificationListener(result => {
					// uni.showToast({
					// 	icon: 'none',
					// 	title: 'ReceiveCustomNotificationListener' + JSON.stringify(result),
					// })
					console.log("收到消息: " + JSON.stringify(result));
				});
			}
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style lang="scss">
	/*每个页面公共css */
	/* #ifndef APP-PLUS-NVUE */
	@import "common/css/app.css";
	@import "common/css/other.scss";
	/* #endif */
</style>
