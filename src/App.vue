<template>
	<div id="app">
		<AppBar v-if="!full"></AppBar>
		<transition :name="transitionName"> 
			<router-view :class="['app-router', {'pt': !full}]" />
		</transition>
	</div>
</template>

<script>
	export default {
		data(){
			return {
				transitionName: '',
				full: false,
			}
		},
		watch:{
			'$route' (to, from) {
				// const toDepth = to.path.split('/').length
				// const fromDepth = from.path.split('/').length
				const toDepth = to.meta.back
				const fromDepth = from.meta.back
				this.full = to.meta.full
				this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
			}
		},
		created(){
			const _this = this
			console.log('app created');
			_this.fontSize(750);

			// 禁止应用
			window.addEventListener('touchmove', function(e){
				e.preventDefault()
			}, { passive: false });

			window.onresize = function(){
				_this.fontSize(750)
			}
			window.getMetaParams = function(e){
				
			}
			
			let dd_user = this.$assist.getLocalStorage('dd_user')
			console.log(dd_user);
			
			if(dd_user){
				this.$store.commit('User/SET_TOKEN', dd_user);
			}else {
				this.$router.push({name: 'Login'});
			}
		},
		mounted(){
			const _this = this
			console.log('app mounted');

			var bowhidden="hidden" in document?"hidden": "webkithidden" in document?"webkithidden": "mozhidden" in document ?"mozhidden": null;
			var vibchage="visibilitychange" || "webkitvisibilitychange" || "mozvisibilitychange";
			document.addEventListener(vibchage, function (){
				if(!document[bowhidden]){
					var date = new Date()
					console.log("激活", date);
					_this.$store.commit('Betting/SET_PAGE_ACTIVE', true)
				}
				else{
					var date = new Date()
					console.log("隐藏", date);
					_this.$store.commit('Betting/SET_PAGE_ACTIVE', false)
				}
			});
		},
		methods:{
			fontSize(devwidth) {
				var deviceWidth = document.documentElement.clientWidth;
				if (deviceWidth >= devwidth) deviceWidth = devwidth;
				document.documentElement.style.fontSize = deviceWidth / (devwidth / 100) + 'px';
			},
		}
	}
</script>

<style lang="stylus">
.pt
	padding-top 1rem
.app-router
	position absolute
	left 0
	top 0
	right 0
	bottom 0
.slide-right-enter-active
.slide-right-leave-active
.slide-left-enter-active
.slide-left-leave-active
	will-change transform
	transition all 500ms
	position absolute
	left 0
	width 100%
.slide-left-enter 
	opacity 0
	transform translate3d(100%,0, 0)
.slide-left-leave-active
	opacity 0
	transform translate3d(-100%, 0, 0)
.slide-right-enter
	opacity 0
	transform translate3d(-100%,0,0)
.slide-right-leave-active
	opacity 0
	transform translate3d(100%,0, 0)
</style>