<template>

    <div>

        <div id='gist'></div>
        <div @submit.prevent='toPayment' id='iyzipay-checkout-form' class='responsive'></div>
    </div>

</template>
<script>
import postscribe from 'postscribe'

export default {
    name: 'CartCheckout',
    components: {},
    data() {
        return {
            checkoutForm: null,
        }
    },
    mounted: function() {
        this.checkoutForm = this.$route.params.checkoutForm
        postscribe('#gist', this.checkoutForm)

    },
    methods:{
        toPayment(){
           console.log(document.querySelector("#iyzipay-checkout-form"))
        }
    }
}
</script>

<style scoped>

</style>