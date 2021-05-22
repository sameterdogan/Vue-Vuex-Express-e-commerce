<template>

    <div class='row'>
        <div @click='showNewAddress' class=' address-info-cart new-address-button'>
            <i class='bi bi-plus new-address-button-icon'></i>
            <span class='new-address-button-text'>Add new address</span>
        </div>
        <address-item v-for='address in addresses' :key='address._id' :address='address' />
        <component :is='newAddress' @closeAddressModal='closeAddressModal' />
    </div>

</template>

<script>
import AddressItem from '@/components/index/cart/address/addressItem'
import NewAddress from '@/components/index/cart/address/addressModal'
import { mapGetters } from 'vuex'

export default {
    name: 'ListAddress',
    components: { NewAddress, AddressItem },
    data() {
        return {
            newAddress: null,
        }
    },
    created() {
        this.$store.dispatch('initAddresses')
    },
    methods: {
        showNewAddress() {
            this.newAddress = 'NewAddress'
            document.querySelector('body').style.setProperty('overflow', 'hidden')
        },
        closeAddressModal() {
            this.newAddress = null
        },
    },
    computed: {
        ...mapGetters({ addresses: 'getAddresses' }),
    },
}
</script>

<style scoped>
.new-address-button {
    width: 176px;
    height: 112px;
    border: solid 1px #ebebea;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: #ebebea;
    margin: 1rem;
}

.new-address-button:hover {
    cursor: pointer;
    background-color: #f5f5f5;

}

.new-address-button-icon {
    font-size: 2rem;

}

.new-address-button-text {
    font-size: 12px;
}

.list-address-wrapper {
    display: flex;
}

</style>