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
    data() {
        return {
            filter: {},
            sort: {},
        }
    },
    created() {
        this.$root.$on('filterOptions', filterOptions => {
            if (this.$route.name === 'home') {

                this.filter = filterOptions.filter
                this.sort = filterOptions.sort
                this.$store.dispatch('initProducts', { filter: this.filter, sort: this.sort })
            }

        }), this.$store.dispatch('initProducts', { filter: this.filter, sort: this.sort })
    },
    computed:{
        ...mapGetters({products:"getProducts"})
    }

}

</script>

<style scoped>

</style>
