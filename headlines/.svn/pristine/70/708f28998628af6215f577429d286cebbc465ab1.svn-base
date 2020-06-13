<template>
	<view class="page bigdata">
		<view>
			 <scroll-view class="top-scroll" ref="tabbar1" id="tab-bar" :scroll="false" :scroll-x="true" :show-scrollbar="false"
			  :scroll-into-view="scrollInto">
			 	<view class="tab header-tab tab-bar">
			 		<view class="item" v-for="(tab,index) in tabList" :class="tabIndex == index?'active':''" :key="tab.id" :id="tab.id"
			 		 :ref="'tabitem'+index" @click="ontabtap(index)">
			 			<text>{{tab.name}}</text>
			 			<text v-if="tabIndex == index" class="line"></text>
			 		</view>
			 	</view>
			 </scroll-view>
			 <image class="arrow-down" src="../../static/img/common/arrow_down@3x.png"></image>
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				tabList: [{
					id: "tab01",
					name: '要闻',
					newsid: 0
				}, {
					id: "tab02",
					name: '联播',
					newsid: 23
				}, {
					id: "tab03",
					name: '问政',
					newsid: 223
				}, {
					id: "tab04",
					name: '赣商',
					newsid: 221
				}, {
					id: "tab05",
					name: '大数据',
					newsid: 225
				}, {
					id: "tab06",
					name: '红谷滩',
					newsid: 208
				}, {
					id: "tab07",
					name: '红谷滩1',
					newsid: 209
				}, {
					id: "tab08",
					name: '红谷滩2',
					newsid: 210
				}, {
					id: "tab09",
					name: '红谷滩3',
					newsid: 211
				}, {
					id: "tab10",
					name: '红谷滩4',
					newsid: 212
				}],
				tabIndex: 0,
				cacheTab: [],
				scrollInto: "",
				navigateFlag: false,
				indicatorLineLeft: 0,
				indicatorLineWidth: 0,
				isTap: false
			}
		},
		methods: {
			ontabtap(index) {
				this.tabIndex = index;
			}
		}
	}
</script>

<style lang="scss">
	@import "../../common/css/other.scss";
	// .tab-bar {
	// 	 width: 100%;
	// 	 overflow: hidden;
	// 	 white-space: nowrap;
	// }


	.top-scroll {
		width: 80vw;
		height: 100rpx;
		background-color: #007AFF;
		display: flex;
		position:fixed;
		flex-direction: row;
		white-space: nowrap;
		align-items: center;
		background: $bg-main-color;
	}
</style>
