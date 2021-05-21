<template>
    <div v-if='orderStatus===0' class='text-center'>
        <i class='bi bi-hourglass-split text-success mr-2'></i>
        <span class='text-success'>Is preparing</span>
    </div>
    <div v-else-if='orderStatus===1' class=' text-center'>
        <i class='bi bi-x text-danger mr-2'></i>
        <span class='text-danger'>Rejected</span>
    </div>
    <div v-else-if='orderStatus===2' class='text-center'>
        <i class='bi bi-box-seam text-success mr-2'></i>
        <span class='text-success'>In cargo</span>
    </div>
    <div v-else-if='orderStatus===3' class='text-center'>
        <i class='bi bi-check2 text-success mr-2'></i>
        <span class='text-success'>Was delivered</span>
    </div>
</template>

<script>
export default {
    name: 'OrderStatus',
    props:["orderStatus"]
}
</script>

<style scoped>

</style>