<template>
    <div class='container'>
        <div class='row'>
            <div class='col-lg-3 col-md-12 col-sm-3'>
                <side-bar />
            </div>
            <div class='col-lg-9 col-md-12 col-sm-9'>
                <div class='address-info'>
                    <h1>Address Information</h1>
                    <button @click='openAddressModal' class='btn new-address-button'><i class='bi bi-plus-square plus'></i> New Address</button>
                    <component :is='newAddress'  @closeAddressModal='closeAddressModal' />
                </div>
                <div class='address-content'>
                     <account-address-list/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import SideBar from '@/components/index/account/Sidebar'
import AccountAddressList from '@/components/index/account/address/AccountAddressList'
import AddressModal from '@/components/index/cart/address/addressModal'

export default {
    name: 'address',
    components: { AddressModal, AccountAddressList, SideBar },
    data(){
        return{
            newAddress:null
        }
    },
    methods:{
        openAddressModal(){
            this.newAddress=AddressModal
            document.querySelector('body').style.setProperty('overflow', 'hidden')
        },
        closeAddressModal(){
            this.newAddress=null
        }
    }
}
</script>

<style scoped>

.address-info {
    display: flex;
    justify-content: space-between;
    border: solid 1px #e6e6e6;
    padding: 1rem 1.5rem;
    margin-bottom: 2rem;
    border-radius: .5rem;
    margin-left: 1px;
    margin-right: 1px;

}

.address-info h1 {
    font-size: 18px;
    font-weight: 600;
    color: #2a2a2a;
    margin-top: 8px;
}

.new-address-button {
    font-weight: 700;
    font-size: 14px;
    line-height: 18px;
    outline: none;
    box-shadow: none;
}

.plus {
    font-size: 1rem;
    margin-right: .4rem;
    color: #0077C1;
}
</style>