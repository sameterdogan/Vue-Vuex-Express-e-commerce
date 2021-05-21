import axios from 'axios'

const moduleUser = {
    state: {
        allUsers: [],

    },
    mutations: {
        INIT_ALL_USERS(state, allUsers) {
            state.allUsers = allUsers
        },
        MAKE_ADMIN(state,userId){
            const userIndex= state.allUsers.findIndex(user=>user._id===userId)
            if(userIndex >=0){
                state.allUsers[userIndex].role="admin"
            }
        },
        MAKE_USER(state,userId){
            const userIndex= state.allUsers.findIndex(user=>user._id===userId)
            if(userIndex >=0){
                state.allUsers[userIndex].role="user"
            }
        }

    },
    actions: {
        initAllUsers({ commit }) {
            axios.get('user')
                .then(res => {
                    commit('INIT_ALL_USERS', res.data.allUsers)

                })
        },
        makeAdmin({commit},userId){
            axios.put(`user/make-admin/${userId}`)
                .then(res=>{
                    commit("MAKE_ADMIN",userId)
                    commit('INIT_MESSAGE',{message:res.data.message,color:"success"})
                })
        },
        makeUser({commit},userId){
            axios.put(`user/make-user/${userId}`)
                .then(res=>{
                    commit("MAKE_USER",userId)
                    commit('INIT_MESSAGE',{message:res.data.message,color:"success"})
                })
        }
    },
    getters: {
        getAllUsers(state) {
            return state.allUsers
        },

    }
    ,
}

export default moduleUser

