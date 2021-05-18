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
        <div class='col-3 text-center'>
            <p v-if='booleanStockError' class='message-stock-error ' > last {{stockErrorInfo.stock}} product ! </p>
            <p class='input-qty-wrapper'>
                <button @click='qtyDown' class='btn qty-down shadow-none'>-</button>
                <input ref='cartQtyInput' :class="{'input-stock-error':booleanStockError}" class='input-qty' type='text' disabled
                       :value='propsItem.quantity'>
                <button @click='qtyUp' class='btn qut-up shadow-none'>+</button>
            </p>

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
import { mapGetters } from 'vuex'

export default {
    name: 'Item',
    props: ['item'],
    data() {
        return {
            propsItem:JSON.parse(this.item),
            changeItem: {},
            stockErrorInfo:null,
            booleanStockError:false

        }
    },
    created() {
        this.checkStockError()
    },
    watch:{
        item(newItem){
            this.propsItem=JSON.parse(newItem)
        }
    },
    computed:{
      ...mapGetters({stockErrorProductsIdAndStock:"getStockErrorProductsInfo"})
    },
    methods: {
        checkStockError(){
            if (this.stockErrorProductsIdAndStock){
                for (let s=0;s<this.stockErrorProductsIdAndStock.length;s++){
                    if (this.stockErrorProductsIdAndStock[s]._id===this.propsItem._id){
                        this.stockErrorInfo=this.stockErrorProductsIdAndStock[s]
                        this.booleanStockError=true
                    }
                }
            }
        },
        qtyDown() {
            if (Number(this.$refs.cartQtyInput.value) > 1) {
                this.$store.commit('DECREASE_ITEM', this.propsItem._id)

                if (this.stockErrorInfo && Number(this.$refs.cartQtyInput.value)-1<=this.stockErrorInfo.stock){
                    this.$store.dispatch("deleteStockErrorProduct",this.propsItem._id)
                    this.booleanStockError=false
                }
            }
        },
        qtyUp() {
            if (Number(this.$refs.cartQtyInput.value) < this.propsItem.stock) {
                this.$store.commit("INCREASE_ITEM",this.propsItem._id)
            }else{
                this.$store.commit("INIT_MESSAGE",{message:`maximum ${this.booleanStockError?this.stockErrorInfo.stock: this.$refs.cartQtyInput.value} can be bought`,color:"danger"})
            }
        },
        deleteFromCart() {
            this.$store.commit('DELETE_FROM_CART', this.propsItem._id)

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
.input-stock-error{
    border: solid red 1px;
}
.message-stock-error{
    color: red;
    font-size: 13px;
    margin: 0;
}
</style>