<template>
<div>
    {{result}}
</div>
</template>

<script>
export default {
    name: 'ResultCheckout',
    data(){
        return{
            result:null
        }
    },
    created() {
        this.result=JSON.parse(this.$route.query.paymentResult)
        if(this.result.status==="failure"){
            this.$store.dispatch("toCheckout")

        }else{
            console.log("successe geldi")
            this.$store.commit("RESET_CART")
            this.$store.commit("INIT_MESSAGE",{message:"Payment transaction is successful",color:"success"})
            this.$router.push({name:"cart-details"})
        }
    }
}
</script>

<style scoped>

</style>