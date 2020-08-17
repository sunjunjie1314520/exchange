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
                            <p>{{mai_status($chu.status)}}</p>
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
                            <p>{{$chu.ToFrom.id}}</p>
                        </div>
                    </li>
                    <li>
                        <span>卖方昵称：</span>
                        <div class="fr">
                            <p>{{$chu.ToFrom.username}}</p>
                        </div>
                    </li>
                    <li>
                        <span>卖方手机：</span>
                        <div class="fr">
                            <p>{{$chu.ToFrom.phone}}</p>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="box">
                <ul>
                    <li @click="duiinfo($chu.ToFrom.UserBank)">
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
                    <input v-if="$chu.status != 3" @change="upload_one" type="file" accept="image/gif, image/jpeg">
					<img v-if="img1" :src="'http://api.ohtbmgn.cn/' + img1" alt="">
                </div>
                <p>上传打款凭证</p>
            </div>
            <div class="pub-button" v-if="show1">
                <button @click="confirm">确定上传</button>
            </div>
            <div class="pub-button" v-if="$chu.status == 2 && img1">
                <button>等待对方确认</button>
            </div>
            <div class="pub-button" v-if="$chu.status == 3">
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
                img1: '',
                show1: false,
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
            upload_one(event){
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
                        this.show1 = true;
                    })
                    .catch(error => {
                        console.log(error);
                    })
                })
            },
            // 确认收款
            confirm(){
                var data1 = {
                    ...this.$user,
                    key_src: this.img1,
                    trade_id:this.$chu.trade_id,
                    order_number:this.$chu.order_number,
                }
                this.$api.user.upload_pic(data1)
                .then(res1=>{
                    console.log(res1);

                    var data2 = {
                        ...this.$user,
                        trade_id:this.$chu.trade_id,
                        order_number:this.$chu.order_number,
                        to_from_id: this.$chu.to_from_id,
                        trade_detail_id:this.$chu.id,
                        result_user_amount:'',
                        status: 2,
                    }
                    this.$api.user.trade_status(data2)
                    .then(res=>{
                        this.$toast(res.msg);
                        this.$store.commit('User/SET_CURRENT_STATUS', 2);
                    })
                })
            }
        }
    }
</script>

<style>

</style>