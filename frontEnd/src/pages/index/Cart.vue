<template>

    <div class='container'>
        <h1>SHOPPING CART</h1>
        <div class='row'>
            <div class='col-8'>
              <list-item/>
            </div>
            <div class='col-4'>
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
import ListItem from '@/components/index/cart/ListItem'
import { mapGetters } from 'vuex'

export default {
    name: 'Cart',
    components: { ListItem },
    computed:{
        ...mapGetters({totalPrice:"getTotalPrice"})
    }
}
</script>

<style scoped>

</style>