<template>
	<view class="page nanchang">
		<view class="line-top"></view>
		<mescroll-uni @down="downCallBack" @init ="initMescroll" @up="upCallback">
			<view class="sub-tab-con">
				<view class="infor-details line-bottom" v-for="(item,index) in myFollowList" :key="index">
					<view class="article" style="margin-top:30rpx;padding-bottom:30rpx;" @click="toDetail(item)"> 
						<view class="userbox">
							<image class="userlogo" :src="item.logo?item.logo:'/static/img/user/user_logo@3x.png'"></image>
							<view class="righttxt" style="padding-right:100rpx;flex: 1;">
								<view class="name">{{item.name?item.name:''}}</view>
								<view class="time">{{item.desc?item.desc:''}}</view>
							</view>
							<view class="attention-gray" v-if="item.subscribe==1">已关注</view>
						</view>
					</view>
				</view>
			</view>
		</mescroll-uni>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				mescroll : '',
				myFollowList:[],
			};
		},
		methods: {
			initMescroll(mescroll){
				this.mescroll = mescroll;
			},
			downCallBack(mescroll)
			{
				this.myFollowList=[];
				mescroll.resetUpScroll();
			},
			upCallback(mescroll)
			{
				const url = 'api/ncrb/';
				let data = {
					action: 'mysubscribe',
					loadnum: (mescroll.num-1)*mescroll.size,
					tpp: mescroll.size,
				};
				var that = this;
				this.request.get(url,data,mescroll).then(res=>{
					
					that.myFollowList = that.myFollowList.concat(res.data); //追加新数据
				})
			}, 
			//详情
			toDetail(item){
				console.log("item == "+JSON.stringify(item));
				if(item.type == 8){//领军人物
					uni.navigateTo({
						url:'/pages/bigdata/details?id='+item.id
					})
				}else if(item.type == 6 || item.type == 7){//领军人物
					uni.navigateTo({
						url:'/pages/nanchang/details?id='+item.id
					})
				}else{
					uni.navigateTo({
						url:'/pages/nanchang/blogger?id='+item.id
					})
				}
			}
		}
	}
</script>

<style lang="scss">
	@import "@/common/css/common.scss";
	@import "@/common/css/other.scss";
	.attention-gray{
		position: absolute;
		right:30rpx;
		top:10rpx;
		border:1rpx solid #e5e5e5;
		color:#e5e5e5;
		padding:5rpx 20rpx;
		font-size:22rpx;
		border-radius:5rpx;
	}
</style>
