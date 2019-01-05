<template>
	<view class="content">
		<view class="grace-h4 grace-blod" style="color:#000000;">设置昵称</view>
		<view class="grace-text-small" style="margin-top:5upx">
			建议填写你的真实姓名，货物以及订单流程更清晰。此昵称以后可以随时更改
		</view>
		<view class="grace-form" style="margin-top:10px;">
			<form @submit="loginNow">
				<view class="grace-items grace-items-wbg yg-bottom-link-blue">
					<input type="number" name="mobile" class="input" placeholder="请输入昵称"></input>
				</view>
				<button form-type='submit' type='primary' class="yg-button-default" style='margin-top:20px;'>
					完成注册
				</button>
			</form>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
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
	.grace-items-wbg{
		border-radius: 0;
	}
	.grace-form .grace-items .input{
		width: 100%;
		margin-left:0;
	}
</style>
