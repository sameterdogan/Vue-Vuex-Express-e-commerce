<template>
    <div class='card order'>
        <div class='card-header order-header'>
            <ul class='order-list'>
                <li class='order-list-item'>
                    Order Date
                    <span>1 mayıs - 17:38</span>
                </li>
                <li class='order-list-item'>

                    Order Summary

                    <span>{{ order.items.length }} product</span>
                </li>
                <li class='order-list-item'>
                    Buyer
                    <span>{{ order.address.name }} {{order.address.surname }}</span>
                </li>
                <li class='order-list-item'>
                    Price
                    <span>{{ order.totalPrice }} $</span>
                </li>
                <li class='order-list-item'>
                    <button class='btn btn-sm order-detail-button '>Order Detail</button>
                </li>
            </ul>
        </div>
        <div class='card-body'>
            <div class='row align-items-center'>
                <div class='col-4'>
                   Ürün Hazırlanıyor
                </div>
                <div class='col-5'>
                    <img class='img-fluid order-item-img' v-for='item in order.items' :key='item._id' :src="`http://localhost:5000/assets/images/productImages/${item.image}`" alt='Not found image'>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'OrderItem',
    props:["order"]
}
</script>

<style scoped>
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
.order-item-img{
    width: 40px;
    height: 40px;
    margin: .5rem;
}
.order-detail-button{
    background-color:#0077C1 ;
    color: white;
    padding: .2rem 2rem;
}
</style>