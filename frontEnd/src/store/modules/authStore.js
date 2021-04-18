import axios from 'axios'
import {router} from "@/router"

const moduleAuth = {
    state: {
        token: null,
        user: null,
    },
    mutations: {
        INIT_TOKEN(state, token) {
            state.token = token
        },
        INIT_USER(state, user) {
            state.user = user
        },
    },
    actions: {
         login({ dispatch }, user) {
             axios.post('auth/login', user)
                 .then((res)=>{
                     console.log(res)
                     dispatch('attempt', res.data.token)
                     router.push("/")
                 })

        },
        async attempt({ commit, state }, token) {
            if (token) {
                commit('INIT_TOKEN', token)
            }
            if (!state.token) return
            try {
                const res = await axios.get('auth/me')
                commit('INIT_USER', res.data.user)
            } catch (err) {
                commit('INIT_USER', null)
                commit('INIT_TOKEN', null)
                console.log('failed')
            }
        },
        logout({ commit }) {
            commit('INIT_TOKEN', null)
            commit('INIT_USER', null)
        },
    },

    getters: {
        authenticated(state) {
            return state.token && state.user
        },
        getUser(state) {
            return state.user
        },
    },
}

export default moduleAuth
