import axios from 'axios'
import store from '@/store/store'


axios.defaults.baseURL = 'http://localhost:5000/api/'
axios.interceptors.response.use(function (response) {
    return response;
}, function (error) {
    if (error.response) {
        if (error.response.data.messages){
            for (let m=0;m<error.response.data.messages.length;m++){
                store.dispatch('initMessage', {message: error.response.data.messages[m],color:"danger" }) // just taking some guesses here
            }
        }else{
            store.dispatch('initMessage', {message: error.response.data.message,color:"danger" }) // just taking some guesses here
        }
    } else if (error.request) {
        console.log(error.request);
    } else {
        console.log('Error', error.message);
    }

    return Promise.reject(error) // this is the important part
})