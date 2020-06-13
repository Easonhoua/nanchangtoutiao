<template>
	<view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		onLoad(e) {
			if(e.url && e.tabIndex){
				console.log("----"+e.tabIndex);
				
				const app = getApp();
				app.globalData.tabIndex =e.tabIndex;
				uni.switchTab({
					url:e.url,
					success: function() {
						uni.$emit("refresh",e.tabIndex);
					}
				})
			}
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
