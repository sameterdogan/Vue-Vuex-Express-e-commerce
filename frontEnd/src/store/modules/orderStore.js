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

        initOrders({ commit }) {
            axios.post('/order').then(res => {
                console.log(res.data)
                commit('INIT_ORDERS', res.data.orders)
            })
        },
         addOrder({ commit, dispatch }, orderInfo) {
              axios.post('/order/add-order', orderInfo)
                  .then(res=>{
                      console.log(res.data.order._id)
                      dispatch('checkout', res.data.order._id)
                      commit('ADD_ORDER', res.data.order)
                  })
                  .catch(err=>{
                      console.log(err)
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

