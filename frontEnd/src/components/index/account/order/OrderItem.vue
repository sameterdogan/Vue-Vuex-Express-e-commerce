<template>
    <div class='card order'>
        <div class='card-header order-header'>
            <ul class='order-list'>
                <li class='order-list-item order-date'>
                    Order Date
                    <span>1 mayıs - 17:38</span>
                </li>
                <li class='order-list-item order-summary'>

                    Order Summary

                    <span>{{ order.items.length }} product</span>
                </li>
                <li class='order-list-item'>
                    Buyer
                    <p class='m-0'>
                        <span class='order-name'>{{ order.address.name }} </span> <span class='order-surname'>{{ order.address.surname }}</span>
                    </p>
                </li>
                <li class='order-list-item order-price'>
                    Price
                    <span class='order-total-price'>{{ order.totalPrice }} $</span>
                </li>
                <li class='order-list-item'>
                    <router-link
                    :to='{name:"order-detail",params:{orderId:order._id}}'
                    tag='button'
                    class='btn btn-sm order-detail-button'
                    >
                        Order Detail
                    </router-link>
                </li>
            </ul>
        </div>
        <div class='card-body'>
            <div class='card-text border p-2'>
                <div class='row align-items-center'>
                    <div class='col-4'>
                        <order-status :orderStatus='order.status'/>
                    </div>

                    <div class='col-6'>
                        <img class='img-fluid order-item-img' v-for='item in order.items' :key='item._id'
                             :src='`http://localhost:5000/assets/images/productImages/${item.image}`'
                             alt='Not found image'>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
import OrderStatus from '@/components/cammon/OrderStatus'
export default {
    name: 'OrderItem',
    components: { OrderStatus },
    props: ['order'],

}
</script>

<style scoped>
.order {
    margin: 2rem 0;
}

.order-list {
    list-style: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0;
}

.order-list-item {
    display: flex;
    flex-direction: column;
    color: #666;
    font-weight: bold;
    font-size: 13px;
}

.order-list-item span {
    color: #333;
    text-overflow: ellipsis;
    overflow: hidden;
    font-weight: 400;
    white-space: nowrap;
}

.order-item-img {
    width: 40px;
    height: 40px;
    margin: .5rem;
}

.order-detail-button {
    background-color: #0077C1;
    color: white;
    padding: .2rem 2rem;
}
.order-total-price{
    color:#0077C1 !important; ;
}
.order-surname,.order-name{
    text-transform: capitalize;
}
</style>