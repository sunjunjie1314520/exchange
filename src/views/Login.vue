<template>
    <div class="app">
        <div class="login">
            <div class="logo">
                <img src="../static/img/e97dba_1037x9031.png" alt="">
                <p>好逗短视频</p>
            </div>
            <h2>登录好逗OTC</h2>
            <ul>
                <li>
                    <input type="text" v-model="phone" name="" placeholder="请输入账号" id="">
                </li>
                <li>
                    <input type="password" v-model="password" name="" placeholder="请输入密码" id="">
                </li>
            </ul>
            <div class="btn">
                <button @click="loginSubmit">登录</button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                phone: '18871355300',
                password: '111111',
                // phone: '15327520204',
                // password: 'Hao9562100'
                // phone: '',
                // password: '',
            }
        },
        created(){
            var _this = this;
            document.onkeydown = function(e) {
                let key = window.event.keyCode;
                if (key == 13) {
                    _this.loginSubmit();
                }
            };
        },
        methods: {
            loginSubmit(){
                if(this.phone=='' || this.password == ''){
                    return false;
                }
                this.$toast.loading({
                    duration: 0, // 持续展示 toast
                    forbidClick: true,
                    message: '加载中',
                });
                var data = {
                    phone: this.phone,
                    password: this.$md5(this.password)
                }
                this.$api.user.sign(data)
                .then(res=>{
                    this.$toast(res.msg)
                    if(res.code){
                        this.$store.commit('User/SET_TOKEN', res.data);
                        setTimeout(() => {
                            this.$router.replace('/home')
                        }, 2000);
                    }
                })
                .catch(err=>{
                    this.$toast.clear()
                })
            }
        }
    }
</script>

<style>

</style>