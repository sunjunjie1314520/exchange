<template>
	<div class="scroll-view"
		@touchstart="touchstart"
		@touchmove.prevent.stop="touchmove"
		@touchend="touchend"
		ref="scroll"
	>
		<div class="scroll-wrapper"
		:style="{
			transform:`translate3d(0px, ${curr}px, 0px) translateZ(0px)`,
			transitionDuration: `${duration}ms`,
			transitionTimingFunction: 'cubic-bezier(0.165, 0.84, 0.44, 1)'
			}"
		>
			<div class="content" ref="content">
				<slot></slot>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'scroll-view',
		data(){
			return {
				sy: 0,
				cy: 0,
				ey: 0,

				duration:0,

				boxHeight:0,
				domHeight:0,

				curr:0,
			}
		},
		created(){

		},
		mounted(){
			this.boxHeight = this.$refs.scroll.clientHeight
		},
		methods: {
			touchstart(e){
				this.domHeight = this.$refs.content.clientHeight
				this.duration = 0
				this.sy = e.touches[0].clientY
			},
			touchmove(e){
				var y = e.changedTouches[0].clientY
				var res = y - this.sy
				this.cy = res
				this.curr = res / 1.4 + this.ey
			},
			touchend(e){
				var y = e.changedTouches[0].clientY
				
				if( this.domHeight <= this.boxHeight){
					// 高度小于盒子的高度
					this.duration = 500
					this.curr = 0
					this.ey = 0
				}else if(this.domHeight > this.boxHeight){
					if(this.curr > 0){
						this.duration = 500
						this.curr = 0
						this.ey = 0
					}else if(this.curr < this.boxHeight - this.domHeight){
						console.log(this.curr);
						console.log(this.boxHeight - this.domHeight);
						this.duration = 500
						this.curr = this.boxHeight - this.domHeight
						this.ey = this.boxHeight - this.domHeight
					}else{
						this.ey = this.ey + (y - this.sy) / 1.4
					}
					
				}
				
			},
		}
	}
</script>

<style lang="stylus" scoped>
	.scroll-view
		position fixed
		overflow hidden
		left 0
		right 0
		bottom 0
		top .88rem
		// height calc(100vh - 88px)
		.content
			float left
			width 100%
</style>