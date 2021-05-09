<template>
    <div class='cart'>
        <div class='card-header'>
            ORDER SUMMARY
        </div>
        <div class='card-body'>
            <h4><span>TOTAL</span> <span class='float-right'>$ {{ totalPrice }}</span></h4>
            <button v-if='$route.path==="/cart"' @click='toCheckout' class='btn btn-block button-color btn-sm my-4'>
                PROCEED TO CHECKOUT
            </button>
            <button v-else @click='toPay' class='btn btn-block button-color btn-sm my-4'>TO PAY</button>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    name: 'OrderSummary',
    computed: {
        ...mapGetters({ totalPrice: 'getTotalPrice' }),
    },
    created() {
        console.log(this.$route.path)
    },
    methods: {
        toCheckout() {
            this.$router.push({ name: 'address-selection' })
        },
        toPay() {
            const cart=this.$store.getters.getCart
            const address=this.$store.getters.getAddress
            const orderInfo={
                address:address._id,
                items:cart.items,
                totalPrice:cart.totalPrice
            }
            console.log(orderInfo.items)
            this.$store.dispatch('addOrder',orderInfo)
        },

    },
}
</script>

<style scoped>

</style>