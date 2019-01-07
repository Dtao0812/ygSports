<template>
	<view class="content">
		<view class="grace-h4 grace-blod" style="color:#000000;">请输入短信验证码</view>
		<view class="grace-text-small" style="margin-top:5upx">
			我们已给手机号码<text class="yg-text-color-green">{{mobilePhone}}</text>发送了一个6位数验证码
		</view>
		<view class="grace-form" style="margin-top:10px;">
			<form @submit="loginNow">
				<view class="grace-items grace-items-wbg">
					<view class="verification-input" v-for="(v,i) in codeList" :key="i">
						<view>
							<input type="number" :focus="selectCode==v.id" maxlength="1" v-model="v.value" class="input" @input="focusInput($event,v.id)"></input>
						</view>
					</view>
				</view>
				<view class="again-btn yg-text-color-green" @tap="getVerificationCode">重新发送</view>
			</form>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				codeList:[
					{id:1,value:""},
					{id:2,value:""},
					{id:3,value:""},
					{id:4,value:""},
					{id:5,value:""},
					{id:6,value:""},
				],
				mobilePhone:"",
				verificationCode:"",
				selectCode:1,
			};
		},
		onLoad(e){
			this.mobilePhone = e.mobilePhone;
		},
		methods:{
			// 输入框获得焦点
			focusInput : function(e,id){
				if(e.detail.value != ""){
					this.selectCode = id + 1;
				}
			},
			// 重新发送验证码
			getVerificationCode:function(){
				this.$api.User.getRegisteredAuthCode(this.mobilePhone);
			},
			//下一步
			next : function(){
				this.$openWin("registerThree",{mobilePhone:this.mobilePhone,authcode:this.verificationCode});
			}
		},
		watch:{
			codeList: {
		　　　　handler(newValue, oldValue) {
					//监听所有的input值，如果所有的验证码都填写好就提交到下一步
				   let isAll = true;
				   let code = "";
		　　　　　　newValue.forEach((v,i)=>{
				      if(v.value == ""){
						  isAll = false;
					  }else{
						  code = code + "" + v.value;
					  }
				   });
				   if(isAll){
					   this.verificationCode = code;
					   this.next();
				   }
		　　　　},
		　　　　deep: true
		　　},
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
