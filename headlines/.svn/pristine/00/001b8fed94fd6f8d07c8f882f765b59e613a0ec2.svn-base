<template>
	<view class="page search">
		<view class="header">
			<view class="searchbox">
				<image class="icon" src="/static/img/common/search_icon@3x.png"></image>
				<input class="input" confirm-type="search" v-model="keyword" @confirm="toSearchList()" placeholder="查找你想要的内容" placeholder-style="color:#AAB0BB" />
			</view>
			<text class="txt" @click="cancel()">取消</text>
		</view>
		<view class="search-con">
			<view class="hot" v-if="popularList.length >0">
				<view class="title" style="margin-top: 20rpx;">热门搜索</view>
				<view class="hotbox">
					<view class="label" @click="toSearchList(item)" v-for="(item,index) in popularList" :key="index">{{item}}</view>
				</view>
			</view>
			<view class="history hot">
				<view class="title">
					<text class="txt">历史记录</text>
					<text class="del" @click="deleteHistory()">清除历史</text>
				</view>
				<view class="hotbox">
					<view class="label" @click="toSearchList(item.name)"  v-for="(item,index) in historyQueryList" :key="index">{{item.name}}</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				type:'',
				keyword: '',
				popularList: [], //热门
				historyQueryList: []//历史
			}
		},
		onLoad(e) {
			if(e.type){
				this.type = e.type;
			}
			if(uni.getStorageSync("historyQueryList")){
				this.historyQueryList = JSON.parse(uni.getStorageSync("historyQueryList"));
			}
			this.queryPopularList();
		},
		methods: {
			queryPopularList: function() {
				var url = "api/ncrb/";
				var data = {
					action:'search',
					mod:'hot'
				}
				this.request.get(url, data).then(res => {
					this.popularList = res.data.keywords;
				})
			},
			toSearchList: function(item) {
				if(item){
					this.keyword = item;
				}
				if( uni.getStorageSync("historyQueryList")){
					this.historyQueryList =  JSON.parse(uni.getStorageSync("historyQueryList"));
				}
				if(this.keyword){
					var messageData = [{name: this.keyword}];
					if(this.historyQueryList){
						this.historyQueryList.forEach((item,index) => {
							if(item.name === this.keyword) {
								this.historyQueryList.splice(index,1);
							}
						});
					}
					this.historyQueryList = messageData.concat(this.historyQueryList);
					this.historyQueryList = this.historyQueryList.slice(0,10); 
					uni.setStorageSync("historyQueryList",JSON.stringify(this.historyQueryList)); 
				}
				uni.redirectTo({
					url:"/pages/search/searchList?keyword="+this.keyword+"&type="+this.type
				})
			},
			deleteHistory:function(){ //清空记录
				uni.setStorageSync("historyQueryList",""); 
				this.historyQueryList = [];
			},
			cancel(){
				uni.navigateBack({
				});
			}
		}
	}
</script>

<style lang="scss">
	@import "../../common/css/common.scss";
	@import "../../common/css/other.scss";
</style>
