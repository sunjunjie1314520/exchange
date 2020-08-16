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
                            <p>{{$chu.status == 0 ? '买家未付款' : '交易中'}}</p>
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
                            <p>{{$chu.From.username}}</p>
                        </div>
                    </li>
                    <li>
                        <span>买方手机：</span>
                        <div class="fr">
                            <p>{{$chu.From.phone}}</p>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="clear"></div>
            <div class="pict-show">
                <p v-if="!$chu.key_src">等待对方上传凭证</p>
                <img :src="'xxx' + $chu.key_src" alt="">
            </div>
            <div class="upload-file">
                <div class="pub-upload">
					<img :src="'http://api.ohtbmgn.cn/' + $chu.key_src" alt="">
                </div>
                <p>买家打款凭证</p>
            </div>
            <div class="pub-button">
                <button @click="success">{{mai_status1($chu.status)}}</button>
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
            }
        },
        created(){
            this.params = this.$route.query

            // this.orderRecord();
        },
        methods: {
            success(){
                if(this.$chu.id ==2){
                    var data2 = {
                        ...this.$user,
                        trade_id:this.$chu.trade_id,
                        order_number:this.$chu.order_number,
                        status: 3,
                    }
                    this.$api.user.trade_status(data2)
                    .then(res=>{
                        console.log(res);
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