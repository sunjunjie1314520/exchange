<template>
	<div class="app">
		<div class="sell-page">
			<h2>单价￥5.50-6.00</h2>
			<ul>
				<li>
					<div class="fl">
						<span class="add i1"></span>
					</div>
					<div class="box1">
						<p>5.50(昨日均价+6% )</p>
					</div>
					<div class="fl ml32">
						<span class="add i2"></span>
					</div>
				</li>
				<li>
					<span>数量</span>
					<div class="box1">
						<input type="text" v-model="formData.number" placeholder="请输入交易数量">
					</div>
				</li>
				<li>
					<span>总价</span>
					<div class="box1">
						<input type="text" v-model="formData.price" placeholder="总价">
					</div>
				</li>
			</ul>
			<div class="tips">
				<div class="box">
					<h4>温馨提示:</h4>
					<p>1.交易开放时间为08:00-22:00</p>
					<p>2.您发布的订单无匹配7天后过期!</p>
				</div>
			</div>
			<div class="pub-button">
				<button @click="submitFun">确认</button>
			</div>
		</div>
	</div>
</template>

<script>

export default {
	name: 'Sell',
	data(){
		return {
			formData:{
				number: "",
				price: 'x56456'
			}
		}
	},
	methods: {
		submitFun(){
			this.$api.user.order_save(this.formData)
			.then(res=>{
				console.log(res);
			})
		}
	}
}
</script>
