import axios from 'axios'

const moduleAuth = {
    state: {
        token: null,
        user: null,
    },
    actions: {
        async login({ dispatch }, user) {
            const res = await axios.post('auth/login', user)
            dispatch('attempt', res.data.token)
        },
        async attempt({ commit, state }, token) {
            if (token) {
                commit('setToken', token)
            }
            if (!state.token) return
            try {
                const res = await axios.get('auth/me')
                commit('setUser', res.data.user)
            } catch (err) {
                commit('setUser', null)
                commit('setToken', null)
                console.log('failed')
            }
        },
        logout({ commit }) {
            commit('setToken', null)
            commit('setUser', null)
        },
    },
    mutations: {
        setToken(state, token) {
            state.token = token
        },
        setUser(state, user) {
            state.user = user
        },
    },
    getters: {
        authenticated(state) {
            return state.token && state.user
        },
        user(state) {
            return state.user
        },
    },
}

export default moduleAuth
