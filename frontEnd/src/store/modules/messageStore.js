
const moduleMessage = {
    state: {
        messages:[],
    },
    mutations: {
        INIT_MESSAGE: (state, messageObject) => {
            messageObject.id=Date.now()*Math.random()
            state.messages.push(messageObject)
            setTimeout(()=>{
               const messageIndex= state.messages.findIndex(m=>m.id===messageObject.id)
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
    actions:{
        initMessage({commit},messageObject){
            commit("INIT_MESSAGE",messageObject)
        },
        deleteMessage({commit},messageId){
            commit("DELETE_MESSAGE",messageId)
        }
    },
    getters: {
        getMessages(state) {
            return state.messages
        },
    },
}

export default moduleMessage
