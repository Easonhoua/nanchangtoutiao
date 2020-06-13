<template>
	<view class="page nanchang">
		<view class="status-bar"></view>
		<view class="tab line-bottom">
			<view class="left">
				<view class="item" :class="tabIndex==0 ? 'active' : ''" @click="ontabtap(0)"><text class="txt">关注</text><text class="line" v-if="tabIndex==0"></text></view>
				<view class="item" :class="tabIndex==1 ? 'active' : ''" @click="ontabtap(1)"><text class="txt">推荐</text><text class="line" v-if="tabIndex==1"></text></view>
			</view>
			<image @click="goSearch()" class="searchicon" style="margin-bottom: 20rpx" src="/static/img/home/h_ss@3x.png"></image>
		</view>
		<block  v-if="tabIndex ==0">
			<attention-list></attention-list>
		</block>
		 <block v-else>
		 	<nanchang-list></nanchang-list>
		 </block> 
	</view>
</template>

<script>
	import nanchangList from '@/pages/nanchang/nanchangList.vue';
	import attentionList from '@/pages/nanchang/attentionList.vue';
	export default {
		components: {
			nanchangList,
			attentionList,
		},
		data() {
			return {
				tabIndex: 0,
			}
		},
		methods: {
			ontabtap(index) {
				this.tabIndex = index;
			},
			goSearch(){
				uni.navigateTo({
					url:'/pages/search/search'
				})
			}
		}
	}
</script>

<style lang="scss">
	// @import "@/common/css/common.scss";
	// @import "@/common/css/other.scss";
	@import "../../common/css/common.scss";
	@import "../../common/css/other.scss";
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
</style>
