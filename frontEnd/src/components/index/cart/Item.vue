<template>
    <tr>
        <td class='first-td'>
            <div class='row '>
                <div class='col-3'>
                    <img :src='`http://localhost:5000/assets/images/productImages/${item.image}`'
                         class='img-fluid' style='width: 100px;height: 100px' alt='not found image' />

                </div>
                <div class='col-9 '>
                    <router-link
                        :to="{name:'product-details',params:{slugProduct:item.slugProduct}}"
                        class='product-name'
                        tag='a'
                    >
                        {{ item.name }}
                    </router-link>
                    <p class='my-3'>
                        <a class='deleteButton' @click='deleteFromCart'><i class='bi bi-x'></i>Delete</a>
                    </p>


                </div>
            </div>

        </td>
        <td class=''>{{ item.price }}</td>
        <td class=''>
            <button @click='qtyDown' class='btn qty-down shadow-none'>-</button>
            <input ref='cartQtyInput' class='input-qty' type='text' disabled min='1' :max='item.stock'
                   :value='item.quantity'>
            <button @click='qtyUp' class='btn qut-up shadow-none'>+</button>
        </td>
        <td class=''> {{ item.quantity * item.price }}</td>
    </tr>

</template>

<script>
export default {
    name: 'Item',
    props: ['item'],
    data() {
        return {
            changeItem: {},
        }
    },
    methods: {
        qtyDown() {

            if (Number(this.$refs.cartQtyInput.value) > 1) {
                this.$store.commit('DECREASE_ITEM', this.$props.item._id)
            }

        },
        qtyUp() {
            if (Number(this.$refs.cartQtyInput.value) < this.$props.item.stock) {
                this.changeItem = { ...this.$props.item }
                this.changeItem['quantity'] = 1
                this.$store.commit('ADD_TO_CART', this.changeItem)
            }
        },
        deleteFromCart() {
            this.$store.commit('DELETE_FROM_CART', this.$props.item._id)
        },

    },
}
</script>

<style scoped>
.product-name {
    color: black;
    font-size: 12px;
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