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
			<div class="list" v-if="list_n && tabs==0">
				<div class="list" v-if="list_n.length > 0">
					<ul class="ul0">
						<li v-for="item in list_n" :key="item.id">
							<div class="fl" @click="gotoLink1(item)">
								<h3>数量：{{item.number}}</h3>
								<p>时间：{{item.create_time}}</p>
								<p>状态：{{mai_status1(item.status)}}</p>
							</div>
							<div class="fr">
								<span @click="cancelOrder(item)" v-if="item.status < 2">取消订单</span>
								<span @click="gotoLink1(item)">查看详情</span>
							</div>
						</li>
					</ul>
				</div>
				<div class="null-data1" v-else>
					<img src="../../src/static/img/ae1e94_128x128.png" alt="">
					<span>暂无记录</span>
				</div>
			</div>

			<div class="list" v-if="list1_n && tabs==1">
				<ul class="ul0" v-if="list1_n.length > 0">
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
				<div class="null-data1" v-else>
					<img src="../../src/static/img/ae1e94_128x128.png" alt="">
					<span>暂无记录</span>
				</div>
			</div>
			
		</div>
		<div class="filter" v-if="alertConfig.Order">
			<div class="layout" v-if="tabs==0">
				<ul>
					<li @click="toggle_filter1('')" :class="{active: filter1===''}">全部</li>
					<li @click="toggle_filter1(0)" :class="{active: filter1===0}">进行中</li>
					<li @click="toggle_filter1(2)" :class="{active: filter1==2}">交易中</li>
					<li @click="toggle_filter1(3)" :class="{active: filter1==3}">已完成</li>
					<li @click="toggle_filter1(4)" :class="{active: filter1==4}">已取消</li>
				</ul>
				<div class="confirm">
					<button @click="cancel(false)">取消</button>
					<button @click="confirm1">确实</button>
				</div>
			</div>
			<div class="layout"  v-if="tabs==1">
				<ul>
					<li @click="toggle_filter2('')" :class="{active: filter2===''}">全部</li>
					<li @click="toggle_filter2(0)" :class="{active: filter2===0}">进行中</li>
					<li @click="toggle_filter2(2)" :class="{active: filter2==2}">未付款</li>
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

			list: false,
			list1: false,

			params: {},
		}
	},
	created(){
		this.params = this.$route.query
		console.log(this.params);

		if(this.params.tabs){
			this.tabs = this.params.tabs * 1;
		}
		this.tabsToggle(this.tabs);
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
		cancelOrder(item){
			var data2 = {
				...this.$user,
				trade_id:item.trade_id,
				order_number:item.order_number,
				status: 4,
			}
			this.$api.user.trade_status(data2)
			.then(res=>{
				console.log(res);
			})
		},
		tabsToggle(id){
			this.tabs = id
			switch (id) {
				case 0:
					this.getNetWork1();
					break;
				case 1:
					this.order_detail();
					break;
				default:
					break;
			}
		},
		cancel(is){
			this.$store.commit('Betting/SET_ALERT_CONFIG', {Order: is});
		},
		confirm1(){
			this.cancel(false);
			this.state1 = this.filter1;
		},
		confirm2(){
			this.cancel(false);
			this.state2 = this.filter2;
		},
		toggle_filter1(id){
			this.filter1 = id
		},
		toggle_filter2(id){
			this.filter2 = id
		},
		// 购买
		getNetWork1(){
			var data = {
				...this.$user,
				page: 1,
				to_from_id: this.$info.id,
				type: 0,
				...this.params
				// status: '',
				// order_number:'',
				// id:''
			}
			this.$api.user.order_detail(data)
			.then(res=>{
				console.log(res);
				this.list = res
			})
		},
		// getNetWork1(){
		// 	var data = {
		// 		...this.$user,
		// 		...this.params,
		// 		status: this.state1,
		// 	}
		// 	this.$api.user.orderRecord(data)
		// 	.then(res=>{
		// 		console.log(res);
		// 		this.list = res.data ? res.data : []
		// 	})
		// },
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
				if(item.status == 2){
					bi += item.amount * 1
				}
			})
			return bi
		},
		gotoLink(item){
			this.$store.commit('User/SET_CURRENT_SELL1', item);
			this.$router.push({path: '/order_info'});
		},
		gotoLink1(item){
			this.$store.commit('User/SET_CURRENT_SELL1', item);
			this.$router.push({path: '/order_info1'});
		},
		// 出售
		order_detail(){
			var data = {
				...this.$user,
				page: 1,
				to_from_id: this.$info.id,
				type:1,
				// status: '',
				// order_number:'',
				// id:''
			}
			this.$api.user.order_detail(data)
			.then(res=>{
				console.log(res);
				this.list1 = res
			})
		}
	},
	destroyed(){
		this.$store.commit('Betting/SET_ALERT_CONFIG', {Order: false});
	}
}
</script>
