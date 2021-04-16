<template>
    <tr>
        <td>{{ product.name }}</td>
        <td>{{ product.price }}</td>
        <td>{{ product.stock }}</td>
        <td>{{ product.category.category }}</td>
        <td><img :src='`http://localhost:5000/assets/images/productImages/${product.image}`' class='productImage'
                 alt=''></td>
        <td>
            <router-link
                :to="{name:'edit-product',params:{slugProduct:product.slugProduct}}"
                tag='button'
                class='btn btn-sm btn-outline-warning mr-2 '
            >
                Edit
            </router-link>
            <button @click='deleteProduct' class='btn btn-sm btn-outline-danger mr-2'>Delete</button>
            <button v-if='product.isNewRelease===false' @click='addNewReleaseProduct' class='btn btn-sm btn-outline-secondary'> Add new release</button>
        </td>
    </tr>
</template>

<script>
export default {
    name: 'Product',
    props: ['product'],
    methods: {
        deleteProduct() {
            this.$store.dispatch('deleteProduct', this.$props.product._id)
        },
        addNewReleaseProduct(){
            this.$store.dispatch("addNewRelease",this.$props.product._id)
        }
    },
}
</script>

<style scoped>
.productImage {
    width: 60px;
    height: 60px;
}

</style>
