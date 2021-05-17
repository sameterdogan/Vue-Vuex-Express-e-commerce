<template>
  <div>
      <order-item v-for='order in orders' :key='order._id' :order='order'/>
  </div>
</template>

<script>
import OrderItem from '@/components/index/account/order/OrderItem'
import { mapGetters } from 'vuex'
export default {
    name: 'listOrder',
    components: { OrderItem },
    created() {
        this.$store.dispatch('initOrders')
    },
    computed: {
        ...mapGetters({ orders: 'getOrders' }),
    },
}
</script>

<style scoped>

</style>