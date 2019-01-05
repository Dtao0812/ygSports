<script>
	export default {
		data() {
			return {
				showPopupBottom: false,
				msg: '',
				title: '',
			};
		},
		onLaunch: function () {
			console.log('App Launch')
			//#ifdef APP-PLUS
			let currWV = plus.webview.currentWebview();
			let leftPos = Math.ceil((this.$store.state.windowWidth - 60) / 2);
			let view = plus.nativeObj.View.getViewById('bg2');
			let drawNativeIcon = new plus.nativeObj.View('icon', {bottom: '0',left: leftPos + 'px',width: '60px',height: '60px'}, 
				[{
					tag: 'rect',
					id: 'bg2',
					position: {bottom: '-0.5px',left: '0px',width: '100%',height: '45px'},
					rectStyles: {color: '#fff'}
				}, {
					tag: 'rect',
					id: 'iconBg',
					position: {top: '5px',left: '5px',width: '50px',height: '50px'},
					rectStyles: {color: '#6aa328',radius: '50%'}
				}, {
					tag: 'font',
					id: 'icon',
					text: '\ue468',
					position: {top: '0px',left: '5px',width: '50px',height: '100%'},
					textStyles: {fontSrc: '_www/static/fonts/uni.ttf',align: 'center',color: '#fff',size: '30px'}
				}]);
				
			currWV.append(drawNativeIcon);
			
			drawNativeIcon.addEventListener("click",(e)=>{
				this.$store.commit("setState",{id:"tabBarAddState",value:!this.$store.state.tabBarAddState});
			});
			//#endif
		},
		onShow: function () {
			console.log('App Show')
		},
		onHide: function () {
			console.log('App Hide')
		},
		onLoad() {
		},
		methods:{
			showAdd(){
				this.msg = '订单设计';
				this.showPopupBottom = !this.showPopupBottom;
			},
			//统一的关闭popup方法
			hidePopup: function() {
				this.showPopupBottom = false;
			},
			//展示底部 popup
			showBottomPopup: function() {
				this.hidePopup();
				this.msg = '订单设计';
				this.showPopupBottom = true;
			}
		},
	}
</script>

<style>
	/*每个页面公共css */
	@import './static/css/uni.css';
	@import './common/graceUI.css';
	@import './common/default.css';
</style>
