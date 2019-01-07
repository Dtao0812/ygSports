<template>
	<view style="padding:60upx 0;" class="grace-wrap" v-if="list">
		<view class="grace-boxes" v-for="(v,i) in list" :key="i" @tap="toPublish(v)">
			<view class="grace-boxes-img">
				<image class="grace-boxes-image" :src="v.imgUrl" mode="widthFix"></image>
			</view>
			<view class="grace-boxes-text">{{v.name}}</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list:this.$store.state.addList
			};
		},
		onLoad() {
		},
		methods:{
			toPublish(item){
				this.$openWin("publishOrder",{id:item.id,name: item.name});
			},
		}
	}
</script>

<style scoped>
	.grace-boxes{width: 31.33%;}
	.grace-boxes-image{border-radius: 50%;width: 60px;height: 60px !important;}
</style>
