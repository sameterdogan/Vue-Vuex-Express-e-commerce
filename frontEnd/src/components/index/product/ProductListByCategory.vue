<template>
    <div>
        <h4 class='category-name'>{{ slugCategory }}</h4>
        <hr class='category-name-hr'>
        <div class='row'>
            <div class='col-3' v-for='product in productsByCategory' :key='product._id'>
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
            filter: {},
            sort: {},
        }
    },
    created() {
        this.slugCategory = this.$route.params.slugCategory
        this.$root.$on('filterOptions', filterOptions => {
            if (this.$route.name === 'products-by-category') {
                this.filter = filterOptions.filter
                this.sort = filterOptions.sort
                this.$store.dispatch('initProductsByCategory', {
                    slugCategory: this.slugCategory,
                    filter: this.filter,
                    sort: this.sort
                })
            }

        })
        this.$store.dispatch('initProductsByCategory', {
            slugCategory: this.slugCategory,
            filter: this.filter,
            sort: this.sort
        })


    },
    computed: {
        ...mapGetters({ productsByCategory: 'getProductsByCategory' })
    },
    watch: {
        $route(to) {
            this.filter = {}
            this.sort = {}
            this.slugCategory = to.params.slugCategory
            this.$store.dispatch('initProductsByCategory', {
                slugCategory: this.slugCategory,
                filter: this.filter,
                sort: this.sort
            })


        }
    }
}
</script>

<style scoped>
.category-name-hr {
    background-color: #000000;
    width: 10%;
    margin-right: 100%;
}
</style>
