import axios from 'axios'
import store from '@/store/store'
import { router } from '@/router'


axios.defaults.baseURL = 'http://localhost:3000/api/'
axios.interceptors.response.use(function(response) {
    return response
}, function(error) {
    if (error.response) {
        console.log(error.response.data.status)
        switch (error.response.data.status) {
            case 404:
                router.push({ name: '404' })
                break
            case 403:
                router.push({ name: '403' })
        }
        store.dispatch('initMessage', { message: error.response.data.message, color: 'danger' })

    } else if (error.request) {
        console.log(error.request)
    } else {
        console.log('Error', error.message)
    }

    return Promise.reject(error) // this is the important part
})