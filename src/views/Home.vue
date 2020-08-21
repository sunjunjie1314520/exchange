<template>
	<div class="app">
		<div class="home-page">
			<!-- style="top: 0;" height='500' class="scroller" -->
			<scroller :on-refresh="refresh" :on-infinite="infinite" ref="myscroller">
				<div class="wrapper">
						
					<div class="head">
						<div class="text">首页</div>
						<div class="home-user" @click="show=true">
							<img v-if="$info && $info.avatar != '0'" :src="'http://api.ohtbmgn.cn/' + $info.avatar" alt="">
							<img v-else src="../../src/static/img/77aee2_72x72.png" alt="">
						</div>
						<div class="func">
							<div class="ico"><router-link to="/buy">买</router-link></div>
						</div>
					</div>

					<div class="clear"></div>
					
					<!-- 图表 -->
					<div id="myChart" :style="{width: countWidth, height: '200px'}">
						<!-- <img src="../../src/static/img/loadding.svg" alt=""> -->
						<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="margin:auto;display:block;" width="200px" height="200px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
							<circle cx="50" cy="50" r="32" stroke-width="8" stroke="#c5c5c5" stroke-dasharray="50.26548245743669 50.26548245743669" fill="none" stroke-linecap="round" transform="rotate(29.9862 50 50)">
								<animateTransform attributeName="transform" type="rotate" repeatCount="indefinite" dur="1s" keyTimes="0;1" values="0 50 50;360 50 50"></animateTransform>
							</circle>
						</svg>
					</div>
					
					<div class="banner" v-if="false">
						<img src="../../src/static/img/0fc7e1_690x335.jpg" alt="">
					</div>
					
					<div class="w">
						<div class="data" v-if="$trade">
							<div class="today">
								<div class="item">
									<div class="tit">
										均价(昨/今)
									</div>
									<div class="number">
										￥{{ $trade.data[$trade.data.length-2].amount / $trade.data[$trade.data.length-2].volume | moneyFixed(2)}}/{{ deal }}
									</div>
								</div>
								<div class="item">
									<div class="tit">
										最高(昨/今)
									</div>
									<div class="number">
										￥{{$trade.data[$trade.data.length-2].max | moneyFixed(2)}}/{{$trade.data[$trade.data.length-1].max | moneyFixed(2)}}
									</div>
								</div>
								<div class="item">
									<div class="tit">
										当前价格
									</div>
									<div class="number">
										￥{{$trade.data[$trade.data.length-1].floor | moneyFixed(2)}}
									</div>
								</div>
							</div>
							<div class="deal">
								<div class="item">
									<div class="tit">
										买量(音豆)
									</div>
									<div class="number">
										<!-- {{$trade.data[$trade.data.length-1].buy}} -->
										{{sumBuy}}
									</div>
								</div>
								<div class="item">
									<div class="tit">
									成交(音豆)(昨/今)
									</div>
									<div class="number">
										{{$trade.data[$trade.data.length-2].volume}}/{{$trade.data[$trade.data.length-1].volume}}
									</div>
								</div>
							</div>
						</div>

						<div class="search">
							<div class="box">
								<div class="ico">
									<img src="../../src/static/img/1d1714_30x30.jpg" alt="">
								</div>
								<div class="text">
									<input type="text" v-model="phone" name="" id="" placeholder="请输入您要搜索的手机号">
									<button @click="search">搜索</button>
								</div>
							</div>
						</div>
					</div>

					<div class="details">
						<div class="tabs" v-if="false">
							<div class="item" @click="filter1 == 1 ? filter1=0 : filter1=1">
								<div class="txt">时间</div>
								<div class="sta">
									<div :class="['tops', {active: filter1==0}]"></div>
									<div :class="['bots', {active: filter1==1}]"></div>
								</div>
							</div>
							<div class="item" @click="filter2 == 1 ? filter2=0 : filter2=1">
								<div class="txt">单价</div>
								<div class="sta">
									<div :class="['tops', {active: filter2==0}]"></div>
									<div :class="['bots', {active: filter2==1}]"></div>
								</div>
							</div>
							<div class="item" @click="filter3 == 1 ? filter3=0 : filter3=1">
								<div class="txt">数量</div>
								<div class="sta">
									<div :class="['tops', {active: filter3==0}]"></div>
									<div :class="['bots', {active: filter3==1}]"></div>
								</div>
							</div>
						</div>
						<div class="pub-list">
							<div class="item" v-for="item in orderList" :key="item.id">
								<div class="user">
									<div class="text">
										<div class="imgs">
											<img src="../../src/static/img/b06202_64x64.png" alt="">
										</div>
										<div class="label">
											<div class="txt">
												{{item.phone | mobile}}
											</div>
											<div class="pays" v-if="item.UserBank.length > 0">
												<img v-if="item.UserBank[0].bank_number" :src="getImgUrl(0, item.UserBank[0].bank_number)" alt="">
												<img v-if="item.UserBank[0].wx_number" :src="getImgUrl(1, item.UserBank[0].wx_number)" alt="">
												<img v-if="item.UserBank[0].zfb_number" :src="getImgUrl(2, item.UserBank[0].zfb_number)" alt="">
											</div>
										</div>
									</div>
									<div class="price">
										<div class="tit">
											单价
										</div>
										<div class="num">
											<!-- ￥{{ $trade.data[0].floor * (item.float_range + 1) | moneyFixed(2)}} -->
											￥{{item.float_range  | moneyFixed(2)}}
										</div>
									</div>
								</div>
								<div class="inform">
									<div class="text">
										<div class="p">
											<!-- 数量 {{item.TradeDetail.length > 0 ? quantityHandle(item.TradeDetail): 0}} 音豆 -->
											数量 {{item.number}} 音豆
										</div>
										<!-- <div class="p">
											最近7日成交{{item.TradeDetail.length > 0 ? resultHandle(item.TradeDetail): 0}}笔
										</div> -->
									</div>
									<div class="link">
										<button @click="sellHandle(item, item.float_range)">出售</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="clear"></div>
			</scroller>
        </div>
		<div :class="['menu-slide', {active: show}]" v-if="show">
			<div class="menu-content">
				<div class="close" @click="show=false;">关闭</div>
				<div class="id">
					<h2>{{ $info.phone | mobile }}</h2>
					<span>手续费: {{$info.Group.fee * 100}}%</span>
				</div>
				<div class="assets">
					<div class="item">
						<div class="tits">
							账户资产(音豆)
						</div>
						<div class="num">
							{{$info.user_amount}}
						</div>
						<!-- <div class="func">
							<div class="txt">
								冻结
							</div>
							<div class="ico">
								<img src="../../src/static/img/81730a_32x32.png" alt="">
							</div>
						</div> -->
					</div>
					<div class="item">
						<div class="tits">
							冻结 <img src="../../src/static/img/371bdd_32x33.png" alt="">
						</div>
						<div class="num">
							{{$info.lock_amount}}
						</div>
					</div>
				</div>
				<div class="list">
					<ul>
						<li>
							<router-link to="/order">
								<div class="ico">
									<img src="../../src/static/img/a9d150_40x44.png" alt="">
								</div>
								<div class="text">
									菜单管理
								</div>
							</router-link>
						</li>
						<li>
							<router-link to="/set">
								<div class="ico">
									<img src="../../src/static/img/8fa11d_42x45.png" alt="">
								</div>
								<div class="text">
									设置
								</div>
							</router-link>
						</li>
					</ul>
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
			show: false,
			countWidth: 0,
			phone: '',

			filter1: 1,
			filter2: 1,
			filter3: 1,

			status:'all',
			orderList:[],
			all_page: 1,
			page: 0,
		}
	},
	created(){
		// console.log(this.$route.query);
		// this.$store.commit('User/SET_TOKEN', this.$route.query);
		this.userinfo();

	},
	mounted(){
		var screen = this.$assist.getScreenInfo();
		this.countWidth = `${screen.width}px`;
		// setTimeout(() => {
		// 	this.drawLine();
		// }, 10);
	},
	watch:{
		data1(ee){
			console.log(ee);
		}
	},
	computed: {
		sumBuy(){
			var sum = 0;
			if(this.$trade){
				this.$trade.data.forEach(item=>{
					sum = sum + item.buy;
				})
			}
			return sum;
		},
		deal(){
			if(this.$trade.data[this.$trade.data.length-1].volume > 0){
				var val = this.$trade.data[this.$trade.data.length-1].amount / this.$trade.data[this.$trade.data.length-1].volume
				return val.toFixed(2)
			}else{
				console.log(this.orderList);
				if(this.orderList.length > 0){
					return this.orderList[0].float_range
				}else{
					return '0.00'
				}
			}
		},
		yAxis_Max(){
			return Math.ceil(Math.max.apply(null, this.data1))
		},
		min(){
			return this.$trade.sys_amount * 1 - this.$trade.sys_amount * 1 / 100 * 5
		},
		max(){
			return this.$trade.sys_amount * 1 + this.$trade.sys_amount * 1 / 100 * 5
		},
		data1(){
			// var arr = [0, 5.5, 10, 15, 20, 25, 30]
			var arr = []
			if(this.$trade){
				var source = this.$assist.deepClone(this.$trade.data);
				var len = source.length;
				var five = []
				if(len > 5){
					five = source.splice(len - 5, len);
				}else{
					five = source
				}
				five.forEach(item=>{
					arr.push(item.floor)
				})
			}
			return arr
		},
		week(){
			var arr = []
			if(this.$trade){
				var source = this.$assist.deepClone(this.$trade.data);
				var len = source.length;
				var five = []
				if(len > 5){
					five = source.splice(len - 5, len);
				}else{
					five = source
				}
				five.forEach(item=>{
					var a = item.create_time.split(' ')
					var str = a[0].split('-').splice(1,2).join('/')
					arr.push(str)
				})
			}
			return arr
		}
	},
	methods: {
		getImgUrl(index, fields){
			var arr = ['68f55d_64x64.png', 'dd2105_96x96.png', '469592_34x34.png'];
			if(fields){
				return require(`../../src/static/img/${arr[index]}`)
			}else{
				return ''
			}
		},
		resultHandle(list){
			var bi = 0;
			list.forEach(item=>{
				if(item.status == 2){
					bi += item.number
				}
			})
			return bi
		},
		quantityHandle(list){
			var bi = 0;
			list.forEach(item=>{
				// if(item.status == 2){
					bi += item.amount * 5
				// }
			})
			return bi
		},
		// 列表
		getorderList(done){
			var data = {
				page: this.page,
				status: 0,
				phone: this.phone,
				token: this.$user.token
			}
			this.$api.user.orderRecord(data)
			.then(res=>{
				if(res.code == 1){
					this.orderList.push.apply(this.orderList, res.data)
					this.$refs.myscroller.finishInfinite(true)
					this.all_page = res.all_page
					// this.page = this.page + 1
					done();					
				}else{
					this.$refs.myscroller.finishInfinite(true);
				}
				console.log(res);
				// this.list = res.data
			})
		},
		// 出售
		sellHandle(id, item){
			this.$store.commit('User/SET_CURRENT_SELL', {...id, odds: item.toFixed(2)})
			this.$router.push('/sell');
		},
		// 搜索
		search(){
			// this.$router.push({path: '/order', query:{phone: this.phone}})
			this.goodsAll();
		},
		// 绘图
		drawLine(){
			const _this = this

			// 基于准备好的dom，初始化echarts实例
			let myChart = this.$echarts.init(document.getElementById('myChart'))
			// 绘制图表
			myChart.setOption({
				color: ['#45cfae'],
				grid: {
					top: 20,
					bottom: 30,
					left: '10%',
					right: 15,
				},
				tooltip: {},
				xAxis: {
					data: _this.week,
					axisLine: {
						lineStyle: {
							color: "#fff",
						}
					}
				},
				yAxis: {
					min: 0,
					max: _this.yAxis_Max * 2,
					axisLine: {
						lineStyle: {
							color: "#fff",
						}
					}
				},
				series: [{
					name: '价格',
					type: 'line',
					data: _this.data1
				}],
			});
		},
		// 获取用户信息
		userinfo(){
			this.$store.dispatch('User/userinfo', this.$user);

			this.$store.dispatch('User/trade_index', this.$user)
			.then(res=>{
				console.log(res);
				setTimeout(() => {
					this.drawLine();
				}, 500);
			})
		},
		refresh (done) {
			setTimeout(()=>{
				this.goodsAll();
				done();
			},1500)
		},
		//下拉触发
		infinite (done) {
			console.log('infinite');
			console.log(this.page, this.all_page);

			if(this.page>=this.all_page){
				setTimeout(()=>{
					this.$refs.myscroller.finishInfinite(true);
				},1500)
			}else{
				setTimeout(()=>{
					this.page++;
					this.getorderList(done);
				}, 200);
			}
		},
		goodsAll(){
			this.status = 'all'
			this.page = 0
			this.all_page = 1
			this.$refs.myscroller.finishInfinite(false);
			this.orderList = []
		},
	}
}
</script>
