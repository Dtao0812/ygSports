<template>
	<yg-page ref="ygPage">
		<block slot="content">
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
					    <view class="uni-grid-9-item" hover-class="uni-grid-9-item-hover" v-for="(item,index) in grids" :key="index" :class="index % 3 === 2 ? 'no-border-right' : ''">
					        <image class="uni-grid-9-image" :src="item.imgUrl"></image>
					        <text class="uni-grid-9-text">{{item.title}}</text>
					    </view>
					</view>
				</view>
			</view>
		</block>
	</yg-page>
</template>

<script>
	import ygPage from '@/components/page/index.vue';
	import uniIcon from '@/components/uni/uni-icon.vue';
	export default {
		components:{
			ygPage,uniIcon
		},
		data() {
			return {
				grids: [
					{ imgUrl: '../../static/images/icon/nav_9.png',path: '',title:'清单管理' },
					{ imgUrl: '../../static/images/icon/nav_1.png',path: '',title:'订单管理' },
					{ imgUrl: '../../static/images/icon/nav_8.png',path: '',title:'统计消息' },
					{ imgUrl: '../../static/images/icon/nav_7.png',path: '',title:'资金管理' },
					{ imgUrl: '../../static/images/icon/nav_6.png',path: '',title:'我的收藏' },
					{ imgUrl: '../../static/images/icon/nav_10.png',path: '',title:'客户名录' },
				]
			}
		},
		onLoad() {

		},
		methods: {
			//设置用户
			setInfo(){
				console.log('xxxx')
				this.$openWin("login");
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
