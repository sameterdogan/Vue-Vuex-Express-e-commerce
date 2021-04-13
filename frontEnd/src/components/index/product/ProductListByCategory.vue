<template>
    <div>
        <h4 class='category-name'>{{ slugCategory }}</h4>
        <hr class='category-name-hr'>
        <div class='row'>
            <Product v-for='product in productsByCategory' :key='product._id' :product='product' />
        </div>
    </div>


</template>

<script>
import Product from '@/components/index/product/Product'

export default {
    name: 'ProductsByCategory',
    components: { Product },
    data() {
        return {
            slugCategory: '',
            filter: {},
            sort: {},
            productsByCategory: []
        }
    },
    async created() {
        this.slugCategory = this.$route.params.slugCategory
        this.$root.$on('filterOptions', filterOptions => {
            if (this.$route.name === 'products-by-category') {
                this.filter = filterOptions.filter
                this.sort = filterOptions.sort
                this.$store.dispatch('initProductsByCategory', {
                    slugCategory: this.slugCategory,
                    filter: this.filter,
                    sort: this.sort
                }).then(() => {
                    this.productsByCategory = this.$store.getters.getProductsByCategory
                })

            }

        })
        await this.$store.dispatch('initProductsByCategory', {
            slugCategory: this.slugCategory,
            filter: this.filter,
            sort: this.sort
        })
        this.productsByCategory = this.$store.getters.getProductsByCategory


    },
    watch: {
        async $route(to) {
            console.log('route geldi geldi')
            console.log('geldi 1')
            this.filter = {}
            this.sort = {}
            this.slugCategory = to.params.slugCategory
            await this.$store.dispatch('initProductsByCategory', {
                slugCategory: this.slugCategory,
                filter: this.filter,
                sort: this.sort
            })
            this.productsByCategory = this.$store.getters.getProductsByCategory
            console.log(this.productsByCategory)


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
