<template>
	<view class="content">
		<image class="login-bg" src="../../static/images/bg/login.png" mode=""></image>
		<view class="login-box">
			<view class="login-box-title">优冠体育</view>
			<view class="login-box-input"><input @confirm="confirm" class="input" type="text" placeholder="请输入手机号" /></view>
			<view class="login-box-input"><input @confirm="confirm" class="input" type="text" placeholder="请输入密码" /></view>
			<view class="login-box-button">
				<button class="login-box-btn" type="primary">登录</button>
			</view>
			<view class="login-link">
				<navigator class="login-link-nav" url="../register/registerOne" hover-class="navigator-hover">
					<view class="login-link-register">忘记密码？</view>
				</navigator>
				<navigator class="login-link-nav" url="../setting/setPassword?pageName=login" hover-class="navigator-hover">
					<view class="login-link-register">新用户注册</view>
				</navigator>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		}
	}
</script>

<style scoped>
	.content{
		padding: 0;
		position: relative;
	}
	.login-bg{
		height: 100vh;
		width: 100%;
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		margin: 0 auto;
	}
	.login-box{
		position: absolute;
		top: 100px;
		left: 0;
		right: 0;
		margin: 0 auto;
		width: 220px;
		height: 200px;
		padding: 0 10px;
	}
	.login-box-title{
		text-align: center;
		color: #6aa328;
		font-size: 18px;
	}
	.login-box-input{
		line-height: 40px;
		border-bottom: 1upx solid #7ecef4;
		margin-top: 10px;
	}
	.login-box-button{
		margin-top: 20px;
	}
	.login-box-btn{
		height: 30px;
		line-height: 30px;
		background-color: #6aa328;
	}
	.login-link{
		color: #FFFFFF;
		margin-top: 10px;
	}
	.login-link uni-button:after{
		border: 0;
	}
	.login-link-nav:first-child{
		text-align: left;
		float: left;
	}
	.login-link-nav:last-child{
		text-align: right;
		float: right;
	}
	.login-link-register{
		padding: 0 5px;
		background-color:transparent;
		color: #6aa328;
		display: inline;
		font-size: 12px;
		border: 0;
	}
	.login-link-password{
		padding: 0 5px;
		background-color:transparent;
		color: #6aa328;
		display: inline;
		font-size: 12px;
		border: 0 !important;
	}
</style>
