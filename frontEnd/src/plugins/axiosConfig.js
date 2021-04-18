import axios from 'axios'
import store from '@/store'


axios.defaults.baseURL = 'http://localhost:5000/api/'
axios.interceptors.response.use(function (response) {
    return response;
}, function (error) {
    if (error.response) {
        console.log(error.response)
        store.commit('INIT_MESSAGE', {message: error.response.data.message,color:"danger" }) // just taking some guesses here
    } else if (error.request) {
        console.log(error.request);
    } else {
        console.log('Error', error.message);
    }

    return Promise.reject(error) // this is the important part
})