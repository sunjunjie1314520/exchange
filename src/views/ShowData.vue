<template>
	<div class="app">
		<div class="bind-page">
			<ul>
				<li>
					<span>开户姓名：</span>
					<div class="fr">
						<input type="text" v-model="$coll[0].bank_name" placeholder="开户姓名">
					</div>
				</li>
				<li>
					<span>开户银行：</span>
					<div class="fr">
						<input type="text" v-model="$coll[0].bank_type" placeholder="开户银行">
					</div>
				</li>
				<li>
					<span>开户账号：</span>
					<div class="fr">
						<b-input type="text" v-model="$coll[0].bank_number" placeholder="开户账号"></b-input>
					</div>
				</li>
				<li>
					<span>支付宝账号：</span>
					<div class="fr">
						<input type="text" v-model="$coll[2].bank_number" placeholder="支付宝账号">
					</div>
				</li>
				<li>
					<span>支付宝收款码：</span>
					<div class="fr">
						<div class="pub-upload">
							<img :src="'http://api.ohtbmgn.cn/' + $coll[2].key_src" alt="">
						</div>
					</div>
				</li>
				<li>
					<span>微信收款码：</span>
					<div class="fr">
						<div class="pub-upload">
							<img :src="'http://api.ohtbmgn.cn/' + $coll[1].key_src" alt="">
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
