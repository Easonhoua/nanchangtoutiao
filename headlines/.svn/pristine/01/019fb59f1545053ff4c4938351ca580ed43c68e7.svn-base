<template>
	<view class="content-white">
		<view class="logo-view">
			<image class="logo-icon shadow-border" src="/static/img/common/logo.png"></image>
		</view>
		<view class="cell-height-50 border-bottom-gray-line display-row">
			<view class="left-style text-detail">当前版本</view>
			<view class="right-style text-edit">{{current}}</view>
		</view>
		<view class="cell-height-50 border-bottom-gray-line display-row">
			<view class="left-style text-detail">最新版本</view>
			<view class="right-style text-edit">{{latest}}</view>
		</view>

		<view class="minorContent bottom_aera">
			<view v-if="startProgress && !currentIsLatest" class="smallTitle">
				<!-- <text>下载进度:{{ downloadProgress }}%</text> -->
				<progress show-info="true" activeColor="#225289" active-mode="forwards" :percent="downloadProgress" stroke-width="4" />
			</view>
			<button style="background-color: #225289;" v-if="!startProgress && !currentIsLatest" type="primary" @click="handleUpdate()">立即更新</button>
			<button style="background-color: #225289;" v-if="currentIsLatest" :loading="buttonLoading" type="primary" @click="getLatest()">检查更新</button>
		</view>

		<view class="company-info">
			<text class="text-detail">©南昌日报社</text>
		</view>


	</view>
</template>

<script>
	export default {
		data() {
			return {
				current: '1.0.0', // 当前版本信息
				latest: '1.0.0', // 最新版本信息
				packgeSize: null, // 更新包大小
				packgePath: '', // 更新包的文件地址
				downloadTask: null, // 下载任务
				downloadProgress: 0, // 下载进度
				buttonLoading: false, // 加载 - 标记
				installed: false, // 是否执行了安装 - 标记
				startProgress: false, // 下载进行 - 标记
				currentIsLatest: true, // 当前版本就是最新版本 - 标记
				updateButtonTitle: "立即更新"
			}
		},
		// 如果用户下载后没有完成安装，却回到app，则执行这里
		onShow() {
			if (this.installed === true && this.packgePath) {
				this.installed = false
				this.haveDownloaded()
			}
			// this.getLatest();
		},
		onLoad() {
			this.getAppVersion();
		},
		// 用户关闭页面时检查是否存在下载任务
		onUnload() {
			if (this.downloadTask) {
				this.closeTask()
				this.showToast('更新被取消')
			}
		},
		onBackPress() {
			if (this.downloadTask) {
				this.closeTask()
				this.showToast('更新被取消')
				
			}
		},
		methods: {
			getAppVersion: function() {
				// #ifdef APP-PLUS
				var sendData = {
					"action": "upgrade"
				}
				if (uni.getSystemInfoSync().platform == "ios") {
					sendData.mod = "ios";
				}
				var that = this;
				this.request.get("api/ncrb/", sendData, "N").then(res => {
					console.log("res: " + JSON.stringify(res));
					that.latest = res.data.version;
					if (uni.getSystemInfoSync().platform == "ios") {
						that.packgePath = res.data.iosurl;
					}else {
						that.packgePath = res.data.apkurl;
					}
					
					plus.runtime.getProperty(plus.runtime.appid, (wgtinfo) => {
						that.current = wgtinfo.version;
						this.currentIsLatest = this.latest == this.current
						
						if(this.currentIsLatest){
							this.request.toastTips('当前版本已是最新版本')
						}
					})
				});
				// #endif
			},

			getUpdateButtonTitle: function() {
				// #ifdef APP-PLUS
				this.updateButtonTitle = plus.os.name === 'iOS' ? "前往AppStore更新" : "立即更新"
				// #endif
			},
			// 关闭下载任务
			closeTask: function() {
				this.downloadTask.abort()
				this.downloadTask = null
				this.startProgress = false
			},
			installPackge: function() {
				// 安装更新
				// #ifdef APP-PLUS
				plus.runtime.install(this.packgePath, {
					force: true
				})
				this.installed = true
				// 保存更新记录到stroage，方便下次启动app时删除安装包
				uni.setStorage({
					key: 'updated',
					data: {
						completed: true,
						packgePath: this.packgePath
					},
					success: (res) => {
						////console.log('成功保存更新记录')
					}
				})
				// 判断是否为热更新（判断文件名中是否含有.wgt）
				if (this.packgePath.match(RegExp(/.wgt/))) {
					this.installed = false
					this.$showModal({title:'提示',concent:'应用将重启以完成更新',delCancel:true,confirmVal:'确定',align:'left'}).then(res=>{
						plus.runtime.restart()
						//确认
					})
					// uni.showModal({
					// 	title: '提示',
					// 	content: '应用将重启以完成更新',
					// 	showCancel: false,
					// 	complete: () => {
					// 		plus.runtime.restart()
					// 	}
					// })
				}
				// #endif
			},
			// 已经下载了更新包但是没有安装
			haveDownloaded: function() {
				this.$showModal({title:'更新尚未完成',concent:'您已下载更新包，但是还没有完成安装，请问是否要继续安装更新包呢?',align:'left'}).then(res=>{
					this.installPackge();
					//确认
				}).catch(res=>{
					//取消
					this.request.toastTips("更新被取消");
				})
				// uni.showModal({
				// 	title: '更新尚未完成',
				// 	content: '您已下载更新包，但是还没有完成安装，请问是否要继续安装更新包呢？',
				// 	success: (res) => {
				// 		if (res.confirm) {
				// 			// 安装
				// 			this.installPackge()
				// 		} else if (res.cancel) {
				// 			this.request.toastTips("更新被取消");
				// 		}
				// 	}
				// })
			},
			// 取得最新版本及其所有信息
			getLatest: function() {
				this.getAppVersion();
			},
			// 检查版本
			checkLatest: function() {
				this.currentIsLatest = this.latest == this.current
				if (this.currentIsLatest) { // 当前版本与新版本不符（$current在main.js里）
					this.request.toastTips("当前是最新版了");
				}
			},
			// 开始下载任务
			createTask: function() {
				//判断是否已经存在任务
				if (!this.currentIsLatest) {
					this.downloadProgress = 0
					this.startProgress = true
					// 创建下载任务对象
					this.downloadTask = uni.downloadFile({
						url: this.packgePath,
						success: (res) => {
							if (res.statusCode === 200) {
								// 保存下载的安装包
								uni.saveFile({
									tempFilePath: res.tempFilePath,
									success: (res) => {
										this.packgePath = res.savedFilePath
										// 进行安装
										this.installPackge()
										// 任务完成，关闭下载任务
										this.closeTask()
									}
								})
							}
						}
					})
					// 进度条更新
					this.downloadTask.onProgressUpdate((res) => {
						this.downloadProgress = res.progress
					})
				}
			},
			handleUpdate: function() {
				// #ifdef APP-PLUS
				// 判断系统类型
				if (plus.os.name === "Android") {
					// 安卓：创建下载任务
					this.createTask()
				} else {
					if (this.latest && this.packgePath) { // 我这里默认#也是没有地址，请根据业务自行修改
						plus.runtime.openURL(this.packgePath);
					} else {
						this.request.toastTips("未找到ios商店地址")
					}
				}
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
		height: 400rpx;
	}

	.logo-icon {
		width: 140rpx;
		height: 140rpx;
		border-radius: 20rpx;
	}

	.company-info {
		width: 100vw;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		text-align: center;
		position: fixed;
		bottom: 30rpx;

	}
	/* 行高为50的行样式 */
	.cell-height-50 {
		width: 100vw;
		height: 100rpx;
		align-items: center;
	}
	/* 给view底部加上灰色的细线 */
	.border-bottom-gray-line {
		border-bottom: 2rpx solid #F5F5F5;
	}
	/* 从左至右排列 */
	.display-row {
		display: flex;
		flex-direction: row;
		align-items: center;
	}
	/* 靠左对齐 */
	.left-style {
		margin-left: 20rpx;
		margin-right: auto;
	}
	/* 靠右对齐 */
	.right-style {
		margin-left: auto;
		margin-right: 20rpx;
	}
	
	/* 不可可编辑或者详情的文字样式(黑色14号字体) */
	.text-detail {
		font-size: 28rpx;
		color: #000000;
	}
	
	/* 可编辑或者提示占位符的文字样式(灰色14号字体) */
	.text-edit {
		font-size: 28rpx;
		color: #989898;
	}
	/* 各种视图的边框加上阴影 */
	.shadow-border {
		box-shadow: 0rpx 0rpx 10rpx 5rpx rgba(0, 0, 0, 0.1);
	}
	/* 从左至右排列 */
	.display-row {
		display: flex;
		flex-direction: row;
		align-items: center;
	}
	/* 不可可编辑或者详情的文字样式(黑色14号字体) */
	.text-detail {
		font-size: 28rpx;
		color: #000000;
	}
</style>
