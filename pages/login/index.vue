<template>
	<view class="content">
		<view class="login-box">
			<view class="login-box-title">优冠体育</view>
			<view class="login-box-input"><input @confirm="confirm" class="input" type="text" placeholder="请输入手机号" /></view>
			<view class="login-box-input"><input @confirm="confirm" class="input" type="text" placeholder="请输入密码" /></view>
			<view class="login-box-input">
				<input @confirm="confirm" class="input authcode" type="text" placeholder="请输入验证码" />
				  <view class="login-box-getauthcode">
				    <button type="primary" class="thisBtn" @tap="getAuthcode" style="width: 200upx; font-size: 25upx;margin-top: 5upx; background:#6aa328;">点击获取</button>
				</view>
			</view>
			<view class="login-box-button">
				<button class="yg-button-default" type="primary">登录</button>
			</view>
			<view class="login-link">
				<navigator class="login-link-nav" url="../setting/setPassword?pageName=login" hover-class="navigator-hover">
					<view class="login-link-register">忘记密码？</view>
				</navigator>
				<navigator class="login-link-nav" url="../register/registerOne" hover-class="navigator-hover">
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
<style>
	page{width:750upx; min-height:100%; background:url('http://47.105.198.16/appresources/logobg.png') no-repeat top center; background-size:100% ; }	
</style>
<style scoped>
	.content{
		padding: 0;
		position: relative;
		background: url(http://114.215.202.155/images/appBg/login.png);
		background-size: 100%;
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
	.login-box-getauthcode{
		width:32%;
		right: 120upx;
		margin-top: -70upx;
		float:right;
		margin-right:48upx
	}
</style>
