const storageCart=JSON.parse(localStorage.getItem("cart"))
const cart=storageCart?storageCart:{
    items: [],
    totalPrice: 0,
}
const ModuleCart = {
    state: {
        cart

    },
    mutations: {
        ADD_TO_CART(state, item) {
            const cartItemsIndex = state.cart.items.findIndex(i => i._id === item._id)
            console.log(item)
            console.log(item.quantity)
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
                console.log()
                state.cart.items.splice(cartItemsIndex,1)
                localStorage.setItem('cart', JSON.stringify(state.cart))
            }
        },
        DECREASE_ITEM(state,itemId){
            const cartItemsIndex = state.cart.items.findIndex(i => i._id === itemId)
            console.log(cartItemsIndex)
            if (cartItemsIndex >= 0) {
                state.cart.items[cartItemsIndex].quantity--
                state.cart.totalPrice -=  state.cart.items[cartItemsIndex].price
                console.log(state.cart.totalPrice)
                localStorage.setItem('cart', JSON.stringify(state.cart))
            }
        }
    },
    getters: {
        getCart(state) {
            console.log("cart getirildi")
            console.log(state.cart)
            return state.cart
        },
        getItems(state){
          return state.cart.items
        },
        getCartCount(state){
            return state.cart.items.length
        },
        getTotalPrice(state){
            return state.cart.totalPrice
        }
    },
}

export default ModuleCart
