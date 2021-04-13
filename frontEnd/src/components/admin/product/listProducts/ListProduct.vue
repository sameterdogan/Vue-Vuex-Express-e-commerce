<template>
      <div id='ListProduct'>
            <table class='table table-dark table-striped text-center'>
                  <thead>
                  <tr>
                        <th scope='col'> Name</th>
                        <th scope='col'> Price</th>
                        <th scope='col'> Stock</th>
                        <th scope='col'> Category</th>
                        <th scope='col'> İmage</th>
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
                  Yeni Ekle
            </router-link>

            <div class='clearfix'>

            </div>
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
                filter:{},
                sort:{}
            }
      },

       created() {
             this.$store.dispatch('initProducts',{filter:this.filter,sort:this.sort})
      },
      computed: {
            ...mapGetters({products:"getProducts"})
      },
}
</script>
<style>
table{
      align-items: center !important;
}
</style>
