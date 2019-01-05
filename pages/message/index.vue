<template>
	<view class="content">
		<view class="content">
			<view class="uni-list">
				<view class="uni-list-cell" hover-class="uni-list-cell-hover" @tap="toList('orderList')">
					<view class="uni-media-list">
						<view class="uni-media-list-logo">
							<image src="../../static/images/btn/btn_order.png"></image>
						</view>
						<view class="uni-media-list-body">
							<view class="uni-media-list-text-top">订单消息</view>
							<view class="uni-media-list-text-bottom uni-ellipsis">暂无消息</view>
						</view>
					</view>
				</view>
				<view class="uni-list-cell" hover-class="uni-list-cell-hover" @tap="toList('msgList')">
					<view class="uni-media-list">
						<view class="uni-media-list-logo">
							<image src="../../static/images/btn/btn_msg.png"></image>
						</view>
						<view class="uni-media-list-body">
							<view class="uni-media-list-text-top">系统消息</view>
							<view class="uni-media-list-text-bottom uni-ellipsis">暂无消息</view>
						</view>
					</view>
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
	var _self;
	import uniPopup from '@/components/uni/uni-popup.vue';
	import popupItem from '@/components/default/popupBottom.vue';
	export default {
		components:{
			uniPopup,popupItem
		},
		data() {
			return {
				showPopupBottom: false,
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
			//去消息列表
			toList(path){
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
