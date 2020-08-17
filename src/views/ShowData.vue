<template>
	<div class="app">
		<div class="bind-page">
			<ul v-for="item in $coll" :key="item.id">
				<div class="box" v-if="item.bank_name!='zfb' && item.bank_name!='wx'">
					<li>
						<span>开户姓名：</span>
						<div class="fr">
							<input type="text" v-model="item.bank_name" placeholder="开户姓名">
						</div>
					</li>
					<li>
						<span>开户银行：</span>
						<div class="fr">
							<input type="text" v-model="item.bank_type" placeholder="开户银行">
						</div>
					</li>
					<li>
						<span>开户账号：</span>
						<div class="fr">
							<b-input type="text" v-model="item.bank_number" placeholder="开户账号"></b-input>
						</div>
					</li>
				</div>
				<li v-if="item.bank_name=='zfb'">
					<span>支付宝账号：</span>
					<div class="fr">
						<input type="text" v-model="item.bank_number" placeholder="支付宝账号">
					</div>
				</li>
				<li v-if="item.bank_name=='zfb'">
					<span>支付宝收款码：</span>
					<div class="fr">
						<div class="pub-upload">
							<img :src="'http://api.ohtbmgn.cn/' + item.key_src" alt="">
						</div>
					</div>
				</li>
				<li v-if="item.bank_name=='wx'">
					<span>微信收款码：</span>
					<div class="fr">
						<div class="pub-upload">
							<img :src="'http://api.ohtbmgn.cn/' + item.key_src" alt="">
						</div>
					</div>
				</li>
			</ul>
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
	created(){
		
	},
	methods: {
		
	}
}
</script>
