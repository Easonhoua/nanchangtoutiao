<template>
	<view class="page activitypage">
		<view class="status-bar"></view>
		<view class="header">
			<view class="position" @click="getLocation()">
				<image class="icon" src="/static/img/activity/ac_dw@3x.png"></image>
				<text>{{cityName}}</text>
			</view>
			<view class="searchbox" @click="toSearch()">
				<image class="search-icon" src="/static/img/common/search_icon@3x.png"></image>
				<input class="input" v-model="keyword"  placeholder="搜索" placeholder-style="color:#979797" />
			</view>
		</view>
		<view class="tab">
		<view :class="index == activityTypeIndex ? 'item active' : 'item'" v-for="(item,index) in activityTypeList" :key="index" @tap="selectActivityType(index,item)">
			<text>{{item}}</text>
			<text :class="index == activityTypeIndex ? 'line' : ''"></text>
		</view>
		<image class="item-more" src="/static/img/activity/ac_more@3x.png"></image>
	</view>
	<mescroll-uni @down="downCallBack" @init ="initMescroll" @up="upCallback" top="250">
		<view class="tab-con">
			<view class="listbox" v-for="(item,index) in activityList" :key="index">
				<view class="list line-bottom" @tap="jumpActivityDetail(item.id)">
					<view class="imgbox">
						<image class="img" :src="item.pic ? item.pic : ''"></image>
					</view>
					<view class="righttxt">
						<view class="title">{{item.title}}</view>
						<view class="tagbox">
							<!-- <text class="tag" v-show="item.tag[0] != ''">{{item.tag[0] ? item.tag[0] : ''}}</text>
							<text class="label">{{item.tag[1] ? item.tag[1] : ''}}</text> -->
							<text class="tagLabel" v-for="(tagItem,tagIndex) in item.tag" :key="tagIndex">{{tagItem ? tagItem : ''}}</text>
						</view>
						<view class="timebox">
							<text>{{item.starttime}} - {{item.endtime}}</text>
							<text class="price">{{item.cost}}</text>
						</view>
					</view>
				</view>
				<view class="btnbar">
					<view :class="item.btnColorClass" >{{item.btn}}</view>
				</view>
			</view>
		</view>
	</mescroll-uni>
	</view>
</template>

<script>
	import utils from '@/common/js/util.js';
	export default {
		data(){
			return{
				mescroll: '',
				keyword:'',
				activityTypeList:[],
				activityTypeIndex: 0,
				tag:'',
				activityList:[],
				currtime:'',//当前时间戳
				longitude:'',
				latitude :'',
				cityName:'南昌市'
			}
		},
		onReady() {
			this.getLocation();
		},
		onLoad() {
			this.currtime = new Date().getTime();//获取当前时间戳
			this.getActivityTypeList();
			//this.getActivityList();
			
		},
		methods:{
			getLocation(){
				uni.getLocation({
					type: 'gcj02',
					geocode:true,
					success: function(res) {
						this.cityName = res.address.city;
						this.longitude = res.longitude;
						this.latitude = res.latitude;
					}
				});
			},
			//分类列表
			getActivityTypeList(){
				let url = "api/ncrb/";
				let sendData = {
					action: 'activity',
					mod: 'tag'
				}
				this.request.get(url,sendData).then(res =>{
					//console.log(res);
					if(res.code === 200){
						this.activityTypeList = res.data.tags;
					}
				})
			},
			//选中活动类型
			selectActivityType(index,item){
				this.activityTypeIndex = index;
				this.tag = item;
				this.downCallBack(this.mescroll);
			},
			search(e){
				this.downCallBack(this.mescroll);
			},
			//活动列表
			initMescroll(mescroll){
				this.mescroll = mescroll;
			},
			downCallBack(mescroll){
				this.activityList=[];
				mescroll.resetUpScroll();
			},
			upCallback(mescroll){
				let url = "api/ncrb/";
				let sendData = {
					action: 'activity',
					tag: this.tag,
					loadnum: 0,
					tpp: 30,
					keyword:this.keyword
				}
				var that = this;
				this.request.get(url,sendData,mescroll).then(res =>{
					//console.log("请求结果: "+res);
					//console.log("请求结果: " + JSON.stringify(res));
					if(res.code === 200){
						that.activityList = [];
						for(var i=0;i<res.data.length;i++){
							res.data[i].cost = res.data[i].cost ? res.data[i].cost : "0元";
							res.data[i].cost = res.data[i].cost === "免费" ? res.data[i].cost : "￥" + res.data[i].cost;
							if(that.currtime < res.data[i].starttime+'000'){//活动未开始
								res.data[i].btn = res.data[i].btn[0];
								res.data[i].btnColorClass='baoming-yellow';
							}else if(that.currtime > res.data[i].endtime+'000'){//活动已结束
								res.data[i].btn = res.data[i].btn[2];
								res.data[i].btnColorClass='btn-end';
							}else{//活动进行中
								res.data[i].btn = res.data[i].btn[1];
								res.data[i].btnColorClass='baoming-red';
							}
							res.data[i].starttime = utils.formatMonthDay(res.data[i].starttime+'000');
							res.data[i].endtime = utils.formatMonthDay(res.data[i].endtime+'000');
							res.data[i].tag = res.data[i].tag.split(",");
						}
						that.activityList = that.activityList.concat(res.data);
						that.activityList = that.util.unique(that.activityList,"id");
						
						//that.activityList = res.data;
						//console.log(this.activityList);
					}
				})
			},
			//跳转详情页面
			jumpActivityDetail(id){
				uni.navigateTo({
					url:"/pages/activity/activityDetails?id="+id
				});
			},
			toSearch(){
				uni.navigateTo({
					url:'/pages/search/search?type=11'
				})
			}
		}
	}
</script>

<style lang="scss">
	@import "../../common/css/common.scss";
	@import "../../common/css/other.scss";
	.baoming-btn{
		padding: 4px 12px;
		font-size: 12px;
		border-radius: 15px;
	}
	.baoming-grey{
		color: #A9A9A9;
		border: 0.5px solid #A9A9A9;
	}
	.baoming-red{
		padding:8rpx 24rpx;
		color:#df0000;
		border:1rpx solid #df0000;
		font-size:$font-size24;
		border-radius:30rpx;
	}
	.baoming-yellow{
		padding:8rpx 24rpx;
		color:#FBBD08;
		border:1rpx solid #FBBD08;
		font-size:$font-size24;
		border-radius:30rpx;
	}
	
	.btn-end{
		padding:8rpx 24rpx;
		color:#A9A9A9;
		border:1rpx solid #A9A9A9;
		font-size:$font-size24;
		border-radius:30rpx;
	}
	.tagLabel {
	  flex-direction: row;
	  font-size: 20rpx;
	  color: #DF0000;
	  background-color: #FFFFFF;
	  padding: 0rpx 5rpx;
	  margin-right: 18rpx;
	  border-radius: 5rpx;
	  // border-style: solid;
	  // border-color:  #DF0000;
	  // border-width: 1rpx;
	  box-shadow: 0px 0px 0px 0.5px #DF0000;
	 }
</style>