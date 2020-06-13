<template>
	<view class="main">
		<view class="display-row" @click="clearCache">
			<view class="left-text black-text-14">清除缓存</view>
			<view class="right-text gray-text-14" style="margin-right: 40rpx;">{{fileSize}}</view>
			<image src="/static/img/common/arrow_right.png" style="height: 40rpx; width: 40rpx; margin-right: 20rpx;"></image>
		</view>
	</view>
</template>


<script>
	import {
		mapState,
		mapMutations
	} from 'vuex'

	export default {
		data() {
			return {
				fileSize: '',
				userData: {}
			}
		},
		onLoad(option) {

			// this.readCache();
			this.initCacheSize();
		},

		methods: {
			clearCache() {
				let self = this;
				this.$showModal({title:'温馨提示',concent:'您确定要清除缓存吗?'
				,confirmVal:'确定',align:'left'}).then(res=>{
					self.clearCache1();
					//确认
				})
			},
			/**
			 * 计算缓存大小  官方提供方法，用于iOS  
			 */
			calcCache(callback) {
				//console.log("开始计算缓存大小");  
				var finalSize = -1;
				plus.cache.calculate(function(size) {
					//console.log(size + "byte");  
					var sizeInt = parseInt(size);
					//console.log("sizeInt" + sizeInt);  
					return callback(sizeInt);
				});

			},
			calcCache4Android() {
				var cacheSize = 0;
				//console.log("start calc android");
				var sdRoot = plus.android.runtimeMainActivity().getCacheDir();
				var files = plus.android.invoke(sdRoot, "listFiles");
				cacheSize += this.getFolderSize(files);
				//console.log("android size-->"+cacheSize);  
				return cacheSize;
			},
			getFolderSize(files) {
				var size = 0;
				var len = files.length;

				mui.toast("未知的设备类型,无法计算缓存" + files[0].fileSize);
				for (var i = 0; i < len; i++) {
					// 如果下面还有文件  
					if (files[i].isDirectory) {
						size = size + getFolderSize(files[i]);
					} else if (!files[i].isHidden) {
						parseInt(size)
						size = size + files[i].fileSize;
					}
				}
				return size;
			},
			initCacheSize() {
				// #ifdef APP-PLUS

				let obj = this;
				if (plus.os.name == "Android") {
					// obj.formatSize(obj.calcCache4Android());
					plus.cache.calculate(function(size) {
						obj.formatSize(size);
					});
				} else if (plus.os.name == "iOS") {
					this.calcCache(function(size) {
						obj.formatSize(size);
					});
				} else {
					mui.toast("未知的设备类型,无法计算缓存");
				}
				// #endif
			},
			formatSize(size) {
				let sizeCache = parseInt(size);
				if (sizeCache == 0) {
					this.fileSize = "0B";
				} else if (sizeCache < 1024) {
					this.fileSize = sizeCache + "B";
				} else if (sizeCache < 1048576) {
					this.fileSize = (sizeCache / 1024).toFixed(2) + "KB";
				} else if (sizeCache < 1073741824) {
					this.fileSize = (sizeCache / 1048576).toFixed(2) + "MB";
				} else {
					this.fileSize = (sizeCache / 1073741824).toFixed(2) + "GB";
				}
			},
			clearCache1() {
				// #ifdef APP-PLUS
				let that = this;
				let os = plus.os.name;
				if (os == 'Android') {
					let main = plus.android.runtimeMainActivity();
					let sdRoot = main.getCacheDir();
					let files = plus.android.invoke(sdRoot, "listFiles");
					let len = files.length;
					for (let i = 0; i < len; i++) {
						let filePath = '' + files[i]; // 没有找到合适的方法获取路径，这样写可以转成文件路径  
						plus.io.resolveLocalFileSystemURL(filePath, function(entry) {
							if (entry.isDirectory) {
								entry.removeRecursively(function(entry) { //递归删除其下的所有文件及子目录  
									uni.showToast({
										title: '缓存清理完成',
										duration: 2000
									});
									that.initCacheSize(); // 重新计算缓存  
								}, function(e) {
									//console.log(e.message)  
								});
							} else {
								entry.remove();
							}
						}, function(e) {
							//console.log('文件路径读取失败')  
						});
					}

				} else {
					// plus.storage.clear();  

					that.formatSize(0);
					// ios暂时未找到清理缓存的方法，以下是官方提供的方法，但是无效，会报错  
					// plus.cache.clear(function(e) {  
					//     uni.showToast({  
					//         title: '缓存清理完成',  
					//         duration: 2000  
					//     });  
					//     that.initCacheSize();  
					// });  
				}
				// #endif
			}

		}
	}
</script>

<style>
	.main {
		background-color: #FFFFFF;
		height: 100%;
		width: 100%;
		flex-direction: column;
	}


	/* 从左至右排列 */
	.display-row {
		display: flex;
		flex-direction: row;
		align-items:center;
		justify-content: space-between;
		align-content: space-between;
		height: 100rpx;
		border-bottom: 2rpx solid #F5F5F5;
	}
	/* 左对齐文本 */
	.left-text {
		margin: 0rpx 40rpx 0rpx 20rpx;
		margin-right: auto;
	}

	.black-text-14 {
		color: black;
		-webkit-text-fill-color: black;
		-webkit-opacity: 1;
		opacity: 1;
		font-size: 28rpx;
	}

	/* 右对齐文本 */
	.right-text {
		margin: 10rpx 30rpx 10rpx 0rpx;
		margin-left: auto;
		text-align: right;
	}

	.gray-text-14 {
		color: grey;
		font-size: 28rpx;
	}
</style>
