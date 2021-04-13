<template>

      <div class='row'>
            <Product v-for='product in products' :key='product._id' :product='product' />
      </div>
</template>

<script>
import Product from '@/components/index/product/Product'

export default {
      name: 'ProductList',
      components: { Product },
      data() {
            return {
                  filter: {},
                  sort: {},
                  products: [],
            }
      },
      created() {
            this.$root.$on('filterOptions', filterOptions => {
                   if(this.$route.name==="home"){

                         this.filter = filterOptions.filter
                         this.sort = filterOptions.sort
                         this.$store.dispatch('initProducts', { filter: this.filter, sort: this.sort }).then(() => {
                               this.products = this.$store.getters.getProducts
                         }).catch(err => {
                               console.log(err.response)
                         })
                   }

            }),
                  this.$store.dispatch('initProducts', { filter: this.filter, sort: this.sort })
                        .then(() => {
                              this.products = this.$store.getters.getProducts
                        }).catch(err => {
                        console.log(err.response)
                  })


      },

}

</script>

<style scoped>

</style>
