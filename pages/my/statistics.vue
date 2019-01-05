<template>
	<view class="content">
		<view class="uni-padding-wrap uni-common-mt">
			<uni-segmented-control :current="current" :values="items" v-on:clickItem="onClickItem" :styleType="styleType" :activeColor="activeColor"></uni-segmented-control>
		</view>
		<view class="segmented-box">
			<view v-show="current === 0">
				<view class="segmented-picket-time">
					<text class="segmented-picket-time-title">按时间查询：</text>
					<text class="segmented-picket-time-input">{{starTime_1||"请选择时间"}} <yg-icon type="rili" size="16" color="#6eaa29"></yg-icon></text>
					 至 
					<text class="segmented-picket-time-input">{{endTime_1||"请选择时间"}} <yg-icon type="rili" size="16" color="#6eaa29"></yg-icon></text>
				</view>
				<view class="segmented-card">
					<view class="segmented-card-title">您 {{starTime_1}} 至 {{endTime_1}} 订单 {{orderNum_1}} 笔</view>
					<view class="segmented-card-price">销售额 <text class="grace-blod">{{price_1}}</text> 元</view>
				</view>
				<view class="segmented-list uni-list">
					<view class="uni-card-media">
						<view class="uni-card-media-body">
							<text class="uni-card-media-text-top">100米跑道</text>
							<text class="uni-card-media-text-bottom grace-text-small">订单编号:xxxx</text>
						</view>
						<view class="uni-card-media-btn">已完结</view>
					</view>
				</view>
			</view>
			<view v-show="current === 1">
				<view class="segmented-picket-time">
					<text class="segmented-picket-time-title">按时间查询：</text>
					<text class="segmented-picket-time-input">{{starTime_2||"请选择时间"}} <yg-icon type="rili" size="16" color="#6eaa29"></yg-icon></text>
					 至 
					<text class="segmented-picket-time-input">{{endTime_2||"请选择时间"}} <yg-icon type="rili" size="16" color="#6eaa29"></yg-icon></text>
				</view>
				<view class="segmented-card">
					<view class="segmented-card-title">您 {{starTime_2}} 至 {{endTime_2}} 订单 {{orderNum_2}} 笔</view>
					<view class="segmented-card-price">销售额 <text class="grace-blod">{{price_2}}</text> 元</view>
				</view>
				<view class="segmented-list uni-list">
					<view class="uni-card-media">
						<view class="uni-card-media-body">
							<text class="uni-card-media-text-top">100米跑道</text>
							<text class="uni-card-media-text-bottom grace-text-small">订单编号:xxxx</text>
						</view>
						<view class="uni-card-media-btn">已完结</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import uniSegmentedControl from '@/components/uni/uni-segmented-control.vue';
	export default {
		components: {
			uniSegmentedControl
		},
		data(){
			return {
				items: ['我的统计','区域统计'],
				starTime_1:"",//开始时间
				endTime_1:"",//结束时间
				orderNum_1:0,//订单数
				price_1:0,//销售额
				starTime_2:"",//开始时间
				endTime_2:"",//结束时间
				orderNum_2:0,//订单数
				price_2:0,//销售额
				current: 0,
				activeColor: '#6eaa29',
				styleType: 'button'
			}
		},
		methods:{
			onClickItem(index) {
				if (this.current !== index) {
					this.current = index;
				}
			},
		}
	}
</script>

<style scoped>
	.uni-padding-wrap{width: auto;padding: 0;}
	.segmented-control{width: 100%;border-radius:0}
	.segmented-picket-time{width: 100%;margin-top: 20px;}
	.segmented-picket-time-title{}
	.segmented-picket-time-input{border: 1px solid #6eaa29;padding: 2px 15px;border-radius: 5px;color: #8f8f8f;}
	.segmented-card{border: 1px solid #6eaa29;border-radius: 5px;margin-top: 20px;padding: 10px;text-align: center;}
	.segmented-card-title{font-size: 30upx;}
	.segmented-card-price{font-size: 30upx;color: #ed0909;}.segmented-card-price text{font-size: 40upx;}
	.segmented-list{margin-top: 20px;}
	.uni-card-media{position: relative;padding: 10px 0;}
	.uni-card-media-btn{position: absolute;top: 0;bottom: 0;right: 10px;margin: auto;width: 60px;height: 25px;line-height: 25px;padding: 2px;border-radius: 3px;background: #f7f7f7;border: 1px solid #dcdcdc;color: #666666;text-align: center;}
</style>
