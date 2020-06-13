<template>
	<view class="page infor-details">
		<view class="article" style="margin-top:0rpx;">
			<view class="title">{{orderDetail.title}}</view>
			<view class="source">
				<!-- <text class="txt">来源：南昌日报</text> -->
				<text class="txt">{{orderDetail.dateline}}</text>
			</view>
			<view class="article-con">
				<!-- <image v-if="detail.pic" class="img" :src="detail.pic"></image> -->
				<rich-text :nodes="orderDetail.content"></rich-text>
			</view>
		</view>
		<!-- <view class="article" style="margin-top:0rpx;">
			<view class="title">带图片的通知消息带图片的通知消息带图片的通知消息带图片的通知消息</view>
			<view class="source">
				<text class="txt">来源：南昌日报</text>
				<text class="txt">发布时间：2012-01-01</text>
			</view>
		</view> -->
	</view>
</template>

<script>
	import utils from '@/common/js/util.js';
	export default {
		data() {
			return {
				orderDetail:{}
			}
		},
		onLoad(e) {
			if(e.id){
				this.getOrderDetail(e.id);
			}
		},
		methods: {
			getOrderDetail(id){
				let url = 'api/ncrb/';
				let sendData = {
					action: 'msg',
					mod: 'view',
					id: id
				}
				this.request.get(url,sendData).then(res =>{
					if(res.code == 200){
						res.data.dateline = utils.formatYearMinutesDayFormt(res.data.dateline + "000");
						res.data.content = res.data.content.replace(/\\"/g,'').replace(/\\\\/g,'');
						this.orderDetail = res.data;
					}
				})
			}
		}
	}
</script>

<style lang="scss">
	@import "../../../common/css/common.scss";
	@import "../../../common/css/other.scss";
</style>
