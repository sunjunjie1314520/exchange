<template>
	<div class="app">
		<div class="set-page">
			<ul>
				<li>
					<router-link to="/bind">绑定帐户信息</router-link>
				</li>
				<li>
					<router-link to="/rule">交易规则</router-link>
				</li>
				<li>
					<router-link to="/changePass">联系我们</router-link>
				</li>
			</ul>

			<div class="out-login">
				<button @click="quit">退出登录</button>
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
	},
	methods: {
		quit(){
			this.$store.commit('User/SET_TOKEN', false);
			this.$assist.removeLocalStorage('dd_user');
			this.$router.replace({name: 'Login'});
		}
	}
}
</script>
