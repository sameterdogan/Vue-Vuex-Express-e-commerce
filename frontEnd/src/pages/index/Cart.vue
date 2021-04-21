<template>

    <div class='container'>
        <h1>SHOPPING CART</h1>
        <div class='row'>
            <div class='col-8'>
              <list-item/>
            </div>
            <div class='col-4'>

            </div>
        </div>
    </div>
</template>

<script>
import ListItem from '@/components/index/cart/ListItem'
export default {
    name: 'Cart',
    components: { ListItem },
}
</script>

<style scoped>

</style>