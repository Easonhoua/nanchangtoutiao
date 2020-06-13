<template>
	<view class="page">
		<view class="listbox">
			<view class="list">
				<view class="title" @click="">
					<text>忘记密码中重置密码成功后，重新登录时还是提示密码验证失败怎么办？</text>
					<image class="arrow" src="/static/img/common/l_arrow_down@3x.png"></image>
				</view>
				<view class="subitem">
					1、确认密码输入的大小写是否正确<br>
					2、确认账号（支持手机号/公民身份证号/邮箱）和密码前后是否有多余的空格符。
				</view>
				<view class="media-item-line" style="position: absolute;"></view>
			</view>
			<view class="list">
				<view class="title">
					<text>忘记密码中重置密码成功后，重新登录时还是提示密码验证失败怎么办？</text>
					<image class="arrow" src="/static/img/common/l_arrow_down@3x.png"></image></view>
				<view class="subitem">
					1、确认密码输入的大小写是否正确<br>
					2、确认账号（支持手机号/公民身份证号/邮箱）和密码前后是否有多余的空格符。
				</view>
				<view class="media-item-line" style="position: absolute;"></view>
			</view>
		</view>
	</view>
</template>

<script>

</script>


<style lang="scss">
	@import "../../common/css/other.scss";
	.listbox{
		.list{
			position: relative;
			padding:30rpx 30rpx 30rpx 30rpx;
			font-size: 30rpx;
			.title{
				padding-right:60rpx;
				position: relative;
				.arrow{
					width:30rpx;
					height:30rpx;
					position: absolute;
					right:0;
					top:5rpx;
				}
			}
			.subitem{
				color:#B6B6B6;
				margin-top:30rpx;
			}
		}
		.media-item-line {
			position: absolute;
			left: 0upx;
			right: 0upx;
			bottom: 0;
			height: 1upx;
			background-color: #ebebeb;
		}
	}
</style>
