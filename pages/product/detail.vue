<template>
	<view v-if="product" class="content">
		<graceSwiper swiperId="garce-swiper-1" :interval="3000" :items="product.productImg"></graceSwiper>
		<view class="garce-padding grace-nowrap product-header" style="background:#FFF; padding:30upx 2%;">
			<view class="grace-product-title">
				<view class="grace-product-price garce-padding"><text class="grace-text-small">￥</text>{{product.productPrice}}</view>
				{{product.productName}}
			</view>
			<view class="grace-product-share" @tap="proCollection"><yg-icon type="xin" color="#000000"></yg-icon></view>
		</view>
		<view class="grace-product-item" @tap="buyNow">
			<navigator class="grace-list">
				<text class="grace-list-text product-list-text">已选</text>
				<view>
					<text class="grace-list-text grace-list-mr">181095588**</text>
					<text class="grace-list-imgs-arrow grace-iconfont icon-arrow-right"></text>
				</view>
			</navigator>
		</view>
		<view class="grace-product-item">
			<navigator class="grace-list">
				<text class="grace-list-text product-list-text">送至</text>
				<view>
					<text class="grace-list-text grace-list-mr">181095588**</text>
					<text class="grace-list-imgs-arrow grace-iconfont icon-arrow-right"></text>
				</view>
			</navigator>
		</view>
		<view class="grace-product-menu">
			<view :class="[active == 1 ? 'active' : '']" @tap="showInfo">商品详情</view>
			<view :class="[active == 2 ? 'active' : '']" @tap="showComments">商品评论</view>
		</view>
		<!-- 详情 -->
		<view class="grace-product-info" v-show="active == 1">
			<view class="product-info-item">
				<view class="product-info-title grace-blod"></view>
				<view class="product-info-desc" v-html="product.info">
				</view>
			</view>
		</view>
		<!-- 评论 -->
		<view class="grace-product-info" v-show="active == 2">
			<view class="grace-comment">
				<view class="grace-comment-list" v-for="(comment,index) in product.busProdCommentsList" :key="index">
					<view class="grace-comment-face"><image src="../../static/logo.png" mode="widthFix"></image></view>
					<view class="grace-comment-body">
						<view class="grace-comment-top">
							<text>{{comment.createUser}}</text>
						</view>
						<view class="grace-comment-content">{{comment.prodComments}}</view>
						<view class="grace-comment-date">
							<text>{{comment.createDate}}</text>
						</view>
					</view>
				</view>
			</view>
		</view>
		<view style="height:60px;"></view>
		<!-- 底部 -->
		<view class="grace-footer">
			<view class="grace-product-btn" style="width: 50%;background: #d2d2d2;" @click="buyNow">立即购买</view>
			<view class="grace-product-btn" style="background:#6aa328;width: 50%;" @tap="addShopping">加入购物车</view>
		</view>
		
		<!-- 商品属性  start -->
		<view class="grace-mask" style="z-index:5;" v-if="attrIsShow">
			<view class="grace-product-attr" v-if="attrIsShow">
				<form @submit="attrSubmit" class="grace-form">
					<!-- 关闭按钮  -->
					<view class="grace-product-attr-close" @click="closeAttr">
						<text class="grace-iconfont icon-close2"></text>
					</view>
					<!-- 头部商品信息 -->
					<view class="grace-product-attr-info">
						<image :src="product.productImg" mode="widthFix"></image>
						<view class="title">
							{{product.productName}}
							<text>\n库存 : 1999件</text>
						</view>
					</view>
					<!-- 属性列表区 -->
					<view style="height:calc(100% - 155px); overflow-y:auto;">
						<view class="grace-product-attr-list">
							<view class="title">订单类型</view>
							<view class="grace-select-tips">
								<radio-group @change="typeChange" name="type">
									<label v-for="(item, index) in typeTips" :key="index" :class="[item.checked ? 'grace-checked' : '']">
										<radio :value="item.value" :checked="item.checked"></radio> {{item.name}}
									</label>
								</radio-group>
							</view>
						</view>
						<view class="grace-items" style="margin-top:8px;">
							<view class="grace-label">购买数量</view>
							<!-- input 用于记录购买数量隐藏形式并参与表单提交 -->
							<input type="number" name="buynum" :value="buyNum" style="display:none;" />
							<graceNumberBox :value="buyNum" v-on:change="buyNumChange"></graceNumberBox>
						</view>
					</view>
					<view class="grace-product-attr-btn">
						<button type="warn" formType="submit">确定</button>
					</view>
				</form>
			</view>
		</view>
		<!-- 商品属性 end -->
	</view>
</template>
<script>
import graceNumberBox from "@/components/grace/graceNumberBox.vue";
import graceSwiper from "@/components/grace/graceSwiper.vue"
export default {
	data() {
		return {
			id:'',
			product : {},
			active:1,
			//属性
			attrIsShow : false, //属性界面是否隐藏
			attrData : null, // attrdata用于记录用户选择的属性
			typeTips : [
				{ name: '13mn透气型塑胶跑道', value: '1', checked: false },
				{ name: '13mn透气型塑胶跑', value: '2', checked: false},
				{ name: '13mn透气型塑胶跑', value: '3', checked: false}
			],
			buyNum : 1
		};
	},
	onLoad(e) {
		this.id = e.id;
		this.$nextTick(()=>{
			this.getProdInfo();
		})
	},
	methods:{
		//收藏产品
		proCollection:function(){
			let reqInfo = {};
			reqInfo.productId = this.product.id;
			reqInfo.productName = this.product.productName;
			reqInfo.productImg = this.product.productImg;
			this.$api.User.saveMyCollection(reqInfo,(res)=>{
				this.$toast("收藏成功");
			})
		},
		//获得产品详情
		getProdInfo:function(){
			let reqInfo = {};
			reqInfo.id = this.id;
			this.$api.Product.getProdInfo(reqInfo,(res)=>{
				this.product = res.data;
			});
		},
		//添加商品到购物车
		addShopping:function(){
			let reqInfo = {};
			reqInfo.productId = this.id;
			this.$api.saveBusShopCar(reqInfo,(res)=>{
				this.$toast("已添加到购物车");
			})
		},
		//点击tabs评论
		showComments : function(){
			this.active = 2;
		},
		//点击tabs产品详情
		showInfo: function () {
			this.active = 1;
		},
		buyNow : function(){
			//打开属性视图
			this.attrIsShow = true;
		},
		//属性
		attrSubmit : function(e){
			//记录用户选择的属性
			this.attrData = e.detail.value;
			console.log(this.attrData);
			//关闭
			this.attrIsShow = false;
			//后续操作
			uni.showToast({
				title:"属性已经收集,请自行完善下一步代码",
				icon:"none"
			})
		},
		closeAttr : function(){
			this.attrIsShow = false;
		},
		typeChange: function (e) {
			var checkVal = e.detail.value;
			for (var i = 0; i < this.typeTips.length; i++) {
				if (checkVal.indexOf(this.typeTips[i].value + '') != -1) {
					this.typeTips[i].checked = true;
				} else {
					this.typeTips[i].checked = false;
				}
			}
			this.typeTips = this.typeTips;
		},
		buyNumChange : function(e){
			this.buyNum = e[0];
		}
	},
	components:{
		graceSwiper,
		graceNumberBox
	}
}
</script>
<style scoped>
page{background:#F2F3F4;}
.content{background: #EEEEEE;padding: 0;}
.product-header{position: relative;}
.grace-product-price{color: #de3e24;margin: 0;padding: 0;font-size: 36upx;}
.grace-product-price text{color:#de3e24;margin: 0;font-size: 30upx;}
.grace-product-share{position: absolute;top: 0;bottom: 0;right: 10px;margin: auto;height: 40px;}
.grace-product-item{margin-top: 10px;background-color: #FFFFFF;}
.product-list-text{font-size: 24upx;color: #b3b3b3;}
.grace-product-info{background-color: #EEEEEE;padding:0}
.product-info-item{padding: 10px;margin-top: 10px;background-color: #FFFFFF;}
.product-info-desc{font-size: 24upx;color: #555555;}
.grace-comment{background-color: #FFFFFF;}
</style>