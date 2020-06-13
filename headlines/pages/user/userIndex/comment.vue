<template>
	<view class="commentbox">
		<template v-if="isEdit">
			<view class="status-bar"></view>
			<view class="header line-bottom" style="margin-top: 40rpx;">
				<image @click="goback()" class="back" src="/static/img/common/icon_back.png"></image>
				<text style="font-size: 32rpx;">我的评论</text>
				<text @tap="clickEditBtn">编辑</text>
			</view>
			<mescroll-uni @down="downCallBack" @init ="initMescroll" @up="upCallback" top="140rpx">
				<view class="list" v-for="(item,index) in couponList" :key="index">
					<view class="list-right" style="flex: 1;">
						<view class="list-top">
							<image class="logo" :src="item.headimgurl ? item.headimgurl : '../../../static/img/home/home_icon5@3x.png'"></image>
							<view class="righttxt">
								<view class="name">{{item.nickname}}</view>
								<view class="txt">{{item.content}}</view>
								<view style="margin-top: 12rpx;">
									<view class="comment-time">{{item.dateline}}</view>
									<!-- <view class="comment-hf">{{item.hfnum}}回复</view> -->
								</view>
							</view>
						</view>
						<view class="news">
							<view class="title1">评论文章</view>
							<text class="title2">【{{item.title}}】</text>
						</view>
					</view>
				
						<view class="media-item-line" style="position: absolute;"></view>
				</view>
			</mescroll-uni>
		</template>
		<template v-else>
			<view class="status-bar"></view>
			<view class="header line-bottom" style="margin-top: 40rpx;">
				<image @click="goback()" class="back" src="/static/img/common/icon_back.png"></image>
				<text style="font-size: 32rpx;">我的评论</text>
				<text @tap="clickEditBtn">取消</text>
			</view>
			<mescroll-uni @down="downCallBack" @init ="initMescroll" @up="upCallback" top="140rpx">
				<view class="list" v-for="(item,index) in couponList" :key="index">
					<!-- 单选按钮 -->
					<view class="" @tap="selectBatch(item.id,item.radio,index)">
						<radio class='blue radio' :class=" item.radio ? 'checked' : ''" :checked="item.radio"></radio>
					</view>
					<view class="list-right" style="flex: 1;">
						<view class="list-top">
							<image class="logo" :src="item.headimgurl ? item.headimgurl : '../../../static/img/home/home_icon5@3x.png'"></image>
							<view class="righttxt">
								<view class="name">{{item.nickname}}</view>
								<view class="txt">{{item.content}}</view>
								<view style="margin-top: 12rpx;">
									<view class="comment-time">{{item.dateline}}</view>
									<!-- <view class="comment-hf">{{item.hfnum}}回复</view> -->
								</view>
							</view>
						</view>
						<view class="news">
							<view class="title1">评论文章</view>
							<text class="title2">【{{item.title}}】</text>
						</view>
					</view>
					<view class="media-item-line" style="position: absolute;"></view>
				</view>
				<!-- <view class="list">
					<view class="">
						<radio class='blue radio' :class=" false ? 'checked' : ''" :checked="false"></radio>
					</view>
					<view class="list-right" style="flex: 1;">
						<view class="list-top">
							<image class="logo" src="../../../static/img/home/home_icon5@3x.png"></image>
							<view class="righttxt">
								<view class="name">啊实打实</view>
								<view class="txt">阿斯顿撒旦</view>
								<view style="margin-top: 12rpx;">
									<view class="comment-time">2012-01-02</view>
								</view>
							</view>
						</view>
						<view class="news">
							<view class="title1">评论文章</view>
							<text class="title2">【标题】</text>
						</view>
					</view>
					<view class="media-item-line" style="position: absolute;"></view>
				</view> -->
			</mescroll-uni>
			<view class="btn-cancel" @tap="deleteBatchTip">删除</view><!-- 删除按钮 -->
		</template>
	</view>
</template>

<script>
	import utils from '@/common/js/util.js';
	export default {
		data() {
			return {
				isEdit:true,
				mescroll: null,
				couponList: [],
				ids:''
			}
		},
		onLoad() {
			
		},
		methods: {
			initMescroll(mescroll){
				this.mescroll = mescroll;
			},
			downCallBack(mescroll)
			{
				this.commentList=[];
				mescroll.resetUpScroll();
			},
			upCallback(mescroll)
			{
				let url = 'api/ncrb/';
				let sendData = {
					action : 'mybook',
					loadnum: (mescroll.num-1)*mescroll.size,
					tpp: mescroll.size
				}
				this.request.get(url,sendData,mescroll).then(res =>{
					this.couponList = [];
					for(let i=0;i<res.data.length;i++){
						res.data[i].dateline = utils.formatYearMinutesDayFormt(res.data[i].dateline + "000");
						res.data[i].radio = false
					}
					this.couponList = this.couponList.concat(res.data); //追加新数据
					//console.log(this.couponList);
				})
			},
			//编辑
			clickEditBtn(){
				this.isEdit = !this.isEdit;
				this.ids = '';
				for(let i=0;i<this.couponList.length;i++){
					this.couponList[i].radio = false
				}
				//console.log(this.couponList);
			},
			//返回上一页
			goback(){
				uni.navigateBack({})
			},
			//批量选择
			selectBatch(selectId,radio,index){
				//console.log("空this.ids: "+this.ids);
				//console.log("index: "+index);
				//console.log("radio: "+radio);
				this.couponList[index].radio = !radio;
				//console.log("this.couponList[index].radio: "+this.couponList[index].radio);
				if(this.couponList[index].radio){//选中
					if(this.ids == ''){//选中第一个
						this.ids = selectId;
					}else{
						this.ids = this.ids + ',' + selectId;
					}
					console.log("选中this.ids: "+this.ids);
				}else{//取消选中
					let idsArr = this.ids.split(',');
					//console.log("取消选中idsArr1: "+idsArr);
					let idsIndex = '';
					for(let i=0;i<idsArr.length;i++){
						if(idsArr[i] == selectId){
							idsIndex = i;
							console.log("idsIndex: "+idsIndex);
						}
					}
					idsArr.splice(idsIndex,1);//移除取消选中的id
					//console.log("取消选中后idsArr2: "+idsArr);
					this.ids = idsArr.toString();
					console.log("取消选中后this.ids: "+this.ids);
				}
				
			},
			//批量删除
			deleteBatchTip(){
				if(this.ids){
					let that = this;
					uni.showModal({
						title:'提示',
						content: '你确定要删除吗',
						success: function(res){
							if(res.confirm){
								that.deleteBatch();
							}else if(res.cancel){
								console.log('用户点击了取消');
							}
						}
					})
				}else{
					this.request.toastTips("没有选中任何评论");
				}
			},
			deleteBatch(){
				let url = 'api/ncrb/';
				let sendData = {
					action : 'mybook',
					mod: 'del',
					ids: this.ids
				}
				//console.log("sendData: " + JSON.stringify(sendData));
				this.request.get(url,sendData).then(res =>{
					//console.log("res: " + JSON.stringify(res));
					if(res.code === 200){
						this.clickEditBtn();
						this.downCallBack(this.mescroll);
					}
				})
			}
		}
	}
</script>

<style lang="scss">
	@import "../../../common/css/common.scss";
	@import "../../../common/css/other.scss";
	.comment-time{
		display: inline-block;
		width: 30%;
		font-size: 22rpx;
		color: #9f9f9f;
	}
	.comment-hf{
		display: inline-block;
		width: 20%;
		font-size: 22rpx;
		text-align: center;
		border-radius: 20rpx;
		background-color: #E6E6FA;
		line-height: 40rpx;
	}
	.commentbox .list{
		display: flex;
		flex-direction: row;
		align-items: flex-start;
	}
	.list-top{
		display: flex;
	}
	.news{
		border:1rpx solid #E5E5E5;
		padding:10rpx 20rpx;
		margin-top:10rpx;
		background-color: #f3f5f7;
		.title1{
			font-size: 22rpx;
		}
		.title2{
			font-size: 28rpx;
		}
	}
	.header{
		padding:0rpx 30rpx 30rpx 30rpx;
		display: flex;
		// margin-top: calc(var(--status-bar-height) + 30rpx);
		// margin-top: calc(var(--status-bar-height)+30);
		/* #ifndef APP-NVUE */
		margin-top: var(--status-bar-height);
		/* #endif */
		margin-bottom: 30rpx;
		justify-content: space-between;
		align-items: center;
		height: 90rpx;
	}
	.radio{
		transform:scale(0.7);
	}
	.btn-cancel{
		position: fixed;
		bottom: 0;
		left: 0;
		right:0;
		height:88rpx;
		line-height:88rpx;
		text-align: center;
		color: #FFFFFF;
		// background-color: #D3D3D3;
		box-shadow: -2rpx 0 5rpx 0 rgba(0,0,0,.1);
		z-index: 99;
		background-color: #225289;
	}
</style>
