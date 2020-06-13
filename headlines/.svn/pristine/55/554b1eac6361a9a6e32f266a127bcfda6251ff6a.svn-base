<template>
	<view class="">
		<view class="list" >
			<text @click="click" :class="openFlag?'openTitle':'title'" :style="newsItem.redFlag?'color:'+newsItem.redFlag:''">【{{newsItem.title}}】 {{newsItem.desc}}</text>
			<!-- <view class="txt">
					<text class="bold red font30">07 : 52</text>
					<text class="bold font30">【赣深铁路顺利完成柳城制梁场首榀箱梁架设 作业】</text>
					<text class="font30" style="">月30日上午9时整，在中铁二十五局高沙坝 大桥施工现场，作业人员经过</text>
			</view> -->
			<view class="tagbox" >
				<text class="label" v-if="tag.indexOf('加红') < 0 && tag.indexOf('解读') < 0 " v-for="(tag, index) in newsItem.tags" :key="index" @click="toTabDetail(tag)">{{tag}}</text>
			</view>
			<view class="tagbox" v-if="newsItem.tag.indexOf('解读') >= 0" @click="toExplainDetail()">
				<image class="explain-icon" src="../../static/img/home/left_line.png"></image><text class="label-jd">【联播解读】{{newsItem.title}}</text>
			</view>
			<view class="statistics">
				<text class="font30 red">{{newsItem.time}}</text>
				<view class="rightbox">
					<view class="item"><text class="font22">{{newsItem.pv}}</text> </view>
					<view class="item" @click="clickSc()">
						<image class="icon" :src="isbox == 1 ?'../../static/img/common/l_sc_pre@3x.png':'../../static/img/common/l_sc@3x.png'"></image>
					</view>
					<view class="item" @click="goComment()">
						<image class="icon" src="../../static/img/common/l_pl@3x.png"></image>
						<!-- <text class="font22">{{newsItem.booknum}}</text> -->
					</view>
				</view> 
			</view>
			 <view class="media-item-line" style="position: absolute;"></view>
		</view>
	</view>
</template>

<script>
	import request from "../../api/index.js";
	import utils from '@/common/js/util.js';
	export default {
		props: {
			newsItem: {
				type: Object,
				default: function(e) {
					return {}
				}
			}
		},
		data(){
			return {
				openFlag:false,
				clickFlag:false,
				readFlag:false,
				isbox:0,
				showShareView:false,
				shareList:[]
			}
		},
		methods: {
			click() {
				if(this.newsItem.tag.indexOf('加红') >= 0){
					this.newsItem.redFlag = '#E54D42';
				}else{
					this.newsItem.redFlag = '#828282';
				}
				this.openFlag = !this.openFlag;
				
				if(!this.readFlag){
					this.newsItem.pv = parseInt(this.newsItem.pv) +1 +"阅读";
					this.initData();
				}
			},
			toExplainDetail(){
				uni.navigateTo({
					url:'/pages/detail/explainDetails?id='+this.newsItem.id
				})
			},
			toTabDetail(tag){
				uni.navigateTo({
					url:'/pages/detail/tabDetails?tag='+tag
				})
			},
			initData:function(){
				//获取商家订座配置
				const url = 'api/ncrb/';
				var sendData = {
					id:this.newsItem.id,
					action:'view'
				}
				request.get(url, sendData).then(res => {
					this.readFlag = true;
				});
			},
			goComment(){
				uni.navigateTo({
					url:'/pages/detail/comment?id='+this.newsItem.id
				})
			},
			clickSc(){
				if(request.alreadyLogin()){
					const url = 'api/ncrb/';
					var sendData = {
						id:this.newsItem.id,
						mod:'box',
						action:'view'
					}
					request.get(url, sendData).then(res => {
						this.isbox = res.data.isbox;
						if(res.code == 200){
							if(res.data.isbox == 1 ){
								request.toastTips("收藏成功");
							}else{
								request.toastTips("取消成功");
							}
						}
					});
				}
			},
		}
	}
</script>

<style scoped>
.list {
	padding: 30rpx 32rpx;
	border-style: solid;
	position: relative;
	/* border-bottom-width: thin;
	border-color: #007AFF; */
}

.txt {
	font-size: 30rpx;
	margin-bottom: 20rpx;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: flex-start;
}
.title{
	font-size:34rpx;
	margin-bottom:30rpx;
	line-height: 50rpx;
	lines:3;
	text-overflow:ellipsis;
}
.openTitle{
	font-size:34rpx;
	margin-bottom:30rpx;
	line-height: 50rpx;
}

.tagbox {
	margin-bottom: 16rpx;
	align-items: center;
	flex-direction: row;
}

.label {
	border-radius: 5rpx;
	margin-right: 14rpx;
	font-size: 24rpx;
	padding: 5rpx 15rpx;
	background-color: #FFFFFF;
	color: #AAB0BB;
	border-style:solid;
	border-width: 1rpx;
	border-color: #F6F6FA;
}

.label-jd {
	border-radius: 5rpx;
	font-size: 24rpx;
	padding: 5rpx 15rpx;
	background-color: #FFFFFF;
	color: #000000;
}

.statistics {
	justify-content:space-between;
	flex-direction: row;
	align-items: center;
}
.rightbox{
	flex: 1;
	flex-direction: row;
	justify-content: flex-end;
}
.item {
	color: #AAB0BB;
	margin-left: 50rpx;
	font-size: 22rpx;
	flex-direction: row;
	align-items: center;
}

.icon {
	width: 30rpx;
	height: 30rpx;
	margin-right: 20rpx;
							/* vertical-align: middle; */
}

.red {
	color: #DF0000;
}

.bold {
	font-weight: bold;
}
.font22{
	font-size:24rpx;
	color:#AAB0BB;
}
.font30{
	font-size: 30rpx;
}
  .media-item-line {
  	position: absolute;
  	left: 0upx;
  	right: 0upx;
  	bottom: 0;
  	height: 1upx;
  	background-color: #ebebeb;
  }
	.explain-icon{
		width: 23rpx;
		height:24rpx;
		margin-right:0rpx;
	}
</style>
