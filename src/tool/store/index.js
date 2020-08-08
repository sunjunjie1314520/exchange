
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import Game from "./modules/Game.js";
import User from "./modules/User.js";
import Betting from "./modules/Betting.js";
import Record from "./modules/Record.js";

const store = new Vuex.Store({
    strict: true,
    modules: {
        Game,
        User,
        Betting,
        Record,
    },
    state: {
        
    },
    mutations: {
        
    },
    actions:{

    }
})

export default store