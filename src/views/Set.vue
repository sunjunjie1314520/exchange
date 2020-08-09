<template>
	<div class="app">
		<div class="set-page">
			<ul>
				<li>
					<router-link to="/changePass">修改交易密码</router-link>
				</li>
				<li>
					<router-link to="/bind">绑定帐户信息</router-link>
				</li>
				<li>
					<router-link to="/rule">交易规则</router-link>
				</li>
			</ul>

			<div class="out-login">
				<button>退出登录</button>
			</div>
		</div>
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
