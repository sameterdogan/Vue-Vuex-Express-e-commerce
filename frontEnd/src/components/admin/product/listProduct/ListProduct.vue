<template>
    <div class='clearfix'>
        <table class='table table-dark table-striped text-center'>
            <thead>
            <tr>
                <th scope='col'> Name</th>
                <th scope='col'> Price</th>
                <th scope='col'> Stock</th>
                <th scope='col'> Category</th>
                <th scope='col'> Image</th>
                <th scope='col'> process</th>
            </tr>
            </thead>
            <tbody>
            <Product v-for='product in products' :key='product._id' :product='product' />
            </tbody>
        </table>
        <router-link
            to='/admin/add-product'
            tag='button'
            class='btn-dark btn text-info float-right  '>
            New Add
        </router-link>
    </div>
</template>

<script>
import Product from './Product'
import {mapGetters} from  "vuex"
export default {
    name: 'ListProduct',
    components: { Product },
    data() {
        return {
        }
    },
    created() {
        this.$store.dispatch('initAllProducts')
    },
    computed: {
        ...mapGetters({products:"getAllProducts"})
    },
}
</script>
<style>
table{
    align-items: center !important;
}
</style>