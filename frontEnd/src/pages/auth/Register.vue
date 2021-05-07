<template>
 <div id="Register">
   <div class="row">
     <div class="col-lg-8   registerImage">

     </div>
     <div class="col-lg-4  my-auto mx-auto p-5">
       <form @submit.prevent="register">
         <div class="form-group">
           <input type="text" v-model="user.name" class="form-control"  placeholder="Full name" required minlength="5" maxlength="25"   >

         </div>
         <div class="form-group">
           <input type="email"  v-model="user.email"  class="form-control" aria-describedby="emailHelp"  placeholder="Email" pattern="^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$" required    >
         </div>
         <div class="form-group">
           <input type="password" v-model="user.password" class="form-control"  placeholder="Password"  required minlength="6" maxlength="14">
         </div>
         <div class="text-center">
           <button type="submit" class="btn rounded-pill pr-5 pl-5  btn-success">Create Account</button>
         </div>

         <div class="mt-4 text-center">
           <span class="orText bg-white"> Or </span>
           <hr class="position-relative">
           <router-link
           to="/auth/login"
           tag="a"
           class="text-success"
           >
             Sign In
           </router-link>
         </div>


       </form>
     </div>

   </div>
 </div>
</template>

<script>


import axios from 'axios'

export default {
name: "Register",
  data(){
  return {
    user:{
      name:"",
      email:"",
      password:""
    }
  }
  },
  methods:{
  register(){
        axios.post("auth/register",this.user)
        .then(res=>{
              console.log(res)
              console.log("geldi")
              this.$router.push("/auth/login")
              this.$store.dispatch("setMessage",{message:res.data.message,color:"success"})
        }).catch(err=>{
              this.$store.dispatch("setMessage",{message:err.response.data.message,color:"danger"})
        })

  }
  }
}
</script>

<style scoped>

.row{
  height:100vh;
  width: 100%;
  margin: 0;
}
.registerImage{
  background-image: url("../../assets/andreas-haslinger-WnBij2jMOzw-unsplash (1).jpg");
  background-size: cover;
  background-position: bottom;
}

hr{
  position: absolute;
  bottom: 23px;
  z-index: -1;
}
.orText{
  padding: 0 20px;
  background-color: white;
}
</style>
