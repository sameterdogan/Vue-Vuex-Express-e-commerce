<template>

    <div class='modal-wrapper'>
        <div class='modal-cart'>
            <div class='row modal-cart-content'>
                <button @click='closeQuickView' class='btn btn-outline-secondary btn-sm  close-modal'>
                    &times;
                </button>
                <div class='col-lg-6 col-md-6 col-12 text-center'>
                    <img class=' img-fluid '
                         :src='`http://localhost:5000/assets/images/productImages/${product.image}`' alt=''>
                </div>
                <div class='col-lg-6 col-md-6 col-12'>
                    <h1 class='quick-view-name quick-view-property '>{{ product.name }}</h1>
                    <h5 class='quick-view-price quick-view-property '>Price: <span class='lead'>{{ product.price
                        }} $</span>
                    </h5>
                    <h5 class='quick-view-color quick-view-property '>Color: <span
                        class='lead'>{{ product.color }}</span></h5>
                    <h5 class='quick-view-gender quick-view-property '>Gender: <span
                        class='lead'>{{ product.gender }}</span></h5>
                    <h5 class='quick-view-stock quick-view-property '>Availability:
                        <span class='lead' v-if='product.stock>0'> In stock</span>
                        <span v-else>Not in stock</span></h5>

                    <span class='h5'>Quantity</span>
                    <add-to-card-button :product='product' />
                </div>

            </div>
        </div>
    </div>


</template>

<script>
import { mapGetters } from 'vuex'
import AddToCardButton from '@/components/index/cart/AddToCartButton'

export default {
    name: 'QuickView',
    components: { AddToCardButton },
    props: ['productId'],
    created() {
        this.$store.dispatch('initQuickViewProduct', this.$props.productId)
    },
    methods: {
        closeQuickView() {
            this.$root.$emit('quickView', { component: '', productId: '' })
            document.querySelector('body').style.setProperty('overflow', 'visible')
        },
    },
    computed: {
        ...mapGetters({ product: 'getQuickViewProduct' }),
    },
}
</script>

<style>


@media screen and (max-width: 768px) {
    .modal-cart-content {
        padding: 2rem;
    }

    .quick-view-name {
        font-size: 30px;
        font-weight: bold;
    }
}

@media screen and (max-width: 426px) {
    .modal-cart-content {
        padding: 1rem;
    }

    .quick-view-name {
        font-size: 25px;
        font-weight: bold;
    }
}
</style>