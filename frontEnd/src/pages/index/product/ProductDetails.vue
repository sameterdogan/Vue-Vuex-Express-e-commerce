<template>
    <div class='container'>
        <div class='row  product-details-wrap'>
            <div class='col-lg-6 col-md-6 col-sm-12 text-center'>
                <img class='product-details-image img-fluid '
                     :src='`http://localhost:5000/assets/images/productImages/${product.image}`' alt=''>
            </div>
            <div class='col-lg-6 col-md-6 col-sm-12'>
                <h1 class='product-details-name product-details-property '>{{ product.name }}</h1>
                <h5 class='product-details-price product-details-property '>Price: <span class='lead'>{{ product.price
                    }} $</span>
                </h5>
                <h5 class='product-details-color product-details-property '>Color: <span
                    class='lead'>{{ product.color }}</span></h5>
                <h5 class='product-details-gender product-details-property '>Gender: <span
                    class='lead'>{{ product.gender }}</span></h5>
                <h5 class='product-details-stock product-details-property '>Availability:
                    <span class='lead' v-if='product.stock>0'> In stock</span>
                    <span v-else>Not in stock</span></h5>

                <span class='h5'>Quantity</span>
               <add-to-card-button :product='product'/>

            </div>
        </div>
        <div class='product-details-description-wrap'>
            <button class='product-details-description-button'>Description</button>
            <p class='product-details-description'>
                {{ product.description }}
            </p>
        </div>
        <div>
            <carousel
                :per-page='3'
                :autoplay='true'
                :navigationEnabled="true"
                :loop='true'
                navigationNextLabel="<i class='bi bi-arrow-right-circle'></i>"
                navigationPrevLabel="<i class='bi bi-arrow-left-circle'></i>"
                :mouse-drag='true'>
                <slide class='p-2' v-for='relatedProduct in relatedProducts' :key='relatedProduct._id'>

                    <product :product='relatedProduct' />

                </slide>

            </carousel>
        </div>
    </div>

</template>

<script>
import { mapGetters } from 'vuex'
import { Carousel, Slide, } from 'vue-carousel'
import product from '@/components/index/product/Product'
import AddToCardButton from '@/components/index/cart/AddToCartButton'

export default {
    name: 'ProductDetails',
    components: {
        AddToCardButton,
        Carousel,
        Slide,
        product,
    }
    ,
    created() {
        this.$store.dispatch('initBySlugProduct', this.$route.params.slugProduct)
    },
    computed: {
        ...mapGetters({ product: 'getProduct' }),
        ...mapGetters({ relatedProducts: 'getRelatedProducts' })
    },
    watch: {
        $route(to) {
            const toSlugProduct = to.params.slugProduct
            this.$store.dispatch('initBySlugProduct', toSlugProduct)
        }
    },
}
</script>

<style >
.product-details-name {
    text-transform: uppercase;
    margin-bottom: 1.5rem;
}

.product-details-price {
    margin-bottom: 1.5rem;
}

.product-details-property {
    margin-bottom: 1.5rem;
}

.product-details-description {
    border: solid #ececec 1px;
    padding: 1.5rem;
    min-height: 200px;
    font-family: "Arial";
    line-height: 35px;
    letter-spacing: 2px;
    color: rgb(0, 0, 0);
}

.product-details-description-button {
    background-color: white;
    color: black;
    font-weight: 700;
    border: solid #ececec 1px;
    border-bottom: none;
    padding: 1rem;
    margin-top: 4rem;
}

</style>
