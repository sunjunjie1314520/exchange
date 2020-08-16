<template>
	<div class="app">
		<div class="home-page">
			<div class="mui-scroll">
				<div class="wrapper">
					<div class="head">
						<div class="text">
							首页
						</div>
						<div class="home-user" @click="show=true">
							<img v-if="$info && $info.avatar != '0'" :src="'http://api.ohtbmgn.cn/' + $info.avatar" alt="">
							<img v-else src="../../src/static/img/bab103_77x77.jpg" alt="">
						</div>
						<div class="func">
							<div class="ico"><router-link to="/buy">买</router-link></div>
						</div>
					</div>

					<!-- 图表 -->
					<div id="myChart" :style="{width: countWidth, height: '200px'}"></div>

					<div class="banner" v-if="false">
						<img src="../../src/static/img/0fc7e1_690x335.jpg" alt="">
					</div>
					<div class="data" v-if="$trade">
						<div class="today">
							<div class="item">
								<div class="tit">
									均价(昨/今)
								</div>
								<div class="number">
									￥{{ $trade.data[1].amount / $trade.data[1].volume | moneyFixed(2)}}/{{ $trade.data[0].amount / $trade.data[0].volume | moneyFixed(2)}}
								</div>
							</div>
							<div class="item">
								<div class="tit">
									最高(昨/今)
								</div>
								<div class="number">
									￥{{$trade.data[1].floor | moneyFixed(2)}}/{{$trade.data[0].floor | moneyFixed(2)}}
								</div>
							</div>
							<div class="item">
								<div class="tit">
									当前底价
								</div>
								<div class="number">
									￥{{$trade.data[0].max | moneyFixed(2)}}
								</div>
							</div>
						</div>
						<div class="deal">
							<div class="item">
								<div class="tit">
									买量(音豆)
								</div>
								<div class="number">
									{{$trade.data[0].buy}}
								</div>
							</div>
							<div class="item">
								<div class="tit">
								成交(音豆)(昨/今)
								</div>
								<div class="number">
									{{$trade.data[1].volume}}/{{$trade.data[0].volume}}
								</div>
							</div>
						</div>
					</div>
					<div class="search">
						<div class="ico">
							<img src="../../src/static/img/1d1714_30x30.jpg" alt="">
						</div>
						<div class="text">
							<input type="text" v-model="phone" name="" id="" placeholder="请输入您要搜索的手机号">
							<button @click="search">搜索</button>
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
							<div class="item" v-for="item in list" :key="item.id">
								<div class="user">
									<div class="text">
										<div class="imgs">
											<img src="../../src/static/img/b06202_64x64.png" alt="">
										</div>
										<div class="label">
											<div class="txt">
												{{item.phone | mobile}}
											</div>
											<div class="pays">
												<img v-for="item1 in item.UserBank" :key="item1.id" :src="getImgUrl(item1)" alt="">
											</div>
										</div>
									</div>
									<div class="price">
										<div class="tit">
											单价
										</div>
										<div class="num">
											￥{{ $trade.data[0].floor * (item.float_range + 1) | moneyFixed(2)}}
										</div>
									</div>
								</div>
								<div class="inform">
									<div class="text">
										<div class="p">
											<!-- 数量 {{item.TradeDetail.length > 0 ? quantityHandle(item.TradeDetail): 0}} 音豆 -->
											数量 {{item.number}} 音豆
										</div>
										<div class="p">
											最近7日成交{{item.TradeDetail.length > 0 ? resultHandle(item.TradeDetail): 0}}笔
										</div>
									</div>
									<div class="link">
										<button @click="sellHandle(item, $trade.data[0].floor * (item.float_range + 1))">出售</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
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
			pageData:{
				p1: 5,
				p2: 6,
				p3: 5.5,
				p4: 6,
				p5: 6,
				p6: 545645646,
				p7: 15456,
				p8: 9554848
			},
			list: [
				// {
				// 	id: 1,
				// 	username: '15971345754',
				// 	type: 1,
				// 	money: 5,
				// 	dou:500,
				// 	bi: 30
				// },
				// {
				// 	id: 2,
				// 	username: '15971345754',
				// 	type: 1,
				// 	money: 5,
				// 	dou: 400,
				// 	bi: 10
				// }
			]
		}
	},
	created(){
		// console.log(this.$route.query);
		// this.$store.commit('User/SET_TOKEN', this.$route.query);
		this.userinfo();
		this.orderRecord();
	},
	mounted(){
		this.mui(".home-page").scroll({
			scrollY: true, //是否竖向滚动
			scrollX: false, //是否横向滚动
			startX: 0, //初始化时滚动至x
			startY: 0, //初始化时滚动至y
			indicators: true, //是否显示滚动条
			deceleration: 0.0006, //阻尼系数,系数越小滑动越灵敏
			bounce: true //是否启用回弹
		})
		var screen = this.$assist.getScreenInfo();
		this.countWidth = `${screen.width - 20}px`;
		// setTimeout(() => {
		// 	this.drawLine();
		// }, 10);
	},
	watch:{
		data1(ee){
			console.log(ee);
			this.drawLine();
		}
	},
	computed: {
		min(){
			return this.$trade.sys_amount * 1 - this.$trade.sys_amount * 1 / 100 * 5
		},
		max(){
			return this.$trade.sys_amount * 1 + this.$trade.sys_amount * 1 / 100 * 5
		},
		data1(){
			// var arr = [1, 8, 18, 30, 42, 60]
			var arr = []
			if(this.$trade){
				this.$trade.data.forEach(item=>{
					arr.push(item.amount)
				})
			}
			return arr
		},
		week(){
			// var arr = [1, 8, 18, 30, 42, 60]
			var arr = []
			if(this.$trade){
				this.$trade.data.forEach(item=>{
					var a = item.create_time.split(' ')
					var str = a[0].split('-').splice(1,2).join('/')
					arr.push(str)
				})
			}
			return arr
		}
	},
	methods: {
		getImgUrl(item){
			var str = ''
			switch (item.id) {
				case 1:
					str = '68f55d_64x64.png'
					break;
				case 2:
					str = 'dd2105_96x96.png'
					break;
				case 3:
					str = '469592_34x34.png'
					break;
				default:
					break;
			}
			return require(`../../src/static/img/${str}`)
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
					bi += item.amount * 1
				// }
			})
			return bi
		},
		// 列表
		orderRecord(){
			var data = {
				status: 0,
				token: this.$user.token
			}
			this.$api.user.orderRecord(data)
			.then(res=>{
				console.log(res);
				this.list = res.data
			})
		},
		// 出售
		sellHandle(id, item){
			this.$store.commit('User/SET_CURRENT_SELL', {...id, odds: item.toFixed(2)})
			this.$router.push('/sell');
		},
		// 搜索
		search(){
			this.$router.push({path: '/order', query:{phone: this.phone}})
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
					bottom: 40,
					left: 20,
					right: 10
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
			this.$store.dispatch('User/trade_index', this.$user);
		},
	}
}
</script>
