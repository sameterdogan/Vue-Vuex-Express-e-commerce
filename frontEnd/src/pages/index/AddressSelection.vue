<template>
    <div class='container'>
        <div class='row'>
            <div class='col-lg-8 col-md-7 list-address-wrapper'>
                <div @click='showNewAddress'    class='new-address-button'>
                    <i class="bi bi-plus new-address-button-icon"></i>
                    <p class='new-address-button-text'>Add new address</p>
                </div>
                <list-address/>
            </div>
            <div class='col-lg-4 col-md-5'>
                <order-summary/>
            </div>
        </div>
        <component :is='newAddress' @closeNewAddress='closeNewAddressModal'/>

    </div>
</template>

<script>
import OrderSummary from '@/components/index/cart/OrderSummary'
import ListAddress from '@/components/index/cart/ListAddress'
import NewAddress from '@/components/index/cart/NewAddress'
export default {
    name: 'AddressSelection',
    components: { NewAddress, ListAddress, OrderSummary },
    data(){
        return{
           newAddress:null
        }
    },
    methods:{
        showNewAddress(){
            this.newAddress="NewAddress"
        },
        closeNewAddressModal(){
            this.newAddress=null
        }
    }
}
</script>

<style scoped>
.new-address-button{
    width: 176px;
    height: 112px;
    border: solid 1px #ebebea;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: #ebebea;
    margin-top:1.5rem ;
}
.new-address-button:hover{
    cursor: pointer;
    background-color:#f5f5f5 ;

}
.new-address-button-icon{
    font-size: 2rem;

}
.new-address-button-text{
    font-size: 12px;
}
.list-address-wrapper{
    display: flex;
}
</style>