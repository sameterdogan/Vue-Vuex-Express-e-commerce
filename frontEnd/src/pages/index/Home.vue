<template>
      <div class='container-fluid'>

            <div class='row'>
                  <div class='col-3'>
                    <list-new-arrival/>
                  </div>
                  <div class='col-9'>
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
