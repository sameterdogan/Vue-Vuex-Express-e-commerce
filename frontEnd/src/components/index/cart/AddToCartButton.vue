<template>
    <div>
        <button @click='qtyDown' class='btn qty-down shadow-none'>-</button>
        <input ref='qtyInput' class='text-center' type='text' disabled value='1' style='width: 80px'>
        <button @click='qtyUp' class='btn qut-up shadow-none'>+</button>
        <button @click='addToCart' class='btn btn-primary text-white'><i class='bi bi-cart-fill'></i> ADD TO CART</button>
    </div>

</template>

<script>
export default {
    name: 'AddToCardButton',
    props: ['product'],
    data(){
        return {
            item:{}
        }
    }
    ,
    methods: {
        qtyDown() {
            if (Number(this.$refs.qtyInput.value) > 1) {
                this.$refs.qtyInput.value = Number(this.$refs.qtyInput.value) - 1
            }

        },
        qtyUp() {
            if (Number(this.$refs.qtyInput.value) < this.product.stock) {
                this.$refs.qtyInput.value = Number(this.$refs.qtyInput.value) + 1
            }
        },
        addToCart(){
            this.item={...this.product}
            this.item["quantity"]=Number(this.$refs.qtyInput.value)
            this.$store.commit("ADD_TO_CART",this.item)
            this.$store.commit("INIT_MESSAGE",{message:"Product has been added to cart",color:"success"})
        }
    },
}
</script>

<style scoped>

</style>