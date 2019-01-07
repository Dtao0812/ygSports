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
									<input class="uni-input" type="text" placeholder="团队名称" name="teamName" placeholder-style="color:#aaaaaa" />
								</view>
							</view>
						</view>
						<view class="uni-common-mt">
							<view class="uni-form-item uni-column">
								<view class="with-fun">
									<yg-icon type="dianhua" color="#999999" size="28"></yg-icon>
									<input class="uni-input" type="text" placeholder="电话" name="tel" placeholder-style="color:#aaaaaa" />
								</view>
							</view>
						</view>
						<view class="uni-common-mt">
							<view class="uni-form-item uni-column">
								<view class="with-fun">
									<yg-icon type="ren-copy" color="#999999" size="24"></yg-icon>
									<input class="uni-input" type="text" placeholder="联系人" name="attention" placeholder-style="color:#aaaaaa" />
								</view>
							</view>
						</view>
						<view class="uni-common-mt">
							<view class="uni-form-item uni-column">
								<view class="with-fun">
									<yg-icon type="renshu" color="#999999" size="20"></yg-icon>
									<input class="uni-input" type="text" placeholder="团队人数" name="bz2" placeholder-style="color:#aaaaaa" />
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
							<input style="display: none;" class="uni-input" name="cityText" v-model="cityText" type="text" />
						</view>
					</view>
				</view>
				<view class="form-box">
					<view class="form-box-title">团队介绍</view>
					<view class="form-content">
						<view class="uni-textarea">
							<textarea placeholder-style="color:#b4b4b4;" name="introduce" placeholder="请尽可能介绍团队施工经验和施工案例.限制400字" auto-height />
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
				teamName : "",//物流公司名称
				attention : "",//联系人
				tel : "",//联系方式
				bz2 : "",//人数
				introduce : "",//介绍
				provinces : "",//省
				city : "",//城市
				area : "",//区
				
				uploadStateNum:10,//用来判断是否上传完成
				
				imgLists : [],
				btnImg : true,
				maxNum:6,//最多选择多少图片
				
				
				themeColor: '#007AFF', //颜色
				cityText : "点击选择", //文本
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
				//赋值
				let list = cityText.split("-");
				this.provinces = list[0];
				this.city = list[1];
				this.area = list[2];
			},
			bindPickerChange:function(e){
				this.genderIndex = e.detail.value;
			},
			bindDateChange : function(e){
				this.dateValue = e.detail.value;
			},
			formSubmit : function(e){
				//定义表单规则
				var rule = [
					{name:"teamName", checkType : "notnull",checkRule:"",errorMsg:"请输入名称"},
					{name:"attention", checkType : "notnull",checkRule:"",errorMsg:"请输入联系人"},
					{name:"bz2", checkType : "notnull",checkRule:"",errorMsg:"请输入人数"},
					{name:"tel", checkType : "notnull",checkRule:"",errorMsg:"请输入联系方式"},
					{name:"introduce", checkType : "notnull",checkRule:"",errorMsg:"请输入介绍"},
					{name:"cityText", checkType : "notsame", checkRule:"点击选择",  errorMsg:"请选择城市"},
				];
				//进行表单检查
				var formData = e.detail.value;
				var checkRes = graceChecker.check(formData, rule);
				if(checkRes){
					let reqInfo = {};
					reqInfo.teamName = e.detail.value.teamName;
					reqInfo.attention = e.detail.value.attention;
					reqInfo.tel = e.detail.value.tel;
					reqInfo.bz2 = e.detail.value.bz2;
					reqInfo.introduce = e.detail.value.introduce;
					reqInfo.provinces = this.provinces;
					reqInfo.city = this.city;
					reqInfo.area = this.area;
					this.$api.Home.saveConstructionTeam(reqInfo,(res)=>{
						this.uploadStateNum = this.imgLists.length;
						if(this.uploadStateNum > 0){
							// uni-app不支持多图上传，所有将图片分开上传
							this.imgLists.forEach((v,i)=>{
								let reqFilesInfo = {};
								reqFilesInfo.bus_type = 'team';
								reqFilesInfo.bus_id = res.data;
								reqFilesInfo.files = {name:i,url:v.path};
								this.$api.Default.UploadMany(reqFilesInfo,(res)=>{
									this.uploadStateNum = this.uploadStateNum--;
								})
							})
						}
					})
				}else{
					this.$toast(graceChecker.error);
				}
			}
		},
		watch:{
			uploadStateNum(val){
				if(val == 0){
					this.$toast("上传成功");
					setTimeout(()=>{this.$abyBack();},3000)
				}
			}
		}
	}
</script>

<style scoped>
	.content{padding: 0;background-color: #EEEEEE;}
	.uni-input{border: 1px solid #d2d2d2;border-radius: 5px;}
	.form-box{background-color: #FFFFFF;margin-top: 10px;}
	.form-content{padding: 10px 20px;}
	.uni-common-mt{margin-top: 0;}
	.form-box-title{color: #6aa328;border-bottom: 1px solid #EEEEEE;padding: 10px 20px;}
	.grace-add-btn{padding: 5px 0;width: 80px;border-radius: 5px;}
	.uni-textarea{border: 0.5px solid #6aa328;border-radius: 5px;height: 150px;}
	.uni-textarea textarea{min-height: 100px;}
	.form-agreement{margin-top: 10px;}
	.picker-item{border: 1px solid #6aa328;width: 100%;text-align: center;border-radius: 5px;color: #888888;padding: 0;line-height: 30px;margin-top: 8px;font-size: 26upx;}
	.picker-icon{float: right;}
</style>
