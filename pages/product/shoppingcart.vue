<template>
	<view class="grace-padding">
		<view class="grace-shoppingcard" v-for="(item, index) in shoppingCard" :key="index">
			<view class="shop-name grace-blod">{{item.shopName}}</view>
			<view class="goods">
				<image :src="item.productImg" mode="widthFix"></image>
				<view class="desc">
					<view class="goods-title">{{item.productName}}</view>
					<view class="goods-price">
						￥{{item.price}}
						<view class="goods-number">
							<graceNumberBox :index="index" :value="item.num" :maxNum="100" :minNum="1" v-on:change="numberChange"></graceNumberBox>
						</view>
					</view>
					<view class="goods-remove grace-iconfont icon-remove" @tap="removeGoods" :id="'removeIndex_' + index">
						<text>删除</text>
					</view>
				</view>
			</view>
		</view>
		<!-- 底部  -->
		<view class="grace-footer">
			<view style="width:60%; line-height:90upx; text-indent:1em;">
				总计 <text style="font-size:36upx; color:#F00;">￥{{totalprice}}</text>
			</view>
			<view style="width:40%;">
				<button type="warn" @tap="checkout">立即结算</button>
			</view>
		</view>
	</view>
</template>
<script>
var _self;
import graceNumberBox from "@/components/grace/graceNumberBox.vue";
export default {
	data() {
		return {
			page:1,
			//总价
			totalprice : '',
			//模拟购物车数据【此数据可以来源于网络、本地存储等多种途径】
			shoppingCard : [
				{
					"goodsId"   : 1,
					"productName" : "hcoder 演示商品",
					"shopName"  : "hcoder",
					"price"     : 10.00,
					"num"     : 1,
					"productImg": "../../static/images/bg/mu_1.png"
				},
				{
					"goodsId": 2,
					"productName": "dcloud 演示商品",
					"shopName": "dcloud",
					"price": 20.00,
					"num": 1,
					"productImg": "../../static/images/bg/mu_1.png"
				},
				{
					"goodsId": 3,
					"productName": "uni-app 演示商品",
					"shopName": "uni-app",
					"price": 30.00,
					"num": 2,
					"productImg": "../../static/images/bg/mu_1.png"
				}
			]
		}
	},
	onLoad : function(){
		_self = this;
		this.numTotoal();
	},
	methods:{
		// 获得我的购物车
		getBusShopCarList:function(){
			let reqInfo = {};
			reqInfo.page = this.page;
			this.$api.Shopping.getBusShopCarList(reqInfo,(res)=>{
				
			})
		},
		//计算总计函数
		numTotoal:function(){
			var total = 0;
			for (var i = 0; i < this.shoppingCard.length; i++){
				total += Number(this.shoppingCard[i].price) * Number(this.shoppingCard[i].num);
			}
			this.totalprice = total;
		},
		numberChange:function(data){
			this.shoppingCard[data[1]].num = data[0];
			//计算总价
			this.numTotoal();
		},
		removeGoods : function(e){
			var index = e.currentTarget.id.replace('removeIndex_', '');
			index = Number(index);
			wx.showModal({
				title: '确认提醒',
				content: '您确定要移除此商品吗？',
				success:function(e){
					if (e.confirm) {
						_self.shoppingCard.splice(index, 1);
						//计算总价
						_self.numTotoal();
					}
				}
			})
		},
		checkout:function(){
			uni.showToast({
				title: '计算的数据保存在 shoppingCard 变量内 ^_^',
				icon : "none"
			})
		}
	},
	components:{
		graceNumberBox
	}
}
</script>
<style>
page{background:#F6F7F8;}
</style>