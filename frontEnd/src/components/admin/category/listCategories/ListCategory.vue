<template>
 <div>
   <table class="table table-bordered table-dark table-responsive-sm  table-striped my-5 text-center">
     <thead>
     <tr>
       <th scope="col"> Ad</th>
       <th scope="col"> İşlemler</th>
     </tr>
     </thead>
     <tbody>
        <category v-for="category in categories" :key="category._id" :category="category" />
     </tbody>
   </table>
 </div>
</template>

<script>
import Category from "@/components/admin/category/listCategories/Category";
export default {
  name: "ListCategory",
  components: {Category},
 async created() {
    try {
    await  this.$store.dispatch("initCategories")
    }catch (err){
      console.log(err)
    }

  },
  computed:{
    categories(){
      return this.$store.getters.getCategories
    }
  }
}
</script>

<style scoped>

</style>
