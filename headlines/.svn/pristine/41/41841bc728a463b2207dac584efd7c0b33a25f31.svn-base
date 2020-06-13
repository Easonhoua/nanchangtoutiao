<template>
	<view class="inquire">
		<view class="status-bar" style="height:66rpx;background-color: #FFFFFF;"></view>
		<view class="header line-bottom" style="padding-top: 90rpx;">
			<image @click="goback()" class="icon-back" src="/static/img/common/icon_back.png"></image>
			<image class="logo" style="margin-right: 40rpx;" src="/static/img/home/bitmap@3x.png"></image>
			<view></view>
		</view>
		<view class="reply" style="margin-top: 150rpx;">
			<view class="cellbox">
				<view class="cell line-bottom">
					<text class="label label-l">留言分类</text>
					<view class="cell-bd">
						<picker class="selecttxt" mode="selector" @change="PickerChange" range-key="name" :value="index" :range="typePicker">
							<text style="flex:1;padding-left:30rpx">
								{{typePicker[index].name}}
							</text>
							<image class="arrow-down" src="/static/img/common/l_arrow_down@3x.png"></image>
						</picker>
					</view>
				</view>
				<view class="cell line-bottom">
					<view class="cell-bd">
						<input class="input" placeholder="请输入标题" confirm-type="next" placeholder-style="color:rgba(183,183,183,1);"
						 v-model="dataDetail.title" />
					</view>
				</view>
				<view class="textareabox">
					<textarea class="textarea" placeholder="请输入您想发布的内容？" confirm-type="next" placeholder-style="color:rgba(183,183,183,1);"
					 v-model="dataDetail.content"></textarea>
				</view>
				<view class="upload">
					<photo-component ref='photoUtil' photoTitle="上传图片" photoTip="提供9张上传图片" maxPhotoCount="9" :attachments="imagePath"></photo-component>
				</view>
				<view class="upload">
					<video-component ref='videoUtil' photoTitle="上传视频" photoTip="提供9张上传图片" maxPhotoCount="9"></video-component>
				</view>
			</view>
			<view class="line20"></view>
			<view class="cellbox">
				<view class="cell line-bottom">
					<text class="label">联系人：</text>
					<view class="cell-bd">
						<input class="input" v-model="dataDetail.realname" confirm-type="next" />
					</view>
				</view>
				<view class="cell">
					<text class="label">手机号：</text>
					<view class="cell-bd">
						<input class="input" v-model="dataDetail.mobile" confirm-type="done" />
					</view>
				</view>
			</view>
		</view>
		<view class="btnbar">
			<view class="btn" @click="sendBtn" :loading="loading" :disabled="loading">发 布</view>
		</view>
	</view>
</template>




<script>
	import photoComponent from "@/components/photo-component/photo-component.vue";
	import videoComponent from "@/components/photo-component/video-component.vue";
	var graceChecker = require("@/common/js/graceChecker.js");
	var rule = [{
			name: "title",
			checkType: "notnull",
			checkRule: "",
			errorMsg: "标题不能为空"
		},
		{
			name: "content",
			checkType: "notnull",
			checkRule: "",
			errorMsg: "发布内容不能为空"
		},
		{
			name: "realname",
			checkType: "notnull",
			checkRule: "",
			errorMsg: "联系人不能为空"
		},
		{
			name: "mobile",
			checkType: "notnull",
			checkRule: "",
			errorMsg: "手机号不能为空"
		}
	];
	export default {
		components: {
			photoComponent,
			videoComponent
		},
		data() {
			return {
				index:0,
				isLoading:false,
				typePicker: [{
						"id": 0,
						"name": "其他"
					},
					{
						"id": 1,
						"name": "投诉"
					},
					{
						"id": 2,
						"name": "咨询"
					},
					{
						"id": 3,
						"name": "建议"
					},
					{
						"id": 4,
						"name": "反馈"
					},
					{
						"id": 10,
						"name": "我给市长捎句话"
					},
					{
						"id": 11,
						"name": "政企对话"
					},
					{
						"id": 12,
						"name": "解放思想大讨论"
					}
				],
				imagePath: [],
				videoPath: '',
				loading: false,
				dataDetail: {
					action: 'publish',
					type: '0', //问政信息类型：1为投诉、2为咨询、3为建议、4为反馈、0为其他、10为我给市长捎句话
					title: '', //	问政信息标题
					content: '', //问政信息详细内容
					realname: '', //联系人姓名
					mobile: '', //联系手机
					imgfile1: '', //
				}
			}
		},
		onShow() {
			this.request.getUserInfo().then(res => {
				this.dataDetail.mobile = res.mobile;
				this.dataDetail.realname = res.realname =='0' ? '':res.realname;
			})
		},
		onLoad() {
			this.loadType();
		},
		methods: {
			loadType() {
				var that = this;
				//获取商家订座配置
				const url = 'api/ncrb/';
				var sendData = {
					mod: 'type',
					action: 'wenzheng'
				}
				this.request.get(url, sendData).then(res => {
					if (res.code == 200) {
						that.typePicker = res.data;
					}
				});
			},
			goback() {
				uni.navigateBack({})
			},
			PickerChange(e) {
				this.index = e.detail.value
				this.dataDetail.type = this.typePicker[this.index].id;
				console.log("this.index="+this.index);
			},
			//发送
			sendBtn: function() {

				if (this.request.alreadyLogin()) {
					//表单验证
					var checkRes = graceChecker.check(this.dataDetail, rule);
					if (checkRes) {
						if(!this.checker.checkPhone(this.dataDetail.mobile,"请输入正确手机号")) return;
						this.submitLeaveMessage();
					} else {
						uni.showToast({
							title: graceChecker.error,
							icon: "none"
						});
					}
				}
			},
			submitLeaveMessage() {
				if (this.isLoading) {
					return;
				}
				uni.showLoading({
					title: "正在提交.",
					mask: true //数据请求时App界面无法操作
				});
				var _this= this;
				this.isLoading = true;
				this.dataDetail.token = uni.getStorageSync("tokens");
				this.dataDetail.wid = uni.getStorageSync("wid");
				var imageFiles = this.$refs.photoUtil.getAttachment();
				let uploadFiles = imageFiles.map((value, index) => {
					return {
						name: "imgfile" + index + 1,
						uri: value
					}
				});

				var videoFile = this.$refs.videoUtil.getAttachment();
				if (videoFile) {
					var pic = {
						name: "imgfile" + imageFiles.length + 1,
						uri: videoFile
					}
					uploadFiles.push(pic);
				}
				//如果有视频并且上传了图片第一张图片设为封面图
				if (videoFile && imageFiles.length > 0) {
					var pic = {
						name: "pic",
						uri: imageFiles[0]
					}
					uploadFiles.push(pic);
				}
				
				if(uploadFiles && uploadFiles.length > 0){
					
					// this.dataDetail.title = encodeURIComponent(this.dataDetail.title);
					// this.dataDetail.content = encodeURIComponent(this.dataDetail.content);
					// this.dataDetail.realname = encodeURIComponent(this.dataDetail.realname);					
					uni.uploadFile({
						url: 'https://cdn.0791look.com/api/ncrb/', //仅为示例，非真实的接口地址
						files: uploadFiles,
						formData: this.dataDetail,
						success: (res) => {
							uni.hideLoading();
							_this.isLoading = false;
							console.log("res: " + JSON.stringify(res));
							if (res.data.constructor !== Object) {
								res.data = JSON.parse(res.data);
							}
							if (res.data.code == 200) {
								this.request.toastTips("发布成功");
								setTimeout(() => {
									uni.navigateBack({});
								}, 1000)
					
							}else if(res.data.code == 403){
								this.request.openLoginPage();
							}else{
								this.request.toastTips("发布失败");
							}
						},
						fail: (res) =>  {
							uni.hideLoading();
							this.request.toastTips("发布失败");
						}
					});
				}else{
					
					const url = 'api/ncrb/';
					var sendData  = this.dataDetail;
					this.request.post(url, sendData).then(res => {
						this.request.toastTips("发布成功");
						uni.hideLoading();
						setTimeout(() => {
							uni.navigateBack({});
						}, 1000);
					});
					
				}

			},
		}
	}
</script>

<style lang="scss">
	@import "../../common/css/common.scss";
	@import "../../common/css/other.scss";

	page {
		background: #EEEEEE;
	}

	.line-top,
	.line-bottom {
		position: relative;

	}

	.line-top:before {
		content: " ";
		position: absolute;
		left: 0;
		top: 0;
		right: 0;
		height: 1px;
		border-top: 1px solid #cdcdcd;
		color: rgba(0, 0, 0, 0.1);
		color: var(--weui-FG-3);
		-webkit-transform-origin: 0 0;
		transform-origin: 0 0;
		-webkit-transform: scaleY(0.5);
		transform: scaleY(0.5);
		z-index: 2;
	}

	.line-bottom:after {
		content: " ";
		position: absolute;
		left: 0;
		bottom: 0;
		right: 0;
		height: 1px;
		border-bottom: 1px solid #cdcdcd;
		color: rgba(0, 0, 0, 0.1);
		color: var(--weui-FG-3);
		-webkit-transform-origin: 0 0;
		transform-origin: 0 0;
		-webkit-transform: scaleY(0.5);
		transform: scaleY(0.5);
		z-index: 2;
	}

	.textareabox {
		margin-top: 40rpx;
	}

	.icon-back {
		width: 40rpx;
		height: 40rpx;
	}
</style>
