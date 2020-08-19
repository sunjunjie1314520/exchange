
import Vue from 'vue'
import Vuex from 'vuex'
// import createPersistedState from 'vuex-persistedstate'
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
    // plugins: [createPersistedState()],
    state: {
        
    },
    mutations: {
        
    },
    actions:{

    }
})

export default store