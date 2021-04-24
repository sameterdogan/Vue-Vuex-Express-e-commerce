<template>

    <div class='container'>
        <h2 class='cart-title'>SHOPPING CART</h2>
        <hr class='cart-title-hr'>
        <div class='row'>
            <div class='col-lg-8'>
                <item v-for='item in items' :key='item._id' :item='JSON.stringify(item)' />
            </div>
            <div class='col-lg-4'>
              <div class='cart'>
                  <div class='card-header'>
                      ORDER SUMMARY
                  </div>
                  <div class='card-body'>
                      <h4><span>TOTAL</span>  <span class='float-right'>$ {{totalPrice}}</span></h4>
                      <button class='btn btn-block btn-primary btn-sm my-4'>PROCEED TO CHECKOUT</button>
                  </div>
              </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Item from '@/components/index/cart/Item'

export default {
    name: 'Cart',
    components: { Item, },
    computed:{
        ...mapGetters({ items: 'getItems' }),
        ...mapGetters({totalPrice:"getTotalPrice"})
    }
}
</script>

<style scoped>
.cart-title-hr {
    background-color: black;
    width: 8%;
    margin-right: 100%;
}
</style>