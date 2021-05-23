<template>

    <div class='row ' v-if='pagination.isEndIndex===false'>
        <div class='col-12 text-center'>
            <Button @click='showMoreProducts' class='btn btn-sm pagination-button '>Show More <i
                class='bi bi-arrow-right-short'></i></Button>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    name: 'ProductPagination',
    created() {
        console.log(this.pagination)
    },
    computed: {
        ...mapGetters({ pagination: 'getPagination' }),
        ...mapGetters({ productsLength: 'getProductsLength' }),
        ...mapGetters({ productsByCategoryLength: 'getProductsByCategoryLength' }),
    },
    methods: {
        showMoreProducts() {
            if (this.$route.name === 'all-products') {
                this.$store.commit('PRODUCTS_CHANGE_PAGINATION',this.productsLength)
                this.$store.dispatch('initProducts')
            } else if (this.$route.name === 'products-by-category') {
                this.$store.commit('PRODUCTS_CHANGE_PAGINATION',this.productsByCategoryLength)
                console.log(this.$route.params.slugCategory)
                this.$store.dispatch('initProductsByCategory',this.$route.params.slugCategory)
            }

        },

    },
}
</script>

<style scoped>
.pagination-button {
    color: #0077C1;
    border: solid #0077C1 1px;
    transition: all .5s;
    width: 20%;
    height: 31px;
}

.pagination-button:hover {
    background-color: #0077C1;
    color: white;
}

</style>