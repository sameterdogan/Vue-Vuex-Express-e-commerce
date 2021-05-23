<template>
      <div class='container '>

            <div class='row'>
                  <div class='col-lg-3 new-arrivals'>
                        <list-new-arrival />
                  </div>
                  <div class='col-lg-9 col-md-12 min-height'>
                        <search-options />
                        <product-list-by-category/>
                        <product-pagination/>

                  </div>
            </div>
      </div>
</template>

<script>
import SearchOptions from '@/components/index/product/ProductFilterAndSort'
import ListNewArrival from '@/components/index/product/NewArrivals/ListNewArrival'
import ProductListByCategory from '@/components/index/product/ProductListByCategory'
import ProductPagination from '@/components/index/product/ProductPagination'
export default {
      name: 'ProductsByCategory',
      components:{ ProductPagination, SearchOptions,ListNewArrival,ProductListByCategory}
}
</script>

<style scoped>

</style>
