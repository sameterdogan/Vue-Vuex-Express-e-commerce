<template>
  <tr id="Category">
    <td>{{category.category}}</td>
    <td>
      <button @click="$router.push({name:'edit-category',params:{categoryId:category._id}})" class="btn btn-sm btn-outline-warning mr-2" >
            <i class="bi bi-pencil-square"></i>
      </button>
      <button @click="deleteCategory" class="btn btn-sm btn-outline-danger"><i class="bi bi-trash"></i></button>
    </td>
  </tr>
</template>

<script>
export default {
  name: "Category",
  props:["category"],
  methods:{
    deleteCategory(){
        this.$store.dispatch("deleteCategory",this.$props.category._id)
    }
  }
}
</script>

<style scoped>

</style>
