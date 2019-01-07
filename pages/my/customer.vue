<template>
	<yg-pull ref="pull" @loadMore="loadMore" :loadingType="loadingType" class="purchase" :isNull="isNull">
		<block slot="list">
			<view class="grace-left-padding-wrap" v-for="(item, index) in list" :key="index" @tap="toDetail(item)">
				<view class="grace-list">
					<view class="uni-card-media">
						<image class="uni-card-media-logo" src="../../static/logo.png"></image>
						<view class="uni-card-media-body">
							<text class="uni-card-media-text-top grace-blod">{{item.clientName}}U</text>
							<text class="uni-card-media-text-bottom">{{item.clientTel}}</text>
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
				list:[],//列表
				page: 1,//页码
				loadingType:0,//是否显示加载更多
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
				reqInfo.page = this.page = 1;
				this.$api.User.getMyClientList(reqInfo, (res) => {
					if (res.data.length == 0) {
						this.loadingType = 3;
					}
					this.list = res.data;
					uni.stopPullDownRefresh();
				},(err)=>{
					uni.stopPullDownRefresh();
				});
			},
			// 加载更多
            loadMore(e) {
				if (this.loadingType !== 0) return;
				this.loadingType = 1;
				let reqInfo = {};
				reqInfo.page = this.page = ++this.page;
				this.$api.User.getMyClientList(reqInfo, (res) => {
					this.loadingType = 0;
					if (res.data.length == 0) {
						this.loadingType = 2;
						return;
					}
					this.list = this.list.concat(res.data);
				},(err)=>{this.loadingType = 0;});
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