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
			
			this.getProdCategoryList();
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
			//获得产品大类
			getProdCategoryList: function(){
				this.$api.Product.getProdCategoryList((res)=>{
					let newList = [];
					res.data.forEach((v,i)=>{
						if(v.isAutotrophy == 0){
							let info = { 
								imgUrl:v.bz1,
								name: v.categoryName,
								id: v.categoryId
							};
							newList.push(info);
						}
					});
					//存储到vux中
					this.$store.commit("setState",{id:"addList",value:newList})
				})
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
