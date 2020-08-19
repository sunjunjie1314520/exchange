<template>
    <div class="app">
        <scroller style="top: 100px;" height='400' :on-refresh="refresh" :on-infinite="infinite" ref="myscroller">
            <div class="order-box" v-for="(item,index) in orderList" :key="index">

            </div>
        </scroller>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                status:'all',
                orderList:[],
                page:0,
                all_page: 1,
            }
        },
        methods: {
            refresh (done) {
				setTimeout(()=>{
					done();
                },1500)
            },
            //下拉触发
            infinite (done) {
                console.log('infinite');
                if(this.page>=this.all_page){
                    setTimeout(()=>{
                        this.$refs.myscroller.finishInfinite(true);
                    },1500)
                }else{
                    setTimeout(()=>{
                        this.page++;
                        this.getorderList(done)
                    },500);
                }
            },
            getorderList(done){
                this.$http({
                    method:'post',
                    url:'/seckill/server/orderList',
                    data:{
                        jwt:this.jwt,
                        status:this.status,
                        page:this.page,
                        page_size:5
                    }
                }).then(res=>{
                    if(res.data.code == 0){
                        this.orderList.push.apply(this.orderList, res.data.data.list)
                        this.$refs.myscroller.finishInfinite(true)
                        this.page = res.data.data.page
                        this.all_page = res.data.data.all_page
                        done();
                    }else{
                       console.log('1');
                    }
                })
            },
            goodsAll(){
                this.status = 'all'
                this.page = 0
                this.all_page = 1
                this.$refs.myscroller.finishInfinite(false);
                this.orderList = []
            },
        }
    }
</script>

<style>

</style>