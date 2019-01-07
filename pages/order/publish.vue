<template>
	<view class="content">
		<view class="grace-form">
			<form @submit="formSubmit">
				<view class="form-box order-box">
					<view class="form-content">
						<view class="grace-h4 grace-blod grace-center yg-bottom-link-green">{{proName}}</view>
						<view class="uni-common-mt mt-10">
							<view class="uni-form-item uni-column">
								<view class="picker-item">
									<picker @change="bindPickerChange" :value="index" :range="pickerList">
										<view class="uni-input grace-center">{{pickerList[index]}}</view>
									</picker>
									<text class="grace-iconfont icon-arrow-down pr-10 picker-icon" style="color: #FFFFFF;"></text>
								</view>
							</view>
						</view>
						<view class="uni-common-mt">
							<view class="uni-form-item uni-column">
								<view class="with-fun">
									<input class="uni-input" type="text" placeholder="请输入名称" v-model="listingName" name="listingName" placeholder-style="color:#aaaaaa" />
								</view>
							</view>
						</view>
						<!-- <view class="uni-common-mt">
							<view class="uni-form-item uni-column">
								<view class="with-fun">
									<view class="input-icon"><yg-icon type="changdu" color="#FFFFFF" size="28"></yg-icon></view>
									<input class="uni-input" type="text" placeholder="请输入长度/m" name="tel" placeholder-style="color:#aaaaaa" />
								</view>
							</view>
						</view>
						<view class="uni-common-mt">
							<view class="uni-form-item uni-column">
								<view class="with-fun">
									<view class="input-icon"><yg-icon type="dingbufenbu-copy" color="#FFFFFF" size="28"></yg-icon></view>
									<input class="uni-input" type="text" placeholder="请输入宽度/m" name="attention" placeholder-style="color:#aaaaaa" />
								</view>
							</view>
						</view>
						<view class="uni-common-mt">
							<view class="uni-form-item uni-column">
								<view class="with-fun">
									<view class="input-icon"><yg-icon type="12115" color="#FFFFFF" size="28"></yg-icon></view>
									<input class="uni-input" type="text" placeholder="不输入半径默认不带半圆" name="bz2" placeholder-style="color:#aaaaaa" />
								</view>
							</view>
						</view>
						<view class="form-box">
							<view class="form-box-title">备注</view>
							<view class="form-content">
								<view class="uni-textarea">
									<textarea placeholder-style="color:#b4b4b4;" name="introduce" placeholder="" auto-height />
								</view>
							</view>
						</view> -->
						<view style="padding:22upx 0;">
							<button formType="submit" class="yg-button-default" type="primary" style="width:100%;">提交</button>
						</view>
					</view>
				</view>
			</form>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				pickerList: [],
				solutionsList:[],//方案列表
				solutionsInfo:"",//方案详情
				index: 0,
				prodCategoryId:"",
				proName:"",
				listingName:""
			};
		},
		onLoad(e) {
			this.prodCategoryId = e.id;
			this.proName = e.name;
			this.$nextTick(()=>{
				this.getProdSolutionsList();
			});
		},
		methods:{
			bindPickerChange: function(e) {
				this.index = e.target.value
			},
			//获取产品设计方案
			getProdSolutionsList: function(){
				let reqInfo = {};
				reqInfo.prodCategoryId = this.prodCategoryId;
				this.$api.Product.getProdSolutionsList(reqInfo,(res)=>{
					this.solutionsList = res.data;
					let newArray = [];
					this.solutionsList.forEach((v)=>{
						newArray.push(v.solutionsName);
					})
					this.pickerList = newArray;
				});
			},
			//获取指定设计方案详情
			getBusProdSolutionsInfo: function(){
				if(this.solutionsList){
					let reqInfo = {};
					reqInfo.solutionsId = this.solutionsList[index].solutionsId;
					this.$api.Product.getBusProdSolutionsInfo(reqInfo,(res)=>{
						this.solutionsInfo = res.data;
					});
				}
			},
			//提交
			formSubmit:function(){
				if(this.listingName == '')return this.$toast("请输入名称");
				//新增产品设计清单主体
				let reqInfo = {};
				reqInfo.listingName = this.listingName;
				this.$api.Product.saveProdListing(reqInfo,(res)=>{
					//成功后新增清单详情列表
					let listingId = res.data;
					let reqInfo_list = [];
					this.solutionsInfo.forEach((v,i)=>{
						let info = {};
						info.listingId = listingId;
						info.prodId = v.prodId;
						info.prodAdjustPrice = v.prodAdjustPrice;
						info.prodNum = v.prodNum;
						info.prodOriginalPrice = v.prodOriginalPrice;
						reqInfo_list.push(info);
					})
					console.log(JSON.stringify(reqInfo_list))
					this.$api.Product.saveProdListingInfo(reqInfo_list,(res2)=>{
						this.$openWin("publishDetailed",{solutions:reqInfo_list,listingName:listingName});
					});
				});
			}
		}
	}
</script>

<style scoped>
	.order-box{border: 1px solid #EEEEEE;border-radius: 5px;padding: 10px;box-shadow: 0 0 10px #d8d8d8;}
	.with-fun{border:1px solid #EEEEEE;border-radius: 5px;}
	.uni-common-mt{margin: 0;}
	.input-icon{background: #6aa328;border-top-left-radius: 5px;border-bottom-left-radius: 5px;text-align: center;width: 50px;}
	.uni-textarea{border: 0.5px solid #6aa328;border-radius: 5px;height: 150px;}
	.uni-textarea textarea{min-height: 100px;}
	.picker-item{position: relative;background: #6aa328;width: 100%;text-align: center;margin: 0;border-radius: 5px;color: #888888;padding: 0;line-height: 25px;font-size: 26upx;}
	.picker-item uni-picker{background: #6aa328;border-radius: 5px;}
	.picker-icon{position: absolute;top: 0;bottom: 0;right: 10px;margin: auto;height: 20px;}
	.picker-item .uni-input{height: 40px;line-height: 40px;padding: 0;background: #6aa328;color: #FFFFFF;border-radius: 5px;}
</style>
