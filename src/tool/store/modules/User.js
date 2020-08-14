
import { store } from "@/tool/store/store.js";

import {
    USER,
    USER_INFO,
} from "../../common/constants";


const state = {
    [USER_INFO]: false,
    userToken: false,
    current_sell: false,
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
    }
}

const actions = {

}


export default store('user', USER, state, getters, mutations, actions)