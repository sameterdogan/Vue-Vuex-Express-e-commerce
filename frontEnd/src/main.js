import Vue from 'vue'
import App from './App.vue'
import * as axiosConfig from '@/plugins/axiosConfig'
import '@/plugins/veeValidate'
import '@/plugins/vueCarouesel'
import '@/plugins/vueMask'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import {BootstrapVue} from 'bootstrap-vue'
Vue.use(BootstrapVue)
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { router } from './router'
import store from './store/store'
import '@/store/subscriber'
import Admin from '@/layouts/Admin'
import Blank from '@/layouts/Blank'
import Default from '@/layouts/Default'

Vue.prototype.$axios = axiosConfig

Vue.component('admin-layout', Admin)
Vue.component('blank-layout', Blank)
Vue.component('default-layout', Default)


Vue.config.productionTip = false

store.dispatch('attempt', localStorage.getItem('token')).then(() => {
    new Vue({
        render: h => h(App),
        router,
        store
    }).$mount('#app')
})
