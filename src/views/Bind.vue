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
						<input type="text" v-model="field3" placeholder="请输入开户账号">
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
							<img :src="img1" alt="">
						</div>
					</div>
				</li>
				<li>
					<span>微信收款码：</span>
					<div class="fr">
						<div class="pub-upload">
							<input @change="upload_two" type="file" accept="image/gif, image/jpeg">
							<img :src="img2" alt="">
						</div>
					</div>
				</li>
			</ul>
			<div class="pub-button">
				<button @click="submitFun">确定</button>
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
		}
	},
	methods: {
		upload_one(e){
			console.log(e);
			const _this = this;
			var file = event.target.files;
			var reader = new FileReader();//读取文件
			reader.readAsDataURL(file[0]);
			reader.onload = function() {
				_this.img1= reader.result;
			};
		},
		upload_two(e){
			console.log(e);
			const _this = this;
			var file = event.target.files;
			var reader = new FileReader();//读取文件
			reader.readAsDataURL(file[0]);
			reader.onload = function() {
				_this.img2= reader.result;
			};
		},
		submitFun(){
			var data = {
				a: this.field1,
				b: this.field2,
				c: this.field3,
				d: this.field4,
				e: this.img1,
				f: this.img2,
			}
			this.$api.user.bind_save(data)
			.then(res=>{
				console.log(res);
			})
		}
	}
}
</script>
