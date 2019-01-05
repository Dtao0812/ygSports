<template>
	<view class="content">
		<view class="grace-form">
			<form @submit="formSubmit">
				<view class="form-box">
					<view class="form-content">
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
									<yg-icon type="ren-copy" color="#999999" size="24"></yg-icon>
									<input class="uni-input" type="text" placeholder="联系人" name="nickname" placeholder-style="color:#aaaaaa" />
								</view>
							</view>
						</view>
						<view class="uni-common-mt">
							<view class="uni-form-item uni-column">
								<view class="with-fun">
									<yg-icon type="renshu" color="#999999" size="20"></yg-icon>
									<input class="uni-input" type="text" placeholder="团队人数" name="nickname" placeholder-style="color:#aaaaaa" />
								</view>
							</view>
						</view>
					</view>
				</view>
				<view class="form-box">
					<view class="form-box-title">团队照片</view>
					<view style="width:750px;">
						<view class="grace-add-file">
							<view class="grace-add-btn" @tap="addImg" v-if="btnImg">
								<view>+</view><view>添加照片</view>
							</view>
							<view class="garce-items" v-for="(item, index) in imgLists" :key="index">
								<image :src="item.path" mode="widthFix" :data-imgurl="item" @tap="showImgs"></image>
								<view class="grace-close" @tap="removeImg" :id="'grace-items-img-'+index"></view>
							</view>
						</view>
					</view>
				</view>
				<view class="form-box">
					<view class="form-box-title">地区选择</view>
					<view class="form-content">
						<view @click="cityPicker" class="picker-item">
							{{cityText}}
							<text class="grace-iconfont icon-arrow-down pr-10 picker-icon" style="color: #6aa328;"></text>
						</view>
					</view>
				</view>
				<view class="form-box">
					<view class="form-box-title">团队介绍</view>
					<view class="form-content">
						<view class="uni-textarea">
							<textarea placeholder-style="color:#b4b4b4;" placeholder="请尽可能介绍团队施工经验和施工案例.限制400字" auto-height />
						</view>
						<view class="form-agreement">
							<radio-group name="danxuan">
								<label><radio value="1"></radio>我已阅读报名条款，并同意报名</label>
							</radio-group>
						</view>
					</view>
				</view>
				<view style="padding:22upx 0;">
					<button formType="submit" class="yg-button-default" type="primary" style="width:100%;">提交</button>
				</view>
			</form>
		</view>
		<mpvue-city-picker :themeColor="themeColor" ref="mpvueCityPicker" :pickerValueDefault="cityPickerValueDefault" @onCancel="onCancel" @onConfirm="onConfirm"></mpvue-city-picker>
	</view>
</template>

<script>
	var  graceChecker = require("../../common/graceChecker.js");
	import mpvuePicker from '@/threeComponents/mpvuePicker.vue';
	import mpvueCityPicker from '@/threeComponents/mpvueCityPicker.vue';
	export default {
		components:{
			mpvueCityPicker,mpvuePicker
		},
		data() {
			return {
				genderIndex: 0,
				gender : ['请选择', '男', '女'],
				dateValue : "请选择",
				imgLists : [],
				btnImg : true,
				maxNum:9,//最多选择多少图片
				themeColor: '#007AFF', //颜色
				cityText : "点击选择", //文本
				city : null,
				cityPickerValueDefault : [0,0,1], //默认选项
			};
		},
		onLoad:function(){
		},
		onReady: function () {
		},
		methods:{
			// 选择图片
			addImg:function(){
				this.$tool.mediaFun.getImages(9,(res)=>{
					console.log(res)
					this.imgLists = this.imgLists.concat(res);
					if (this.imgLists.length >= this.maxNum){
						this.btnImg = false;
					}
				});
			},
			// 删除图片
			removeImg : function(e){
				var index = e.currentTarget.id.replace('grace-items-img-', '');
				this.imgLists.splice(index, 1);
				this.imgLists = this.imgLists;
				if (this.imgLists.length < this.maxNum) {
					this.btnImg = true;
				}
			},
			// 图片预览
			showImgs : function(e){
				var currentImg = e.currentTarget.dataset.imgurl;
				uni.previewImage({
				  urls: this.imgLists,
				  current : currentImg
				})
				// this.$tool.
			},
			// 点击城市选择
			cityPicker : function(){
				this.$refs.mpvueCityPicker.show();
			},
			// 城市确定按钮
			onConfirm(e) {
				var cityText  = e.label;
				var cityValue = e.value;
				var cityCode  = e.cityCode;
				this.cityText = cityText;
				this.cityPickerValueDefault = cityValue;
				this.city = e;
			},
			bindPickerChange:function(e){
				console.log(e);
				this.genderIndex = e.detail.value;
			},
			bindDateChange : function(e){
				this.dateValue = e.detail.value;
			},
			formSubmit : function(e){
				//定义表单规则
				var rule = [
					{name:"nickname", checkType : "string", checkRule:"1,3",  errorMsg:"姓名应为1-3个字符"},
					{name:"gender", checkType : "in", checkRule:"男,女",  errorMsg:"请选择性别"},
					{name:"bd", checkType : "notsame", checkRule:"请选择",  errorMsg:"请选择生日"},
					{name:"aihao", checkType : "notnull", checkRule:"",  errorMsg:"请选择爱好"},
					{name:"email", checkType : "email", checkRule:"",  errorMsg:"请填写您的邮箱"}
				];
				//进行表单检查
				var formData = e.detail.value;
				var checkRes = graceChecker.check(formData, rule);
				if(checkRes){
					uni.showToast({title:"验证通过!", icon:"none"});
				}else{
					uni.showToast({ title: graceChecker.error, icon: "none" });
				}
			}
		},
	}
</script>

<style scoped>
	.content{padding: 0;background-color: #EEEEEE;}
	.uni-input{border: 1px solid #d2d2d2;border-radius: 5px;}
	.form-box{background-color: #FFFFFF;margin-top: 10px;}
	.form-content{padding: 10px 20px;}
	.form-box-title{color: #6aa328;border-bottom: 1px solid #EEEEEE;padding: 10px 20px;}
	.grace-add-btn{padding: 5px 0;width: 80px;border-radius: 5px;}
	.uni-textarea{border: 0.5px solid #6aa328;border-radius: 5px;height: 150px;}
	.form-agreement{margin-top: 10px;}
	.picker-item{border: 1px solid #6aa328;width: 100%;text-align: center;border-radius: 5px;color: #888888;padding: 0;line-height: 30px;margin-top: 8px;font-size: 26upx;}
	.picker-icon{float: right;}
</style>
