<template>
	<view style="height: 100%;">
	    <slot name="content"></slot>
		<!-- 底部 -->
		<uni-popup :show="showPopupBottom" type="bottom" :msg="msg" v-on:hidePopup="hidePopup">
			<block>
				
			</block>
		</uni-popup>
	</view>
</template>

<script>
	import uniPopup from '@/components/uni/uni-popup.vue';
	export default {
		components:{
			uniPopup
		},
		data() {
			return {
				showPopupBottom: false,
				msg: '订单设计',
			};
		},
		computed:{
			tabBarAddState(){
				return this.$store.state.tabBarAddState;
			}
		},
		methods:{
			//统一的关闭popup方法
			hidePopup: function() {
				this.showPopupBottom = false;
				this.$store.commit("setState",{id:"tabBarAddState",value:false});
			},
		},
		watch:{
			tabBarAddState(val){
				this.showPopupBottom = val;
			}
		}
	}
</script>

<style scoped>
	
</style>
