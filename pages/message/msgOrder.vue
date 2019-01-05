<template>
	<view class="content">
		<view class="msg-list">
			<view class="uni-card">
				<view class="uni-card-header uni-card-media">
					<view class="uni-card-media-body">
						<text class="uni-card-media-text-top grace-h5 grace-blod">优冠客服</text>
						<text class="uni-card-media-text-bottom grace-text-small">2019-01-04 15:30</text>
					</view>
				</view>
				<view class="uni-card-content">
					<view class="uni-card-content-inner">
						优冠体育提醒您：配置系统推送消息内容填充。配置系统推送消息内容填充。配置系统推送消息内容填充。配置系统推送消息内容填充。配置系统推送消息内容填充。配置系统推送消息内容填充。配置系统推送消息内容填充。配置系统推送消息内容填充。配置系统推送消息内容填充。配置系统推送消息内容填充。配置系统推送消息内容填充。
					</view>
				</view>
			</view>
			
			<view class="uni-card">
				<view class="uni-card-header uni-card-media">
					<view class="uni-card-media-body">
						<text class="uni-card-media-text-top grace-h5 grace-blod">到货确认提醒</text>
						<text class="uni-card-media-text-bottom grace-text-small">2019-01-04 15:30</text>
					</view>
				</view>
				<view class="uni-card-content">
					<view class="uni-card-content-inner">
						<view>货车司机（XXX 188-8888-8888）您好！</view>
						<view>订单编号：1231512421312312312312</view>
						<view>生成时间：2018-10-28</view>
						<view>目的地：XXX省XXX市XXX号</view>
						<view>预计到货时间：2018-11-05</view>
					</view>
				</view>
				<view class="uni-card-footer">
					<view class="uni-card-footer-btn uni-card-footer-confirm">已送达，确认收货</view>
				</view>
			</view>
			
			<view class="uni-card">
				<view class="uni-card-header uni-card-media">
					<view class="uni-card-media-body">
						<text class="uni-card-media-text-top grace-h5 grace-blod">到货确认提醒</text>
						<text class="uni-card-media-text-bottom grace-text-small">2019-01-04 15:30</text>
					</view>
				</view>
				<view class="uni-card-content">
					<view class="uni-card-content-inner">
						<view>货车司机（XXX 188-8888-8888）您好！</view>
						<view>订单编号：1231512421312312312312</view>
						<view>生成时间：2018-10-28</view>
						<view>目的地：XXX省XXX市XXX号</view>
						<view>预计到货时间：2018-11-05</view>
					</view>
				</view>
				<view class="uni-card-footer">
					<view class="uni-card-footer-btn uni-card-footer-default">已确认</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	var _self;
	export default {
		components:{
		},
		data() {
			return {
			}
		},
		computed:{
		},
		onLoad() {
			_self = this;
		},
		methods: {
		},
		watch: {
		}
	}
</script>

<style scoped>
	.content{
		background-color: #eeeeee;
		height: 100%;
		padding: 0 !important;
	}
	/* 滑动消息列表 */
	.grace-scroll-do{
		background-color: #FFFFFF;
	}
	.grace-time{
		font-size: 12px;
		font-weight: normal;
		position: absolute;
		right: 10px;
	}
	
	/* 消息列表 */
	.msg-list{
		margin: 10px;
	}
	.msg-list .uni-card-header:after,.msg-list .uni-card-footer:before{
		height: 0;
	}
	.msg-list .uni-card-content-inner{
		font-size: 12px;
		padding: 10px 15px;
	}
	.uni-card-footer{
		position: relative;
	}
	.uni-card-footer-btn{
		position: absolute;
		left: 0;
		right: 0;
		bottom: 0;
		margin:0 auto;
		width: 160px;
		height: 35px;
		line-height: 35px;
		text-align: center;
		color: #FFFFFF;
		border-top-left-radius: 5px;
		border-top-right-radius: 5px;
	}
	.uni-card-footer-confirm{
		background-color: #6aa328;
	}
	.uni-card-footer-default{
		background-color: #bfbfbf;
	}
</style>
