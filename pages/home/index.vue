<template>
	<view>
		<view class="content">
			<!-- banner -->
			<yg-swiper swiperId="garce-swiper-1" :items="swiperItems"></yg-swiper>
			
			<!-- nav按钮 -->
			<view class="grace-wrap">
				<view class="grace-boxes" v-for="(v,i) in navItems" :key="i" @tap="onNavBtn(v.path)">
					<view class="grace-boxes-img">
						<image class="grace-boxes-image" :src="v.imgUrl" mode="widthFix"></image>
					</view>
					<view class="grace-boxes-text">{{v.title}}</view>
				</view>
			</view>
		</view>	
		<view class="interval"></view>
		<view class="content">
			<!-- product -->
			<view class="grace-imgitems home-product">
				<view class="grace-items">
				  <image class="home-product-image" src="../../static/images/bg/mu_1.png" mode=""></image>
				  <view class="home-product-items-content">
				  	<view class="home-product-items-title">塑胶跑道</view>
				  	<view class="home-product-items-text">项目预算</view>
				  	<view class="home-product-items-text">材料清单</view>
				  </view>
				</view>
				<view class="grace-items">
					<image class="home-product-image" src="../../static/images/bg/mu_2.png" mode=""></image>
					<view class="home-product-items-content">
						<view class="home-product-items-title">塑胶球场</view>
						<view class="home-product-items-text">项目预算</view>
						<view class="home-product-items-text">材料清单</view>
					</view>
				</view>
				<view class="grace-items">
					<image class="home-product-image" src="../../static/images/bg/mu_3.png" mode=""></image>
					<view class="home-product-items-content">
						<view class="home-product-items-title">人造草坪</view>
						<view class="home-product-items-text">项目预算</view>
						<view class="home-product-items-text">材料清单</view>
					</view>
				</view>
				<view class="grace-items">
					<image class="home-product-image" src="../../static/images/bg/mu_4.png" mode=""></image>
					<view class="home-product-items-content">
						<view class="home-product-items-title">更多产品</view>
						<view class="home-product-items-text">多种选择</view>
						<view class="home-product-items-text">品质如一</view>
					</view>
				</view>
			</view>
			
			
			<!-- 动态 -->
			<view class="grace-title grace-nowrap grace-space-between" style="margin-top:60upx;">
				<view class="grace-h5 grace-blod dynamic-title">优冠动态</view>
			</view>
			<view class="grace-imgitems">
				<view class="grace-items dynamic-item" v-if="dynamic">
					<view class="dynamic-item-title ellipsis-2">{{dynamic.dynamicTitile}}</view>
					<view class="dynamic-item-text ellipsis-3" v-html="dynamic.info"></view>
				</view>
			</view>
		</view>
		<!-- 底部 -->
		<uni-popup :show="showPopupBottom" type="bottom" msg="订单设计" v-on:hidePopup="hidePopup">
			<popup-item v-if="showPopupBottom"></popup-item>
		</uni-popup>
	</view>
</template>

<script>
import ygSwiper from '@/components/swiper/swiper.vue';
import uniPopup from '@/components/uni/uni-popup.vue';
import popupItem from '@/components/default/popupBottom.vue';
export default {
	components: {
		uniPopup,
		ygSwiper,
		popupItem
	},
	data() {
		return {
			showPopupBottom: false,
			swiperItems: [],
			navItems: [
				{ imgUrl: '../../static/images/icon/nav_1.png', path: 'order', title: '订单管理' },
				{ imgUrl: '../../static/images/icon/nav_2.png', path: 'statistics', title: '业务查询' },
				{ imgUrl: '../../static/images/icon/nav_3.png', path: 'detailed', title: '清单管理' },
				{ imgUrl: '../../static/images/icon/nav_4.png',path: 'logistics',title: '货运物流'},
				{ imgUrl: '../../static/images/icon/nav_5.png', path: 'team', title: '施工团队' }
			],
			dynamic:"",//动态
		};
	},
	computed: {
		tabBarAddStateHome() {
			return this.$store.state.tabBarAddState;
		}
	},
	onReady() {
		this.getBannerList();
		this.getCompanyDynamic();
	},
	methods: {
		// nav点击
		onNavBtn(path) {
			this.$openWin(path);
		},
		//统一的关闭popup方法
		hidePopup: function() {
			this.$store.commit('setState', { id: 'tabBarAddState', value: false });
		},
		//获得banner
		getBannerList(){
			this.$api.Home.getBannerList((res)=>{
				this.swiperItems = res.data;
			})
		},
		//获得动态
		getCompanyDynamic(){
			this.$api.Home.getCompanyDynamic((res)=>{
				this.dynamic = res.data;
			})
		},
	},
	watch: {
		tabBarAddStateHome(val) {
			this.showPopupBottom = val;
		}
	}
};
</script>
<style scoped>
.content {
	background-color: #fff;
	height: auto;
}
.grace-swiper {
	border-radius: 5px !important;
	overflow: hidden;
}
.grace-swiper swiper-item navigator image {
	border-radius: 5px;
}
.grace-boxes-text {
	font-size: 26upx;
}
.home-product-items-content view {
	line-height: 1.5;
}
/*间隔*/
.interval {
	width: 100%;
	height: 30upx;
	background: #eee;
}
/* 按钮导航 */
.grace-wrap {
	margin-top: 10px;
}
.grace-boxes {
	width: 18%;
}
.grace-boxes-image {
	width: 30px;
	height: 30px !important;
}
/* 产品 */
.home-product {
	/*margin-top: 10px;*/
}
.home-product .grace-items {
	border-radius: 5px;
}
.home-product-items {
	position: relative;
}
.home-product-items-content {
	position: absolute;
	top: 10px;
	left: 15px;
	color: #ffffff;
}
.home-product-items-title {
	font-size: 15px;
	font-weight: bold;
}
.home-product-items-text {
	font-size: 10px;
	line-height: 10px;
	padding-left: 18px;
	color: #f4f4f4;
}
.home-product-image {
	width: 170px;
	height: 70px;
}
/* 动态 */
.dynamic-title {
	color: #6aa328;
	font-size: 42upx;
}
.dynamic-icon {
	color: #6aa328;
	font-size: 32px;
}
.dynamic-item {
	width: 100%;
	height: 100px;
	box-shadow: 0 0 10px #d8d8d8;
	border-radius: 10upx;
	padding: 10px;
}
.dynamic-item-title {
	font-size: 15px;
	line-height: 20px;
	font-weight: 500;
	color: #000000;
}
.dynamic-item-text {
	padding-top: 5px;
	font-size: 12px;
	color: #7d7d7d;
}
</style>
