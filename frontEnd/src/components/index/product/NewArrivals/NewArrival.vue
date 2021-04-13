<template>
      <div >
         <div class='row new-arrival-row'>
               <div class='col-4'>
                     <img :src="`http://localhost:5000/assets/images/productImages/${newArrival.image}`" class='img-fluid' alt=''>
               </div>
               <div class='col-8'>
                     <div class='new-arrival-name-wrapper'>
                           <router-link
                                 :to="{name:'product-details',params:{slugProduct:newArrival.slugProduct}}"
                                 tag='a'
                                 class='new-arrival-name'
                           >
                                 {{newArrival.name}}
                           </router-link>
                     </div>

                     <p><b>${{newArrival.price}}</b></p>

               </div>
         </div>
      </div>
</template>

<script>
export default {
      name: 'NewArrival',
      props: ['newArrival'],

}
</script>

<style scoped>
.new-arrival-row{
      border-bottom: dotted #d6d1d1 1px;
      padding: 20px;
      margin: 0 2px;
}
.new-arrival-name-wrapper{
      line-height: 21px;
      height: 40px;
      overflow: hidden;
}
.new-arrival-name{
      color: black;
      text-transform: uppercase;

}
</style>
