<template>
      <div class='container-fluid my-5 p-5'>

            <div class='row'>
                  <div class='col-lg-3 new-arrivals'>
                    <list-new-arrival/>
                  </div>
                  <div class='col-lg-9 col-md-12'>
                        <search-options/>
                        <list-product/>

                  </div>
            </div>
      </div>
</template>

<script>
import ListProduct from '@/components/index/product/ListProduct'
import SearchOptions from '@/components/index/product/SearchOptions'
import ListNewArrival from '@/components/index/product/NewArrivals/ListNewArrival'

export default {
      name: 'Home',
      components: { ListProduct, SearchOptions,ListNewArrival },
      data() {
            return {
            }
      }
}
</script>

<style scoped>

</style>
