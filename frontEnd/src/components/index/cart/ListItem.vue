<template>
    <table class='table list-item'>
        <thead>
        <tr>
            <th>ITEMS</th>
            <th>PRICE</th>
            <th>QTY</th>
            <th>TOTAL</th>
        </tr>
        </thead>
        <tbody>
          <item v-for='item in cart.items' :key='item._id' :item='item'/>
        </tbody>

    </table>
</template>

<script>
import Item from '@/components/index/cart/Item'
import {mapGetters} from "vuex"
export default {
    name: 'ListItem',
    components: { Item },
    computed:{
        ...mapGetters({cart:"getCart"})
    }
}
</script>

<style scoped>
</style>