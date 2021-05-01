<template>
    <div class='cart'>
        <div class='card-header'>
            ORDER SUMMARY
        </div>
        <div class='card-body'>
            <h4><span>TOTAL</span>  <span class='float-right'>$ {{totalPrice}}</span></h4>
            <button @click='toCheckout' class='btn btn-block button-color btn-sm my-4'>PROCEED TO CHECKOUT</button>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    name: 'OrderSummary',
    computed:{
        ...mapGetters({totalPrice:"getTotalPrice"})
    },
    methods:{
        toCheckout(){
            this.$router.push({name:"address-selection"})
            /*            this.$store.dispatch("toCheckout")*/
        },

    },
}
</script>

<style scoped>

</style>