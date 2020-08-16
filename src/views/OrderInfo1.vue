<template>
    <div class="app">
        <div class="order-info">
            <div class="box">
                <ul>
                    <li>
                        <span>订单时间：</span>
                        <div class="fr">
                            <p>{{$chu.create_time}}</p>
                        </div>
                    </li>
                    <li>
                        <span>订单编号：</span>
                        <div class="fr">
                            <p>{{$chu.order_number}}</p>
                        </div>
                    </li>
                    <li>
                        <span>交易数量：</span>
                        <div class="fr">
                            <p>{{$chu.number}}</p>
                        </div>
                    </li>
                    <li>
                        <span>交易金额：</span>
                        <div class="fr">
                            <p>{{$chu.amount}}</p>
                        </div>
                    </li>
                    <li>
                        <span>订单状态：</span>
                        <div class="fr">
                            <p>{{$chu.status == 0 ? '未付款' : '交易中'}}</p>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="box">
                <h2>卖方信息：</h2>
                <ul class="mt">
                    <li>
                        <span>卖方ID：</span>
                        <div class="fr">
                            <p>{{$chu.from_id}}</p>
                        </div>
                    </li>
                    <li>
                        <span>卖方昵称：</span>
                        <div class="fr">
                            <p>{{$chu.From.username}}</p>
                        </div>
                    </li>
                    <li>
                        <span>卖方手机：</span>
                        <div class="fr">
                            <p>{{$chu.From.phone}}</p>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="box">
                <ul>
                    <li @click="duiinfo($chu.From.UserBank)">
                        <span>对方收款信息：</span>
                        <div class="fr">
                            <span class="ico-more"></span>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="clear"></div>
            <div class="upload-file">
                <div class="pub-upload">
                    <input @change="upload_one" type="file" accept="image/gif, image/jpeg">
					<img :src="'http://api.ohtbmgn.cn/' + img1" alt="">
                </div>
                <p>上传打款凭证</p>
            </div>
            <div class="pub-button" v-if="img1">
                <button>{{mai_status($chu.status)}}</button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                detail: {

                },
                params: {},
                img1: ''
            }
        },
        created(){
            this.params = this.$route.query
            this.img1 = this.$chu.key_src
            // this.orderRecord();
        },
        methods: {
            duiinfo(item){
                this.$store.commit('User/SET_CURRENT_SELL2', item)
                this.$router.push({path:'/show_data',})
            },
            orderRecord(){
                var data = {
                    ...this.$user,
                    user_id: 1
                    // page:1,
                }
                this.$api.user.orderRecord(data)
                .then(res=>{
                    console.log(res);
                    this.detail = res.data[0]
                })
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
                        var data1 = {
                            ...this.$user,
                            key_src: res.hash,
                            trade_id:this.$chu.trade_id,
                            order_number:this.$chu.order_number,
                        }
                        _this.$api.user.upload_pic(data1)
                        .then(res1=>{
                            console.log(res1);

                            var data2 = {
                                ...this.$user,
                                trade_id:this.$chu.trade_id,
                                order_number:this.$chu.order_number,
                                status: 2,
                            }
                            this.$api.user.trade_status(data2)
                            .then(res=>{
                                console.log(res);
                            })
                        })
                    })
                    .catch(error => {
                        console.log(error);
                    })
                })
            },
        }
    }
</script>

<style>

</style>