<template>
	<def-page ref="defpage">
		<view class="content" slot="content">
			<yg-swiper swiperId="garce-swiper-1" :items="swiperItems"></yg-swiper>
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
					{ imgUrl: '../../static/logo.png', path : "./badge", title : "标题1"},
					{ imgUrl: '../../static/logo.png', path : "./badge", title : "标题2"}
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

<style>
	
</style>
