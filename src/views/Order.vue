<template>
	<div class="app bg-two">
		<div class="order-page">
			<div class="tabs">
				<ul>
					<li @click="tabsToggle(0)" :class="{active: tabs==0}">购买音豆</li>
					<li @click="tabsToggle(1)" :class="{active: tabs==1}">出售音豆</li>
					<!-- <li @click="tabsToggle(2)" :class="{active: tabs==2}">发布记录</li> -->
				</ul>
			</div>
			<div class="list-wrppaer">
				<scroller :on-refresh="refresh" :on-infinite="infinite" ref="myscroller">
					<div class="list" v-if="list_n && tabs==0">
						<ul>
							<li v-for="item in list_n" :key="item.id">
								<div class="fl">
									<h3>数量：{{item.number}}</h3>
									<p>时间：{{item.create_time}}</p>
									<p>状态：{{mai_status1(item.status)}}</p>
								</div>
								<div class="fr">
									<span @click="cancelOrder(item)" v-if="item.status == 0">取消订单</span>
									<span v-if="item.status != 0 && item.status != 5" @click="gotoLink1(item)">查看详情</span>
								</div>
							</li>
						</ul>
					</div>
					<div class="list" v-if="list1_n && tabs==1">
						<ul>
							<li v-for="item in list1_n" :key="item.id" @click="gotoLink(item)">
								<div class="fl">
									<h3>数量：{{item.number}}</h3>
									<p>时间：{{item.create_time}}</p>
									<p>状态：{{mai_status(item.status)}}</p>
								</div>
								<div class="fr">
									<span>查看详情</span>
								</div>
							</li>
						</ul>
					</div>
					<div class="clear"></div>
				</scroller>
			</div>
		</div>
		<div class="filter" v-if="alertConfig.Order">
			<div class="layout" v-if="tabs==0">
				<ul>
					<li @click="toggle_filter1('')" :class="{active: filter1===''}">全部</li>
					<li @click="toggle_filter1(0)" :class="{active: filter1===0}">发布中</li>
					<li @click="toggle_filter1(1)" :class="{active: filter1==1}">交易中</li>
					<li @click="toggle_filter1(3)" :class="{active: filter1==3}">已完成</li>
					<li @click="toggle_filter1(4)" :class="{active: filter1==4}">订单取消</li>
					<li @click="toggle_filter1(5)" :class="{active: filter1==5}">发布取消</li>
				</ul>
				<div class="confirm">
					<button @click="cancel(false)">取消</button>
					<button @click="confirm1">确实</button>
				</div>
			</div>
			<div class="layout"  v-if="tabs==1">
				<ul>
					<li @click="toggle_filter2('')" :class="{active: filter2===''}">全部</li>
					<li @click="toggle_filter2(1)" :class="{active: filter2===1}">交易中</li>
					<li @click="toggle_filter2(2)" :class="{active: filter2==2}">待确认</li>
					<li @click="toggle_filter2(3)" :class="{active: filter2==3}">已完成</li>
					<li @click="toggle_filter2(4)" :class="{active: filter2==4}">已取消</li>
					<!-- <li @click="toggle_filter2(4)" :class="{active: filter2==4}">申诉中</li> -->
				</ul>
				<div class="confirm">
					<button @click="cancel(false)">取消</button>
					<button @click="confirm2">确实</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>

export default {
	name: 'Order',
	data(){
		return {
			tabs: 0,
			
			filter1: '',
			filter2: '',

			state1: '',
			state2: '',

			list: [],
			list1: [],

			params: {},

			status:'all',

			page: 0,

			buy_all_page: 1,
			sell_all_page: 1,
		}
	},
	created(){
		this.params = this.$route.query
		console.log(this.params);

		if(this.params.tabs){
			this.tabs = this.params.tabs * 1;
		}
	},
	computed: {
		list_n(){
			if(this.list){
				if(this.state1===''){
					return this.list
				}else{
					return this.list.filter(item=>{
						return item.status == this.state1
					})
				}
			}else{
				return false;
			}
		},
		list1_n(){
			if(this.list1){
				if(this.state2===''){
					return this.list1
				}else{
					return this.list1.filter(item=>{
						return item.status == this.state2
					})
				}
			}else{
				return false;
			}
		}
	},
	methods: {
		tabsToggle(id){
			this.tabs = id;
			this.goodsAll();
		},
		cancel(is){
			this.$store.commit('Betting/SET_ALERT_CONFIG', {Order: is});
		},
		
		toggle_filter1(id){
			this.filter1 = id
		},
		toggle_filter2(id){
			this.filter2 = id
		},
		confirm1(){
			this.cancel(false);
			this.state1 = this.filter1;
		},
		confirm2(){
			this.cancel(false);
			this.state2 = this.filter2;
		},
		// 购买记录
		getNetWork1(){
			var data = {
				...this.$user,
				...this.params,
				type: 0,
				page: 1,
				to_from_id: this.$info.id,
				status: this.state1,
				// status: '',
				// order_number:'',
				// id:''
			}
			this.$api.user.order_detail(data)
			.then(res=>{
				console.log(res);
				this.list = res;
			})
		},

		// 出售记录
		getNetWork2(){
			var data = {
				...this.$user,
				page: 1,
				to_from_id: this.$info.id,
				type:1,
				status: this.state2,
				// order_number:'',
				// id:''
			}
			this.$api.user.order_detail(data)
			.then(res=>{
				console.log(res);
				this.list1 = res;
			})
		},

		getNetWork3(done){
			let data = {
				...this.$user,
				page: this.page,
			}
			this.$api.user.record(data)
			.then(res=>{
				console.log(res);
				if(res.code == 1){
					if(this.tabs==0){
						this.list.push.apply(this.list, res.data.buy)
						this.buy_all_page = res.data.buy_all_page
					}else{
						this.list1.push.apply(this.list1, res.data.sell)
						this.sell_all_page = res.data.sell_all_page
					}
					this.$refs.myscroller.finishInfinite(true)
					done();
				}
			})
		},
		// 取消订单
		cancelOrder(item){
			this.loading('正在取消');
			var data2 = {
				...this.$user,
				// trade_id: item.trade_id,
				order_number: item.order_number,
				// type: 1,
				status: 5,
			}
			this.$api.user.trade_status(data2)
			.then(res=>{
				console.log(res);
				this.$toast(res.msg);
			})
		},
		// 计算1
		resultHandle(list){
			var bi = 0;
			list.forEach(item=>{
				if(item.status == 2){
					bi += item.number
				}
			})
			return bi
		},
		// 计算2
		quantityHandle(list){
			var bi = 0;
			list.forEach(item=>{
				if(item.status == 2){
					bi += item.amount * 1
				}
			})
			return bi
		},
		// 跳转1
		gotoLink(item){
			this.$store.commit('User/SET_CURRENT_SELL1', item);
			this.$router.push({path: '/order_info'});
		},
		// 跳转2
		gotoLink1(item){
			this.$store.commit('User/SET_CURRENT_SELL1', item);
			this.$router.push({path: '/order_info1'});
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
			if(this.tabs == 0){
				console.log(this.page, this.buy_all_page);
			}else{
				console.log(this.page, this.sell_all_page);
			}
			if(this.tabs == 0){
				if(this.page>=this.buy_all_page){
					setTimeout(()=>{
						this.$refs.myscroller.finishInfinite(true);
					},1500)
				}else{
					setTimeout(()=>{
						this.page++;
						this.getNetWork3(done);
					},500);
				}
			}else{
				if(this.page>=this.sell_all_page){
					setTimeout(()=>{
						this.$refs.myscroller.finishInfinite(true);
					},1500)
				}else{
					setTimeout(()=>{
						this.page++;
						this.getNetWork3(done);
					},500);
				}
			}
		},
		goodsAll(){
			this.status = 'all'
			this.page = 0
			this.buy_all_page= 1,
			this.sell_all_page= 1,
			this.$refs.myscroller.finishInfinite(false);
			this.list = []
			this.list1 = []
		},
	},
	destroyed(){
		this.cancel(false);
	}
}
</script>
