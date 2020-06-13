<template>
	<view class="subrequirement">
			<image class="bg" src="/static/img/home/bg_e@3x.png" mode="widthFix"></image>
			<view class="header-icon-w">
				<image class="icon" src="/static/img/common/w_back@3x.png"></image>
				<image class="icon" src="/static/img/home/search_w@3x.png"></image>
			</view><!-- 白色图标头部 -->
		<view class="cellbox spokesman">
			<text class="title">企业家</text>
			<text class="tip">关注我们，与企业家直接对话</text>
			<view class="inner">
				<view class="panel">
					<view class="spokesman-panel-con">
						<view class="userlogo">
							<image class="icon" src="/static/img/home/rz_icon@3x.png"></image>
							<image class="logo" src="/static/img/home/y_img@3x.png"></image>
						</view>
						<view class="txtbox">
							<text class="name">郭毅</text>
							<text class="tip txt-cut">中共南昌市委常委市委秘书长中共南昌市委常委市委秘书长</text>
							<text class="tip txt-cut">市委秘书长</text>
						</view>
						<view class="attention">+关注</view>
					</view>
				</view>
				
				<view class="panel">
					<view class="spokesman-panel-con">
						<view class="userlogo">
							<image class="logo" src=""></image>
						</view>
						<view class="txtbox">
							<text class="name">郭毅</text>
							<text class="tip txt-cut">中共南昌市委常委市委秘书长中共南昌市委常委市委秘书长</text>
							<text class="tip txt-cut">市委秘书长</text>
						</view>
						<view class="attention-y">已关注</view>
					</view>
				</view>
				
				<view class="panel">
					<view class="spokesman-panel-con">
						<view class="userlogo">
							<image class="logo" src=""></image>
						</view>
						<view class="txtbox">
							<text class="name">郭毅</text>
							<text class="tip txt-cut">中共南昌市委常委市委秘书长中共南昌市委常委市委秘书长</text>
							<text class="tip txt-cut">市委秘书长</text>
						</view>
						<view class="attention">+关注</view>
					</view>
				</view>
				
				<view class="panel">
					<view class="spokesman-panel-con">
						<view class="userlogo">
							<image class="logo" src=""></image>
						</view>
						<view class="txtbox">
							<text class="name">郭毅</text>
							<text class="tip txt-cut">中共南昌市委常委市委秘书长中共南昌市委常委市委秘书长</text>
							<text class="tip txt-cut">市委秘书长</text>
						</view>
						<view class="attention">+关注</view>
					</view>
				</view>
				
				<view class="panel">
					<view class="spokesman-panel-con">
						<view class="userlogo">
							<image class="logo" src=""></image>
						</view>
						<view class="txtbox">
							<text class="name">郭毅</text>
							<text class="tip txt-cut">中共南昌市委常委市委秘书长中共南昌市委常委市委秘书长</text>
							<text class="tip txt-cut">市委秘书长</text>
						</view>
						<view class="attention">+关注</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import utils from '@/common/js/util.js';
	export default {
		data() {
			return {
				id:'',
				detail:{
					nch:{}
				},
				shareList: []//分享服务商列表
			}
		},
		onLoad(e) {
			if(e.id){
				this.id = e.id;
				this.initData();
			}
		},
		methods: {
			initData:function(){
				//获取商家订座配置
				const url = 'api/ncrb/';
				var sendData = {
					id:this.id,
					action:'view'
				}
				this.request.get(url, sendData).then(res => {
					this.detail = res.data;
					console.log("this.detail: " + JSON.stringify(this.detail));
					this.detail.datetime = utils.formatYearMinutesDayFormt(this.detail.dateline+"000")+" "+utils.formatMinutesTime(this.detail.dateline+"000");
					this.detail.content = this.detail.content.replace(/\\\\/g,'').replace(/\\"/g,'');
					this.detail.content =this.detail.content.replace(/\<img/g,'<img style="width:100%;height:auto;display:block"').replace(/\width: (\d*)px/g,'').replace(/\height: (\d*)px/g,'');
				});
			},
			goBack(){
				uni.navigateBack({
				})
			},
			toDetail(id){
				uni.navigateTo({
					url:'/pages/entrepreneur/details?id='+id
				})
			}
		}
	}
</script>

<style lang="scss">
	@import "../../common/css/common.scss";
	@import "../../common/css/other.scss";
	page{
		background-color: #f9fafb;
	}
	.subrequirement .cellbox .inner .panel{
		padding-bottom:50rpx;
		margin-bottom:30rpx;
	}
</style>
