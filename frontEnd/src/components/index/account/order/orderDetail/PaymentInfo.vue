<template>
    <div class='payment card'>
        <div class='card-header'>
            <h4 class='card-header-text'>
                Payment Information
            </h4>
        </div>
        <div class='card-body'>
            <ul class='payment-info-list'>
                <li class='payment-info-list-item'>
                    <span class='price-text'> Total Price</span>
                    <span class='price-amount'>$ {{order.totalPrice}}</span>
                </li>
<!--                <li class='payment-info-list-item'>
                    <span class='price-text'> Shipping Amount</span>
                    <span class='price-amount'>$ 199</span>
                </li>-->
            </ul>
            <p class='payment-total'>
                <span class='payment-total-text'> Total</span>
                <span class='payment-total-amount'>$ {{order.totalPrice}}</span>
            </p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'PaymentInfo',
    props:["order"],
    created() {
        console.log(this.order)
    }
}
</script>

<style scoped>
.payment-info-list {
    list-style: none;
    padding: 0;
}

.payment-info-list-item {
    border-bottom: solid #999 1px;
    padding: .5rem 0;
    display: flex;
    justify-content: space-between;
}

.payment-total {
    display: flex;
    justify-content: space-between;
}

.payment-total-text {
    color: #333333;
}

.payment-total-amount {

    color:#0077C1 ;
    font-weight: 600;
    font-size: 14px;
}

.price-text {
    color: #666666;
    font-size: 12px;
}

.price-amount {
    color: #333333;
    font-weight: 600;
}

.card {
    min-height: 250px;
}
.card-header-text{
    font-weight: 600;
    font-size: 14px;
    color: #333333;
}
</style>