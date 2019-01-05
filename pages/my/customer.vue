<template>
	<yg-pull ref="pull" @loadMore="loadMore" :loadingType="loadingType" class="purchase" :isNull="isNull">
		<block slot="list">
			<view class="grace-left-padding-wrap" v-for="(item, index) in list" :key="index" @tap="toDetail(item)">
				<view class="grace-list">
					<view class="uni-card-media">
						<image class="uni-card-media-logo" src="../../static/logo.png"></image>
						<view class="uni-card-media-body">
							<text class="uni-card-media-text-top grace-blod">点击设置头像U</text>
							<text class="uni-card-media-text-bottom">13888888888</text>
						</view>
					</view>
					<text class="grace-list-imgs-arrow grace-iconfont icon-arrow-right"></text>
				</view>
			</view>
		</block>
	</yg-pull>
</template>
<script>
    import ygPull from '@/components/page/pull';
    export default {
        components: {
            ygPull
        },
        data() {
            return {
				list:[1,2,3],//列表
				selectType: "",//询价类型
				pageNum: 1,//页码
				keyword: "",//搜索关键字
				where: {},//搜索条件
				keywordHtml: '',//搜索关键字html
				loadingType:0,//是否显示加载更多
				isNull:false,
            }
        },
        onLoad: function() {
			uni.startPullDownRefresh();
        },
		onReady(){
		},
        methods: {
			// 下拉加载
			pullDown(){
				let reqInfo = {};
				reqInfo.loading = 1;
				reqInfo.pageNum = this.pageNum = 1;
				reqInfo.selectState = 10;
				reqInfo.selectType = this.selectType;
// 				this.$api.Select.getPublishList(reqInfo, (res) => {
// 					this.$refs.pull.loaddingClose();
// 					this.isLoading = false;
// 					if (res.cpSelectList.length == 0) {
// 						this.loadingType = 3;
// 						this.isNull = true;
// 					}else{
// 						this.isNull = false;
// 					}
// 					res.cpSelectList.forEach((v,i)=>{
// 						res.cpSelectList[i].playScenicTime = this.$tool.dateFun.getDateFromNowBy13(v.playScenicTime)
// 					})
// 					
// 					this.lists = res.cpSelectList;
// 					uni.stopPullDownRefresh();
// 				},(err)=>{
// 					this.isLoading = false;
// 					uni.stopPullDownRefresh();
// 				});
			},
			// 加载更多
            loadMore(e) {
				if (this.loadingType !== 0) return;
				this.loadingType = 1;
				
				let reqInfo = {};
				reqInfo.loading = 1;
				reqInfo.pageNum = this.pageNum = ++this.pageNum;
				reqInfo.selectState = 10;
				reqInfo.selectType = this.selectType;		
				reqInfo.where = this.where;
				reqInfo.keywordHtml = this.keywordHtml;
// 				this.$api.Select.getPublishList(reqInfo, (res) => {
// 					if (res.cpSelectList.length == 0) {
// 						this.loadingType = 2;
// 						return;
// 					}else{
// 						res.cpSelectList.forEach((v,i)=>{
// 							res.cpSelectList[i].playScenicTime = this.$tool.dateFun.getDateFromNowBy13(v.playScenicTime)
// 						})
// 					}
// 					this.lists = this.lists.concat(res.cpSelectList);
// 					this.loadingType = 0;
// 				},(err)=>{this.loadingType = 0;});
            },
        },
		// 下拉加载
		onPullDownRefresh() {
			this.pullDown();
		},
    }
</script>

<style scoped>
	.uni-scroll-view{
		height: 100%;
		position: relative;
	}
	.list-content{
		background-color: #efeff4;
	}
	.uni-mask{
		height: 1000px;
		width: 100%;
		position: fixed !important;
		left: 0;
		top: 0;
		right: 0;
		bottom: 0;
		z-index: 9999;
		background: rgba(0,0,0,0.3);
		-webkit-pointer-events: none;
		-moz-pointer-events: none;
		-ms-pointer-events: none;
		-o-pointer-events: none;
		pointer-events: none;
	}
	/* 商品 */
	.grace-news-list{
		padding: 0;
		background: #FFFFFF;
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