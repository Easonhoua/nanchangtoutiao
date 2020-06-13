<template>
	<view class="user">
		<view class="panel panel-form">
			<view class="cell line-bottom">
				<view class="cell-bd-input" style="width: 85%;">
					<input class="input" placeholder="请输入单位" placeholder-style="color:#e5e5e5" v-model="company"/>
				</view>
			</view>
		</view>
		<view class="btnbar">
			<view class="btn" @tap="updateCompany">确定</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				company: ''
			}
		},
		onLoad(e) {
			if(e.company && e.company != 'null'){
				this.company = e.company
			}
		},
		methods: {
			updateCompany(){
				let url = 'api/ncrb/';
				let sendData = {
					action: 'upuserinfo',
					company: this.company
				}
				this.request.get(url,sendData).then(res =>{
					if(res.code == 200){
						this.request.toastTips(res.message);
					}else{
						this.request.toastTips("更新失败");
					}
				})
			}
		}
	}
</script>

<style lang="scss">
	@import "../../../common/css/common.scss";
	@import "../../../common/css/other.scss";
	page{
		background-color: #F2F0F3;
	}
</style>
