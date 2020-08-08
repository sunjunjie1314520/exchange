<template>
	<div class="app">
		<h3><router-link to="/sell">出售</router-link></h3>
		<h3><router-link to="/buy">购买</router-link></h3>
		<h3><router-link to="/home">首页</router-link></h3>
		<h3><router-link to="/changePass">修改交易密码</router-link></h3>
		<h3><router-link to="/order">订单记录</router-link></h3>
		<h3><router-link to="/set">设置</router-link></h3>
	</div>
</template>

<script>

export default {
	name: 'Home',
	data(){
		return {

		}
	}
}
</script>

<style scoped lang="stylus">
	h3
		text-align center
		line-height .9rem
		background rgba(#000, .1)
		margin-top 10px
		a
			display block
</style>
