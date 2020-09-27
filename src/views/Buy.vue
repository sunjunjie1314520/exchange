<template>
	<div class="app">
		<div class="sell-page">
			<h2>单价￥{{min}} - {{max}}</h2>
			<!-- <h2>单价￥{{$trade}}-{{$trade}}</h2> -->
			<ul>
				<li>
					<!-- <div class="fl">
						<span class="add i1" @click="jianHandle"></span>
					</div> -->
					<span>均价</span>
					<div class="box1">
						<!-- <p>{{current | moneyFixed(2)}}(昨日均价{{bai | moneyFixed(3)}}% )</p> -->
						<input type="text" v-model="current1" placeholder="请输入均价">
					</div>
					<!-- <div class="fl ml32">
						<span class="add i2" @click="addHandle"></span>
					</div> -->
				</li>
				<li>
					<span>数量</span>
					<div class="box1">
						<b-input :maxLength="5" :maxNumber="50000" v-model="formData.number" placeholder="请输入交易数量"></b-input>
					</div>
				</li>
				<li>
					<span>总价</span>
					<div class="box1">
						<input readonly type="text" v-model="price" placeholder="总价">
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
			current: 0,
			current1: '',
			formData: {
				number: 1,
				from_id: '',
			}
		}
	},
	created(){
		this.current = this.min;
		this.formData.from_id = this.$user.user_id
	},
	computed: {
		price(){
			var result = this.formData.number * this.current1;
			return result.toFixed(2)
		},
		min(){
			var len = this.$trade.data.length
			let sum = this.$trade.data[len-1].max * 1 - this.$trade.data[len-1].max * 1 / 100 * 5
			return sum.toFixed(2) * 1
		},
		max(){
			var len = this.$trade.data.length
			let sum = this.$trade.data[len-1].max * 1 + this.$trade.data[len-1].max * 1 / 100 * 5
			return sum.toFixed(2) * 1
		},
		bai(){
			try {
				return 1 - (this.$trade.data[1].amount / this.$trade.data[1].volume) / this.current
			} catch (error) {
				return 0
			}
		}
	},
	watch:{

	},
	methods: {
		submitFun(){

			// if(this.formData.number != '' && this.formData.number > 50000)
			// return false;

			console.log(this.current1 * 1);
			console.log(this.max);

			if(this.current1 * 1 < this.min || this.current1 * 1 > this.max){
				this.$toast('均价填写错误');
				return false;
			}
			this.loading('正在创建');

			var data = {
				...this.formData,
				...this.$user,
				float_range: this.current1,
			}
			this.$api.user.order_order(data)
			.then(res=>{
				this.$toast(res.msg);
				setTimeout(() => {
					this.$router.back();
				}, 1600);
			})
		},
		addHandle(){
			if(this.current < this.max)
			this.current += 0.01
		},
		jianHandle(){
			if(this.current > this.min)
			this.current = this.current - 0.01
		}
	}
}
</script>
