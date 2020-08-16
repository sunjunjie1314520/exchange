
import $api from '../api/index.js'

export function store(api, module, fp_state, fp_getters, fp_mutations, fp_actions) {

    let state = {
        ...fp_state
    }

    let getters = {
        ...fp_getters
    }

    let mutations = {
        ...fp_mutations
    }

    let actions = {
        ...fp_actions
    }
    console.log(api, module);
    module.forEach(item => {
        mutations[item] = (state, payload) => {
            state[item] = payload
        },
        actions[item] = ({ commit }, payload={}) => {
            return new Promise((resolve, reject) => {
                $api[api][item](payload)
                .then(res => {
                    commit(item, res)
                    resolve(res)
                })
                .catch(error => {
                    commit(item, -1)
                    reject(error)
                })
            })
        }
    })

    return {
        namespaced: true,
        state,
        getters,
        mutations,
        actions
    }
}