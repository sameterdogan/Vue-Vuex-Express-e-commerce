<template>
    <div class='container'>
        <div class='row'>
            <div class='col-lg-8 col-md-8  '>
                <list-address />
            </div>
            <div class='col-lg-4 col-md-4'>
                <order-summary />
            </div>
        </div>


    </div>
</template>

<script>
import OrderSummary from '@/components/index/cart/OrderSummary'
import ListAddress from '@/components/index/cart/address/ListAddress'


export default {
    name: 'AddressSelection',
    components: {  ListAddress, OrderSummary },
    data() {
        return {

        }
    },
    methods: {

    },
}
</script>

<style scoped>

</style>