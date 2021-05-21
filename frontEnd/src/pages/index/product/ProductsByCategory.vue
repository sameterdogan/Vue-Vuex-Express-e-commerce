<template>
      <div class='container '>

            <div class='row'>
                  <div class='col-lg-3 new-arrivals'>
                        <list-new-arrival />
                  </div>
                  <div class='col-lg-9 col-md-12'>
                        <search-options />
                        <product-list-by-category/>

                  </div>
            </div>
      </div>
</template>

<script>
import SearchOptions from '@/components/index/product/SearchOptions'
import ListNewArrival from '@/components/index/product/NewArrivals/ListNewArrival'
import ProductListByCategory from '@/components/index/product/ProductListByCategory'
export default {
      name: 'ProductsByCategory',
      components:{SearchOptions,ListNewArrival,ProductListByCategory}
}
</script>

<style scoped>

</style>
