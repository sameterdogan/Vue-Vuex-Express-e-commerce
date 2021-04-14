<template>
 <div>
   <table class="table table-bordered table-dark table-responsive-sm  table-striped my-5 text-center">
     <thead>
     <tr>
       <th scope="col"> Name</th>
       <th scope="col"> Operations</th>
     </tr>
     </thead>
     <tbody>
        <category v-for="category in categories" :key="category._id" :category="category" />
     </tbody>
   </table>
 </div>
</template>

<script>
import {mapGetters} from    "vuex"
import Category from "@/components/admin/category/listCategories/Category";
export default {
  name: "ListCategory",
  components: {Category},
  created() {
      this.$store.dispatch("initCategories")

  },
  computed:{
      ...mapGetters({categories:"getCategories"})
  }
}
</script>

<style scoped>

</style>
