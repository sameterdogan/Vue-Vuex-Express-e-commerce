<template>
  <div class="container">

    <div class="mx-auto w-75" >
       <validation-observer v-slot="{ handleSubmit }">
         <form @submit.prevent="handleSubmit(addCategory)">
             <validation-provider name="Category" rules="required|max:15|min:3" v-slot="{ errors }">
           <div class="form-group">
             <input type="text" v-model="category" class="form-control" placeholder="Kategori adı girin.">
             <span class="vee-validate-span">{{errors[0]}}</span>
           </div>
         </validation-provider>
              <button  type="submit" class="btn float-right btn-light my-4">Ekle</button>
         </form>
       </validation-observer>

    </div>
    <list-category/>
    <div v-if="message" class="message alert alert-danger">
      {{message}}
    </div>
  </div>
</template>

<script>
import ListCategory from "@/components/admin/category/listCategories/ListCategory";

export default {
  name:"AddCategory",
  components:{ListCategory},
  data:()=>{
    return{
      category:"",
      message:""
    }
  },
  methods:{
   async addCategory(){
     try {
      await  this.$store.dispatch("addCategory",this.category)
     }catch (err){
      this.message=err.response.data.message
       console.log(err.response)
     }

    }
  },
}
</script>
