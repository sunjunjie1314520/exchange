import filter from "./filter";
import directive from "./directive";
// import '@/assets/lib/mui/css/mui.css'
// import mui from '@/assets/lib/mui/js/mui.js'
import assist from './assist.js'

import Binput from "./component/Binput";
import Berror from "./component/Berror";

import { mapState } from "vuex";

let plug = {}

plug.install = function(Vue, options) {

    // 指令
    directive(Vue)
    
    // 混入
    Vue.mixin({
        data(){
            return {
                
            }
        },
        computed: {
            ...mapState('Betting', {
                playGroupId: state => state.playGroupId,
                perMoney: state => state.perMoney,
                totalMoney: state => state.totalMoney,
                config: state => state.BaseConfig,
                BaseConfig: state => state.BaseConfig,
                
                action: state => state.action,
                oddsId: state => state.oddsId,
                alertConfig: state => state.alertConfig,
                sscBetList: state => state.sscBetList,
                WinningAmount: state => state.WinningAmount,
                mode_config: state => state.mode_config,
                mode_config_result: state => state.mode_config_result,
                PageActive: state => state.PageActive,
            }),
            ...mapState('Game', {
                Opentime: state => state.getNewOpentime
            })
        },
        created(){
            
        },
        mounted(){
            
        },
        methods:{
            
        }
    })

    // 过滤器
    filter(Vue)

    // 注册组件
    Vue.component(Binput.name, Binput)
    Vue.component(Berror.name, Berror)

    // 绑定mui框架
    // Vue.prototype.mui = mui;
    // 添加原型函数
    Vue.prototype.$BaseConfig = function(params) {
        // console.log(params);
        console.log('%c%s','color: #f60;',`mixins $BaseConfig function from ${params}`);
        return this.$route.query;
    }
    Vue.prototype.$assist = assist;
}

export default plug