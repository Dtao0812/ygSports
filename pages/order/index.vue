<template>
	<view class="content">
		<scroll-view class="grace-tab-title grace-center" scroll-x="true" id="grace-tab-title">
			<view v-for="(tab, index) in tabs" :key="index" :class="[tabCurrentIndex == index ? 'grace-tab-current' : '']" :id="'tabTag-'+index" @tap="tabChange">{{tab.name}}</view>
		</scroll-view>
		<swiper class="grace-tab-swiper-full" :current="swiperCurrentIndex" @change="swiperChange" :style="{height:tabHeight+'px'}">
			<swiper-item v-for="(news, newsIndex) in newsAll" :key="newsIndex">
				<scroll-view scroll-y="true" :data-scindex="newsIndex" @scrolltolower="scrollend">
					<view class="order-list uni-list" v-for="(item, index) in news" :key="index">
						<view class="uni-card-media">
							<view>100米跑道</view>
							<view class="uni-card-media-btn">查看流程</view>
						</view>
					</view>
					<graceLoading :loadingType="tabs[newsIndex].loadingType"></graceLoading>
				</scroll-view>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	var _self;
	//默认新闻数据（来自api请求）
	//每个选项下面的新闻列表
	var news = [
	  //img - 图片地址 title - 标题 desc - 描述 - status 读取状态
	  { img: '../../static/logo.png', title: "优冠客服", desc: '亲亲，我看您的订单已经交易', status:"未读",time:"2019-01-04"},
	  { img: '../../static/logo.png', title: "优冠客服", desc: '亲亲，我看您的订单已经交易', status:"未读",time:"2019-01-04"},
	  { img: '../../static/logo.png', title: "优冠客服", desc: '亲亲，我看您的订单已经交易', status:"未读",time:"2019-01-04"}
	];
	//对应下面3个标签的新闻内容数据
	var newsAll = [news, news, news,news];
	import uniNavBar from '@/components/uni/uni-nav-bar.vue';
	import uniIcon from '@/components/uni/uni-icon.vue';
	import graceLoading from "@/components/grace/graceLoading.vue";
	export default {
		components:{
			uniNavBar,uniIcon,graceLoading
		},
		data() {
			return {
				tabCurrentIndex: 0,
				swiperCurrentIndex: 0,
				tabHeight : 300,
				tabs: [
					//标签名称 , 分类 id , 加载更多, 加载的页码
					{ name: '全部订单', id: '1' , loadingType : 0, page : 1},
					{ name: '代付款', id: '2', loadingType: 0, page: 1},
					{ name: '待收货', id: '3', loadingType: 0, page: 1},
					{ name: '已完成', id: '4', loadingType: 0, page: 1},
					{ name: '已取消', id: '4', loadingType: 0, page: 1}
				],
				newsAll: newsAll,
			}
		},
		computed:{
		},
		onLoad:function(){
			_self = this;
		},
		onReady: function () {
			//获取屏幕高度及比例
			var windowHeight = this.$store.state.windowHeight
			//获取头部标题高度
			var dom = uni.createSelectorQuery().select('#grace-tab-title')
			dom.fields({size: true}, res2 => {
				if(!res2){return ;}
				//计算得出滚动区域的高度
				this.tabHeight = windowHeight - res2.height;
			}).exec();
		},
		methods:{
			//统一的关闭popup方法
			hidePopup: function() {
				this.$store.commit("setState",{id:"tabBarAddState",value:false});
			},
			tabChange: function (e) {
				var index = e.target.id.replace('tabTag-', '');
				this.swiperCurrentIndex = index;
				this.tabCurrentIndex    = index;
			},
			swiperChange: function(e){
				var index = e.detail.current;
				this.tabCurrentIndex = index;
			},
			//每个选项滚动到底部
			scrollend:function(e){
				//获取是哪个选项滚动到底？
				var index = e.currentTarget.dataset.scindex;
				console.log(index);
				//可以利用 tabs 携带的分类id 与服务器交互请求对应分类的数据
				console.log(this.tabs[index].id);
				//加载更多的演示
				//判断当前是否正在加载
				if (this.tabs[index].loadingType === 1){
					return false;
				}
				//判断是否是最后一页
				console.log(this.tabs[index].page)
				if (this.tabs[index].page > 3){
					this.tabs[index].loadingType = 2;//全部
					return ;
				}
				this.tabs[index].loadingType = 1;//加载中
				//模拟延迟
				setTimeout(function(){
					_self.newsAll[index] = _self.newsAll[index].concat(news);
					//分页
					_self.tabs[index].page++;
					_self.tabs[index].loadingType = 0;//恢复加载状态
					//
				}, 1000);
			},
			//打开详情
			toDetail(item){
				this.$openWin("proDetail");
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
					_self.news.splice(index, 1);
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
				this.news[index].status = "已读";
			}
		},
		watch: {
		}
	}
</script>

<style scoped>
	.grace-scroll-do uni-scroll-view{
		height: 50px;line-height: 50px;
	}
	.grace-scroll-do .btn{
		height: 50px;
		line-height: 50px;
	}
	/* tab */
	.grace-tab-title{
	}
	.grace-tab-title uni-view{
		margin: 0;
		padding: 0;
		font-size: 13px;
		width: 25%;
	}
	.order-list{margin-top: 20px;}
	.uni-card-media{position: relative;padding: 10px 0;}
	.uni-card-media-btn{position: absolute;top: 0;bottom: 0;right: 10px;margin: auto;width: 60px;height: 20px;font-size: 24upx;line-height: 20px;padding: 2px;border-radius: 3px;background: #6aa328;border: 1px solid #dcdcdc;color: #FFFFFF;text-align: center;}
</style>
