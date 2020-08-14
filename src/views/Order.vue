<template>
	<div class="app">
		<div class="order-page">
			<div class="tabs">
				<ul>
					<li @click="tabsToggle(0)" :class="{active: tabs==0}">购买音豆</li>
					<li @click="tabsToggle(1)" :class="{active: tabs==1}">出售音豆</li>
				</ul>
			</div>
			<div class="list">
				<ul v-if="list">
					<li v-for="item in list" :key="item.id"></li>
				</ul>
				<div class="null-data1" v-else>
					<img src="../../src/static/img/ae1e94_128x128.png" alt="">
					<span>暂无记录</span>
				</div>
			</div>
		</div>
		<div class="filter" v-if="alertConfig.Order">
			<div class="layout">
				<ul>
					<li @click="toggle_filter(0)" :class="{active: filter==0}">发布中</li>
					<li @click="toggle_filter(1)" :class="{active: filter==1}">未付款</li>
					<li @click="toggle_filter(2)" :class="{active: filter==2}">已付款</li>
					<li @click="toggle_filter(3)" :class="{active: filter==3}">已完成</li>
					<li @click="toggle_filter(4)" :class="{active: filter==4}">申诉中</li>
					<li @click="toggle_filter(5)" :class="{active: filter==5}">已取消</li>
				</ul>
				<div class="confirm">
					<button @click="cancel(false)">取消</button>
					<button @click="confirm">确实</button>
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
			filter: 0,
			type: 0,
			phone: '',
			list: false,
		}
	},
	methods: {
		cancel(is){
			this.$store.commit('Betting/SET_ALERT_CONFIG', {Order: is});
		},
		confirm(){
			this.cancel(false);
			this.type = this.filter;
			this.getNetWork();
		},
		toggle_filter(id){
			this.filter = id
		},
		tabsToggle(id){
			this.tabs = id
			this.getNetWork();
		},

		getNetWork(){
			var data = {
				...this.$user,
				type: this.type,
				tabs: this.tabs,
				phone: this.phone,
			}
			this.$api.user.orderRecord(data)
			.then(res=>{
				console.log(res);
			})
		}
	}
}
</script>
