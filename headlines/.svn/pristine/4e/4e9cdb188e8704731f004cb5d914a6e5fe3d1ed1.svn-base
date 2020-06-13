<template>
	<view class="page infor-details">
		<view class="status-bar" :style="{'top': (flag ? keyboradheight:'')}"></view>
		<view class="header line-bottom" :style="{'top': (flag ? keyboradheight:'')}">
			<image @click="goback()" class="back" src="/static/img/common/icon_back.png"></image>
			<image class="logo" src="../../static/img/home/bitmap@3x.png"></image>
			<image class="right-icons"></image>
			<!-- <image class="right-icons" @click="clickShare()" src="../../static/img/common/more@3x.png"></image> -->
		</view>
		<view class="article" style="padding-top:60rpx;" :style="{'top': (flag ? keyboradheight:'')}">
			<view class="title">{{detail.title}}</view>
			<view class="userbox" v-if="detail.nch.id > 0 ">
				<image class="userlogo" :src="detail.nch.logo?detail.nch.logo:'../../static/img/user/user_logo@3x.png'"></image>
				<view class="righttxt">
					<view class="name">{{detail.nch.name}}</view>
				</view>
				<view v-if="detail.nch.subscribe == 0 " class="attention" @click="clickAttention()">+关注</view>
			</view>
			<view class="source">
				<text class="txt" v-if="detail.from">来源：{{detail.from}}</text>
				<text class="txt">发布时间：{{detail.datetime}}</text>
				<!-- <text class="txt">作者：吴硕</text> -->
			</view>
			<view class="article-con">
				<jyf-parser gesture-zoom lazy-load ref="article" selectable
				 show-with-animation use-ancho @ready="ready"></jyf-parser>
			</view>
		</view>
		
		<view class="bt-bar" v-if="!showPopup">
			<view class="inputbox" @click="openPopup('写评论')">
				<input class="input" disabled="disabled"  placeholder="写评论"  placeholder-style="color:#8c8b8a;"/>
			</view>
			<view class="iconbox" @click="clickPl">
				<image class="icon" src="../../static/img/common/l_pl@3x.png"></image>
				<text class="txt">{{detail.booknum}}</text>
			</view>
			<view class="iconbox" @click="clickZan">
				<image class="icon" :src="detail.iszan == 1?'../../static/img/common/l_dz_pre@3x.png':'../../static/img/common/l_dz@3x.png'"></image>
				<text class="txt">{{detail.likes}}</text>
			</view>
			<view class="iconbox" @click="clickSc">
				<image class="icon" :src="detail.isbox == 1?'../../static/img/common/l_sc_pre@3x.png':'../../static/img/common/l_sc@3x.png'"></image>
			</view>
			<view class="iconbox" @click="openPopup('分享')">
				<image class="icon" src="../../static/img/common/l_fx@3x.png"></image>
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
						<textarea v-model="content" auto-height @blur="lostfocus"  @focus="getfocus" placeholder="写评论" placeholder-style="color:#8c8b8a;"></textarea>
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
				dotStyle: true,
				content:'',
				pid:0,
				shareList: [],//分享服务商列表、
				imgList:[],
				flag: false,
				keyboradheight:'',
				adFlag:false,
				showPopup:false,
				showPlPopup:false,
				showFxPopup:false
			}
		},
		onLoad(e) {
			if(e.id){
				this.id = e.id;
				this.initData();
			}
			if(e.adFlag){
				this.adFlag = e.adFlag;
			}
		},
		onHide(){
			uni.hideKeyboard()
		},
		onBackPress() {
			if(this.adFlag){
				if (!(uni.getStorageSync("launchGuide") === "hide")) {
					uni.reLaunch({
						url: "/pages/index/launchGuide"
					})
				}else{
					uni.switchTab({
						url:"/pages/news/index"
					})
				}
				return false;
			}
		},
		methods: {
			ready(e) {
				console.log('ready', e);
				// console.log('api: getText', this.$refs.article.getText());
				console.log('imgList', JSON.stringify(this.$refs.article.imgList));
			},
			changPopup(){
				this.showPopup = !this.showPopup;
			},
			//弹窗
			openPopup(value){
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
				this.keyboradheight = '0px';
			},
			
			initData:function(){
				//获取商家订座配置
				const url = 'api/ncrb/';
				var sendData = {
					id:this.id,
					action:'view'
				}
				this.request.get(url, sendData,null,false).then(res => {
					this.detail = res.data;
					this.imgList = this.detail.imglist;
					this.detail.datetime = utils.formatYearMinutesDayFormt(this.detail.dateline+"000")+" "+utils.formatMinutesTime(this.detail.dateline+"000");
					this.detail.content =this.detail.content.replace(/\width="(\d*)"/g,'width="100%"').replace(/\height="(\d*)"/g,'');
					this.$refs.article.setContent(this.detail.content);
				});
			},
			clickPl(){
				uni.navigateTo({
					url:'/pages/detail/comment?id=' + this.id
				})
			},
			clickZan(){
				if(this.request.alreadyLogin()){
					//获取商家订座配置
					const url = 'api/ncrb/';
					var sendData = {
						id:this.id,
						mod:'zan',
						action:'view'
					}
					this.request.get(url, sendData).then(res => {
						this.detail.iszan = res.data.iszan;
						this.detail.likes = res.data.likes;
						console.log("res: " + JSON.stringify(res));
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
						if(res.code == 200){
							if(res.data.isbox == 1 ){
								this.request.toastTips("收藏成功");
							}else{
								this.request.toastTips("取消成功");
							}
						}
					});
				}
			},
			//分享-显示分享列表
			clickShare(){
				console.log("clickShare: ");
				var self = this;
				self.shareList = [];//置空一次
				self.shareList = utils.getShareList();
				setTimeout(function(){
					if(self.shareList.length == 0){
						self.request.toastTipsTime("获取服务商列表超时，请重试",1500);
					}
				},2000)
			},
			//分享-分享微信或者qq或者其它
			shareItemClick(item){
				this.hidePopup();//分享成功后，执行一次，隐藏弹窗
				//判断点击的是复制链接还是刷新还是分享
				if(item.provider === 'copyLink'){
					if(!this.detail.link){
						utils.toastTipsTime("复制失败，链接不能为空",1500);
						return falsess;
					}
					//console.log("点击了复制链接");
					uni.setClipboardData({
						data:this.detail.link,
						success() {
							console.log("复制成功");
						}
					});
					utils.toastTipsTime("复制成功",1500);
				}else if(item.provider === 'refresh'){
					//console.log("点击了刷新");
					// uni.showToast({
					// 	title:'刷新成功',
					// 	duration:1500
					// })
					//utils.toastTipsTime("复制成功",1500);
					uni.redirectTo({
						url:'/pages/detail/details?id='+this.id,
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
				});
			},
			addComment(){
				if(this.request.alreadyLogin()){
					if(!this.content && this.content.length<=0){
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
					//console.log("sendData: " + JSON.stringify(sendData));
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
						const url = 'api/ncrb/';
						var sendData = {
							id:this.detail.nch.id,
							mod:'subscribe',
							action:'nch'
						}
						this.request.get(url, sendData).then(res => {
							if(res.code == 200){
								if(res.data.subscribe == 1){
									this.request.toastTips("关注成功");
								}else{
									this.request.toastTips("取消成功");
								}
								this.detail.nch.subscribe = res.data.subscribe;
							}
							
						});
					}
				}
			},
			goback(){
				if(this.adFlag){
					if (!(uni.getStorageSync("launchGuide") === "hide")) {
						uni.reLaunch({
							url: "/pages/index/launchGuide"
						})
					}else{
						uni.switchTab({
							url:"/pages/news/index"
						})
					}
				}else{
					uni.navigateBack({
					})
				}
			}
		}
	}
</script>

<style lang="scss">
	@import "../../common/css/common.scss";
	@import "../../common/css/other.scss";
	p {
		margin-bottom: 60rpx;
		text-align: justify;
		font-size: 34rpx;
	}
	view{
		text-align: justify;
		font-size: 36rpx;
		line-height: 55rpx;
	}

	
	view{
		font-size: 36rpx;
	}
	/* 状态栏高度 */
	.status-bar {
		/* #ifndef APP-NVUE */
		height: var(--status-bar-height);
		/* #endif */
		width: 750rpx;
		position: fixed;
		background-color: #FFFFFF;
		top: 0;
		z-index: 3;
	}
	
	.header{
		padding:0rpx 30rpx 30rpx 30rpx;
		display: flex;
		/* #ifndef APP-NVUE */
		margin-top: var(--status-bar-height);
		/* #endif */
		margin-bottom: 30rpx;
		justify-content: space-between;
		align-items: center;
		height: 90rpx;
	}
	.article{
		position: relative;
		left: 0;
	}
	.logo{
		width:187rpx;
		height:48rpx;
	}
	.right-icons{
		width:40rpx;
		height:40rpx;
	}
</style>
