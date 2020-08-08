<template>
    <div class="header-wrapper pub-center">
        <div class="header-top">
            <div class="fl" v-if="AppBar.back > 1" @click="$router.back(-1)"><span>返回</span></div>
            <div class="title" v-if="AppBar.type==1">{{AppBar.title}}</div>
             
            <!-- 首页 -->
            <div class="name" v-if="AppBar.type==3"><span>Hi! </span>{{MyInfo.account}}</div>

            <div v-if="AppBar.type==2 && showTitle"
            :class="['title', {active: alertConfig.SelectMode}]"
            @click="h1(!alertConfig.SelectMode)">
                {{mode_config_result.title}}
                <i></i>
            </div>
            <div class="title" v-else-if="AppBar.type==2 && !showTitle">{{playGroupId | DetailName}}</div>

            <div class="fr">
                <div class="filter-text" @click="h2(!alertConfig.Order)" v-if="AppBar.right==1">筛选</div>
            </div>
        </div>
        <!-- <div class="header-null"></div> -->
    </div>

</template>

<script>
    import { mapState } from "vuex";
    export default {
        data(){
            return {
                
            }
        },
        computed: {
            drawFtitle() {
                const { id } =  this.$route.params;
                if(id == 1) {
                    return '走势'
                }
                if(id == 2) {
                    return "开奖"
                }
            },
            showTitle(){
                var group_id = [1, 3, 4, 5, 13, 14, 15, 16, 2]
                var istitle = true
                group_id.forEach(item=>{
                    if(item==this.playGroupId){
                        istitle = false
                    }
                })
                return istitle
            },
            ...mapState('Betting', {
                AppBar: state => state.AppBar,
            }),
            ...mapState('User', {
                MyInfo: state => state.getMyInfo
            }),
        },
        created(){
            
        },
        methods: {
            h1(is){
                this.$store.commit('Betting/SET_ALERT_CONFIG', {SelectMode: is})
            },
            h2(is){
                this.$store.commit('Betting/SET_ALERT_CONFIG', {Order: is})
            },
        }
    }
</script>

<style>

</style>