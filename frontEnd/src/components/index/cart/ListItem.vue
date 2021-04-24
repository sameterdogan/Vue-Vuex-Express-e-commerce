<template>
    <div>
        <item v-for='item in cart.items' :key='item._id' :item='JSON.stringify(item)' />
    </div>

</template>

<script>
import Item from '@/components/index/cart/Item'
import { mapGetters } from 'vuex'

export default {
    name: 'ListItem',
    components: { Item },
    computed: {
        ...mapGetters({ cart: 'getItems' }),
    },
}
</script>

<style scoped>
thead > tr > th {
    font-size: 13px;
    font-weight: bold;
}

</style>