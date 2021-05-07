import  store from "@/store/store"
import axios from "axios"

store.subscribe((mutation) => {
    switch (mutation.type){
        case "INIT_TOKEN":
            if(mutation.payload){
                axios.defaults.headers.common["Authorization"]=`Bearer: ${mutation.payload}`
                localStorage.setItem("token",mutation.payload)
            }else{
                delete axios.defaults.headers.common["Authorization"]
                localStorage.removeItem("token")
            }
            break
    }
})
