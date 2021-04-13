<template>
    <div class='container'>
        <div class='row '>
            <div class='col-6 text-center'>
                <img class='productDetails-image img-fluid '
                     :src='`http://localhost:5000/assets/images/productImages/${product.image}`' alt=''>
            </div>
            <div class='col-6'>
                <h1 class='productDetails-name productDetails-property '>{{ product.name }}</h1>
                <h5 class='productDetails-price productDetails-property '>Price: <span class='lead'>{{ product.price }} $</span>
                </h5>
                <h5 class='productDetails-color productDetails-property '>Color: <span
                    class='lead'>{{ product.color }}</span></h5>
                <h5 class='productDetails-gender productDetails-property '>Gender: <span
                    class='lead'>{{ product.gender }}</span></h5>
                <h5 class='productDetails-stock productDetails-property '>Availability:
                    <span class='lead' v-if='product.stock>0'> In stock</span>
                    <span v-else>Not in stock</span></h5>

                <span class='h5'>Quantity</span>
                <button @click='qtyDown' class='btn qty-down shadow-none'>-</button>
                <input ref='qtyInput' class='text-center' type='text' disabled value='1' style='width: 80px'>
                <button @click='qtyUp' class='btn qut-up shadow-none'>+</button>
                <button class='btn btn-primary text-white'> <i class="bi bi-cart-fill"></i> ADD TO CART</button>

            </div>
        </div>
        <div class='product-details-description-wrap'>
            <button class='product-details-description-button'>Description</button>
            <p class='product-details-description'>
                  {{product.description}}
            </p>
        </div>
    </div>

</template>

<script>
import { mapGetters } from 'vuex'

export default {
    name: 'ProductDetails',
    created() {
        this.$store.dispatch('initBySlugProduct', this.$route.params.slugProduct)
    },
    computed: {
        ...mapGetters({ product: 'getProduct' })
    },
    methods: {
        qtyDown() {
            if (Number(this.$refs.qtyInput.value) > 1) {
                this.$refs.qtyInput.value = Number(this.$refs.qtyInput.value) - 1
            }

        },
        qtyUp() {
            if (Number(this.$refs.qtyInput.value) < this.product.stock) {
                this.$refs.qtyInput.value = Number(this.$refs.qtyInput.value) + 1
            }
        }
    }
}
</script>

<style scoped>
.productDetails-name {
    text-transform: uppercase;
    margin-bottom: 1.5rem;
}

.productDetails-price {
    margin-bottom: 1.5rem;
}

.productDetails-property {
    margin-bottom: 1.5rem;
}
.product-details-description{
    border: solid #ececec 1px;
    padding: 1.5rem;
    min-height: 200px;
    font-family: "Arial";
    line-height: 35px;
    letter-spacing: 2px;
    color: rgb(0,0,0);
}
.product-details-description-button{
    background-color:white;
    color: black;
    font-weight: 700;
    border: solid #ececec 1px;
    border-bottom:none;
    padding: 1rem;
    margin-top: 4rem;
}
</style>
