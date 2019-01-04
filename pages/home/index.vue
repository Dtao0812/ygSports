<template>
	<def-page ref="defpage">
		<view class="content" slot="content">
			<!-- banner -->
			<yg-swiper swiperId="garce-swiper-1" :items="swiperItems"></yg-swiper>
			
			<!-- nav按钮 -->
			<view class="grace-wrap">
				<view class="grace-boxes" v-for="(v,i) in navItems" :key="i">
					<view class="grace-boxes-img">
					<image class="grace-boxes-image" :src="v.imgUrl" mode="widthFix"></image>
					</view>
					<view class="grace-boxes-text">{{v.title}}</view>
				</view>
			</view>
			
			<!--  -->
		</view>
	</def-page>
</template>

<script>
	import defPage from '@/components/page/index.vue';
	import ygSwiper from '@/components/swiper/swiper.vue';
	export default {
		components:{
			defPage,ygSwiper
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
					{ imgUrl: '../../static/images/icon/nav_4.png',path: '',title:'货运物流' },
					{ imgUrl: '../../static/images/icon/nav_5.png',path: '',title:'施工团队' },
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
				rectStyles: {color: '#d74b28',radius: '50%'}
			}, {
				tag: 'font',
				id: 'icon',
				text: '\ue468',
				position: {top: '0px',left: '5px',width: '50px',height: '100%'},
				textStyles: {fontSrc: '_www/static/fonts/uni.ttf',align: 'center',color: '#fff',size: '30px'}
			}]);
			
			currWV.append(drawNativeIcon);
			drawNativeIcon.addEventListener("click",(e)=>{
				this.$refs.defpage.showAdd();
			});
			//#endif
		},
		methods: {

		}
	}
</script>

<style scoped>
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
</style>
