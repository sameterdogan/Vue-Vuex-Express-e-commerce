<template>

    <div class='container'>
        <div class='row'>
            <div class='col-lg-3 col-md-12 col-sm-3'>
                <side-bar />
            </div>
            <div class='col-lg-9 col-md-12 col-sm-9'>
                <div class='my-orders-info'>
                    <h1>My Orders</h1>
                </div>
                <list-order />
            </div>
        </div>
    </div>
</template>

<script>
import SideBar from '@/components/index/account/Sidebar'

import ListOrder from '@/components/index/account/order/listOrder'

export default {
    name: 'Profile',
    components: { ListOrder, SideBar },
}
</script>

<style scoped>
.my-orders-info {
    border: solid 1px #e6e6e6;
    padding: 1rem 1.5rem;
    margin-bottom: 2rem;
    border-radius: .5rem;
    margin-left: 1px;
    margin-right: 1px;

}

.my-orders-info h1 {
    font-size: 18px;
    font-weight: 600;
    color: #2a2a2a;
    margin-top: 8px;
}
</style>