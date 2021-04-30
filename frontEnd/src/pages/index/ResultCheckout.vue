<template>
<div>
    s
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
        this.result=this.$route.params.result
    }
}
</script>

<style scoped>

</style>