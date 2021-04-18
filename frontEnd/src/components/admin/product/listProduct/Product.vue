<template>
   <tr>
     <td>{{product.name}}</td>
     <td>{{product.price}}</td>
     <td>{{product.stock}}</td>
     <td>{{product.category.category}}</td>
     <td><img :src="`http://localhost:5000/assets/images/productImages/${product.image}`" class="productImage" alt=""></td>
     <td>
       <router-link
       :to="{name:'edit-product',params:{slugProduct:product.slugProduct}}"
       tag="button"
       class="btn btn-sm btn-outline-warning mr-2"
       >
             <i class="bi bi-pencil-square"></i>
       </router-link>
       <button @click="deleteProduct" class="btn btn-sm btn-outline-danger"><i class="bi bi-trash"></i></button>
     </td>
   </tr>
</template>

<script>
export default {
  name: "Product",
  props:["product"],
  methods:{
    deleteProduct(){
      this.$store.dispatch("deleteProduct",this.$props.product._id)
    }
  }
}
</script>

<style scoped>
.productImage{
  width: 60px;
  height: 60px;
}

</style>
