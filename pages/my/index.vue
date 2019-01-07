<template>
	<view class="content">
		<view class="my-header" @tap="setInfo">
			<image class="my-header-image" src="../../static/images/bg/my_head.png" mode=""></image>
			<view class="my-header-top">
				<uni-icon type="gear" size="24" color="#ffffff"></uni-icon>
			</view>
			<view class="uni-card my-card">
				<view class="uni-card-header uni-card-media">
					<image class="uni-card-media-logo" src="../../static/logo.png" mode=""></image>
					<view class="uni-card-media-body">
						<text class="uni-card-media-text-top grace-h5 grace-blod">优冠客服</text>
						<text class="uni-card-media-text-bottom grace-text-small">做一个信赖和值得尊敬的人</text>
					</view>
				</view>
			</view>
		</view>
		<view class="uni-card my-grid">
			<view class="uni-grid-9 uni-common-mt">
			    <view class="uni-grid-9-item" hover-class="uni-grid-9-item-hover" v-for="(item,index) in grids" :key="index" :class="index % 3 === 2 ? 'no-border-right' : ''" @tap="toNav(item.path)">
			        <image class="uni-grid-9-image" :src="item.imgUrl"></image>
			        <text class="uni-grid-9-text">{{item.title}}</text>
			    </view>
			</view>
		</view>
		<!-- 底部 -->
		<uni-popup :show="tabBarAddState" type="bottom" msg="订单设计" v-on:hidePopup="hidePopup">
			<popup-item></popup-item>
		</uni-popup>
	</view>
</template>

<script>
	import uniPopup from '@/components/uni/uni-popup.vue';
	import popupItem from '@/components/default/popupBottom.vue';
	import uniIcon from '@/components/uni/uni-icon.vue';
	export default {
		components:{
			uniPopup,popupItem,uniIcon
		},
		data() {
			return {
				showPopupBottom: false,
				grids: [
					{ imgUrl: '../../static/images/icon/nav_9.png',path: 'detailed',title:'清单管理' },
					{ imgUrl: '../../static/images/icon/nav_1.png',path: 'order',title:'订单管理' },
					{ imgUrl: '../../static/images/icon/nav_8.png',path: 'statistics',title:'统计消息' },
					{ imgUrl: '../../static/images/icon/nav_7.png',path: 'myCapital',title:'资金管理' },
					{ imgUrl: '../../static/images/icon/nav_6.png',path: 'myCollection',title:'我的收藏' },
					{ imgUrl: '../../static/images/icon/nav_10.png',path: 'myCustomer',title:'客户名录' },
					{ imgUrl: '../../static/images/icon/nav_10.png',path: 'shoppingcart',title:'购物车' },
				]
			}
		},
		computed:{
			tabBarAddState(){
				return this.$store.state.tabBarAddState;
			}
		},
		onLoad() {

		},
		methods: {
			//统一的关闭popup方法
			hidePopup: function() {
				this.$store.commit("setState",{id:"tabBarAddState",value:false});
			},
			//设置用户
			setInfo(){
				this.$openWin("setUser");
			},
			//菜单点击
			toNav(path){
				this.$openWin(path);
			}
		},
		watch: {
			tabBarAddState(val) {
				this.showPopupBottom = val;
			}
		}
	}
</script>

<style scoped>
	.content{
		padding: 0;
		background-color: #EEEEEE;
	}
	.my-header{
		width: 100%;
	}
	.my-header-top{
		position: absolute;
		top: 30px;
		right: 10px;
	}
	.my-header-image{
		width: 100%;
		height: 128px;
	}
	.my-card{
		margin: -50px 10px 10px 10px;
		padding: 10px 0;
	}
	.my-card .uni-card-header:after{
		height: 0;
	}
	.my-card .uni-card-media-logo{
		height: 60px;
		width: 60px;
	}
	/* 九宫格 */
	.my-grid{
		margin: 10px;
		background-color: #FFFFFF;
		height: 400px;
	}
	.my-grid .uni-grid-9{
		width: 100%;
		background-color: #FFFFFF;
	}
	.my-grid .uni-grid-9-item{
		width: 33.33%;
		border: 0 !important;
	}
	.my-grid .uni-grid-9-image{
		width: 25px;
		height: 25px;
	}
	.my-grid .uni-grid-9-text{
		line-height: 25px;
		font-size: 12px;
	}
</style>
