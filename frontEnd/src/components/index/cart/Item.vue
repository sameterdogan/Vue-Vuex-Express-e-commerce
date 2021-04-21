<template>
<tr>
    <td>
        <div class='row'>
            <div class='col-3'>
                <img :src='`http://localhost:5000/assets/images/productImages/${item.product.image}`' class='img-fluid' style='width: 100px;height: 100px'/>

            </div>
            <div class='col-9'>
                {{item.product.name}}

            </div>
        </div>

    </td>
    <td>{{item.quantity}}</td>
    <td>{{item.product.price}}</td>
    <td>{{item.quantity*item.product.price}}</td>
</tr>

</template>

<script>
export default {
    name: 'Item',
    props:["item"]
}
</script>

<style scoped>

</style>