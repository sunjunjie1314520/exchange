
import { store } from "@/tool/store/store.js";

import {
    USER,
    USER_GET_MY_INFO,
} from "../../common/constants";


const state = {
    [USER_GET_MY_INFO]: false,
    userToken: false,
}

const getters = {
    
}

const mutations = {
    SET_TOKEN(state, payload){
        state.userToken = payload
    }
}

const actions = {

}


export default store('user', USER, state, getters, mutations, actions)