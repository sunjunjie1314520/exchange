import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

	const routes = [
	{
		path: '/',
		name: 'Nav',
		component: () => import('@/views/Nav.vue'),
		meta: {
			title: '导航',
			back: 1,
		}
	},
	{
		path: '/home',
		name: 'Home',
		component: () => import('@/views/Home.vue'),
		meta: {
			title: '首页',
			back: 2,
			full: true,
		}
	},
	{
		path: '/sell',
		name: 'Sell',
		component: () => import('@/views/Sell.vue'),
		meta: {
			title: '出售音豆',
			back: 3,
		}
	},
	{
		path: '/buy',
		name: 'Buy',
		component: () => import('@/views/Buy.vue'),
		meta: {
			title: '购买音豆',
			back: 3,
		}
	},
	{
		path: '/changePass',
		name: 'ChangePass',
		component: () => import('@/views/ChangePass.vue'),
		meta: {
			title: '修改交易密码',
			back: 4,
		}
	},
	{
		path: '/order',
		name: 'Order',
		component: () => import('@/views/Order.vue'),
		meta: {
			title: '订单记录',
			back: 4,
			right: 1,
		}
	},
	{
		path: '/set',
		name: 'Set',
		component: () => import('@/views/Set.vue'),
		meta: {
			title: '设置',
			back: 3
		}
	},
	{
		path: '/bind',
		name: 'Bind',
		component: () => import('@/views/Bind.vue'),
		meta: {
			title: '绑定帐户信息',
			back: 4
		}
	},
	{
		path: '/rule',
		name: 'Rule',
		component: () => import('@/views/Rule.vue'),
		meta: {
			title: '交易规则',
			back: 4
		}
	}
]

const router = new VueRouter({
	mode: "hash",
	base: process.env.BASE_URL,
	routes
})

router.afterEach(to => {
	var config = {
		type: 1,
		...to.meta
	}
	router.app.$options.store.commit('Betting/SET_TITLE_CONFIG', config);
})

export default router
