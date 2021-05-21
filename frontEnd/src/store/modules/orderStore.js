import axios from 'axios'
import { router } from '@/router'

const moduleOrder = {
    state: {
        allOrders: [],
        orders: [],
        order: {},
        stockErrorProductsInfo: [],
    },
    mutations: {
        INIT_ALL_ORDERS(state,allOrders){
            state.allOrders=allOrders
        },
        INIT_ORDERS(state, orders) {
            state.orders = orders
        },
        INIT_ORDER(state, order) {
            state.order = order
        },
        ADD_ORDER(state, order) {
            state.orders.push(order)
        },
        INIT_STOCK_ERROR_PRODUCTS_INFO(state, products) {
            state.stockErrorProductsInfo = products
        },
        DELETE_STOCK_ERROR_PRODUCT(state, productId) {
            const productIndex = state.stockErrorProductsInfo.findIndex(product => product._id === productId)
            if (productIndex >= 0)
                state.stockErrorProductsInfo.splice(productIndex, 1)
        },
    },
    actions: {
        initAllOrders({ commit }) {
            axios.get('order/allOrders')
                .then(res => {
                    commit('INIT_ALL_ORDERS', res.data.allOrders)
                })
        },
        initOrders({ commit }) {
            axios.get('/order').then(res => {
                console.log(res.data)
                commit('INIT_ORDERS', res.data.orders)
            })
        },
        initOrder({ commit }, orderId) {
            axios.get(`/order/${orderId}`)
                .then(res => {
                    commit('INIT_ORDER', res.data.order)
                })
        },
        addOrder({ commit, dispatch }, orderInfo) {
            axios.post('/order/add-order', orderInfo)
                .then(res => {
                    commit('ADD_ORDER', res.data.order)
                    dispatch('checkout', res.data.order._id)

                })
                .catch(err => {
                    console.log(err)
                    if (err.response.data.stockErrorProductsIdAndStock) {
                        commit('INIT_STOCK_ERROR_PRODUCTS_INFO', err.response.data.stockErrorProductsIdAndStock)
                        router.push({ name: 'cart-details' })
                    }
                })

        },
        deleteStockErrorProduct({ commit }, productId) {
            commit('DELETE_STOCK_ERROR_PRODUCT', productId)
        },
    },
    getters: {
        getAllOrders(state){
            return state.allOrders
        },
        getOrders(state) {
            return state.orders
        },
        getOrder(state) {
            return state.order
        },
        getStockErrorProductsInfo(state) {
            return state.stockErrorProductsInfo
        },
    }
    ,
}

export default moduleOrder

