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
					<view class="grace-imgitems-text grace-h4">{{item.teamName}}</view>
				</view>
			</view>
			<graceLoading :loadingType="list.length == 0 ? 2:loadingType"></graceLoading>
		</scroll-view>
		<mpvue-city-picker :themeColor="themeColor" ref="mpvueCityPicker" :pickerValueDefault="cityPickerValueDefault" @onCancel="onCancel" @onConfirm="onConfirm"></mpvue-city-picker>
	</view>
</template>

<script>
	import graceLoading from "@/components/grace/graceLoading.vue";
	import mpvuePicker from '@/threeComponents/mpvuePicker.vue';
	import mpvueCityPicker from '@/threeComponents/mpvueCityPicker.vue';
	export default {
		components:{
			graceLoading,mpvueCityPicker,mpvuePicker
		},
		data() {
			return {
				tabCurrentIndex: 0,
				swiperCurrentIndex: 0,
				tabHeight : 300,
				
				list:[],
				loadingType: 0,
				limit:10,
				page:1,
				provinces:'',
				city:'',
				area:'',
				
				themeColor: '#007AFF', //颜色
				cityText : "点击选择", //文本
				cityPickerValueDefault : [0,0,1], //默认选项
			};
		},
		onLoad:function(){
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
				this.getList();
			}).exec();
		},
		methods:{
			// 报名
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
				
				//赋值
				let list = cityText.split("-");
				this.provinces = list[0];
				this.city = list[1];
				this.area = list[2];
				this.page = 1;
				this.getList();
			},
			//滚动到底部
			scrollend:function(e){
				//加载更多的演示
				//判断当前是否正在加载
				if (this.loadingType === 1){
					return false;
				}
				//判断是否是最后一页
				if (this.loadingType === 2){
					return ;
				}
				this.loadingType = 1;//加载中
				this.page++;
				this.getList();
			},
			//获得团队列表
			getList(){
				let reqInfo = {};
				reqInfo.page = this.page;
				reqInfo.provinces = this.provinces;
				reqInfo.city = this.city;
				reqInfo.area = this.area;
				this.$api.Home.getConstructionTeamList(reqInfo,(res)=>{
					if(res.data.length == 0||res.data.length<this.limit){
						this.loadingType = 2;
					}else{
						this.loadingType = 0;
					}
					this.list = this.list.concat(res.data);
				})
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
