<template>
    <table class='table table-dark table-striped text-center'>
        <thead>
        <tr>
            <th scope='col'> Buyer Full Name</th>
            <th scope='col'> Buyer Phone</th>
            <th scope='col'> Price</th>
            <th scope='col'> Number Of Products </th>
            <th scope='col'> Order Status</th>
        </tr>
        </thead>
        <tbody>
        <order v-for='order in orders' :key='order._id' :order='order' />
        </tbody>
    </table>
</template>

<script>
import Order from '@/components/admin/order/Order'
import { mapGetters } from 'vuex'
export default {
    name: 'ListOrder',
    components: { Order },
    created() {
        this.$store.dispatch("initAllOrders")
    },
    computed:{
        ...mapGetters({orders:"getAllOrders"})
    }
}
</script>

<style scoped>

</style>