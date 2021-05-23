<template>

    <div class='p-5'>
        <div id='gist'></div>
        <div  id='iyzipay-checkout-form' class='responsive'></div>
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
    watch:{
        $route(to){
            this.checkoutForm=to.params.checkoutForm
            postscribe('#gist', this.checkoutForm)
        }
    }
}
</script>

<style scoped>

</style>