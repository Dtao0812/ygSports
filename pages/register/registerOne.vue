<template>
	<view class="content">
		<view class="grace-h4 grace-blod" style="color:#000000;">请输入手机号</view>
		<view class="grace-form" style="margin-top:50upx;">
			<form @submit="loginNow">
				<view class="grace-items grace-items-wbg">
					<view class="grace-label">
						<picker :value="pnpre" @change="changePre" :range="pnpres" name="pn_pre">
							<text>+{{pnpre}}</text>
						</picker>
					</view>
					<input type="number" name="mobile" class="input" placeholder="请输入手机号"></input>
				</view>
				<button form-type='submit' type='primary' class="yg-button-default" style='margin-top:20px;'>
					下一步
				</button>
			</form>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				pnpre : '86',
				pnpres : ['86', '01', '11', '26', '520']
			};
		},
		methods:{
			changePre : function(e){
				this.pnpre = this.pnpres[e.detail.value];
			},
			loginNow : function(e){
				console.log(e);
				this.$openWin("registerTwo");
			}
		}
	}
</script>

<style scoped>
	.content{
		background-color: #FFFFFF;
	}
</style>
