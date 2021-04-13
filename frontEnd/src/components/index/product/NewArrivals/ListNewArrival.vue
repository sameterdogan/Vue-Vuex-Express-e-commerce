<template>
      <div>
            <h2 class='new-arrivals-title'>New Arrivals</h2>
            <hr class='new-arrivals-title-hr'>
            <new-arrival v-for='newArrival in newArrivals' :key='newArrival._id' :newArrival='newArrival' />
      </div>
</template>

<script>
import NewArrival from '@/components/index/product/NewArrivals/NewArrival'
import { mapGetters } from 'vuex'

export default {
      name: 'ListNewArrival',
      components: { NewArrival },

      created() {
            this.$store.dispatch('initNewArrivals')
      },
      computed:{
            ...mapGetters({newArrivals:"getNewArrivals"})
      }
}
</script>

<style scoped>

.new-arrivals-title-hr {
      background-color: black;
      width: 25%;
      margin-right: 100%;
}

</style>
