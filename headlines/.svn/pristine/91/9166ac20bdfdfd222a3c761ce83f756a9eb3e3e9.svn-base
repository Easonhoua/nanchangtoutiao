<template>
	<view class="page infor-details">
			<view class="status-bar" style="height:66rpx;background-color: #FFFFFF;" :style="{'top': (flag ? keyboradheight:'')}"></view>
			<view class="header line-bottom" :style="{'top': (flag ? keyboradheight:'')}">
				<image @click="goback()" class="back" src="/static/img/common/icon_back.png"></image>
				<image class="logo" src="/static/img/home/bitmap@3x.png"></image>
				<image class="right-icon" src=""></image>
			</view>		
			<view class="article" style="padding-top:10px;position: relative;left: 0;" :style="{'top': (flag ? keyboradheight:'')}">
				<view class="title">{{detail.title}}</view>
				<view class="userbox">
					<image class="userlogo" :src="detail.headimgurl?detail.headimgurl:'/static/img/user/user_logo@3x.png'"></image>
					<view class="righttxt">
						<view class="name blue">{{detail.nickname}}</view>
						<view class="time">发表时间：{{detail.datetime}}</view>
					</view>
				</view>
				<view class="article-con" style="padding-bottom: 100rpx;">
					<video v-if="videoUrl" class="video" :id="detail.id" :src="videoUrl" :poster="detail.pic" play-btn-position="center" style="width:100%;height:389upx;"></video>
					<!-- <rich-text :nodes="detail.content" @tap="readImage"></rich-text> -->
					<jyf-parser gesture-zoom lazy-load ref="article" selectable
					 show-with-animation use-anchor></jyf-parser>
				</view>
			</view><!-- 问题结束 -->
			
			<view class="line20" style="position: relative;left: 0;" :style="{'top': (flag ? keyboradheight:'')}"></view>
			<view class="replylist" style="position: relative;left: 0;" :style="{'top': (flag ? keyboradheight:'')}">
				<view class="article" style="margin-top:40rpx;" v-for="(item,index) in replyList" :key="index">
					<view class="sourcebox">
						<view class="source" v-if="item.nch">
							<text class="txt">回复部门：<text class="blue">{{item.nch.enterprise}}</text></text>
						</view>
						<view class="source">
							<text class="txt">回复时间：{{item.datetime}}</text>
						</view>
					</view>
					<view class="article-con">
						<!-- <rich-text :nodes="item.reply"></rich-text> -->
						<jyf-parser gesture-zoom lazy-load :html="item.reply" ref="article1" selectable
						 show-with-animation use-anchor></jyf-parser>
					</view>
				</view>
			</view><!-- 回复列表结束 -->
		
		
		<view class="bt-bar" v-if="!showPopup">
			<view class="inputbox" @click="openPopup('写评论')">
				<input class="input" disabled="disabled" placeholder="写评论" @confirm="addComment"
				 placeholder-style="color:#8c8b8a;" />
			</view>
			<view class="iconbox" @click="clickPl">
				<image class="icon" src="../../static/img/common/d_pl@3x.png"></image>
				<text class="txt">{{detail.booknum}}</text>
			</view>
			<view class="iconbox" @click="clickZan">
				<image class="icon" :src="detail.iszan == 1?'../../static/img/common/d_dz_y@3x.png':'../../static/img/common/d_dz@3x.png'"></image>
				<text class="txt">{{detail.likes}}</text>
			</view>
			<view class="iconbox" @click="clickSc">
				<image class="icon" :src="detail.isbox == 1?'../../static/img/common/d_sc_y@3x.png':'../../static/img/common/d_sc@3x.png'"></image>
			</view>
			<view class="iconbox" @click="openPopup('分享')">
				<image class="icon" src="../../static/img/common/d_fx@3x.png"></image>
			</view>
		</view>
		<!-- 弹窗 -->
		<uni-popup ref="popup" type="bottom" @change="changPopup">
			<view v-if="showPopup">
				<!-- 评论弹窗 -->
				<view v-if="showPlPopup" class="bt-bar bt-bar-cl">
					<view class="btn-top">
						<text class="popupBtn" @click="hidePopup">取消</text>
						<text class="popupBtn" @click="addComment">确定</text>
					</view>
					<view class="uni-textarea">
						<textarea auto-height v-model="content" @blur="lostfocus"  @focus="getfocus" placeholder="写评论" placeholder-style="color:#8c8b8a;"></textarea>
					</view>
				</view>
				<!-- 分享弹窗 -->
				<view v-if="showFxPopup" class="bt-bar bt-bar-cl">
					<view class="share-back-view1">
						<view class="share-bottom-view1">
							<view class="share-text-detail1" style="margin-top: 30rpx;">分享到</view>
							<view class="share-view1">
								<view class="share-item1" v-for="(item,index) in shareList" :key="index" @click="shareItemClick(item)">
									<image class="share-item-image1" :src="item.image"></image>
									<view class="share-text-detail1">{{item.title}}</view>
								</view>
							</view>
							<view class="share-cancel-button1" @click="hidePopup">取消分享</view>
						</view>
					</view>
				</view>
			</view>
		</uni-popup>
	</view>
</template>

<script>
	import uniPopup from "@/components/uni-popup/uni-popup.vue"
	import utils from '@/common/js/util.js';
	import parser from '@/components/jyf-parser/jyf-parser';
	export default {
		components: {
			'jyf-parser': parser,
			uniPopup
		},
		data() {
			return {
				id:'',
				detail:{
					nch:{}
				},
				videoUrl:'',
				replyList:[], //回复列表
				dotStyle: true,
				content:'',
				pid:0,
				showShareView:false,
				shareList: [],//分享服务商列表
				imgList:[],
				flag: false,
				keyboradheight:'',
				showPopup:false,
				showPlPopup:false,
				showFxPopup:false
			}
		},
		onLoad(e) {
			if(e.id){
				this.id = e.id;
				this.initData();
				this.queryReplyList();
			}
		},
		onHide() {
			uni.hideKeyboard()
		},
		methods: {
			changPopup(){
				this.showPopup = !this.showPopup;
			},
			//弹窗
			openPopup(value){
				console.log("value=",value);
				if(!value){
					return false;
				}
				if(value === '写评论'){
					this.showPlPopup = true;
					this.showFxPopup = false;
				}else if(value === '分享'){
					this.showPlPopup = false;
					this.showFxPopup = true;
					this.clickShare();
				}
				this.$refs.popup.open();
			},
			//弹窗-取消
			hidePopup(){
				this.$refs.popup.close();
			},
			getfocus(e){
				this.flag = true
				this.keyboradheight = e.detail.height - 10 +'px'
			},
			lostfocus(){
				this.flag = false
			},
			
			//问政详情
			initData:function(){
				const url = 'api/ncrb/';
				var sendData = {
					action:'wenzheng',
					mod:"view",
					id:this.id,
				}
				this.request.get(url, sendData).then(res => {
					this.detail = res.data;
					if(this.detail.videolist && this.detail.videolist.length > 0){
						this.videoUrl = this.detail.videolist[0];
					}
					this.imgList = this.detail.imglist;
					this.detail.datetime = utils.formatYearMinutesDayFormt(this.detail.dateline+"000")+" "+utils.formatMinutesTime(this.detail.dateline+"000");
					this.detail.content =this.detail.content.replace(/\width: (\d*)px/g,'').replace(/\height: (\d*)px/g,'');
					this.$refs.article.setContent(this.detail.content);
				});
			},
			//回复列表
			queryReplyList:function(){
				const url = 'api/ncrb/';
				var sendData = {
					action:'wenzheng',
					mod:'reply',
					id:this.id,
				}
				this.request.get(url, sendData).then(res => {
					this.replyList = res.data;
					this.replyList.forEach(item => {
						item.datetime = utils.formatYearMinutesDayFormt(item.dateline+"000")+" "+utils.formatMinutesTime(item.dateline+"000");
						// item.reply = item.reply.replace(/\\\\/g,'').replace(/\\"/g,'');
						item.reply =item.reply.replace(/\width: (\d*)px/g,'').replace(/\height: (\d*)px/g,'');
					});
					
				});
			},
			clickPl(){
				uni.navigateTo({
					url:'/pages/detail/comment?id=' + this.id
				})
			},
			clickZan(){
				if(this.request.alreadyLogin()){
					const url = 'api/ncrb/';
					var sendData = {
						id:this.id,
						mod:'zan',
						action:'view'
					}
					this.request.get(url, sendData).then(res => {
						this.detail.iszan = res.data.iszan;
						this.detail.likes = res.data.likes;
						if(res.code == 200){
							if(res.data.iszan == 1 ){
								this.request.toastTips("点赞成功");
							}else{
								this.request.toastTips("取消成功");
							}
						}
					});
				}
			},
			clickSc(){
				if(this.request.alreadyLogin()){
					//获取商家订座配置
					const url = 'api/ncrb/';
					var sendData = {
						id:this.id,
						mod:'box',
						action:'view'
					}
					this.request.get(url, sendData).then(res => {
						this.detail.isbox = res.data.isbox;
						if(res.data.isbox == 1 ){
							this.request.toastTips("收藏成功");
						}else{
							this.request.toastTips("取消成功");
						}
					});
				}
			},
			//分享-显示分享列表
			clickShare(){
				var self = this;
				self.shareList = [];//置空一次
				self.shareList = utils.getShareList();
				setTimeout(function(){
					//console.log("shareList: " + JSON.stringify(self.shareList));
					if(self.shareList.length == 0){
						self.request.toastTipsTime("获取服务商列表超时，请重试",1500);
					}
				},2000)
			},
			//分享-分享微信或者qq或者其它
			shareItemClick(item){
				this.hidePopup();//分享成功后，执行一次，隐藏弹窗
				//判断点击的是复制链接还是其它
				if(item.provider === 'copyLink'){
					//console.log("点击了复制链接");
					if(!this.detail.link){
						utils.toastTipsTime("复制失败，链接不能为空",1500);
						return false;
					}
					uni.setClipboardData({
						data:this.detail.link,
						success() {
							console.log("复制成功");
						}
					});
					utils.toastTipsTime("复制成功",1500);
				}else if(item.provider === 'refresh'){
					//console.log("点击了刷新");
					//utils.toastTipsTime("复制成功",1500);
					uni.redirectTo({
						url:'/pages/inquire/details?id='+this.id,
						success: () => {
							console.log("刷新成功");
						}
					})
				}else{
					//console.log("点击了其它");
					utils.clickShareItem(item,this.detail);//调用分享接口
				}
				this.addShareNum();
			},
			//分享-分享数加1
			addShareNum(){
				const url = 'api/ncrb/';
				var sendData = {
					id:this.id,
					mod:'share',
					action:'view'
				}
				this.request.get(url, sendData).then(res => {
					//console.log("res.code: " + JSON.stringify(res.code));
				});
			},
			addComment(){
				if(this.request.alreadyLogin()){
					if(!this.content){
						this.request.toastTips("请先填写评论信息");
						return false;
					}
					const url = 'api/ncrb/';
					var sendData = {
						id:this.id,
						mod:'book',
						action:'view',
						pid:this.pid,
						content:this.content
					}
					this.request.get(url, sendData).then(res => {
						if(res.code == 200){
							this.content = '';
							this.detail.booknum = parseInt(this.detail.booknum)+1;
							this.hidePopup();
							this.request.toastTips(res.message);
						}
					});
				}
			},
			clickAttention(){
				if(this.request.alreadyLogin()){
					if(this.detail.nch.id && this.detail.nch.id > 0){
						//获取商家订座配置
						const url = 'api/ncrb/';
						var sendData = {
							id:this.detail.nch.id,
							mod:'subscribe',
							action:'nch'
						}
						this.request.get(url, sendData).then(res => {
							if(res.code == 200){
								this.content = '';
								this.request.toastTips(res.message);
							}
						});
					}
				}
			},
			goback(){
				uni.navigateBack({
				})
			},
			readImage: function() {
				if(this.imgList.length >0){
					uni.previewImage({
						urls: this.imgList,
						current: 0,
						indicator:'number'
					})
				}
			}
		}
	}
</script>

<style lang="scss">
	@import "@/common/css/common.scss";
	@import "@/common/css/other.scss";
	p{
		margin-bottom: 60rpx;
		text-align:justify;
		font-size: 32rpx;
	}
	view{
		text-align: justify;
		font-size: 36rpx;
		line-height: 55rpx;
	}
	.header{
		padding:60rpx 30rpx 30rpx 30rpx;
		margin-top: 60rpx;
		display: flex;
		justify-content: space-between;
		align-items: center;
		height: 90rpx;
	}
	.infor-details .article .title {
		font-size: 36rpx;
		padding-bottom: 40rpx;
		padding-top: 50rpx;
	}

	.infor-details {
		.article {
			.source {
				padding: 0px 15px 5px 15px;
			}
		}
	}

	.infor-details .article .article-con {
		padding: 30rpx 15px 15px 15px;
		font-size: 32rpx;
	}

	.sourcebox {
		margin-left: 0rpx;
		margin-right: 0rpx;
	}

	.blue {
		font-size: 30rpx;
		color: #104881;
	}

	.infor-details .article {
		padding-bottom: 0rpx;
	}

	.replylist {
		margin-bottom: 80rpx;
		padding-bottom: 100rpx;
	}

	.txt-rep {
		display: flex;
		align-items: center;
	}

	.right {
		border: 1rpx dashed #dfdfdf;
		font-size: 20rpx;
		color: #828282;
		padding: 2rpx 6rpx;
		flex: 1;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;

		.blue {
			font-size: 20rpx;
		}
	}

</style>
