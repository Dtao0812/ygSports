<template>
	<view class="content">
		<view class="grace-h4 grace-blod" style="color:#000000;">请输入短信验证码</view>
		<view class="grace-text-small" style="margin-top:5upx">
			我们已给手机号码<text class="yg-text-color-green">+86 13645180745</text>发送了一个6位数验证码
		</view>
		<view class="grace-form" style="margin-top:10px;">
			<form @submit="loginNow">
				<view class="grace-items grace-items-wbg">
					<view class="verification-input"><view><input type="number" v-model="code_1" class="input" placeholder=""></input></view></view>
					<view class="verification-input"><view><input type="number" v-model="code_2" class="input" placeholder=""></input></view></view>
					<view class="verification-input"><view><input type="number" v-model="code_3" class="input" placeholder=""></input></view></view>
					<view class="verification-input"><view><input type="number" v-model="code_4" class="input" placeholder=""></input></view></view>
					<view class="verification-input"><view><input type="number" v-model="code_5" class="input" placeholder=""></input></view></view>
					<view class="verification-input"><view><input type="number" v-model="code_6" class="input" placeholder=""></input></view></view>
				</view>
				<view class="again-btn yg-text-color-green">重新发送</view>
				<view class="again-btn yg-text-color-green" @tap="next">测试下一步</view>
			</form>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				code_1:'',
				code_2:'',
				code_3:'',
				code_4:'',
				code_5:'',
				code_6:'',
			};
		},
		methods:{
			changePre : function(e){
				this.pnpre = this.pnpres[e.detail.value];
			},
			next : function(){
				this.$openWin("registerThree");
			}
		}
	}
</script>

<style scoped>
	.content{
		background-color: #FFFFFF;
	}
	.verification-input{
		padding: 0 5px;
	}
	.verification-input view{
		border-bottom: 1px solid #000000;
	}
	.grace-form .grace-items .input{
		width: auto;
		text-align: center !important;
		margin-left: 0;
	}
	.again-btn{
		margin-top: 10px;
	}
</style>
