<template>

    <table class='table table-sm  table-light'>
        <div class='table-responsive'>
            <table class='table align-middle'>
                <thead class='text-center'>
                <tr>
                    <th>ITEMS</th>
                    <th>PRICE</th>
                    <th>QTY</th>
                    <th>TOTAL</th>
                </tr>
                </thead>
                <tbody>
                <item v-for='item in cart.items' :key='item._id' :item='item' />
                </tbody>
            </table>
        </div>
    </table>

</template>

<script>
import Item from '@/components/index/cart/Item'
import { mapGetters } from 'vuex'

export default {
    name: 'ListItem',
    components: { Item },
    computed: {
        ...mapGetters({ cart: 'getCart' }),
    },
}
</script>

<style scoped>
thead > tr > th {
    font-size: 13px;
    font-weight: bold;
}
</style>