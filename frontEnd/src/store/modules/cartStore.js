const ModuleCart = {
    state: {
        cart: {
            items: [],
            totalPrice: 0,
        },

    },
    mutations: {
        ADD_TO_CART(state, item) {
            const cartItemsIndex = state.cart.items.findIndex(i => i.product._id === item.product._id)
            console.log(item.product._id)
            if (cartItemsIndex >= 0) {
                state.cart.items[cartItemsIndex].quantity += item.quantity
                state.cart.totalPrice += item.quantity * item.product.price
            } else {
                state.cart.items.push(item)
                state.cart.totalPrice += item.quantity * item.product.price
            }
            console.log(cartItemsIndex)
            localStorage.setItem('cart', JSON.stringify(state.cart))
        },
        DELETE_FROM_CART(state, itemId) {
            const cartItemsIndex = state.cart.items.findIndex(i => i._id === itemId)
            if (cartItemsIndex >= 0) {
                state.cart.totalPrice -= state.cart.items[cartItemsIndex].quantity * state.cart.items[cartItemsIndex].price
                state.cart.items.splice(cartItemsIndex)
            }
        },

    },
    getters: {
        getCart(state) {
            return state.cart
        },
    },
}

export default ModuleCart
