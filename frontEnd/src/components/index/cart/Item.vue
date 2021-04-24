<template>
<div>
    <div class='row'>
        <div class='col-2'>
            <router-link
                :to="{name:'product-details',params:{slugProduct:propsItem.slugProduct}}"
                class='img-fluid cart-item-image'
                tag='img'
                :src='`http://localhost:5000/assets/images/productImages/${propsItem.image}`'
            ></router-link>

        </div>
        <div class='col-4'>
            <router-link
                :to="{name:'product-details',params:{slugProduct:propsItem.slugProduct}}"
                class='cart-item-name'
                tag='a'
            >
                {{ propsItem.name }}
            </router-link>
        </div>
        <div class='col-1'>
            ${{propsItem.price}}
        </div>
        <div class='col-3'>
            <button @click='qtyDown' class='btn qty-down shadow-none'>-</button>
            <input ref='cartQtyInput' class='input-qty' type='text' disabled
                   :value='propsItem.quantity'>
            <button @click='qtyUp' class='btn qut-up shadow-none'>+</button>

        </div>
        <div class='col-1'>
            <span ref='itemTotalPrice'> ${{propsItem.price*propsItem.quantity}}</span>

        </div>
        <div class='col-1'>
            <a class='deleteButton' @click='deleteFromCart'><i class='bi bi-x'></i></a>
        </div>
    </div>
    <hr>

</div>


</template>

<script>
export default {
    name: 'Item',
    props: ['item'],
    data() {
        return {
            propsItem:JSON.parse(this.item),
            changeItem: {},
        }
    },
    watch:{
        item(newItem){
            console.log(newItem)
            console.log("wathca geldi")
            this.propsItem=JSON.parse(newItem)
        }
    },
    created() {
      console.log(this.item)
    },
    methods: {
        qtyDown() {

            if (Number(this.$refs.cartQtyInput.value) > 1) {
                this.$store.commit('DECREASE_ITEM', this.propsItem._id)
            }

        },
        qtyUp() {
            if (Number(this.$refs.cartQtyInput.value) < this.propsItem.stock) {
                this.changeItem = { ...this.propsItem }
                this.changeItem['quantity'] = 1
                this.$store.commit('ADD_TO_CART', this.changeItem)
            }
        },
        deleteFromCart() {
            this.$store.commit('DELETE_FROM_CART', this.propsItem._id)
            this.$store.commit("INIT_MESSAGE",{message:"The product has been removed from the cart",color:"success"})
        },
    },

}
</script>

<style scoped>
.row{
    align-items: center;
    justify-content: center;
}
.cart-item-name {
    color: black;
    font-size: 12px;
}
.cart-item-image{
    cursor: pointer;
}

tbody > tr > td {
    /*  vertical-align: middle;*/
    text-align: left;
}

tbody > tr > td:not(.first-td) {
    text-align: center;
}

.deleteButton {
    color: black;
}

.deleteButton:hover {
    color: #0177C1;
    cursor: pointer;
}

.input-qty {
    width: 60px;
    text-align: center;
}


</style>