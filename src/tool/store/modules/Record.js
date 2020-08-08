
import { store } from "@/tool/store/store.js";

import {
    RECORD
} from "../../common/constants";


const state = {
    NoteListDetail: false,
}

const getters = {
    
}

const mutations = {
    SET_NOTE_LIST_DETAIL(state, payload){
        state.NoteListDetail = payload
    }
}

const actions = {
    
}


export default store('record', RECORD, state, getters, mutations, actions)