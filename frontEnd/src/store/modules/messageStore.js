
const moduleMessage = {
    state: {
        messages:[],
    },
    mutations: {
        INIT_MESSAGE: (state, message) => {
            message.id=Date.now()*Math.random()
            state.messages.push(message)
            setTimeout(()=>{
               const messageIndex= state.messages.findIndex(m=>m.id===message.id)
                if(messageIndex>=0){
                    state.messages.splice(messageIndex,1)
                }
            },3000)
        },
        DELETE_MESSAGE:(state,messageId)=>{
            const messageIndex= state.messages.findIndex(m=>m.id===messageId)
            if(messageIndex>=0){
                state.messages.splice(messageIndex,1)
            }
        }
    },
    getters: {
        getMessages(state) {
            return state.messages
        },
    },
}

export default moduleMessage
