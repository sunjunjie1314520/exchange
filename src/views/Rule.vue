<template>
	<div class="app">
		<div class="rule-page">
			<div class="mui-scroll">
				<div class="wrapper">
					<div class="title">
						<h2>总换规则</h2>
						<p>2020-04-09 15:02:02</p>
					</div>
					<div class="content">
						<p>交易规则</p>
						<p>1.开市时间10:00-22:00，闭市后无法进入</p>
						<p>2.出售时需要拥有足够抵扣手续费的余额才可成功售出</p>
						<p>3.买家打款需在0.5小时内完成付款，超出时长则自动取消订单</p>
						<p>4.卖家收款需在0.5小时内完成放行，超时不确认将要扣除10%的违约惩罚，并系统完成自动确认放行，时间内进行申诉操作</p>
						<p>5.用户操作将会有一-定的单日发布次数上限和发布时间间隔</p>
					</div>
					<div class="content">
						<p>申诉问题:</p>
						<p>1.买方若发现卖方的收款方式不对无法付款，请联系客服进行申诉</p>
						<p>2.卖方可以在买方上传截图后申诉，条件:对方未付款、未全额付款、虚假截图等</p>
						<p>3.用户申诉后会有一-定的双方自由调解时间，若需撤诉请联系客服处理</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>

export default {
	name: 'Home',
	data(){
		return {

		}
	},
	mounted(){
		this.mui(".rule-page").scroll({
			scrollY: true, //是否竖向滚动
			scrollX: false, //是否横向滚动
			startX: 0, //初始化时滚动至x
			startY: 0, //初始化时滚动至y
			indicators: true, //是否显示滚动条
			deceleration: 0.0006, //阻尼系数,系数越小滑动越灵敏
			bounce: true //是否启用回弹
		})
	},
	methods: {

	}
}
</script>
