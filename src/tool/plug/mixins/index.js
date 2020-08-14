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
                $user: state => state.userToken
            }),
            ...mapState('Game', {
                
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