import Vue from 'vue'
import Vuex from 'vuex'
import categoryStore from '@/store/modules/categoryStore'
import productStore from '@/store/modules/productStore'
import authStore from '@/store/modules/authStore'
import messageStore from '@/store/modules/messageStore'
import cartStore from '@/store/modules/cartStore'

Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        categoryStore,
        productStore,
        authStore,
        messageStore,
        cartStore
    },
})

export default store
