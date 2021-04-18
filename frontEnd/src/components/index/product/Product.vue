<template>
    <div>
        <div class='card'>
            <div class='card-img-top'>
                <img :src='`http://localhost:5000/assets/images/productImages/${product.image}`' class='img-fluid'
                     alt=''>
                <div class='black-fon'>
                    <button @click='quickView' class='btn quick-view'>Quick View</button>
                </div>

            </div>
            <div class='card-body text-center'>
                <p class='product-name-wrapper'>
                    <router-link
                        :to="{name:'product-details',params:{slugProduct:product.slugProduct}}"
                        tag='a'
                        class='product-name'
                    >
                        {{ product.name }}
                    </router-link>
                </p>

                <p class='product-price'><b>${{ product.price }}</b></p>
                <button class='add-to-cart-button btn btn-sm btn-block'> ADD TO CART</button>
            </div>
        </div>

    </div>


</template>

<script>
import QuickView from '@/components/index/product/QuickView'

export default {

    name: 'Product',
    props: ['product'],
    data() {
        return {
            quickViewComponent: null,
        }
    },
    methods: {
        quickView() {
            this.$root.$emit('quickView', { component: QuickView, slugProduct: this.product.slugProduct })
            /*document.querySelector('body').style.setProperty("overflow","hidden")*/
        },
    },

}
</script>

<style scoped>
.product-name-wrapper {
    line-height: 21px;
    height: 41px;
    overflow: hidden;
}

.product-name {
    color: black;
    text-transform: uppercase;

}

.product-price {
    margin-bottom: 22px;
}

.card {
    border: none !important;
}

.add-to-cart-button {
    background-color: #0177C1;
    color: #ffffff;
    font-size: 10px !important;
    font-family: inherit !important;
    height: 25px;
}

.card-img-top {
    height: 220px;
}

.card-img-top:hover .quick-view, .black-fon {
    visibility: visible;
    opacity: 1;
}

.card-img-top:hover .black-fon {
    visibility: visible;
    opacity: 1;
}

.card-img-top img {
    position: absolute;
}

.black-fon {
    position: relative;
    width: 100%;
    height: 100%;
    visibility: hidden;
    background: rgba(0,0,0,.2);
    opacity: 0;
    z-index: 2;
    transition: all .5s;
}

.quick-view {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    background-color: #FBF2F6;
    visibility: hidden;
    opacity: 0;
    z-index: 3;
    transition: all .5s;

}

</style>
