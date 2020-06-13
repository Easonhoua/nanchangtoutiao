<template>
	<view class="timebox"><text class="time-txt">{{newsItem.currDate}} {{newsItem.weekday}}</text></view>
</template>

<script>
	export default {
		props: {
			newsItem: {
				type: Object,
				default: function(e) {
					return {}
				}
			}
		},
		methods: {
			click() {
				this.$emit('click');
			}
		}
	}
</script>

<style>
	.timebox {
		background-color: #F7F7F7;
		padding: 26rpx 20rpx;
	}

	.time-txt {
		font-size: 26rpx;
		font-weight: bold;
	}
</style>
