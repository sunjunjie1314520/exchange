import { store } from "@/tool/store/store.js";

import {
    GAME,
    GAME_GET_HISTORY_OPEN_CODE,
    GAME_GET_PLAY_TYPE_LIST,
    GAME_GET_NEW_OPEN_TIME,
    
    GAME_GET_ODDS_LIST,
    GAME_POST_BET,
    GAME_GET_PLAY_TYPE_DESC,
    GAME_GET_GAME_LIST,
    GAME_GET_LOTTERY_SERIES,
} from "../../common/constants.js";


const state = {
    [GAME_GET_HISTORY_OPEN_CODE]: false,
    [GAME_GET_PLAY_TYPE_LIST]: false,
    [GAME_GET_NEW_OPEN_TIME]: false,
    [GAME_GET_ODDS_LIST]: false,
    [GAME_POST_BET]: false,
    [GAME_GET_PLAY_TYPE_DESC]: false,
    [GAME_GET_GAME_LIST]: false,
    [GAME_GET_LOTTERY_SERIES]: false,
}

const getters = {
    
}

const mutations = {
    
}

const actions = {}

export default store('game', GAME, state, getters, mutations, actions)