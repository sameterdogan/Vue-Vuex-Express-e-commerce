<template>
    <div>
        <div class='quick-view-wrapper'>


                <div class='quick-view-card'>
                    <div class='row quick-view-card-content'>
                        <button @click='closeQuickView' class='btn btn-outline-secondary btn-sm  close-quick-view'>
                            &times;
                        </button>
                        <div class='col-6 text-center'>
                            <img class='quick-view-image img-fluid '
                                 :src='`http://localhost:5000/assets/images/productImages/${product.image}`' alt=''>
                        </div>
                        <div class='col-6'>
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
                            <!--                    <button @click='qtyDown' class='btn qty-down shadow-none'>-</button>
                                                <input ref='qtyInput' class='text-center' type='text' disabled value='1' style='width: 80px'>
                                                <button @click='qtyUp' class='btn qut-up shadow-none'>+</button>
                                                <button class='btn btn-primary text-white'><i class='bi bi-cart-fill'></i> ADD TO CART</button>-->
                        </div>


                    </div>
                </div>
            </div>
        </div>


</template>

<script>
import { mapGetters } from 'vuex'

export default {
    name: 'QuickView',
    props: ['slugProduct'],
    created() {
        console.log(this.$props.slugProduct)
        this.$store.dispatch('initBySlugProduct', this.$props.slugProduct)
    },
    methods: {
        closeQuickView() {
            this.$root.$emit('quickView', { component: '', slugProduct: '' })
            document.querySelector('body').style.setProperty('overflow', 'visible')
        },
    },
    computed: {
        ...mapGetters({ product: 'getProduct' }),
    },
}
</script>

<style scoped>


.quick-view-wrapper {
    position: fixed;
    display: block;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color:rgba(0,0,0,.2) ;
    z-index: 10;
    opacity: 1;
}

.quick-view-card {
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 1300px;
    min-height: 400px;
    margin: 15% auto;
}

.quick-view-card-content {
    position: relative;
    width: 100%;
    background-color: #fff;
    background-clip:padding-box ;
    border-radius:.3rem ;
    padding: 4rem;
}

.close-quick-view {
    position: absolute;
    right: 20px;
    top: 20px;
    z-index: 3000;
}

</style>