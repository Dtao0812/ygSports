<template>
	<view style="padding:60upx 0;" class="grace-wrap">
		<view class="grace-boxes">
			<view class="grace-boxes-img">
				<image class="grace-boxes-image" src="../../static/images/btn/btn_ball.png" mode="widthFix"></image>
			</view>
			<view class="grace-boxes-text">塑胶球场</view>
		</view>
		<view class="grace-boxes">
			<view class="grace-boxes-img">
				<image class="grace-boxes-image" src="../../static/images/btn/btn_runway.png" mode="widthFix"></image>
			</view>
			<view class="grace-boxes-text">塑胶跑道</view>
		</view>
		<view class="grace-boxes">
			<view class="grace-boxes-img">
				<image class="grace-boxes-image" src="../../static/images/btn/btn_lawn.png" mode="widthFix"></image>
			</view>
			<view class="grace-boxes-text">人造草坪</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		}
	}
</script>

<style scoped>
	.grace-boxes{width: 31.33%;}
	.grace-boxes-image{border-radius: 50%;width: 60px;height: 60px !important;}
</style>
