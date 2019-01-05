<template>
	<view class="content">
		<view class="grace-scroll-do">
			<scroll-view class="grace-scroll-x" scroll-x v-for="(item, index) in msg" :scroll-left="scrollIndex == index ? 180 : 0" @touchstart='touchStart' @touchend='touchEnd' :data-id="index" scroll-with-animation="true" :key="index">
				<view class="grace-items">
					<image :src="item.img" mode="widthFix"></image>
					<view class="contents">
						<view class="grace-h5 grace-blod">{{item.title}} <text class="grace-time">{{item.time}}</text></view>
						<view class="grace-text-small ellipsis-1">{{item.desc}}</view>
					</view>
				</view>
				<view class="grace-items btn btn-first" :data-id="index" @tap="changStatus" :style="{width : index == deleteIndex ? '0px' : btn1Width + 'px', background:item.status == '已读' ? '#CCCCCC' : '#5959D3', color:item.status == '已读' ? '#999' : '#FFF'}">{{item.status}}</view>
				<view class="grace-items btn" :data-id="index" @tap="removeMsg" :style="{width : index == deleteIndex ? deleteBtnWidth + 'px' : btn2Width+'px'}">删除</view>
			</scroll-view>
		</view>
	</view>
</template>

<script>
	var _self, x, y;
	export default {
		components:{
		},
		data() {
			return {
				//2个按钮的宽度
				btn1Width : 70,
				btn2Width : 70,
				//2个按钮的总宽 = btn1Width + btn23Width【uni-app 模板内不建议复杂运算请手动配置】
				deleteBtnWidth : 140,
				//正在滑动的索引
				scrollIndex : -1,
				//正在删除的索引
				deleteIndex : -1,
				//模拟数据
				msg : [
					//img - 图片地址 title - 标题 desc - 描述 - status 读取状态
					{ img: '../../static/logo.png', title: "优冠客服", desc: '亲亲，我看您的订单已经交易完成了，那请您给宝宝一个鼓励吧，您的鼓励是嘻嘻嘻', status:"未读",time:"2019-01-04"},
					{ img: '../../static/logo.png', title: "优冠客服", desc: '亲亲，我看您的订单已经交易完成了，那请您给宝宝一个鼓励吧，您的鼓励是嘻嘻嘻', status:"未读",time:"2019-01-04"},
					{ img: '../../static/logo.png', title: "优冠客服", desc: '亲亲，我看您的订单已经交易完成了，那请您给宝宝一个鼓励吧，您的鼓励是嘻嘻嘻', status:"未读",time:"2019-01-04"}
				]
			}
		},
		computed:{
		},
		onLoad() {
			_self = this;
		},
		methods: {
			//统一的关闭popup方法
			hidePopup: function() {
				this.$store.commit("setState",{id:"tabBarAddState",value:false});
			},
			removeMsg : function(e){
				var index = e.target.dataset.id;
				//删除确认
				if (this.deleteIndex != index){
					this.deleteIndex = index;
					setTimeout(function(){
						_self.deleteIndex = -1;
					}, 2000);
					return false;
				}
				this.scrollIndex = -1;
				setTimeout(function(){
					_self.msg.splice(index, 1);
					_self.deleteIndex = -1;
				}, 500);
			},
			touchStart: function (e) {
				x = e.mp.changedTouches[0].clientX;
				y = e.mp.changedTouches[0].clientY;
			},
			touchEnd : function(e){
				x = x - e.mp.changedTouches[0].clientX;
				y = y - e.mp.changedTouches[0].clientY;
				if (Math.abs(x) < 50) { return; }
				if (Math.abs(x) < Math.abs(y)) { return; }
				var index = e.currentTarget.dataset.id;
				if (index == this.scrollIndex){return ;}
				_self.scrollIndex = index;
			},
			changStatus : function(e){
				var index = e.currentTarget.dataset.id;
				this.msg[index].status = "已读";
			}
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
