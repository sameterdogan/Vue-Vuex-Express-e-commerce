import Vue from 'vue'
import App from './App.vue'
import * as axiosConfig from  "@/plugins/axiosConfig"
import VueMask from "v-mask"
import VueCarousel from 'vue-carousel'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { router } from './router'
import { ValidationObserver } from 'vee-validate'
import { ValidationProvider } from 'vee-validate/dist/vee-validate.full.esm'
import store from './store/store'
import '@/store/subscriber'
import Admin from '@/layouts/Admin'
import Blank from '@/layouts/Blank'
import Default from '@/layouts/Default'

Vue.prototype.$axios=axiosConfig

Vue.component('admin-layout', Admin)
Vue.component('blank-layout', Blank)
Vue.component('default-layout', Default)
Vue.component('ValidationProvider', ValidationProvider)
Vue.component('ValidationObserver', ValidationObserver)
Vue.use(VueCarousel)
Vue.use(VueMask)
Vue.config.productionTip = false

store.dispatch('attempt', localStorage.getItem('token')).then(() => {
    new Vue({
        render: h => h(App),
        router,
        store,
    }).$mount('#app')
})
