
import { store } from "@/tool/store/store.js";

import {
    USER,
    USER_INFO,
    TRADE_INDEX,
} from "../../common/constants";


const state = {
    [USER_INFO]: false,
    userToken: false,
    [TRADE_INDEX]: false,
    current_sell: false,
    current_chu: false,
    show_data: false,
}

const getters = {
    
}

const mutations = {
    // 设置Token
    SET_TOKEN(state, payload){
        state.userToken = payload
    },
    // 设置当前数据
    SET_CURRENT_SELL(state, payload){
        state.current_sell = payload
    },
    // 设置当前数据
    SET_CURRENT_SELL1(state, payload) {
        state.current_chu = payload
    },
    // 设置当前数据
    SET_CURRENT_SELL2(state, payload) {
        state.show_data = payload
    },
}

const actions = {

}


export default store('user', USER, state, getters, mutations, actions)