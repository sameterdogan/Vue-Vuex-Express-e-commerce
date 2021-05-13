<template>

    <div class='container'>
        <h2 class='cart-title'>SHOPPING CART</h2>
        <hr class='cart-title-hr'>
        <div class='row'>
            <div v-if='items.length>0' class='col-lg-8'>
                <item  v-for='item in items' :key='item._id' :item='JSON.stringify(item)'/>
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
             <order-summary/>
            </div>
        </div>
        <component :is='paymentResultModal' @closePaymentResult='closePaymentResultModal' :paymentResult='paymentResult'></component>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Item from '@/components/index/cart/Item'
import OrderSummary from '@/components/index/cart/OrderSummary'
import PaymentResultModal from "@/components/index/cart/PaymentResultModal"

export default {
    name: 'Cart',
    components: { OrderSummary, Item,PaymentResultModal },
    data(){
        return{
            stockErrorProductsIdAndStock:[],
            paymentResultModal:null,
            paymentResult:null
        }
    },
    created() {
        if (this.$route.query.paymentResult){
            this.paymentResult=JSON.parse(this.$route.query.paymentResult)
            if(this.paymentResult.status==="failure"){
                this.paymentResultModal=PaymentResultModal
                console.log(this.paymentResultModal)
                /*this.$store.dispatch("toCheckout")*/
            }else{
                this.$store.commit("RESET_CART")
                this.$store.commit("INIT_MESSAGE",{message:"Payment transaction is successful",color:"success"})
                /*this.$router.push({name:"cart-details"})*/
                this.paymentResult=JSON.parse(this.$route.query.paymentResult)
                this.paymentResultModal=PaymentResultModal
            }
        }
    },
    methods:{
        closePaymentResultModal(){
                this.paymentResultModal=null
        }
    },
    computed:{
        ...mapGetters({ items: 'getItems' }),
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