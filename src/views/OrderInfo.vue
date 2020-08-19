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
                <h2>买方信息：</h2>
                <ul class="mt">
                    <li>
                        <span>买方ID：</span>
                        <div class="fr">
                            <p>{{$chu.from_id}}</p>
                        </div>
                    </li>
                    <li>
                        <span>买方昵称：</span>
                        <div class="fr">
                            <p>{{$chu.sell_username}}</p>
                        </div>
                    </li>
                    <li>
                        <span>买方手机：</span>
                        <div class="fr">
                            <p>{{$chu.sell_phone}}</p>

                        </div>
                    </li>
                </ul>
            </div>
            <div class="clear"></div>
            <div class="pict-show" v-if="$chu.status==0 && !$chu.key_src">
                <p>等待对方上传凭证</p>
            </div>
            <div class="upload-file" v-if="$chu.status==2">
                <div class="pub-upload">
					<img :src="'http://api.ohtbmgn.cn/' + $chu.key_src" alt="">
                </div>
                <p>买家打款凭证</p>
            </div>
            <div class="pub-button">
                <button @click="$chu.status==2 ? show=true : ''">{{mai_status($chu.status)}}</button>
            </div>
        </div>

        <!-- 交易密码 -->
        <div class="alert-show" v-if="show">
            <div class="layout">
                <h2>交易密码</h2>
                <div class="box">
                    <input v-model="password" maxlength="20" type="password" placeholder="请输入交易密码">
                </div>
                <div class="btn">
                    <button @click="show=false" class="b1">取消</button>
                    <button @click="success">确定</button>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        data(){
            return {
                detail: {},
                params: {},
                show: false,
                password: ''
            }
        },
        created(){
            this.params = this.$route.query

            // this.orderRecord();
        },
        methods: {
            success(){
                if(this.$chu.status == 2){
                    this.loading();
                    var data2 = {
                        ...this.$user,
                        trade_id:this.$chu.trade_id,
                        order_number:this.$chu.order_number,
                        to_from_id: this.$chu.to_from_id,
                        trade_detail_id: this.$chu.id,
                        status: 3,
                        password: this.$md5(this.password),
                    }
                    this.$api.user.trade_status(data2)
                    .then(res=>{
                        this.$toast(res.msg);
                        this.show = false;
                        if(res.code == 1){
                            this.$store.commit('User/SET_CURRENT_STATUS', 3);
                        }else{
                            this.password = '';
                        }
                    })
                    .catch(err=>{
                        this.$toast.clear();
                    })
                }
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
            }
        }
    }
</script>

<style>

</style>