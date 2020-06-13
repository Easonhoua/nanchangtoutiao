<template>
	<view class="inquire">
		<view class="reply">
			<view class="top">
				<view class="title line-bottom">
					<input class="input" placeholder="请输入标题（简单概况爆料内容" placeholder-style="color:rgba(183,183,183,1);" />
				</view>
				<view class="textareabox">
					<textarea class="textarea" placeholder="请输入您想发布的内容？" placeholder-style="color:rgba(183,183,183,1);"></textarea>
				</view>
			</view>
			<view class="line20"></view>
			<view class="cellbox">
				<view class="cell line-bottom">
					<text class="label">联系人：</text>
					<view class="cell-bd">
						<input class="input" />
					</view>
				</view>
				<view class="cell">
					<text class="label">手机号：</text>
					<view class="cell-bd">
						<input class="input" />
					</view>
				</view>
			</view>
		</view>
		<view class="btnbar">
			<view class="btn">发 布</view>
		</view>
	</view>
</template>

<script>
</script>

<style lang="scss">
	@import "../../../common/css/common.scss";
	@import "../../../common/css/other.scss";
	page{
		background: #EEEEEE;
	}
	.line-top,.line-bottom{
	    position: relative;
		
	}
	.line-top:before{
		content: " ";
		position: absolute;
		left: 0;
		top: 0;
		right: 0;
		height: 1px;
		border-top: 1px solid #cdcdcd;
		color: rgba(0,0,0,0.1);
		color: var(--weui-FG-3);
		-webkit-transform-origin: 0 0;
		transform-origin: 0 0;
		-webkit-transform: scaleY(0.5);
		transform: scaleY(0.5);
		z-index: 2;
	}
	.line-bottom:after{
		content: " ";
		position: absolute;
		left: 0;
		bottom: 0;
		right: 0;
		height: 1px;
		border-bottom: 1px solid #cdcdcd;
		color: rgba(0,0,0,0.1);
		color: var(--weui-FG-3);
		-webkit-transform-origin: 0 0;
		transform-origin: 0 0;
		-webkit-transform: scaleY(0.5);
		transform: scaleY(0.5);
		z-index: 2;
	}
</style>
