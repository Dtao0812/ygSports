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
       			_class = 'icon-'+ this.type + ' ' + this.className;
       		}else{
       			_class = 'icon-'+ this.type;
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
	@import "../../static/css/iconfont.css";
</style>

