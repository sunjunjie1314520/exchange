import filter from "./filter";
import directive from "./directive";
import '@/assets/lib/mui/css/mui.css'
import mui from '@/assets/lib/mui/js/mui.js'
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
                alertConfig: state => state.alertConfig,
            }),
            ...mapState('User', {
                $user: state => state.userToken,
                $info: state => state.userinfo,
                $sell: state => state.current_sell,
                $trade: state => state.trade_index,
                $chu: state => state.current_chu,
                $coll: state => state.show_data
            }),
            ...mapState('Game', {
                
            })
        },
        created(){
            
        },
        mounted(){
            
        },
        methods:{
            loading(text) {
                this.$toast.loading({
                    duration: 0, // 持续展示 toast
                    forbidClick: true,
                    message: text || '正在加载中',
                });
            },
            mai_status1(id) {
                var str = ''
                switch (id) {
                    case 0:
                        str = '发布中'
                        break;
                    case 1:
                        str = '交易中'
                        break;
                    case 2:
                        str = '等待对方确认收款'
                        break;
                    case 3:
                        str = '订单已完成'
                        break;
                    case 4:
                        str = '订单已取消'
                        break;
                    case 5:
                        str = '发布取消'
                        break;
                    default:
                        break;
                }
                return str
            },
            mai_status(id){
                var str = ''
                switch (id) {
                    case 1:
                        str = '交易中'
                    break;
                    case 2:
                        str = '确认收款'
                        break;
                    case 3:
                        str = '订单已完成'
                        break;
                    case 4:
                        str = '订单已取消'
                        break;
                    default:
                        break;
                }
                return str
            },
            
        }
    })

    // 过滤器
    filter(Vue)

    // 注册组件
    Vue.component(Binput.name, Binput)
    Vue.component(Berror.name, Berror)

    // 绑定mui框架
    Vue.prototype.mui = mui;
    // 添加原型函数
    Vue.prototype.$BaseConfig = function(params) {
        // console.log(params);
        console.log('%c%s','color: #f60;',`mixins $BaseConfig function from ${params}`);
        return this.$route.query;
    }
    Vue.prototype.$assist = assist;
}

export default plug