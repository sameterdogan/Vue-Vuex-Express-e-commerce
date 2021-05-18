<template>
    <div class='row'>
           <account-address-list-item  v-for='address in addresses' :key='address._id' :address='JSON.stringify(address)' />
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import AccountAddressListItem from '@/components/index/account/address/AccountAddressListItem'

export default {
    name: 'AccountAddressList',
    components: { AccountAddressListItem },
    created() {
        this.$store.dispatch("initAddresses")
    },
    computed:{
        ...mapGetters({addresses:"getAddresses"})
    }
}
</script>

<style scoped>

</style>