<template>
    <view class="uni-tab-bar">
        <slot name="screen"></slot>
        <swiper class="swiper-box" duration="300">
            <swiper-item>
                <scroll-view class="list" scroll-y @scrolltolower="loadMore" @scroll="scroll" :scroll-top="scrollTop">
                    <slot name="list"></slot>
					<graceLoading :loadingType="loadingType"></graceLoading>
                </scroll-view>
            </swiper-item>
        </swiper>
    </view>
</template>
<script>
	import graceLoading from "@/components/grace/graceLoading.vue";
    export default {
        components: {
            graceLoading
        },
		props:{
			//是否显示加载更多
			loadingType:{
				type:Number,
				default:0
			},
			//数据是否为空
			isNull:{
				type:Boolean,
				default:false
			},
			//相关搜索结果
			seachResult:{
				type:Number,
				default:0
			}
		},
        data() {
            return {
				isLoading: true,//是否显示加载动画
				isShowBtnTop: false,//是否显示返回顶部按钮
				scrollTop:0,//具体顶部的位置
				old: {
					scrollTop: 0
				}
            }
        },
        methods: {
			// 下拉加载
			pullDown(){
				let reqInfo = {};
				reqInfo.loading = 1;
				reqInfo.orderBy = this.orderBy;
				reqInfo.pageNum = this.pageNum = 1;
				reqInfo.keyword = this.keyword;			
				reqInfo.where = this.where;
				reqInfo.keywordHtml = this.keywordHtml;
				this.$api.CpIndexNew.getLineListSearch(reqInfo, (res) => {
					this.isLoading = false;
					this.lineList = res.proList;
					uni.stopPullDownRefresh();
				},(err)=>{
					this.isLoading = false;
					uni.stopPullDownRefresh();
				});
			},
			// 加载更多
            loadMore(e) {
				this.$emit("loadMore");
            },
			//滚动监听
			scroll(e){
				this.isShowBtnTop = e.detail.scrollTop > 100;
				this.old.scrollTop = e.detail.scrollTop;
			},
			// 列表返回顶部
			onBtnTop(){
				this.scrollTop = this.old.scrollTop;
				this.$nextTick(function() {
					this.scrollTop = 0;
				});
			},
			// 显示加载
			loadingShow(){
				this.isLoading = true;
			},
			// 关闭加载
			loaddingClose(){
				this.isLoading = false;
			},
        },
		activated(){
			this.scrollTop = this.old.scrollTop;
		},
    }
</script>

<style scoped>
	.swiper-box{
		border-top: 1px solid #c8c7cc;
	}
	.uni-scroll-view{
		height: 100%;
		position: relative;
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
	.noSeach{
		text-align: center;
	}
</style>