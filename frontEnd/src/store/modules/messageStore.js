const moduleMessage = {
    state: {
        message: {
            message: '',
            color: '',
        },
    },
    mutations: {
        INIT_MESSAGE: (state, message) => {
            state.message.message = message.message
            state.message.color = message.color
            console.log(message)
        },
    },
    getters: {
        getMessage(state) {
            return state.message
        },
    },
}

export default moduleMessage
