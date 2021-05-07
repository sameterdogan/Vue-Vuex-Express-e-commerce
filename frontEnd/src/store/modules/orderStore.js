import axios from 'axios'
import { router } from '@/router'

const moduleOrder = {
    state: {
        orders: [],
        order: {},
    },
    mutations: {
        INIT_ORDERS(state, orders) {
            state.orders = orders
        },
        ADD_ORDER(state, order) {
            state.orders.push(order)
        },
    },
    actions: {
        checkout(orderId) {
            axios.post('payment/checkout', orderId)
                .then(res => {
                    console.log(orderId)
                    console.log('geliasdsa')
                    console.log(res.data)
                    router.push({ name: 'checkout', params: { checkoutForm: res.data.checkoutFormContent } })
                })
                .catch(err => {
                    console.log(err.response)
                })
        },
        initOrders({ commit }) {
            axios.post('/order').then(res => {
                console.log(res.data)
                commit('INIT_ORDERS', res.data.orders)
            })
        },
        addOrder({ commit }, orderInfo) {
            axios.post('/order/add-order', orderInfo)
                .then(res => {
                    commit('ADD_ORDER', res.data.order)
                })
                .catch(err => {
                    if (err.response.data.stockErrorProductsIdAndStock) {
                        router.push({
                            name: 'cart-details',
                            params: { stockErrorProductsIdAndStock: err.response.data.stockErrorProductsIdAndStock },
                        })
                    }

                })
        },
    },
    getters: {
        getOrder(state) {
            return state.order
        },
    }
    ,
}

export default moduleOrder

