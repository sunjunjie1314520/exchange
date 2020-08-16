<template>
	<div class="app">
		<div class="bind-page">
			<ul>
				<li>
					<span>开户姓名：</span>
					<div class="fr">
						<input type="text" v-model="field1" placeholder="请输入开户姓名">
					</div>
				</li>
				<li>
					<span>开户银行：</span>
					<div class="fr">
						<input type="text" v-model="field2" placeholder="请输入开户银行">
					</div>
				</li>
				<li>
					<span>开户账号：</span>
					<div class="fr">
						<b-input type="text" v-model="field3" placeholder="请输入开户账号"></b-input>
					</div>
				</li>
				<li>
					<span>支付宝账号：</span>
					<div class="fr">
						<input type="text" v-model="field4" placeholder="请输入支付宝账号">
					</div>
				</li>
				<li>
					<span>支付宝收款码：</span>
					<div class="fr">
						<div class="pub-upload">
							<input @change="upload_one" type="file" accept="image/gif, image/jpeg">
							<img :src="'http://api.ohtbmgn.cn/' + img1" alt="">
						</div>
					</div>
				</li>
				<li>
					<span>微信收款码：</span>
					<div class="fr">
						<div class="pub-upload">
							<input @change="upload_two" type="file" accept="image/gif, image/jpeg">
							<img :src="'http://api.ohtbmgn.cn/' + img2" alt="">
						</div>
					</div>
				</li>
			</ul>
			<div class="pub-button">
				<button @click="submitFun">保存</button>
			</div>
		</div>
	</div>
</template>

<script>

export default {
	name: 'Home',
	data(){
		return {
			field1: '',
			field2: '',
			field3: '',
			field4: '',

			img1: '',
			img2: '',
			show: []
		}
	},
	created(){
		this.user_bank_index();
	},
	methods: {
		// 添加
		user_bank_save(obj){
			var data = {
				...obj,
				...this.$user
			}
			this.$api.user.user_bank(data)
			.then(res=>{
				console.log(res);
			})
		},
		// 显示
		user_bank_index(){
			this.$api.user.user_bank_index(this.$user)
			.then(res=>{
				console.log(res);
				this.show = res
				this.field1 = res[0].bank_name
				this.field2 = res[0].bank_type
				this.field3 = res[0].bank_number

				this.field4 = res[1].bank_number
				this.img1 = res[1].key_src
				this.img2 = res[2].key_src
			})
		},
		qiniuyun(){
			
		},
		upload_one(e){
			const _this = this
			var file = event.target.files;
			this.$api.user.qiniu(this.$user)
			.then(res=>{
				console.log(res);

				var formData = new FormData()
				formData.append('file', file[0])
				formData.append('token', res.token)
				// formData.append('key', file[0].name)
				formData.append('fname', file[0].name)
				formData.append('x:name', file[0].name)
			
				fetch('http://up-z2.qiniup.com', {
					method: 'POST',
					body: formData,
					// credentials: 'same-origin',
					"headers":new Headers({
						// 'Content-Type': 'application/octet-stream',
						'Authorization': res.token
					})
				})
				.then(res => {
					console.log(res);
					return res.json()
				})
				.then(res => {               
					console.log(res);
					_this.img1= res.hash;
				})
				.catch(error => {
					console.log(error);
				})
			})
		},
		upload_two(e){
			const _this = this
			var file = event.target.files;
			this.$api.user.qiniu(this.$user)
			.then(res=>{
				console.log(res);

				var formData = new FormData()
				formData.append('file', file[0])
				formData.append('token', res.token)
				// formData.append('key', file[0].name)
				formData.append('fname', file[0].name)
				formData.append('x:name', file[0].name)
			
				fetch('http://up-z2.qiniup.com', {
					method: 'POST',
					body: formData,
					// credentials: 'same-origin',
					"headers":new Headers({
						// 'Content-Type': 'application/octet-stream',
						'Authorization': res.token
					})
				})
				.then(res => {
					console.log(res);
					return res.json()
				})
				.then(res => {               
					console.log(res);
					_this.img2= res.hash;

				})
				.catch(error => {
					console.log(error);
				})
			})
		},
		submitFun(){
			this.user_bank_save({
				id: this.show[0].id,
				bank_name: this.field1,
				bank_number: this.field3,
				bank_type: this.field2,
				key_src:''
			});
			this.user_bank_save({
				id: this.show[1].id,
				bank_name: 'wx',
				bank_number: '',
				bank_type: '',
				key_src: this.img1
			});
			this.user_bank_save({
				id: this.show[2].id,
				bank_name: 'zfb',
				bank_number: '',
				bank_type: '',
				key_src:this.img2
			});
			this.$toast('修改成功~')
		}
	}
}
</script>
