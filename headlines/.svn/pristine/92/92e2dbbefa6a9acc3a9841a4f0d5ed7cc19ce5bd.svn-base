<template>
	<view class="conten-view">
		 <!-- indicator-dots indicator-color='#D8D8D8'  indicator-active-color='#43917A' -->
		<swiper class="launch-swiper" :indicator-dots="false">
			
			<swiper-item  v-for="(item,index) in images" :key="index">
				<!-- loadingImage="/static/img/guide/guide_1.png" errorImage="/static/img/guide/guide_1.png" -->
				<image v-if="index!==(images.length-1)" class="launch-image" :src="item" ></image>
				<image v-if="index==(images.length-1)" class="launch-image"  :src="item" @click="gotoIndexPage"></image>
			</swiper-item>
		
		</swiper>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				images:[
					"/static/img/guide/1.jpg",
					"/static/img/guide/2.jpg",
					"/static/img/guide/3.jpg",
					"/static/img/guide/4.jpg"
				],
			}
		},
		onShow() {
			const app = getApp();
			// if(app.globalData.guide.length>0){
			// 	this.images=app.globalData.guide;
			// }else{
				this.images = [
					"/static/img/guide/1.jpg",
					"/static/img/guide/2.jpg",
					"/static/img/guide/3.jpg",
					"/static/img/guide/4.jpg"
				];
			// }
		},
		onLoad() {
		},
		methods: {
			gotoIndexPage:function(){
				uni.setStorageSync("launchGuide","hide");
				uni.switchTab({
					url:"/pages/news/index"
				})
			},
		}
	}
</script>

<style>
	.conten-view{
		width: 100vw;
		height: 100vh;
	}
	.launch-swiper{
		width: 100vw;
		height: 100vh;
		z-index: 1000;
	}
	
	.launch-image{
		width: 100vw;
		height: 100vh;
		z-index: 1001;
		padding-bottom: 0rpx;
	}
	.next-button{
		position: absolute;
		z-index: 2;
		bottom: 120rpx;
		left: 140rpx;
		width: 470rpx;
		height: 84rpx;
		line-height: 84rpx;
		font-weight: 400;
		font-size: 30rpx;
		color:rgba(34,138,220,1);
		background-color: #43917A;
		color: #FFFFFF;
		border-radius: 10rpx;
		text-align: center;
		/* border: 2rpx solid #FFFFFF; */
		z-index: 1002;
		
	}
</style>
