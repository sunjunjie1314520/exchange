<template>
	<div class="app">
		<div class="bind-page">
			<ul>
				<li>
					<span>开户姓名：</span>
					<div class="fr">
						<input type="text" v-model="formData.bank_name" placeholder="请输入开户姓名">
					</div>
				</li>
				<li>
					<span>开户银行：</span>
					<div class="fr">
						<input type="text" v-model="formData.bank_type" placeholder="请输入开户银行">
					</div>
				</li>
				<li>
					<span>开户账号：</span>
					<div class="fr">
						<b-input type="text" v-model="formData.bank_number" placeholder="请输入开户账号"></b-input>
					</div>
				</li>
				<li>
					<span>支付宝账号：</span>
					<div class="fr">
						<input type="text" v-model="formData.zfb_name" placeholder="请输入支付宝账号">
					</div>
				</li>
				<li>
					<span>支付宝收款码：</span>
					<div class="fr">
						<div class="pub-upload">
							<input @change="upload_one('zfb_number')" type="file" accept="image/gif, image/jpeg">
							<img v-if="formData.zfb_number" :src="'http://api.ohtbmgn.cn/' + formData.zfb_number" alt="">
						</div>
					</div>
				</li>
				<li>
					<span>微信收款码：</span>
					<div class="fr">
						<div class="pub-upload">
							<input @change="upload_one('wx_number')" type="file" accept="image/gif, image/jpeg">
							<img v-if="formData.wx_number" :src="'http://api.ohtbmgn.cn/' + formData.wx_number" alt="">
						</div>
					</div>
				</li>
			</ul>
			<div class="pub-button">
				<button @click="submitFun">保存</button>
				<!-- <div class="item"><button @click="submitFun">添加</button></div> -->
				<!-- <div class="item"></div> -->
			</div>
		</div>
	</div>
</template>

<script>

export default {
	name: 'Bind',
	data(){
		return {
			formData : {
				bank_name: '',
				bank_type:'',
				bank_number:'',

				zfb_name:'',
				zfb_number:'',

				wx_name:'',
				wx_number:'',
			},
			is_id: '',
		}
	},
	created(){
		this.getNetWork();
	},
	methods: {
		getNetWork(){
			var data = {
				...this.$user,
				page: 1,
			}
			this.$api.user.user_bank_index(data)
			.then(res=>{

				this.is_id = res.list.id
				this.formData.bank_name = res.list.bank_name
				this.formData.bank_type = res.list.bank_type
				this.formData.bank_number = res.list.bank_number

				this.formData.zfb_name = res.list.zfb_name
				this.formData.zfb_number = res.list.zfb_number
				this.formData.wx_name = res.list.wx_name
				this.formData.wx_number = res.list.wx_number
			})
		},
		submitFun(){
			this.loading('正在保存');
			let data = {
				...this.$user,
				...this.formData,
			}
			if(this.is_id){
				data.id = this.is_id
			}
			this.$api.user.user_bank_save(data)
			.then(res=>{
				console.log(res);
				this.$toast('保存成功');
			})
		},
		upload_one(field){
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
					return res.json()
				})
				.then(res => {               
					console.log(res);
					_this.formData[field]= res.hash;
				})
				.catch(error => {
					console.log(error);
				})
			})
		},
	}
}
</script>
