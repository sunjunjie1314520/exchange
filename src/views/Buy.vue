<template>
	<div class="app">
		<div class="sell-page">
			<h2>单价$0.7- 1.5</h2>
			<ul>
				<li>
					<div class="fl">
						<span class="add i1"></span>
					</div>
					<div class="box1">
						<p>1.5(昨日均价+6% )</p>
					</div>
					<div class="fl ml32">
						<span class="add i2"></span>
					</div>
				</li>
				<li>
					<span>数量</span>
					<div class="box1">
						<input type="text" placeholder="请输入交易数量">
					</div>
				</li>
				<li>
					<span>总价</span>
					<div class="box1">
						<input type="text" placeholder="请输入交易数量">
					</div>
				</li>
			</ul>
			<div class="tips">
				<div class="money">
					<p>单笔交易额s1000BFX</p>
					<p>每日可交易s300OBFX (不含手续费)</p>
				</div>
				<div class="box">
					<h4>温馨提示:</h4>
					<p>1.交易开放时间为8:00-22:00</p>
					<p>2.您发布的订单无匹配7天后过期!</p>
				</div>
			</div>
			<div class="pub-button">
				<button>确认</button>
			</div>
		</div>
	</div>
</template>

<script>

export default {
	name: 'Sell',
	data(){
		return {
			
		}
	}
}
</script>
