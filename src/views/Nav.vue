<template>
	<div class="app">
		<h3><router-link to="/sell">出售</router-link></h3>
		<h3><router-link to="/buy">购买</router-link></h3>
		<h3><router-link to="/home?user_id=62379050&token=j8X3Qqqr41AV%2FplVrbNRLfrH9k1R2ZMY%20bVsZnJOJ6UtVndDdmHgKEpFt48DZhu7YK25T1hBMBMJCqVR97t5Rb9W150cbcqva1GPmy2osuNEEuQtRvTMBXBTvy7%20zlTe">首页</router-link></h3>
		<h3><router-link to="/changePass">修改交易密码</router-link></h3>
		<h3><router-link to="/order">订单记录</router-link></h3>
		<h3><router-link to="/set">设置</router-link></h3>
		<h3><router-link to="/order_info">确认单</router-link></h3>
		<h3><router-link to="/login">登录</router-link></h3>
		<h3><router-link to="/demo">演示</router-link></h3>
	</div>
</template>

<script>

export default {
	name: 'Home',
	data(){
		return {
            title: '这是vue项目'
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
