<template>
    <div>
        <div class='card'>
            <div class=' product-image-wrapper d-flex '>
                <img :src='`http://localhost:5000/assets/images/productImages/${product.image}`' class='img-fluid'
                     alt=''>
                <div class='black-fon'>
                    <button @click='quickView' class='btn quick-view-button'>Quick View</button>
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
                <p class='product-price'><b>$ {{ product.price }}</b></p>
                <button @click='addToCart' class='add-to-cart-button btn btn-sm btn-block'> ADD TO CART</button>
            </div>
        </div>

    </div>


</template>

<script>
import QuickViewModal from '@/components/index/product/QuickViewModal'

export default {

    name: 'Product',
    props: ['product'],
    data() {
        return {
            item: {},
        }
    },
    methods: {
        quickView() {
            this.$root.$emit('quickView', { component: QuickViewModal, productId: this.product._id })
            document.querySelector('body').style.setProperty('overflow', 'hidden')
            this.$store.commit('INIT_QUICK_VIEW_PRODUCT')
        },
        addToCart() {
            this.item = { ...this.$props.product }
            this.item['quantity'] = 1
            this.$store.commit('ADD_TO_CART', this.item)
            this.$store.commit('INIT_MESSAGE', { message: 'Product has been added to cart', color: 'success' })
        },
    },

}
</script>

<style scoped lang='css'>
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
.product-image-wrapper{
    height: 220px;
    display: flex;
    align-items: center;
}
.product-image-wrapper:hover .quick-view-button {
    visibility: visible;
    opacity: 1;
}

.product-image-wrapper:hover .black-fon {
    visibility: visible;
    opacity: 1;
}

.product-image-wrapper img {
    position: absolute;
}

.black-fon {
    position: relative;
    width: 100%;
    height: 100%;
    visibility: hidden;
    background: rgba(0, 0, 0, .2);
    opacity: 0;
    z-index: 2;
    transition: all .5s;
}

.quick-view-button {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #FBF2F6;
    visibility: hidden;
    opacity: 0;
    z-index: 3;
    transition: all .5s;

}
@media screen and (max-width: 1024px) {
    .product-image-wrapper {
        height: 160px ;
    }
    .quick-view-button{
        font-size: 14px;
    }

}
@media screen and (max-width: 768px) {
    .product-image-wrapper {
        height: 150px ;
    }
    .quick-view-button{
        font-size: 13px;
    }

}
@media screen and (max-width: 426px) {
    .product-image-wrapper {
        height: 130px ;
    }

    .card-body {
        padding: 0;
    }
    .quick-view-button{
        font-size: 12px;
    }

}

</style>
