<template>
	<view>
	    <slot name="content"></slot>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		methods:{
			showAdd(){
				console.log('add')
			}
		}
	}
</script>

<style scoped>
</style>
