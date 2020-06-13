<template>
	<view class="user">
		<view class="panel panel-form">
			<view class="cell line-bottom">
				<view class="cell-bd-input" style="width: 85%;">
					<input class="input" placeholder="请输入真实姓名" placeholder-style="color:#e5e5e5" v-model="realname" type="text"/>
				</view>
			</view>
		</view>
		<view class="btnbar">
			<view class="btn" @tap="updateRealname">确定</view>
		</view>
	</view>
	
</template>

<script>
	export default {
		data() {
			return {
				realname:''
			}
		},
		onLoad(e) {
			if(e.realname && e.realname != 'null'){
				this.realname = e.realname
			}
		},
		methods: {
			updateRealname(){
				let url = 'api/ncrb/';
				let sendData = {
					action: 'upuserinfo',
					realname: this.realname
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
