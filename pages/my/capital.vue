<template>
	<view class="content capital">
		<view class="uni-padding-wrap">
			<view class="uni-title uni-common-mt text-c">
				您可提现订单{{orderNum}}笔
				<view>您的欠款：<text class="yg-text-color-green">【查看】</text></view>
			</view>
		</view>
		<view class="uni-list">
			<checkbox-group @change="checkboxChange">
				<label class="uni-list-cell uni-list-cell-pd" v-for="item in items" :key="item.value">
					<view>
						<checkbox :value="item.value" :checked="item.checked" />
					</view>
					<view class="uni-card-media">
						<view class="uni-card-media-body">
							<text class="uni-card-media-text-top">{{item.name}}</text>
							<text class="uni-card-media-text-bottom grace-text-small">订单编号:{{item.orderId}}</text>
						</view>
					</view>
					<view class="capital-btn" @tap="apply(item)">提现申请</view>
				</label>
			</checkbox-group>
		</view>
		<!-- 按钮形式 -->
		<view class="grace-footer">
			<view style="width:60%;" class="grace-nowrap capital-all-radio">
				<view>
					<checkbox value="all" checked="" />
				</view>
				<view>
					全选
				</view>
			</view>
			<view style="width:40%;">
				<button type="warn">全部提现</button>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				orderNum:0,//订单总数
				title: 'checkbox',
				items: [
					{
						value: '1',
						name: '100米跑道',
						orderId:'202121212124356'
					},{
						value: '2',
						name: '100米跑道',
						orderId:'202121212124356'
					},{
						value: '3',
						name: '100米跑道',
						orderId:'202121212124356'
					},{
						value: '4',
						name: '100米跑道',
						orderId:'202121212124356'
					},
				]
			};
		},
		methods: {
			checkboxChange: function (e) {
				var items = this.items,
					values = e.detail.value;
				for (var i = 0, lenI = items.length; i < lenI; ++i) {
					items[i].checked = false;
					for (var j = 0, lenJ = values.length; j < lenJ; ++j) {
						if (items[i].value == values[j]) {
							items[i].checked = true;
							break
						}
					}
				}
			},
			//申请提现
			apply(item){
				this.$openWin("applyCapital");
			}
		}
	}
</script>

<style scoped>
	.uni-list:before,.uni-list:after,.uni-list-cell:after{height: 0;}
	.uni-list-cell-pd {position: relative;padding: 11px 15px;margin: 10px 5px;box-shadow: 0 0 10px #d8d8d8;border-radius: 5px;justify-content: flex-start;}
	.capital-btn{position: absolute;top: 0;bottom: 0;right: 10px;margin: auto;width: 60px;height: 25px;line-height: 25px;border: 1upx dashed #a8a8a8;background:#f7f7f7;text-align: center;padding: 0 5px;font-size: 24upx;border-radius: 5px;}
	.capital-all-radio view{height: 45px;line-height: 45px;padding-left: 10px;}
</style>
