<template>
	<div class="app">
		<div class="sell-page">
			<h2>可出售余额: {{$info.user_amount}} 音豆</h2>
			<ul>
				<li>
					<span>单价</span>
					<div class="box1">
						<p>￥{{$sell.odds}}</p>
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
						<input type="text" readonly :value="price" placeholder="总价">
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
					<p>2.出售订单对方30分钟内未付款，将自动取消订单。</p>
				</div>
			</div>
			
			<div class="pub-button">
				<button @click="submitFun">确认出售</button>
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
				from_id:1,
				trade_id: 1,
				order_number: 1,
				to_from_id: 2,
				number: '',
			}
		}
	},
	created(){

	},
	computed: {
		price(){
			let a = this.formData.number * this.$sell.odds;
			return a.toFixed(2)
		}
	},
	mounted(){
		this.formData.number = this.$sell.number // 数量

		this.formData.from_id = this.$sell.user_id,  //买方ID

		this.formData.order_number = this.$sell.order_number // 订单编号

		this.formData.trade_id = this.$sell.id

		this.formData.to_from_id = this.$info.id

	},
	methods: {
		submitFun(){
			var data = {
				...this.formData,
				...this.$user,
			}
			this.$api.user.trade_sellr(data)
			.then(res=>{
				console.log(res);
				if(res.code){
					this.$router.push({path: '/order', query: {tabs: 1}})
				}else{
					this.$toast(res.msg)
				}
			})
		}
	}
}
</script>
