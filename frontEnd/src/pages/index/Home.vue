<template>
    <div>
        <div class='header'>
            <img src='@/assets/banner.png' class='header-img' />
        </div>
        <div class='container'>
            <div class='featured-products'>
                <h1 class='text-center my-5'>FEATURED PRODUCTS</h1>
                <carousel
                    :per-page='4'
                    :autoplay='true'
                    :navigationEnabled="true"
                    :loop='true'
                    navigationPrevLabel="<i class='bi bi-arrow-left-short'></i>"
                    navigationNextLabel="<i class='bi bi-arrow-right-short'></i>"
                    :mouse-drag='true'>
                    <slide class='p-2' v-for='product in products' :key='product._id'>
                        <product :product='product' />
                    </slide>

                </carousel>
            </div>
            <div class='new-releases-products'>
                <h1 class='text-center my-5'>NEW RELEASES</h1>
                <carousel
                    :per-page='4'
                    :autoplay='true'
                    :navigationEnabled="true"
                    :loop='true'
                    navigationPrevLabel="<i class='bi bi-arrow-left-short'></i>"
                    navigationNextLabel="<i class='bi bi-arrow-right-short'></i>"

                    :mouse-drag='true'>
                    <slide class='p-2' v-for='product in products' :key='product._id'>
                        <product :product='product' />
                    </slide>

                </carousel>
            </div>
        </div>
    </div>

</template>

<script>
import { Carousel, Slide, } from 'vue-carousel'
import { mapGetters } from 'vuex'
import Product from '@/components/index/product/Product'
export default {
    name: 'Home',
    components: {
        Product,
        Carousel,
        Slide,
    },
    created() {

        this.$store.dispatch("initAllProducts")
    },
    computed:{
        ...mapGetters({products:"getAllProducts"})
    }
}
</script>

<style scoped>
.header-img{
    width: 100%;

}
</style>