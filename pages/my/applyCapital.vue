<template>
	<view class="content">
		<view class="uni-padding-wrap">
			<form @submit="formSubmit" @reset="formReset">
				<view class="uni-common-mt">
					<view class="uni-form-item uni-column">
						<view class="with-fun">
							<yg-icon type="renshu1" color="#999999" size="28"></yg-icon>
							<input class="uni-input" type="text" placeholder="团队名称" name="nickname" placeholder-style="color:#aaaaaa" />
						</view>
					</view>
				</view>
				<view class="uni-common-mt">
					<view class="uni-form-item uni-column">
						<view class="with-fun">
							<yg-icon type="dianhua" color="#999999" size="28"></yg-icon>
							<input class="uni-input" type="text" placeholder="电话" name="nickname" placeholder-style="color:#aaaaaa" />
						</view>
					</view>
				</view>
				<view class="uni-common-mt">
					<view class="uni-form-item uni-column">
						<view class="with-fun">
							<yg-icon type="zhanghu1" color="#999999" size="28"></yg-icon>
							<input class="uni-input" type="text" placeholder="银行卡号" name="nickname" placeholder-style="color:#aaaaaa" />
						</view>
					</view>
				</view>
				<view class="uni-common-mt">
					<view class="uni-form-item uni-column">
						<view class="with-fun">
							<yg-icon type="dizhi" color="#999999" size="28"></yg-icon>
							<input class="uni-input" type="text" placeholder="开户行" name="nickname" placeholder-style="color:#aaaaaa" />
						</view>
					</view>
				</view>
				<view class="uni-common-mt">
					<view class="uni-form-item uni-column">
						<view class="with-fun">
							<yg-icon type="zhanghu" color="#999999" size="28"></yg-icon>
							<input class="uni-input" type="text" placeholder="身份证号" name="nickname" placeholder-style="color:#aaaaaa" />
						</view>
					</view>
				</view>
				<view class="apply-btn-box">
					<button class="btn-submit apply-btn" formType="submit" type="primary">提交</button>
					<button type="default" class="apply-btn-reset" formType="reset">重新输入</button>
				</view>
			</form>
		</view>
	</view>
</template>
<script>
	//来自 graceUI 的表单验证， 使用说明见手册 http://grace.hcoder.net/doc/info/73-3.html
	var  graceChecker = require("../../common/graceChecker.js");
	export default {
		data() {
			return {
				title: '表单验证',
			}
		},
		methods: {
			formSubmit: function (e) {
				//将下列代码加入到对应的检查位置
				//定义表单规则
				var rule = [
					{name:"nickname", checkType : "string", checkRule:"1,3",  errorMsg:"姓名应为1-3个字符"},
					{name:"gender", checkType : "in", checkRule:"男,女",  errorMsg:"请选择性别"},
					{name:"loves", checkType : "notnull", checkRule:"",  errorMsg:"请选择爱好"}
				];
				//进行表单检查
				var formData = e.detail.value;
				var checkRes = graceChecker.check(formData, rule);
				if(checkRes){
					uni.showToast({title:"验证通过!", icon:"none"});
				}else{
					uni.showToast({ title: graceChecker.error, icon: "none" });
				}
			},
			formReset: function (e) {
				console.log("清空数据")
				this.chosen = ''
			}
		}
	}
</script>

<style scoped>
	.uni-padding-wrap{width: auto;}
	.uni-input{border: 1px solid #d2d2d2;border-radius: 5px;padding: 5px 12px;}
	.form-box{background-color: #FFFFFF;margin-top: 10px;}
	.form-content{padding: 10px 20px;}
	.uni-common-mt {margin-top: 0;}
	.form-box-title{color: #6aa328;border-bottom: 1px solid #EEEEEE;padding: 10px 20px;}
	.form-agreement{margin-top: 10px;}
	.picker-item{border: 1px solid #6aa328;width: 100%;text-align: center;border-radius: 5px;color: #888888;padding: 0;line-height: 30px;margin-top: 8px;font-size: 26upx;}
	.picker-icon{float: right;}
	.apply-btn-box{text-align: center;margin-top: 10px;}
	.apply-btn{width: 150px;background: #6aa328;line-height: 30px;height: 30px;font-size: 24upx;}
	.apply-btn-reset{background: 0 !important;border: 0 !important;margin: 10px;font-size: 24upx;color: #999999;}.apply-btn-reset:after{border: 0;}
</style>
