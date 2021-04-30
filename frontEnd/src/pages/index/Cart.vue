<template>

    <div class='container'>
        <div id='gist'></div>
        <div @submit.prevent='toPayment' id='iyzipay-checkout-form' class='popup'></div>
        <h2 class='cart-title'>SHOPPING CART</h2>
        <hr class='cart-title-hr'>
        <div class='row'>
            <div v-if='items.length>0' class='col-lg-8'>
                <item  v-for='item in items' :key='item._id' :item='JSON.stringify(item)' />
            </div>
            <div v-else class='col-lg-8'>
                <div class='my-5 text-center'>
                    <i class="bi bi-cart"></i>
                    <h3 class='my-3'>Your cart is currently empty</h3>
                    <p>You can look at the products to fill your cart</p>
                    <router-link
                    :to="{name:'home'}"
                    tag='button'
                    class='btn home-btn'
                    >
                        Home
                    </router-link>



                </div>
            </div>

            <div class='col-lg-4'>
              <div class='cart'>
                  <div class='card-header'>
                      ORDER SUMMARY
                  </div>
                  <div class='card-body'>
                      <h4><span>TOTAL</span>  <span class='float-right'>$ {{totalPrice}}</span></h4>
                      <button @click='toCheckout' class='btn btn-block btn-primary btn-sm my-4'>PROCEED TO CHECKOUT</button>
                  </div>
              </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Item from '@/components/index/cart/Item'

export default {
    name: 'Cart',
    components: { Item, },
    computed:{
        ...mapGetters({ items: 'getItems' }),
        ...mapGetters({totalPrice:"getTotalPrice"})
    },
    methods:{
        toCheckout(){
            this.$store.dispatch("toCheckout")
        },

    },

}
</script>

<style scoped>
.cart-title-hr {
    background-color: black;
    width: 8%;
    margin-right: 100%;
}
.bi-cart{
    font-size: 2rem;
}
.home-btn{
    background-color: #0177C1;
    color: white;
}
</style>