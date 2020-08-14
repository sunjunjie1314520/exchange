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
							<img src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=251289958,1860898046&fm=26&gp=0.jpg" alt="">
						</div>
						<div class="func">
							<div class="ico"><router-link to="/buy">买</router-link></div>
							<div class="ico"><router-link to="/sell">卖</router-link></div>
						</div>
					</div>

					<!-- 图表 -->
					<div id="myChart" :style="{width: countWidth, height: '200px'}"></div>

					<div class="banner" v-if="false">
						<img src="../../src/static/img/0fc7e1_690x335.jpg" alt="">
					</div>
					<div class="data">
						<div class="today">
							<div class="item">
								<div class="tit">
									均价(昨/今)
								</div>
								<div class="number">
									￥{{pageData.p1 | moneyFixed(2)}}/{{pageData.p2 | moneyFixed(2)}}
								</div>
							</div>
							<div class="item">
								<div class="tit">
									最高(昨/今)
								</div>
								<div class="number">
									￥{{pageData.p3 | moneyFixed(2)}}/{{pageData.p4 | moneyFixed(2)}}
								</div>
							</div>
							<div class="item">
								<div class="tit">
									当前底价
								</div>
								<div class="number">
									￥{{pageData.p5 | moneyFixed(2)}}
								</div>
							</div>
						</div>
						<div class="deal">
							<div class="item">
								<div class="tit">
									买量(音豆)
								</div>
								<div class="number">
									{{pageData.p6}}
								</div>
							</div>
							<div class="item">
								<div class="tit">
								成交(音豆)(昨/今)
								</div>
								<div class="number">
									{{pageData.p7}}/{{pageData.p8}}
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
						<div class="tabs">
							<div class="item" @click="filter1 == 1 ? filter1=0 : filter1=1">
								<div class="txt">时间</div>
								<div class="sta">
									<div :class="['tops', {active: filter1==0}]"></div>
									<div :class="['bots', {active: filter1==1}]"></div>
								</div>
							</div>
							<div class="item" @click="filter1 == 1 ? filter1=0 : filter1=1">
								<div class="txt">单价</div>
								<div class="sta">
									<div :class="['tops', {active: filter2==0}]"></div>
									<div :class="['bots', {active: filter2==1}]"></div>
								</div>
							</div>
							<div class="item" @click="filter2 == 1 ? filter2=0 : filter2=1">
								<div class="txt">数量</div>
								<div class="sta">
									<div :class="['tops', {active: filter3==0}]"></div>
									<div :class="['bots', {active: filter3==1}]"></div>
								</div>
							</div>
						</div>
						<div class="list">
							<div class="item" v-for="item in list" :key="item.id">
								<div class="user">
									<div class="text">
										<div class="imgs">
											<img src="../../src/static/img/b06202_64x64.png" alt="">
										</div>
										<div class="label">
											<div class="txt">
												{{item.username | mobile}}
											</div>
											<div class="pays">
												<img src="../../src/static/img/469592_34x34.png" alt="">
											</div>
										</div>
									</div>
									<div class="price">
										<div class="tit">
											单价
										</div>
										<div class="num">
											￥{{item.money | moneyFixed(2)}}
										</div>
									</div>
								</div>
								<div class="inform">
									<div class="text">
										<div class="p">
											数量 {{item.dou}} 音豆
										</div>
										<div class="p">
											最近7日成交{{item.bi}}笔
										</div>
									</div>
									<div class="link">
										<button @click="sellHandle(item)">出售</button>
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
					150****1584
				</div>
				<div class="assets">
					<div class="item">
						<div class="tits">
							账户资产(音豆)
						</div>
						<div class="num">
							0.00
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
							0.00
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
				{
					id: 1,
					username: '15971345754',
					type: 1,
					money: 5,
					dou:500,
					bi: 30
				},
				{
					id: 2,
					username: '15971345754',
					type: 1,
					money: 5,
					dou: 400,
					bi: 10
				}
			]
		}
	},
	created(){
		console.log(this.$route.query);
		this.$store.commit('User/SET_TOKEN', this.$route.query);
		this.userinfo();
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
		this.countWidth = `${screen.width}px`;
		setTimeout(() => {
			this.drawLine();
		}, 10);
	},
	methods: {
		// 出售
		sellHandle(id){
			this.$store.commit('User/SET_CURRENT_SELL', id)
			this.$router.push('/sell');
		},
		search(){
			this.$router.push({path: '/order', query:{phone: this.phone}})
		},
		drawLine(){
			// 基于准备好的dom，初始化echarts实例
			let myChart = this.$echarts.init(document.getElementById('myChart'))
			// 绘制图表
			myChart.setOption({
				color: ['#45cfae'],
				grid: {
					top: 20,
					bottom: 40,
					left: 20,
					right: 0
				},
				tooltip: {},
				xAxis: {
					data: ['8/8', '8/9', '8/10', '8/11', '8/12', '8/13'],
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
					data: [1, 8, 18, 30, 42, 60]
				}],
			});
		},
		// 获取用户信息
		userinfo(){
			this.$store.dispatch('User/userinfo', this.$user)
			.then(res=>{
				this.$toast('正在请求数据中~~~');
			})
		},
	}
}
</script>
