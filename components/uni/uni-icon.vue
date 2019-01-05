<template>
    <view class="uni-icon" :class="['uni-icon-'+type,className]" :style="{color:color,'font-size':fontSize}" @click="onClick()"></view>
</template>

<script>
    export default {
        props: {
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
            size: [Number, String],
			/**
			 * 样式
			 */
			className:String
        },
        computed: {
            fontSize() {
                return `${this.size}px`
            }
        },
        methods: {
            onClick() {
                this.$emit('click')
            }
        }
    }
</script>
<style scoped>
	.product-search{
		line-height: 30px;
	}
</style>

