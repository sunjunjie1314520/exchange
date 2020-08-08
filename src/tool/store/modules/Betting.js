import {
    store
} from "@/tool/store/store";

import {
    BETTING,
} from "../../common/constants";

const state = {
    playGroupId: false,
    sscBetList: [],
    perMoney: 2,

    totalMoney: 0,
    WinningAmount:0,
    BaseConfig: {},
    action: false,
    oddsId: false,
    // 弹窗配置
    alertConfig: {
        alertNote: false,
        alertNotePlate: false,
        SelectMode: false,
        Choose: false,
    },
    // 模式配置
    mode_config: {},
    mode_config_result: {},
    
    // 缓存
    cache: {},

    // 导航配置
    AppBar: {},
    PageActive: true,
}

const getters = {
    getCachePlay: (state) => (play) => {
        return state.cache[play] || false
    }
}

const mutations = {
    // 设置页面状态
    SET_PAGE_ACTIVE(state, payload){
        state.PageActive = payload
    },
    // 设置导航
    SET_TITLE_CONFIG(state, payload) {
        state.AppBar = payload
    },
    // 设置弹窗
    SET_ALERT_CONFIG(state, payload) {
        state.alertConfig = {...state.alertConfig, ...payload}
    },
    // 设置config
    SET_BASE_CONFIG(state, payload){
        state.BaseConfig = payload
    },
    // 设置彩种ID
    SET_PLAY_GROUP_ID(state, payload){
        state.playGroupId = payload
    },
    // 设置统一金额
    SET_PER_MONEY(state, payload) {
        var money = payload
        if (payload) {
            money = payload * 1
        }
        state.perMoney = money
        state.sscBetList.forEach(item => {
            item.betMoney = money
        })
        this.commit('Betting/UPDATE_TOTAL_MONEY')
    },
    // 设置模式配置
    SET_MODE_CONFIG(state, payload) {
        state.mode_config = {...state.mode_config, ...payload}
    },
    // 设置模式结果
    SET_MODE_CONFIG_RESULT(state, payload){
        state.mode_config_result = payload
    },
    // 设置单注金额
    SET_BET_MONEY(state, payload) {
        state.sscBetList[payload.index].betMoney = payload.money
        this.commit('Betting/UPDATE_TOTAL_MONEY')
    },
    // 更新总金额
    UPDATE_TOTAL_MONEY(state, payload){
        let totalMoney = 0
        let WinningAmount = 0
        state.sscBetList.forEach(item => {
            totalMoney += item.betMoney
            WinningAmount += item.betMoney * item.betPl1
        })
        state.totalMoney = totalMoney
        state.WinningAmount = WinningAmount
    },
    // 设置注单
    SET_SSC_BET_LIST(state, payload) {
        var totalMoney = 0;
        let WinningAmount = 0
        payload.forEach(item => {
            totalMoney = totalMoney + item.betMoney
            WinningAmount += item.betMoney * item.betPl1
        })
        state.totalMoney = totalMoney
        state.WinningAmount = WinningAmount
        state.sscBetList = payload
    },
    // 删除单个注单
    DELETE_BET_LIST(state, payload) {
        state.sscBetList.splice(payload.index, 1)
        state.oddsId = payload
    },
    // 更新注单期号
    UPDATE_NUMBER(state, payload) {
        state.sscBetList.forEach(item => {
            item.betNum = payload
        })
    },
    // 投注完成操作
    CLEAR_ACTION(state, payload){
        state.action = payload
    },
    // 删除完成操作
    CLEAR_ODDS_ID(state, payload){
        state.oddsId = payload
    },
    // 缓存数据
    SET_CACHE_DATA(state, payload) {
        state.cache[payload.play] = payload.data
    },
    // 设置点击事件
    SET_CLICK(state, payload){
        state.mode_config_result.click = payload
    },
}

const actions = {

}


export default store('betting', BETTING, state, getters, mutations, actions)