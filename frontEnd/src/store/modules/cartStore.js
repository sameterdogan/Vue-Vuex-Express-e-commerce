import axios from 'axios'
import { router } from '@/router'

const storageCart = JSON.parse(localStorage.getItem('cart'))
const cart = storageCart ? storageCart : {
    items: [],
    totalPrice: 0,
}
const ModuleCart = {
    state: {
        cart,

    },
    mutations: {
        ADD_TO_CART(state, item) {

            console.log(item)
            item.category1=item.category.category
            const cartItemsIndex = state.cart.items.findIndex(i => i._id === item._id)
            if (cartItemsIndex >= 0) {
                state.cart.items[cartItemsIndex].quantity += item.quantity
                state.cart.totalPrice += item.quantity * item.price
            } else {

                state.cart.items.push(item)
                state.cart.totalPrice += item.quantity * item.price
            }

            localStorage.setItem('cart', JSON.stringify(state.cart))

        },
        DELETE_FROM_CART(state, itemId) {
            const cartItemsIndex = state.cart.items.findIndex(i => i._id === itemId)
            console.log(cartItemsIndex)
            if (cartItemsIndex >= 0) {
                state.cart.totalPrice -= state.cart.items[cartItemsIndex].quantity * state.cart.items[cartItemsIndex].price
                state.cart.items.splice(cartItemsIndex, 1)
                localStorage.setItem('cart', JSON.stringify(state.cart))

            }
        },
        DECREASE_ITEM(state, itemId) {
            const cartItemsIndex = state.cart.items.findIndex(i => i._id === itemId)
            if (cartItemsIndex >= 0) {
                /*               state.cart.items[cartItemsIndex].quantity--
                                state.cart.totalPrice -=  state.cart.items[cartItemsIndex].price*/
                const newItem = state.cart.items[cartItemsIndex]
                newItem.quantity--
                state.cart.items.splice(cartItemsIndex, 1, newItem)
                state.cart.totalPrice -= newItem.price
                localStorage.setItem('cart', JSON.stringify(state.cart))
            }
        },
        INCREASE_ITEM(state, itemId) {
            const cartItemsIndex = state.cart.items.findIndex(i => i._id === itemId)
            console.log(cartItemsIndex)
            if (cartItemsIndex >= 0) {
                const newItem = state.cart.items[cartItemsIndex]
                newItem.quantity++
                state.cart.items.splice(cartItemsIndex, 1, newItem)
                state.cart.totalPrice += newItem.price
                localStorage.setItem('cart', JSON.stringify(state.cart))
            }
        },
        RESET_CART(state) {
            localStorage.removeItem('cart')
            state.cart = {
                items: [],
                totalPrice: 0,
            }
        },
    },
    actions: {
         checkout(_,orderId) {
                axios.post(`payment/checkout/${orderId}`)
                    .then(res=>{
                        console.log(res.data)
                        router.push({ name: 'checkout', params: { checkoutForm: res.data.checkoutFormContent } })
                    })
                    .catch(err=>{
                        console.log(err.response)
                    })


        },
    },
    getters: {
        getCart(state) {
            return state.cart
        }
        ,
        getItems(state) {
            return state.cart.items
        },
        getCartCount(state) {
            return state.cart.items.length
        },
        getTotalPrice(state) {
            return state.cart.totalPrice
        },
    },
}

export default ModuleCart
