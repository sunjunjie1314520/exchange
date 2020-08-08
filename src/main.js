/* eslint-disable */

import Vue from "vue";

import App from "./App.vue";
import router from "./router";

import VueScroller from 'vue-scroller'
Vue.use(VueScroller)

import VueClipboard from 'vue-clipboard2'
Vue.use(VueClipboard)

import {
    Swipe,
    SwipeItem,
    Lazyload,
    Loading,
    Toast,
    Picker,
    ActionSheet,
    Dialog,
    DatetimePicker,
    Popup,
    Tab,
    Tabs,
    List,
    PullRefresh
} from 'vant';

Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(Lazyload);
Vue.use(Loading);
Vue.use(Toast);
Vue.use(Picker);
Vue.use(ActionSheet);
Vue.use(Dialog);
Vue.use(DatetimePicker);
Vue.use(Popup);
Vue.use(Tab);
Vue.use(Tabs);
Vue.use(List);
Vue.use(PullRefresh);


//服务器地址
import url_config from './tool/common/config.js';

// 接口模块
import api from './tool/api';

// vuex
import store from './tool/store';

// 自定义组件
// import Loadding from "@/components/Loadding.vue";
import AppBar from "@/components/AppBar.vue";


// 引入样式
// import 'vue-easytable/libs/themes-base/index.css'
// 导入 table 和 分页组件
// import {VTable} from 'vue-easytable'
// 全局注册组件
// Vue.component('v-table', VTable)
// Vue.component('loadding', Loadding);
// Vue.component('sealed-disk', SealedDisk);
// Vue.component('image-load', ImageLoad);
// Vue.component('Header', Header);
Vue.component('AppBar', AppBar);
// Vue.component('TrendImg', TrendImg);
// Vue.component('TrendImg2', TrendImg2);
// Vue.component('TrendImg3', TrendImg3);
// Vue.component('PriceNews', PriceNews);
// Vue.component('PriceNews2', PriceNews2);

// 自定义插件
import scroll from "@/tool/plug/scroll";
import mixins from "@/tool/plug/mixins";
Vue.use(scroll)
Vue.use(mixins)

// 全局挂载
Vue.prototype.$api = api;
Vue.prototype.$url = url_config;
Vue.prototype.$store = store;

// debug
console.log('接口地址:', url_config);

// 全局样式
import "./static/css/style.min.css";
import "./static/css/animate.min.css";

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount("#app");
