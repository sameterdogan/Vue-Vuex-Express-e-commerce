import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
axios.defaults.baseURL = 'http://localhost:5000/api/'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { router } from './router'
import { ValidationObserver } from 'vee-validate'
import { ValidationProvider } from 'vee-validate/dist/vee-validate.full.esm'
import store from './store'
import '@/store/subscriber'
import Admin from '@/layouts/Admin'
import Blank from '@/layouts/Blank'
import Default from '@/layouts/Default'
Vue.component('admin-layout', Admin)
Vue.component('blank-layout', Blank)
Vue.component('default-layout', Default)
Vue.component('ValidationProvider', ValidationProvider)
Vue.component('ValidationObserver', ValidationObserver)
Vue.config.productionTip = false

store.dispatch('attempt', localStorage.getItem('token')).then(() => {
    new Vue({
        render: h => h(App),
        router,
        store,
    }).$mount('#app')
})
