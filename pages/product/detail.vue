<template>
	<view>
		<graceSwiper swiperId="garce-swiper-1" :interval="3000" :items="product.imgs"></graceSwiper>
		<view class="garce-padding grace-nowrap" style="background:#FFF; padding:30upx 2%;">
			<view class="grace-product-title">{{product.name}}</view>
			<view class="grace-product-share grace-iconfont icon-share3" @tap="share"></view>
		</view>
		<view class="grace-product-price garce-padding">
			￥{{product.price}}<text>￥{{product.priceMarket}}</text>
		</view>
		<view class="grace-product-desc">
			<text>运费 ￥0.00</text>
			<text>已售 21008 件</text>
			<text>浏览 36万次</text>
		</view>
		<view class="grace-product-menu">
			<view :class="[active == 1 ? 'active' : '']" @tap="showInfo">商品详情</view>
			<view :class="[active == 2 ? 'active' : '']" @tap="showComments">商品评论</view>
		</view>
		<!-- 详情 -->
		<view class="grace-product-info" :hidden="active == 2">
			<image src="https://img30.360buyimg.com/sku/jfs/t22021/327/2281785192/48707/57806074/5b4f1579Nae7adb49.jpg" mode="widthFix"></image>
			<image src="https://img30.360buyimg.com/sku/jfs/t21838/18/2275707529/311540/cba1d04c/5b4f155fNac3aa2f0.jpg" mode="widthFix"></image>
			<image src="https://img30.360buyimg.com/sku/jfs/t21682/256/2344553276/204456/cf7a2ddb/5b4ffbbfN48c54307.jpg" mode="widthFix"></image>
		</view>
		<!-- 评论 -->
		<view class="grace-product-info" :hidden="active == 1">
			<view class="grace-comment">
				<view class="grace-comment-list">
					<view class="grace-comment-face"><image src="https://img.alicdn.com/bao/uploaded/i2/2069558116/O1CN01FnohzI29pAws2o2yb_!!0-item_pic.jpg" mode="widthFix"></image></view>
					<view class="grace-comment-body">
						<view class="grace-comment-top">
							<text>今生缘</text>
						</view>
						<view class="grace-comment-content">非常好的，速度很快！</view>
						<view class="grace-comment-date">
							<text>08/10 07:55</text>
						</view>
					</view>
				</view>
				<view class="grace-comment-list">
					<view class="grace-comment-face"><image src="https://img.alicdn.com/bao/uploaded/i2/2069558116/O1CN01FnohzI29pAws2o2yb_!!0-item_pic.jpg" mode="widthFix"></image></view>
					<view class="grace-comment-body">
						<view class="grace-comment-top">
							<text>客户002</text>
						</view>
						<view class="grace-comment-imgs">
							<view class="imgs">
								<image src="https://i1.mifile.cn/a2/1541206648_8078524_s850_638wh.jpg" mode="widthFix"></image>
							</view>
							<view class="imgs">
								<image src="https://i1.mifile.cn/a2/1541158583_8499492_s1008_756wh.jpg" mode="widthFix"></image>
							</view>
							<view class="imgs">
								<image src="https://i1.mifile.cn/a2/1541133825_7020067_s648_1152wh.jpg" mode="widthFix"></image>
							</view>
						</view>
						<view class="grace-comment-content">物理很快，手机很喜欢！</view>
						<view class="grace-comment-date">
							<text>08/10 07:55</text>
						</view>
					</view>
				</view>
			</view>
		</view>
		<view style="height:60px;"></view>
		<!-- 底部 -->
		<view class="grace-footer">
			<view class="grace-product-btn" style="width: 50%;" @click="buyNow">立即购买</view>
			<view class="grace-product-btn" style="background:#FFAA21;width: 50%;">加入清单</view>
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
						<image :src="product.logo" mode="widthFix"></image>
						<view class="title">
							{{product.name}}
							<text>\n库存 : 1999件</text>
						</view>
					</view>
					<!-- 属性列表区 -->
					<view style="height:calc(100% - 155px); overflow-y:auto;">
						<view class="grace-product-attr-list">
							<view class="title">颜色</view>
							<view class="grace-select-tips">
								<radio-group @change="colorChange" name="color">
									<label v-for="(item, index) in colorTips" :key="index" :class="[item.checked ? 'grace-checked' : '']">
										<radio :value="item.value" :checked="item.checked"></radio> {{item.name}}
									</label>
								</radio-group>
							</view>
						</view>
						<view class="grace-product-attr-list">
							<view class="title">套餐类型</view>
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
			product : {
				name: "小米 MIX3 一面科技 一面艺术 ( 磁动力滑盖全面屏 | 故宫特别版 )",
				logo : "https://img.alicdn.com/bao/uploaded/i3/TB1wmWchbsrBKNjSZFppHAXhFXa_052922.jpg",
				imgs : [
					{imgUrl : 'https://i1.mifile.cn/f/i/2018/mix3/gallery_header.jpg'},
					{imgUrl : 'https://i1.mifile.cn/f/i/2018/mix3/gallery_img1.jpg'},
					{imgUrl : 'https://i1.mifile.cn/f/i/2018/mix3/gallery_img7.jpg'}
				],
				price : 3188,
				priceMarket : 3200
			},
			active:1,
			//属性
			attrIsShow : false, //属性界面是否隐藏
			attrData : null, // attrdata用于记录用户选择的属性
			colorTips : [
				{ name: '灰色', value: '灰色', checked: false },
				{ name: '银色', value: '银色', checked: false}
			],
			typeTips : [
				{ name: '套餐一', value: '套餐一', checked: false },
				{ name: '套餐二', value: '套餐二', checked: false},
				{ name: '套餐三', value: '套餐三', checked: false}
			],
			buyNum : 1
		};
	},
	methods:{
		share: function () {
			uni.showToast({
				title: '请自行完善分享代码',
				icon: "none"
			})
		},
		showComments : function(){
			this.active = 2;
		},
		showInfo: function () {
			this.active = 1;
		},
		home : function(){
			uni.switchTab({
				url:'../index/index'
			})
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
		colorChange: function (e) {
			var checkVal = e.detail.value;
			for (var i = 0; i < this.colorTips.length; i++) {
				if (checkVal.indexOf(this.colorTips[i].value + '') != -1) {
					this.colorTips[i].checked = true;
				} else {
					this.colorTips[i].checked = false;
				}
			}
			this.colorTips = this.colorTips;
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
<style>
page{background:#F2F3F4;}
</style>