<template>
      <div class='container'>

            <div class='row'>
                  <div class='col-lg-3 new-arrivals'>
                    <list-new-arrival/>
                  </div>
                  <div class='col-lg-9 col-md-12 min-height'>
                        <search-options/>
                        <list-product/>
                       <product-pagination class='my-5' />
                  </div>
            </div>

      </div>
</template>

<script>
import ListProduct from '@/components/index/product/ListProduct'
import SearchOptions from '@/components/index/product/ProductFilterAndSort'
import ListNewArrival from '@/components/index/product/NewArrivals/ListNewArrival'
import ProductPagination from '@/components/index/product/ProductPagination'

export default {
      name: 'Home',
      components: { ProductPagination, ListProduct, SearchOptions,ListNewArrival },
}
</script>

<style >


</style>
