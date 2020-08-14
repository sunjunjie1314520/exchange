<template>
	<div class="app">
		<div class="sell-page">
			<h2>可出售余额: 0.00 音豆</h2>
			<ul>
				<li>
					<span>单价</span>
					<div class="box1">
						<p>￥5.5 (昨日均价50%)</p>
					</div>
				</li>
				<li>
					<span>数量</span>
					<div class="box1">
						<b-input type="text" v-model="formData.number" placeholder="请输入交易数量"></b-input>
					</div>
				</li>
				<li>
					<span>总价</span>
					<div class="box1">
						<input type="text" readonly v-model="formData.price" placeholder="总价">
					</div>
				</li>
			</ul>
			<div class="tips">
				<div class="money">
					<p>单笔交易额1000音豆</p>
					<p>每日可交易5000音豆 (不含手续费)</p>
				</div>
				<div class="box">
					<h4>温馨提示:</h4>
					<p>1.交易开放时间为8:00-22:00</p>
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
				number: '1',
				price:'2',
				amount:'',
				upload_product_id:''
			}
		}
	},
	methods: {
		submitFun(){
			var data = {
				...this.formData,
				...this.$user,
			}
			this.$api.user.product_save(data)
			.then(res=>{
				console.log(res);
			})
		}
	}
}
</script>
