<template>
	<view class="content-view" style="width: 680rpx;">
		<view class="content-photo" >
			<scroll-view class="photo-scroll" scroll-x="true">
				<view class="photo-item" v-for="(item,index) in theAttachments" :key="index">
					<image class="photo-image" :src="item" mode="aspectFill" @click="readAttachment(item,index)"></image>
					<image class="photo-delect" src="/static/img/common/icon_delete.png" v-on:click.stop="deleteAttachment(item)"></image>
				</view>
				<image  class="photo-item" src="/static/img/common/upload_img@3x.png" mode="aspectFill" @click="chooseImage()"></image>
			</scroll-view>
		</view>
	</view>
</template>

<script>
	export default {
		// name:"photo-component",
		props:{
			// 图片上传的最大照片数量
			maxPhotoCount:{
				type:String,
				default:"9"
			},
			//附件使用方式:select选取附件（默认）, read读取附件
			useType:{
				type : String,
				default : "select"
			},
			//附件list
			attachments:{
				type : Array,
				default () {
					return []
				}
			},
		
			//下面的属性暂时用不到
			//选择附件类型 1、只选择图片 2、只选择视频 3、两则都选择（默认）
			attachmentType:{
				type : String,
				default : "3"
			},
			module:{
				type:String,
				default:"default"
			}
		},
		data() {
			return {
				//备注：以免忘记需要从子视图中动态改变附件列表，vue不推荐直接在子组件中修改父组件传来的prop的值（直接使用会报错，使用可以，修改会报错），所以需要在data中重新定义一个新的theAttachments来接收动态改变的附件列表，可以进行增、删等操作
				theAttachments:[]
				// uploadPhotos:[]
			}
		},
		created() 
		{
			// this.showAttachments(this.attachments);
		},
		methods:{
			//选择附件
			chooseImage()
			{
				if(this.theAttachments.length>= parseInt(this.maxPhotoCount))
				{
					this.request.toastTips("最多只能选"+this.maxPhotoCount+"张图片");
					return;
				}
				
				uni.chooseImage({
					count: parseInt(this.maxPhotoCount)-this.theAttachments.length,
					sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
					success: (res) => {
						//console.log('所选图片 = ',res);
						
						for (var i = 0; i < res.tempFiles.length; i++) {
							if(res.tempFiles[i].size > 5*1000*1000){
								uni.showToast({
									duration:3000,
									title:"所选的第"+(i+1)+"图片的大小已经超过5M,请重新选择",
									icon:"none"
								})
								return;
							}
						}
						for (let filePath of res.tempFilePaths) {
							this.theAttachments.push(filePath);
						}
					}
				})	
				
			},
			// 删除某个附件
			deleteAttachment:function(item){
				let index = this.theAttachments.indexOf(item);
				this.theAttachments.splice(index,1);
			},
			//获取附件
			getAttachment()
			{
				return this.theAttachments;
			},
			//查看附件
			readAttachment(item,index)
			{
				var photos = [];
				for (let photo of this.theAttachments) {
					if(photo.filePath)
					{
						photos.push(this.request.getBaseImagePath() + photo.filePath);
					}else
					{
						photos.push(photo);
					}
				}
				uni.previewImage({
					urls:photos,
					current:index
				})
			}
		}
	}
	
</script>

<style>
	
	.content-view{
		display: flex;
		flex-direction: row;
		padding-bottom: 20rpx;
		width: 600rpx;
	}
	.content-photo{
		display: flex;
		flex-direction: column;
		height: 100%;
		margin-top: 30rpx;
	}
	.red {
	    color: #FF3B2F;
	}
	.photo-tip{
		color: #CECDD2;
		font-size: 28rpx;
		width: 100%;
		margin-bottom: 20rpx;
	}
	.photo-scroll{
		width: 100%;
		height: 210rpx;
		white-space: nowrap;
	}
	.photo-item{
		width:209rpx;
		height:209rpx;
		margin-right: 30rpx;
		display: inline-block;
		/* border: 2rpx solid #EEEEEE; */
	}
	.photo-image{
		width: 100%;
		height: 100%;
	}
	.photo-delect{
		position: absolute;
		width: 40rpx;
		height: 40rpx;
		padding: 0rpx 10rpx 20rpx 10rpx;
		z-index: 5;
		margin-top: -5rpx;
		margin-left: -40rpx;
	}
	
</style>
