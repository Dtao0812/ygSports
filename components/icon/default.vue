<template>
	<view class="uni-icon" @tap="onIcon" :class="iconClass" :style="{color:color,'font-size':fontSize}"></view>
</template>

<script>
	export default {
		props: {
			className:String,
			/**
			* 图标类型
			*/
			type: String,
			/**
			* 图标颜色
			*/
			color: String,
			/**
			* 图标大小
			*/
			size: String
		},
		computed: {
			fontSize() {
				return `${this.size}px`
			},
			iconClass(){
				let _class = '';
				if(this.className){
					_class = 'aby-icon-'+ this.type + ' ' + this.className;
				}else{
					_class = 'aby-icon-'+ this.type;
				}
				return _class;
			},
		},
		methods:{
			onIcon(){
				this.$emit("click-icon");
				this.$emit("clickIcon");
			}
		},
		data() {
			return {
			}
		},
	}
</script>

<style>
	@import "../../static/css/aby.icon.css";
	
	.home-search-icon {
		margin-left: 10px;
		vertical-align: sub !important;
		line-height: 45px !important;
	}
	.home-top-btn-icon{
		margin: auto;
		padding-left: 4px;
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		vertical-align: middle;
		width: 50px;
		height: 50px;
	}
	.screenbanner-route-icon{
		margin: auto;
		//#ifdef H5
		padding-left: 8px;
		padding-top: 5px;
		//#endif
		//#ifdef APP-PLUS
		padding-left: 2px;
		padding-top: 4px;
		//#endif
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		vertical-align: middle;
		width: 30px;
		height: 30px;
	}
	.flex-icon-close{
		position: absolute;
		right: 10px;
		top: 12px;
		background-color: #2091E1;
		border-radius: 50%;
		padding: 5px;
	}
	.popup-icon{
		display: inline-block;
	}
	.aby-button-top {
		position: fixed;
		right: 8px!important;
		bottom: 70px!important;
		background-color: rgba(255, 255, 255, .8);
		border: 1px solid #CCCCCC;
		color: #888888;
		border-radius: 50%;
		padding: 10px;
		font-size: 20px;
		z-index: 999999999999999;
	}
	.pos-right-icon{
		position: absolute;
		right: 5px;
		top: 5px;
	}
	.icon-screen-20{
		font-size: 20px!important;
		font-weight: bold;
		vertical-align: middle;
	}
</style>