<template>
	<view class="content">
		<view class="grace-h4 grace-blod" style="color:#000000;">设置昵称</view>
		<view class="grace-text-small" style="margin-top:5upx">
			建议填写你的真实姓名，货物以及订单流程更清晰。此昵称以后可以随时更改
		</view>
		<view class="grace-form" style="margin-top:10px;">
			<form @submit="register">
				<view class="grace-items grace-items-wbg yg-bottom-link-blue">
					<input type="text" name="username" class="input" placeholder="请输入昵称"></input>
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
				mobilePhone:"",//电话
				authcode:"",//验证码
				username:"",//昵称
			};
		},
		onLoad(e){
			this.mobilePhone = e.mobilePhone;
			this.authcode = e.authcode;
		},
		methods:{
			register: function(e){
				if(e.detail.value.username == '')return this.$toast("请输入昵称");
				let reqInfo = {};
				reqInfo.tpye = 1;
				reqInfo.mobilePhone = this.mobilePhone;
				reqInfo.authcode = this.authcode;
				reqInfo.username = e.detail.value.username;
				this.$api.User.register(reqInfo,(res)=>{
					this.$tool.webViewFun.switchTab("../home/index");
				});
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
