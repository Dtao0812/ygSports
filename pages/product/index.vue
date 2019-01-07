<template>
	<view class="content product">
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
			<swiper-item v-for="(pro, proIndex) in tabs" :key="proIndex">
				<scroll-view scroll-y="true" :data-scindex="proIndex" @scrolltolower="scrollend">
					<view class="grace-news-list" style="">
						<view v-for="(item, index) in pro.list" :key="index" @tap="toDetail(item)">
							<view class="grace-news-list-items">
								<image :src="item.productImg" class="grace-news-list-img grace-list-imgs-l" mode="widthFix"></image>
								<view class="grace-news-list-title">
									<view class="grace-news-list-title-main">{{item.productName}}</view>
									<!-- <text class="grace-news-list-title-desc grace-text-overflow">透气 净味</text> -->
									<view class="grace-news-list-text">
										<text class="grace-news-list-price">￥{{item.productPrice}}</text>
										<!-- <text class="grace-news-list-icon" @tap="proCollection(item,index)">
											<yg-icon type="xin" color="#000000"></yg-icon>
										</text> -->
									</view>
								</view>
							</view>
						</view>
					</view>
					<graceLoading :loadingType="pro.list.length == 0 ? 2:pro.loadingType"></graceLoading>
				</scroll-view>
			</swiper-item>
		</swiper>
		<!-- 底部 -->
		<uni-popup :show="tabBarAddState" type="bottom" msg="订单设计" v-on:hidePopup="hidePopup">
			<popup-item></popup-item>
		</uni-popup>
	</view>
</template>

<script>
	import uniNavBar from '@/components/uni/uni-nav-bar.vue';
	import uniIcon from '@/components/uni/uni-icon.vue';
	import graceLoading from "@/components/grace/graceLoading.vue";
	import uniPopup from '@/components/uni/uni-popup.vue';
	import popupItem from '@/components/default/popupBottom.vue';
	export default {
		components:{
			uniPopup,popupItem,uniNavBar,uniIcon,graceLoading
		},
		data() {
			return {
				showPopupBottom: false,
				tabCurrentIndex: 0,
				swiperCurrentIndex: 0,//当前tab选中
				tabHeight : 300,
				tabs: [],//标签名称 , 分类 id , 加载更多, 加载的页码，列表
				
				productName:"",//产品名称
				limit:10,
				
			}
		},
		computed:{
			//登录状态
			hasLogin(){
				return this.$store.state.hasLogin;
			},
			tabBarAddState(){
				return this.$store.state.tabBarAddState;
			}
		},
		onLoad:function(){
		},
		onReady: function () {
			this.getProdCategoryList();
		},
		methods:{
			//计算高度
			setTabsHeight: function(){
				//获取屏幕高度及比例
				var windowHeight = this.$store.state.windowHeight
				//获取头部标题高度
				var dom = uni.createSelectorQuery().select('#grace-tab-title')
				dom.fields({size: true}, res2 => {
					if(!res2){return ;}
					//计算得出滚动区域的高度
					this.tabHeight = windowHeight - res2.height - 94;
				}).exec();
			},
			//统一的关闭popup方法
			hidePopup: function() {
				this.$store.commit("setState",{id:"tabBarAddState",value:false});
			},
			tabChange: function (e) {
				var index = e.target.id.replace('tabTag-', '');
				this.swiperCurrentIndex = index;
				this.tabCurrentIndex    = index;
				if(this.tabs[index].list.length == 0){
					this.getProdInfoList();
				}
			},
			swiperChange: function(e){
				var index = e.detail.current;
				this.tabCurrentIndex = index;
				this.swiperCurrentIndex = index;
				if(this.tabs[index].list.length == 0){
					this.getProdInfoList();
				}
			},
			//搜索
			confirm:function(e){
				this.productName = e.detail.value;
				this.getProdInfoList();
			},
			//获得产品大类
			getProdCategoryList: function(){
				this.$api.Product.getProdCategoryList((res)=>{
					let newTbas = [];
					res.data.forEach((v,i)=>{
						let info = { 
							name: v.categoryName,
							id: v.categoryId , 
							prodCategoryId:v.categoryId,
							prodCategoryChildId:"",
							loadingType : 0, 
							page : 1,
							list:[],
						};
						newTbas.push(info);
					});
					this.tabs = newTbas;
					this.getProdInfoList();
				})
			},
			//每个选项滚动到底部
			scrollend:function(e){
				//获取是哪个选项滚动到底？
				var index = e.currentTarget.dataset.scindex;
				//可以利用 tabs 携带的分类id 与服务器交互请求对应分类的数据
				//判断当前是否正在加载
				if (this.tabs[index].loadingType === 1){
					return false;
				}
				this.tabs[index].loadingType = 1;//加载中
				this.tabs[index].page++;
				this.getProdInfoList();
			},
			//获取列表
			getProdInfoList:function(){
				let reqInfo = {};
				if(this.productName)reqInfo.productName = this.productName;
				reqInfo.prodCategoryId = this.tabs[this.swiperCurrentIndex].prodCategoryId;
				if(this.tabs[this.swiperCurrentIndex].prodCategoryChildId)reqInfo.prodCategoryChildId = this.tabs[this.swiperCurrentIndex].prodCategoryChildId;
				reqInfo.page = this.tabs[this.swiperCurrentIndex].page;
				reqInfo.limit = this.limit;
				this.$api.Product.getProdInfoList(reqInfo,(res)=>{
					if(res.data.length == 0 || res.data.length < this.limit){
						this.tabs[this.swiperCurrentIndex].loadingType = 2;//没有更多
					}else{
						this.tabs[this.swiperCurrentIndex].loadingType = 0;//恢复加载状态
					}
					let list = this.tabs[this.swiperCurrentIndex].list.concat(res.data)
					this.$set(this.tabs[this.swiperCurrentIndex],"list",list);
					this.setTabsHeight();
				});
			},
			//收藏产品
			proCollection(item,index){
				let reqInfo = {};
				reqInfo.productId = item.id;
				reqInfo.productName = item.productName;
				reqInfo.productImg = item.productImg;
				this.$api.User.saveMyCollection(reqInfo,(res)=>{
					this.$toast("收藏成功");
					// this.tabs[this.swiperCurrentIndex].list[index].collectionState = 1;
				})
			},
			//打开详情
			toDetail(item){
				this.$openWin("proDetail",{id:item.id});
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
		border-bottom: 1px dashed #DDD;
		padding: 12px;
	}
	.grace-news-list-img{
		height: 80px !important;
		border-radius: 5px;
		box-shadow: 0 0 10px #d8d8d8; border-radius: 10upx;
	}
	.grace-news-list-title-desc{
		padding: 5px 0;
	}
	.grace-news-list-text{
		position: relative !important;
	}
	.grace-news-list-price{
		color: #F00;
	}
	.grace-news-list-icon{
		position: absolute;
		right: 30px;
	}
</style>
