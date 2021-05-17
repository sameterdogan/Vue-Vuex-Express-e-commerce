<template>
    <div class='container'>
        <div class='row'>
            <div class='col-lg-3 col-md-12 col-sm-3'>
                <side-bar />
            </div>
            <div class='col-lg-9 col-md-12 col-sm-9'>
                <div class='order-detail-info'>
                    <section>
                        <h1 class='order-detail-info-title'>Order Detail</h1>
                    </section>
                    <section>
                        Order Date
                        <span>18 mayıs</span>
                    </section>
                    <section>
                        Order No
                        <span>{{ order._id }}</span>
                    </section>
                    <section>
                        Order Summary
                        <span> {{ order.items.length }} Product</span>
                    </section>
                </div>
                <div class='order-detail-summary'>
                    <div class='row order-detail-summary-address-and-payment'>
                        <div class='col-6 '>
                            <address-info :address='order.address' />
                        </div>
                        <div class='col-6 '>
                            <payment-info :order='order' />
                        </div>
                    </div>
                    <div class='order-detail-summary-items'>
                            <items-info :items='order.items'/>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
import SideBar from '@/components/index/account/Sidebar'
import { mapGetters } from 'vuex'
import PaymentInfo from '@/components/index/account/order/orderDetail/PaymentInfo'
import AddressInfo from '@/components/index/account/order/orderDetail/AddressInfo'
import ItemsInfo from '@/components/index/account/order/orderDetail/ItemsInfo'

export default {
    name: 'OrderDetail',
    components: { ItemsInfo, AddressInfo, PaymentInfo, SideBar },
    created() {
        this.$store.dispatch('initOrder', this.$route.params.orderId)
    },
    computed: {
        ...mapGetters({ order: 'getOrder' }),
    },
}
</script>

<style scoped lang='css'>

.order-detail-info {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0;
    border: solid rgb(226, 226, 226) 1px;
    border-radius: 12px;
    padding: 1rem 5rem 1rem 1.5rem;
}

.order-detail-info section {
    text-align: center;
    display: flex;
    flex-direction: column;
    color: #666666;
    font-weight: 600;
}

.order-detail-info span {
    color: black;
    font-size: 12px;
    font-weight: 300;
}

.order-detail-info-title {
    font-weight: 600;
    font-size: 18px;
    color: black;
}

.order-detail-summary {
    margin: 2rem 0;
}

.order-detail-summary-items{
    margin-top:2rem ;
}


</style>