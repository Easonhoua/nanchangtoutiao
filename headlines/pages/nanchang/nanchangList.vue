<template>
	<view>
		<mescroll-uni @down="downCallBack" @init ="initMescroll" @up="upCallback">
			<view class="tab-con">
				<block v-for="(item,index) in nanchangList" :key="index" >
					<news-video-item v-if="item.style == 'video'" :newsItem="item"  @click="toDetail(item)" v-on:videoPlay="videoPlay"></news-video-item>
					<item-list v-else :newsItem="item"  @click="toDetail(item)"></item-list>
				</block>
			</view>
		</mescroll-uni>
	</view>
</template>

<script>
	import utils from '@/common/js/util.js';
	import itemList from '@/components/item-list/item-list.vue';
	import newsVideoItem from '@/components/item-list/news-video-item.nvue';
	
	export default {
		components: {
			itemList,
			newsVideoItem
		},
		data() {
			return {
				mescroll : '',
				nanchangList:[],
				nanChangSize:1,
				videoContextList: {},
				videoContext: ''
			}
		},
		methods: {
			initMescroll(mescroll){
				this.mescroll = mescroll;
			},
			downCallBack(mescroll)
			{
				this.nanchangList=[];
				mescroll.resetUpScroll();
			},
			upCallback(mescroll)
			{
				const url = 'api/ncrb/';
				let data = {
					action:'nch',
					loadnum: (mescroll.num-1)*mescroll.size,
					tpp: mescroll.size,
				};
				var that = this;
				console.log("data: " + JSON.stringify(data));
				this.request.get(url,data,mescroll).then(res=>{
					if(res.code ==200){
						let newData = res.data;
						
						newData.forEach(item => {
							if(item.style == 'video'){
								var video = uni.createVideoContext(item.id);
								that.videoContextList[item.id] = video;
							}
							item.from = item.nchname;
							item.datetime = utils.friendlyDate(item.dateline+"000");
						});
						that.nanchangList = that.nanchangList.concat(newData); //追加新数据
						that.nanchangList = that.util.unique(that.nanchangList,"id");
						
						// console.log("that.nanchangList: " + JSON.stringify(that.nanchangList));
					}
					if(that.nanchangList.length >0){
						that.nanChangSize = Math.ceil(that.nanchangList.length/3);
					}
				})
			},
			videoPlay(item) {
				if (this.videoContext && item.id != this.videoContext.id ) {
					this.videoContext.pause();
				}
				var video = this.videoContextList[item.id];
				this.remarkVideo(video);
			},
			remarkVideo(video) {
				this.videoContext = video;
			},
			toDetail(item){
				utils.gotoDetail(item);
			},
			readImage: function(index,imgList) {
				uni.previewImage({
					urls: imgList,
					current: index
				})
			}
		}
	}
</script>

<style lang="scss">
	@import "../../common/css/common.scss";
	@import "../../common/css/other.scss";
</style>
