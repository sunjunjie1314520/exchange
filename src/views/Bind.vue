<template>
	<div class="app">
		<div class="bind-page">
			<ul>
				<li>
					<span>开户姓名：</span>
					<div class="fr">
						<input type="text" placeholder="请输入开户姓名">
					</div>
				</li>
				<li>
					<span>开户银行：</span>
					<div class="fr">
						<input type="text" placeholder="请输入开户姓名">
					</div>
				</li>
				<li>
					<span>开户账号：</span>
					<div class="fr">
						<input type="text" placeholder="请输入开户姓名">
					</div>
				</li>
				<li>
					<span>支付宝账号：</span>
					<div class="fr">
						<input type="text" placeholder="请输入支付宝账号">
					</div>
				</li>
				<li>
					<span>支付宝收款码：</span>
					<div class="fr">
						<div class="pub-upload">
							<input type="file">
						</div>
					</div>
				</li>
				<li>
					<span>微信收款码：</span>
					<div class="fr">
						<div class="pub-upload">
							<input type="file">
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
	}
}
</script>
