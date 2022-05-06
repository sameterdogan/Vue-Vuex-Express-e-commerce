<template>
    <tr>
        <td v-if='order.address'>{{ order.address.name }} {{ order.address.surname }}</td>
        <td v-else>Adres bilgisi silinmiş</td>
        <td v-if='order.address' >{{ order.address.phone }}</td>
        <td v-else>Adres bilgisi silinmiş</td>
        <td>{{ order.items.length }}</td>
        <td>{{ order.totalPrice }}</td>
        <td>
            <order-status :orderStatus='order.status' />
        </td>
        <td>
            <button @click='showOrderDetailModal' class='btn btn-sm btn-outline-light '>Show Detail</button>
            <component :is='orderDetailModal' :order='order' @closeOrderDetailModal='closeOrderDetailModal' />

        </td>

    </tr>
</template>

<script>
import OrderStatus from '@/components/cammon/OrderStatus'
import OrderDetailModal from '@/components/admin/order/OrderDetailModal'

export default {
    name: 'order',
    components: { OrderDetailModal, OrderStatus },
    data() {
        return {
            orderDetailModal: null,
        }
    },
    props: ['order'],
    methods: {
        showOrderDetailModal() {
            this.orderDetailModal = OrderDetailModal
            document.querySelector('body').style.setProperty('overflow', 'hidden')
        },
        closeOrderDetailModal(){
            this.orderDetailModal=null
        }
    },
}
</script>

<style scoped>

</style>