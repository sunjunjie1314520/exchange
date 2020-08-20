<template>
	<div class="app">
		<div class="bind-page" v-if="$coll.length > 0">
			<ul v-for="item in $coll" :key="item.id">
				<li>
					<span>开户姓名：</span>
					<div class="fr">
						<input type="text" v-model="item.bank_name" placeholder="开户姓名">
					</div>
				</li>
				<div class="box">
					<li>
						<span>开户银行：</span>
						<div class="fr">
							<input type="text" readonly v-model="item.bank_type" placeholder="开户银行">
						</div>
					</li>
					<li>
						<span>开户账号：</span>
						<div class="fr">
							<b-input type="text" readonly v-model="item.bank_number" placeholder="开户账号"></b-input>
						</div>
					</li>
				</div>
				<li>
					<span>支付宝账号：</span>
					<div class="fr">
						<input type="text" readonly v-model="item.zfb_name" placeholder="支付宝账号">
					</div>
				</li>
				<li>
					<span>支付宝收款码：</span>
					<div class="fr">
						<div class="pub-upload noback">
							<img :src="'http://api.ohtbmgn.cn/' + item.zfb_number" alt="">
						</div>
					</div>
				</li>
				<li>
					<span>微信收款码：</span>
					<div class="fr">
						<div class="pub-upload noback">
							<img :src="'http://api.ohtbmgn.cn/' + item.wx_number" alt="">
						</div>
					</div>
				</li>
			</ul>
		</div>
		<div v-else class="bind-null-data">对方没有绑定任何收款信息</div>
	</div>
</template>

<script>

export default {
	name: 'Home',
	data(){
		return {
			
		}
	},
	created(){
		
	},
	methods: {
		
	}
}
</script>
