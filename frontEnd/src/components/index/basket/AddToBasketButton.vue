<template>
    <div>
        <button @click='qtyDown' class='btn qty-down shadow-none'>-</button>
        <input ref='qtyInput' class='text-center' type='text' disabled value='1' style='width: 80px'>
        <button @click='qtyUp' class='btn qut-up shadow-none'>+</button>
        <button class='btn btn-primary text-white'><i class='bi bi-cart-fill'></i> ADD TO CART</button>
    </div>

</template>

<script>
export default {
    name: 'AddToCardButton',
    props: ['product']
    ,
    methods: {
        qtyDown() {
            if (Number(this.$refs.qtyInput.value) > 1) {
                this.$refs.qtyInput.value = Number(this.$refs.qtyInput.value) - 1
            }

        },
        qtyUp() {
            if (Number(this.$refs.qtyInput.value) < this.$props.product.stock) {
                this.$refs.qtyInput.value = Number(this.$refs.qtyInput.value) + 1
            }
        },
    },
}
</script>

<style scoped>

</style>