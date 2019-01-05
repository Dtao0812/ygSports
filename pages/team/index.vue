<template>
	<view class="content">
		<view id="grace-tab-title">
			<view class="yg-title grace-center yg-enroll-team">
				<text class="yg-enroll-team-laber" @tap="toEnroll">施工团队报名</text>
			</view>
			<view class="yg-title grace-center">
				<view class="grace-items">
					<view class="grace-label grace-blod picker-label">施工团队推荐</view>
					<view @click="cityPicker" class="picker-item">
						{{cityText}}
						<text class="grace-iconfont icon-arrow-down pr-10 picker-icon" style="color: #6aa328;"></text>
					</view>
				</view>
			</view>
		</view>
		
		<scroll-view scroll-y="true"  @scrolltolower="scrollend" :style="{height:tabHeight+'px'}">
			<view class="grace-imgitems">
				<view class="grace-items" v-for="(item, index) in list" :key="index">
					<image src="../../static/images/bg/my_head.png" mode="widthFix"></image>
					<view class="grace-imgitems-text grace-h4">雨花区XXX物流公司</view>
				</view>
			</view>
			<graceLoading :loadingType="loadingType"></graceLoading>
		</scroll-view>
		<mpvue-city-picker :themeColor="themeColor" ref="mpvueCityPicker" :pickerValueDefault="cityPickerValueDefault" @onCancel="onCancel" @onConfirm="onConfirm"></mpvue-city-picker>
	</view>
</template>

<script>
	var _self;
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
	import graceLoading from "@/components/grace/graceLoading.vue";
	import mpvuePicker from '@/threeComponents/mpvuePicker.vue';
	import mpvueCityPicker from '@/threeComponents/mpvueCityPicker.vue';
	export default {
		components:{
			graceLoading,mpvueCityPicker,mpvuePicker
		},
		data() {
			return {
				list:news,
				tabCurrentIndex: 0,
				swiperCurrentIndex: 0,
				tabHeight : 300,
				loadingType: 0,
				page:0,
				
				themeColor: '#007AFF', //颜色
				cityText : "点击选择", //文本
				city : null,
				cityPickerValueDefault : [0,0,1], //默认选项
			};
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
			// 团队报名
			toEnroll(){
				this.$openWin("enrollTeam");
			},
			// 点击城市选择
			cityPicker : function(){
				this.$refs.mpvueCityPicker.show();
			},
			// 城市确定按钮
			onConfirm(e) {
				var cityText  = e.label;
				var cityValue = e.value;
				var cityCode  = e.cityCode;
				this.cityText = cityText;
				this.cityPickerValueDefault = cityValue;
				this.city = e;
			},
			//滚动到底部
			scrollend:function(e){
				//加载更多的演示
				//判断当前是否正在加载
				if (this.loadingType === 1){
					return false;
				}
				//判断是否是最后一页
				console.log(this.page)
				if (this.page > 3){
					this.loadingType = 2;//全部
					return ;
				}
				this.loadingType = 1;//加载中
				//模拟延迟
				setTimeout(function(){
					_self.list = _self.list.concat(news);
					//分页
					_self.page++;
					_self.loadingType = 0;//恢复加载状态
					//
				}, 1000);
			}
		},
	}
</script>

<style scoped>
	.content{
		background-color: #EEEEEE;
		padding: 0;
	}
	.yg-enroll-team{
		text-align: left;
	}
	.yg-enroll-team-laber{
		background-color: #6aa328;
		border-radius: 5px;
		width: 100px;
		height: 25px;
		text-align: center;
		color: #FFFFFF;
		padding: 5px 10px;
		margin-left: 10px;
	}
	.grace-items{
		width: 100%;
		background-color: #FFFFFF;
		margin: 5px 0;
		text-align: center;
	}
	.picker-label{
		width: 100px;
		float: left;
		text-align: center;
		padding: 0;
		margin: 0;
		line-height: 45px;
	}
	.picker-item{
		border: 1px solid #6aa328;
		width: calc(100% - 130px);
		float: right;
		text-align: center;
		margin: 0;
		margin-right: 20px !important;
		border-radius: 5px;
		color: #888888;
		padding: 0;
		line-height: 25px;
		margin-top: 8px;
		font-size: 26upx;
	}
	.picker-icon{
		float: right;
	}
</style>
