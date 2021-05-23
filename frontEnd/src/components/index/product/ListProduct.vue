<template>

    <div class='row'>
        <div class='col-lg-3 col-md-4 col-6 my-2' v-for='product in products' :key='product._id'>
            <Product :product='product' />
        </div>
    </div>
</template>

<script>
import Product from '@/components/index/product/Product'
import { mapGetters } from 'vuex'

export default {
    name: 'ProductList',
    components: { Product },
    created() {
        this.$store.commit("CLEAR_PRODUCTS_QUERY_PROPS")
        this.$store.commit("CLEAR_PRODUCTS_ARRAY")
        this.$store.dispatch('initProducts')
    },
    computed: {
        ...mapGetters({ products: 'getProducts' }),
    },

}

</script>

<style scoped>

</style>
