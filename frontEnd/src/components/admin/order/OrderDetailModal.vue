<template>
    <div class='modal-wrapper'>
        <div class='modal-cart'>
            <div class='modal-cart-content'>
                <button @click='closeModal' class='btn btn-outline-secondary btn-sm  close-modal'>
                    &times;
                </button>
                <div class='row'>
                    <div class='col-lg-6 col-md-6 col-12 text-center'>
                        <address-info :address='order.address'/>
                    </div>
                    <div class='col-lg-6 col-md-6 col-12'>
                        <payment-info :order='order'   />
                    </div>
                </div>

                <div class='row'>
                    <div class='col-12'>
                        <items-info class='mx-auto' :items='order.items'/>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
import AddressInfo from '@/components/index/account/order/orderDetail/AddressInfo'
import PaymentInfo from '@/components/index/account/order/orderDetail/PaymentInfo'
import ItemsInfo from '@/components/index/account/order/orderDetail/ItemsInfo'
export default {
    name: 'showOrderDetail',
    components: { ItemsInfo, PaymentInfo, AddressInfo },
    props:["order"],
    methods:{
        closeModal(){
                this.$emit('closeOrderDetailModal')
                document.querySelector('body').style.setProperty('overflow', 'visible')
        }
    }
}
</script>

<style scoped>
.modal-cart-content{
    color: black !important;
}
</style>