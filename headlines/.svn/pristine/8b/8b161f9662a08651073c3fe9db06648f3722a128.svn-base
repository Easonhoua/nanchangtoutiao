<template>
	<view class="content-view"style="width: 680rpx;">
		<view class="content-photo">
			<video v-if="tempFilePath" class="photo-image" id="video" :src="tempFilePath"  play-btn-position="center" ></video>
			<image v-if="tempFilePath" class="photo-delect" src="/static/img/common/icon_delete.png" v-on:click.stop="deleteAttachment()"></image>
			<image v-else class="photo-item" src="/static/img/common/upload_video@3x.png" mode="aspectFill" @click="chooseVideo()"></image>
		</view>
	</view>
</template>

<script>
	export default {
		// name:"photo-component",
		props: {
			// 图片上传的最大照片数量
			maxPhotoCount: {
				type: String,
				default: "9"
			},
			//附件使用方式:select选取附件（默认）, read读取附件
			useType: {
				type: String,
				default: "select"
			},
			//下面的属性暂时用不到
			//选择附件类型 1、只选择图片 2、只选择视频 3、两则都选择（默认）
			attachmentType: {
				type: String,
				default: "3"
			},
			module: {
				type: String,
				default: "default"
			}
		},
		data() {
			return {
				//备注：以免忘记需要从子视图中动态改变附件列表，vue不推荐直接在子组件中修改父组件传来的prop的值（直接使用会报错，使用可以，修改会报错），所以需要在data中重新定义一个新的theAttachments来接收动态改变的附件列表，可以进行增、删等操作
				tempFilePath: ''
				// uploadPhotos:[]
			}
		},
		methods: {
			//选择附件
			chooseVideo() {
				var that = this;
				uni.chooseVideo({
					count: 1,
					sourceType: ['camera', 'album'],
					maxDuration: 60,
					success: function(res) {
						that.tempFilePath = res.tempFilePath;
					}
				});
			},
			// 删除某个附件
			deleteAttachment: function() {
				this.tempFilePath = null;
			},
			//获取附件
			getAttachment() {
				return this.tempFilePath;
			}
			
		}
	}
</script>

<style>
	.content-view {
		display: flex;
		flex-direction: row;
		width: 100vw;
		padding-bottom: 20rpx;
	}

	.content-title2 {
		width: 230rpx;
		font-size: 28rpx;
		color: #000000;
		margin-left: 30rpx;
		margin-top: 30rpx;
	}

	.content-photo {
		display: flex;
		flex-direction: column;
		width: 720rpx;
		height: 100%;
		margin-top: 30rpx;
		/* padding-left: 30rpx; */
	}

	.red {
		color: #FF3B2F;
	}

	.photo-tip {
		color: #CECDD2;
		font-size: 28rpx;
		width: 100%;
		margin-bottom: 20rpx;
	}

	.photo-item {
		width: 209rpx;
		height: 209rpx;
		margin-right: 30rpx;
		display: inline-block;
		/* border: 2rpx solid #EEEEEE; */
		position: relative;
	}

	.photo-image {
		width: 209rpx;
		height: 209rpx;
	}

	.photo-delect {
		position: absolute;
		width: 40rpx;
		height: 40rpx;
		padding: 0rpx 10rpx 20rpx 10rpx;
		z-index: 5;
		margin-top: -5rpx;
		margin-left: 175rpx;
		left:25rpx;
	}
</style>
