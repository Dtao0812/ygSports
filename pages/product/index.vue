<template>
	<yg-page ref="ygPage">
		<block slot="content" style="height: 100%;background-color: red;">
			<uni-nav-bar color="#333333" statusBar="false" shadow="false" background-color="#FFFFFF" fixed="true" @click-left="showCity"  @click-right="scan">
				<block slot="left">
					<view class="manage">
						<view class="grace-iconfont icon-shaixuan" style="font-size: 26px;color: #e6e6e6;"></view>
					</view>
				</block>
				<view class="input-view">
					<uni-icon className="product-search" type="search" size="22" color="#666666"></uni-icon>
					<input confirm-type="search" @confirm="confirm" class="input" type="text" placeholder="单组份跑道面胶" />
				</view>
				<block slot="right">
					<view class="grace-iconfont icon-time" style="font-size: 26px;color: #e6e6e6;"></view>
				</block>
			</uni-nav-bar>
			<scroll-view class="grace-tab-title grace-center" scroll-x="true" id="grace-tab-title">
				<view v-for="(tab, index) in tabs" :key="index" :class="[tabCurrentIndex == index ? 'grace-tab-current' : '']" :id="'tabTag-'+index" @tap="tabChange">{{tab.name}}</view>
			</scroll-view>
			<swiper class="grace-tab-swiper-full" :current="swiperCurrentIndex" @change="swiperChange" :style="{height:tabHeight+'px'}">
				<swiper-item v-for="(news, newsIndex) in newsAll" :key="newsIndex">
					<scroll-view scroll-y="true" :data-scindex="newsIndex" @scrolltolower="scrollend">
						<view class="grace-news-list" style="">
							<navigator v-for="(item, index) in news" :key="index">
								<view class="grace-news-list-items">
									<image src="../../static/images/bg/mu_1.png" class="grace-news-list-img grace-list-imgs-l" mode="widthFix"></image>
									<view class="grace-news-list-title">
										<view class="grace-news-list-title-main">单组份防水地胶</view>
										<text class="grace-news-list-title-desc grace-text-overflow">透气 净味</text>
										<view class="grace-news-list-text"><text class="grace-news-list-price">￥32.00</text><text class="grace-news-list-icon uni-icon uni-icon-star"></text></view>
									</view>
								</view>
							</navigator>
						</view>
						<graceLoading :loadingType="tabs[newsIndex].loadingType"></graceLoading>
					</scroll-view>
				</swiper-item>
			</swiper>
		</block>
	</yg-page>
</template>

<script>
	var _self;
	//默认新闻数据（来自api请求）
	//每个选项下面的新闻列表
	var news = [
	  { title: '新闻标题', desc: '新闻描述...' },
	  { title: '新闻标题', desc: '新闻描述...' },
	  { title: '新闻标题', desc: '新闻描述...' },
	  { title: '新闻标题', desc: '新闻描述...' },
	  { title: '新闻标题', desc: '新闻描述...' },
	  { title: '新闻标题', desc: '新闻描述...' },
	  { title: '新闻标题', desc: '新闻描述...' },
	  { title: '新闻标题', desc: '新闻描述...' },
	  { title: '新闻标题', desc: '新闻描述...' },
	  { title: '新闻标题', desc: '新闻描述...' }
	];
	//对应下面3个标签的新闻内容数据
	var newsAll = [news, news, news,news];
	import ygPage from '@/components/page/index.vue';
	import uniNavBar from '@/components/uni/uni-nav-bar.vue';
	import uniIcon from '@/components/uni/uni-icon.vue';
	import graceLoading from "@/components/grace/graceLoading.vue";
	export default {
		components:{
			ygPage,uniNavBar,uniIcon,graceLoading
		},
		data() {
			return {
				tabCurrentIndex: 0,
				swiperCurrentIndex: 0,
				tabHeight : 300,
				tabs: [
					//标签名称 , 分类 id , 加载更多, 加载的页码
					{ name: '塑胶跑道', id: '1' , loadingType : 0, page : 1},
					{ name: '塑胶球场', id: '2', loadingType: 0, page: 1},
					{ name: '人造草坪', id: '3', loadingType: 0, page: 1},
					{ name: '更多产品', id: '4', loadingType: 0, page: 1}
				],
				newsAll: newsAll
			}
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
				this.tabHeight = windowHeight - res2.height - 44;
				console.log(this.tabHeight)
			}).exec();
		},
		methods:{
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
			}
		},
	}
</script>

<style scoped>
	.manage {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		width: 100%;
		margin-left:8px;
	}
	
	.input-view {
		width: 92%;
		display: flex;
		background-color: #f1f1f1;
		height: 30px;
		border-radius: 3px;
		padding: 0 4%;
		flex-wrap:nowrap;
		margin:7px 0;
		line-height:30px;
	}
	
	.input-view .input {
		height:30px;
		line-height:30px;
		width:94%;
		padding: 0 3%;
	}
	/* tab */
	.grace-tab-title{
		padding-top: 44px;
	}
	.grace-tab-title uni-view{
		margin: 0;
		padding: 0;
		font-size: 13px;
		width: 25%;
	}
	/* 商品 */
	.grace-news-list{
		padding: 0;
	}
	.grace-news-list-items{
		border-bottom: 1px dashed;
		padding: 12px;
	}
	.grace-news-list-img{
		height: 80px !important;
	}
	.grace-news-list-title-desc{
		padding: 5px 0;
	}
	.grace-news-list-text{
		position: relative;
	}
	.grace-news-list-price{
		color: #F00;
	}
	.grace-news-list-icon{
		position: absolute;
		right: 30px;
	}
</style>
