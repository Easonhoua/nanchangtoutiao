<template>
	<view class="subrequirement">
			<image class="bg" src="/static/img/home/bg@3x.png" mode="widthFix"></image>
			<view class="header-icon-w">
				<image class="icon" src="/static/img/common/w_back@3x.png"></image>
				<image class="icon" src="/static/img/home/qyj_more@3x.png"></image>
			</view><!-- 白色图标头部 -->
		<view class="cellbox spokesman" style="padding:0;">
			<view class="top-userbox">
				<view class="userlogo">
					<image class="icon" src="/static/img/home/rz_icon@3x.png"></image>
					<image class="logo" src="/static/img/home/y_img@3x.png"></image>
				</view>
				<view class="txtbox">
					<text class="name">郭毅</text>
					<text class="tip">中共南昌市委常委、市委秘书长</text>
				</view>
			</view>
			<view class="listbox">
				<view class="tab">
					<view class="item">
						<text class="item-txt active">全部</text>
						<view class="line"></view>
					</view>
					<view class="item">
						<text class="item-txt">文章</text>
					</view>
					<view class="item">
						<text class="item-txt">视频</text>
					</view>
				</view>
				<view class="tab-con">
					列表区域
				</view>
			</view>
		</view>
	</view>
</template>

<script>
</script>

<style lang="scss">
	@import "../../../common/css/common.scss";
	@import "../../../common/css/other.scss";
	page{
		background-color: #f9fafb;
	}
	.subrequirement .cellbox .inner .panel{
		padding-bottom:50rpx;
		margin-bottom:30rpx;
	}
	.tab{
		flex-direction: row;
		padding:30rpx 60rpx;
		justify-content: space-between;
		background: #FFFFFF;
	}
	.item-txt{
		font-size: 36rpx;
		color:#000000;
		margin-bottom:10rpx;
	}
	.item{
		justify-content: center;
		align-items: center;
		display: flex;
		flex-direction: column;
	}
	.active{
		color:#E00000;
	}
	.line{
		width: 37rpx;
		height:5rpx;
		border-radius: 10rpx;
		background-color: #E00000;
	}
	.listbox{
		background-color: #FFFFFF;
		padding-bottom:50rpx;
	}
</style>
