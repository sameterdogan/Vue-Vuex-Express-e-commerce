<template>
    <div>
        <h4 class='category-name'>{{ slugCategory }}</h4>
        <hr class='category-name-hr'>
        <div class='row'>
            <div class='col-lg-3 col-md-4 col-6' v-for='product in productsByCategory' :key='product._id'>
                <Product :product='product' />
            </div>

        </div>
    </div>


</template>

<script>
import { mapGetters } from 'vuex'
import Product from '@/components/index/product/Product'

export default {
    name: 'ProductsByCategory',
    components: { Product },
    data() {
        return {
            slugCategory: '',
        }
    },
    created() {
        this.slugCategory = this.$route.params.slugCategory
        this.$store.commit("CLEAR_PRODUCTS_QUERY_PROPS")
        this.$store.commit("CLEAR_PRODUCTS_BY_CATEGORY_ARRAY")
        this.$store.dispatch('initProductsByCategory', this.slugCategory)
    },
    computed: {
        ...mapGetters({ productsByCategory: 'getProductsByCategory' }),
    },
    watch: {
        $route(to) {
            this.slugCategory = to.params.slugCategory
            this.$store.commit("CLEAR_PRODUCTS_QUERY_PROPS")
            this.$store.commit("CLEAR_PRODUCTS_BY_CATEGORY_ARRAY")
            this.$store.dispatch('initProductsByCategory', this.slugCategory)
        },
    },
}
</script>

<style scoped>
.category-name-hr {
    background-color: #000000;
    width: 10%;
    margin-right: 100%;
}
</style>
