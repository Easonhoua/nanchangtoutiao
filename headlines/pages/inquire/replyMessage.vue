<template>
	<view class="inquire">
		<view class="status-bar" ></view>
		<view class="header line-bottom">
			<image @click="goback()" class="back" src="/static/img/common/back@3x.png"></image>
			<image class="logo" src="../../static/img/home/bitmap@3x.png"></image>
			<view></view>
		</view>
		<view class="reply" >
			<view class="top">
				<view class="title line-bottom">
					<input class="input" placeholder="请输入标题" placeholder-style="color:rgba(183,183,183,1);" v-model="messageData.title"/>
				</view>
				<view class="textareabox">
					<textarea class="textarea" placeholder="请输入您想发布的内容？" placeholder-style="color:rgba(183,183,183,1);" v-model="messageData.content"></textarea>
				</view>
			</view>
			<view class="line20"></view>
			<view class="cellbox">
				<view class="cell line-bottom">
					<text class="label">联系人：</text>
					<view class="cell-bd">
						<input class="input" v-model="messageData.realname" />
					</view>
				</view>
				<view class="cell">
					<text class="label">手机号：</text>
					<view class="cell-bd">
						<input class="input" v-model="messageData.mobile"/>
					</view>
				</view>
			</view>
		</view>
		<view class="btnbar" @click="publish">
			<view class="btn">发 布</view>
		</view>
	</view>
</template>

<script>
	
	var graceChecker = require("@/common/js/graceChecker.js");
	var rule = [{name: "title",checkType: "notnull",checkRule: "",errorMsg: "标题不能为空"},
				{name: "content",checkType: "notnull",checkRule: "",errorMsg: "发布内容不能为空"},
				{name: "realname",checkType: "notnull",checkRule: "",errorMsg: "联系人不能为空"},
				{name: "mobile",checkType: "notnull",checkRule: "",errorMsg: "手机号不能为空"}
			];
	export default {
		data() {
			return {
				id:'',
				messageData:{
					action:'publish',
					type:10
				}
			}
		},
		onLoad(e) {
			if(e.type){
				this.messageData.type = e.type;
			}
		},
		methods: {
			publish(){
				if(this.request.alreadyLogin()){
					
					//表单验证
					var checkRes = graceChecker.check(this.messageData, rule);
					if (checkRes) {
						if(!this.checker.checkPhone(this.messageData.mobile,"请输入正确手机号")) return;
						this.submitLeaveMessage();
					} else {
						uni.showToast({
							title: graceChecker.error,
							icon: "none"
						});
					}
					
				}
			},
			submitLeaveMessage(){
				const url = 'api/ncrb/';
				this.request.get(url, this.messageData).then(res => {
					console.log("res.data: " + JSON.stringify(res.data));
					if(res.code == 200){
						this.request.toastTips(res.message);
						setTimeout(() => {
							uni.navigateBack({});
						}, 1000)
						
					}
				});
			},
			goback(){
				uni.navigateBack({
				})
			}
		}
	}
	
</script>

<style lang="scss">
	@import "../../common/css/common.scss";
	@import "../../common/css/other.scss";
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
