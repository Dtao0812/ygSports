<template>
	<yg-page ref="ygPage">
		<block slot="content">
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
					<view class="grace-items dynamic-item">
						<view class="dynamic-item-title ellipsis-2">优冠体育设备制造产业园二期项目环境影响评价公众参与信息公示</view>
						<view class="dynamic-item-text ellipsis-3">根据中华人民共和国国家环境保护总局 2006 年 2 月 14 日发布的《环境影响评价公众参与暂行办法》(环发 2006[28 号])规定，现将优冠体育设备制造产业园二期项目环境影响评</view>
					</view>
				</view>
			</view>
		</block>
	</yg-page>
</template>

<script>
	import ygPage from '@/components/page/index.vue';
	import ygSwiper from '@/components/swiper/swiper.vue';
	export default {
		components:{
			ygPage,ygSwiper
		},
		data() {
			return {
				swiperItems : [
					{ imgUrl: '../../static/v2_pitxu2.png', path : "./badge", title : "标题1"},
					{ imgUrl: '../../static/v2_pitxu2.png', path : "./badge", title : "标题2"}
				],
				navItems : [
					{ imgUrl: '../../static/images/icon/nav_1.png',path: '',title:'订单管理' },
					{ imgUrl: '../../static/images/icon/nav_2.png',path: '',title:'业务查询' },
					{ imgUrl: '../../static/images/icon/nav_3.png',path: '',title:'清单管理' },
					{ imgUrl: '../../static/images/icon/nav_4.png',path: 'logistics',title:'货运物流' },
					{ imgUrl: '../../static/images/icon/nav_5.png',path: 'team',title:'施工团队' },
				]
			}
		},
		onLoad() {
			//#ifdef APP-PLUS
			let currWV = plus.webview.currentWebview();
			let leftPos = Math.ceil((this.$store.state.windowWidth - 60) / 2);
			let drawNativeIcon = new plus.nativeObj.View('icon', {bottom: '0',left: leftPos + 'px',width: '60px',height: '60px'}, 
			[{
				tag: 'rect',
				id: 'bg2',
				position: {bottom: '-0.5px',left: '0px',width: '100%',height: '45px'},
				rectStyles: {color: '#fff'}
			}, {
				tag: 'rect',
				id: 'iconBg',
				position: {top: '5px',left: '5px',width: '50px',height: '50px'},
				rectStyles: {color: '#6aa328',radius: '50%'}
			}, {
				tag: 'font',
				id: 'icon',
				text: '\ue468',
				position: {top: '0px',left: '5px',width: '50px',height: '100%'},
				textStyles: {fontSrc: '_www/static/fonts/uni.ttf',align: 'center',color: '#fff',size: '30px'}
			}]);
			
			currWV.append(drawNativeIcon);
			drawNativeIcon.addEventListener("click",(e)=>{
				this.$refs.ygPage.showAdd();
			});
			//#endif
		},
		methods: {
			// nav点击
			onNavBtn(path){
				this.$openWin(path);
			}
		}
	}
</script>
<style>
	.content{background-color: #fff;}
	.grace-swiper {border-radius: 5px!important; overflow: hidden;}
	.grace-swiper swiper-item navigator image{border-radius: 5px;}
	.grace-boxes-text{font-size: 26upx;}
	.home-product-items-content view{line-height: 1.5;}
</style>
<style scoped>
	/*间隔*/
	.interval{
		width: 100%;
		height: 30upx;
		background: #eee;
	}
	/* 按钮导航 */
	.grace-wrap{
		margin-top: 10px;
	}
	.grace-boxes{
		width: 18%;
	}
	.grace-boxes-image{
		width: 30px;
		height: 30px !important;
	}
	/* 产品 */
	.home-product{
		/*margin-top: 10px;*/
	}
	.home-product .grace-items{
		border-radius: 5px;
	}
	.home-product-items{
		position: relative;
	}
	.home-product-items-content{
		position: absolute;
		top: 10px;
		left: 15px;
		color: #FFFFFF;
	}
	.home-product-items-title{
		font-size: 15px;
		font-weight: bold;
	}
	.home-product-items-text{
		font-size: 10px;
		line-height: 10px;
		padding-left: 18px;
		padding-top: 5px;
		color: #f4f4f4;
	}
	.home-product-image{
		width: 170px;
		height: 70px;
	}
	/* 动态 */
	.dynamic-title{
		color: #6aa328;
		font-size: 42upx;
	}
	.dynamic-icon{
		color: #6AA328;
		font-size: 32px;
	}
	.dynamic-item{
		width: 100%;
		height: 100px;
		box-shadow: 0 0 10px #d8d8d8; border-radius: 10upx;
		border-radius: 5px;
		padding: 10px;
	}
	.dynamic-item-title{
		font-size: 15px;
		line-height: 20px;
		font-weight: 500;
		color: #000000;
	}
	.dynamic-item-text{
		padding-top: 5px;
		font-size: 12px;
		color: #7d7d7d;
	}
</style>
