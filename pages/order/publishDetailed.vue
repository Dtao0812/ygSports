<template>
	<view class="content">
		<view>
			<view class="grace-h5 grace-blod text-l">{{listingName}}</view>
		</view>
		<form @submit="formSubmit">
			<!-- 数据表格开始 -->
			<view class="grace-rows solutions-list">
				<view class="grace-items" style="width: 50%;">
					<view class='grace-stable'>
						<view class='title'>
							<view>产品名称</view>
						</view>
						<view class='body' v-for="(item, index) in students" :key="index">
							<view>{{item.name}}</view>
						</view>
					</view>
				</view>
				<view class="grace-items" style="width: 25%;margin-left: 10px;margin-right: 10px;">
					<view class='grace-stable'>
						<view class='title'>
							<view>数量</view>
						</view>
						<view class='body' v-for="(item, index) in students" :key="index">
							<view><input class="uni-input" type="number" placeholder="" v-model="item.name" placeholder-style="color:#aaaaaa" /></view>
						</view>
					</view>
				</view>
				<view class="grace-items" style="width: 25%">
					<view class='grace-stable'>
						<view class='title'>
							<view>价格</view>
						</view>
						<view class='body' v-for="(item, index) in students" :key="index">
							<view><input class="uni-input" type="digit" placeholder="" v-model="item.name" placeholder-style="color:#aaaaaa" /></view>
						</view>
					</view>
				</view>
			</view>
			<view class="form-box">
				<view class="form-box-title">备注</view>
				<view class="form-content">
					<view class="uni-textarea">
						<textarea placeholder-style="color:#b4b4b4;" name="bz1" placeholder="如有什么特殊要求请详细说明..." auto-height />
					</view>
				</view>
			</view>
			<view style="padding:22upx 0;text-align: left;">
				<button formType="submit" class="yg-button-default btn-submit" type="primary">提交</button>
			</view>
			<view class="payPrice">合计预算：{{listingAmount}}</view>
		</form>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				solutionsList:[],//方案列表
				listingName:"",//清单名称
				bz1:"",//备注
				listingAmount:"88万人民币",//总价
				listingRealAmount:"",//实际支付价格
				students:[
					{ name: "jack", age: 18, gender: "男", classroom: "一年级一班" },
					{ name: "lucy", age: 18, gender: "女", classroom: "一年级二班" },
					{ name: "小米", age: 19, gender: "男", classroom: "一年级五班" },
					{ name: "lucy", age: 18, gender: "女", classroom: "一年级二班" },
					{ name: "graceUI", age: 18, gender: "男", classroom: "hcoder" }
				]
			};
		},
		onLoad(e) {
			this.solutionsList = e.solutions;
			this.listingName = e.listingName;
			this.$nextTick(()=>{
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
			//提交
			formSubmit:function(){
				if(this.listingName == '')return this.$toast("请输入名称");
				
			}
		}
	}
</script>

<style scoped>
	.solutions-list{margin-top: 20px;}
	.grace-stable{border: 1px solid #D1D1D1;box-shadow: 0 0 10px #d8d8d8;border-radius: 5px;padding: 0;}
	.grace-stable .body{padding: 2px 0;}
	.grace-stable .body .uni-input{padding:0;}
	.grace-stable .title > uni-view{font-weight: normal;width: 100%;line-height: 30px;height: 30px;background: #6aa328;border-top-right-radius: 5px;border-top-left-radius: 5px;color: #FFFFFF;}
	.grace-stable .body > uni-view{width: 100%;height: 30px;line-height: 30px;padding: 0;}
	.grace-stable .body:last-child > uni-view:last-child{border-bottom: 0;}
	.form-box{margin-top: 20px;border: 0.5px solid #6aa328;border-radius: 5px;}
	.form-content{padding: 10px;}
	.form-box-title{height: 30px;line-height: 30px;background: #6aa328;color: #FFFFFF;border-top-left-radius: 5px;border-top-right-radius: 5px;padding-left: 10px;}
	.uni-textarea{height: 100px;}
	.uni-textarea textarea{min-height: 100px;}
	.btn-submit{width: 100px;height: 30px;line-height: 30px;font-size: 12px;margin-left:0}
	.payPrice{width: 100%;text-align: right;color: #6aa328;font-weight: bold;}
</style>
