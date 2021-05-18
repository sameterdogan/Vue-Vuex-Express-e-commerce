<template>
    <div class='modal-wrapper'>
        <div class='modal-cart'>
            <div class='row modal-cart-content'>
                <span @click='closeAddressModal' class='float-right close-modal'>&times;</span>
                <form class='new-address-modal-form'>
                    <div class='row'>
                        <div class='col-lg-6 col-md-6 col-sm-12 my-1'>
                            <label for='name'>Name</label>
                            <input type='text' v-model='address.name' id='name' class='form-control' aria-label='First name'>
                        </div>
                        <div class='col-lg-6 col-md-6 col-sm-12 my-1'>
                            <label for='surname'>Surname</label>
                            <input type='text' v-model='address.surname' id='surname' class='form-control'>
                        </div>
                    </div>
                    <div class='row '>
                        <div class='col-lg-6 col-md-6 col-sm-12 my-1'>
                            <label for='phone'>Phone</label>
                            <input type='tel'  v-model='address.phone' id='phone' v-mask="'####-###-####'"   class='form-control'>
                        </div>
                        <div class='col-lg-6 col-md-6 col-sm-12 my-1'>
                            <label for='citySelect'>City</label>
                            <select @change='cityChange()'
                                    id='citySelect'
                                    name='city'
                                    class='form-control'
                                    v-model='address.city'>
                                <option v-for='city in cities'
                                        :value='{cityId:city.id,cityName:city.city}'
                                        :key='city.id'
                                >
                                    {{ city.city }}
                                </option>
                            </select>
                        </div>
                    </div>
                    <div class='row'>
                        <div class='col-lg-6 col-md-6 col-sm-12 my-1'>
                            <label for='districtSelect'>District</label>
                            <select id='districtSelect'
                                    @change='districtChange()'
                                    disabled
                                    name='district'
                                    class='form-control'
                                    v-model='address.district'>

                                <option v-for='district in counties'
                                        :key='district.id'
                                        :value='{districtId:district.id,districtName:district.district}'
                                >
                                    {{ district.district }}
                                </option>
                            </select>
                        </div>
                        <div class='col-lg-6 col-md-6 col-sm-12 my-1'>
                            <label for='neighborhoodSelect'>Neighborhood</label>
                            <select
                                id='neighborhoodSelect'
                                name='neighborhood'
                                v-model='address.neighborhood'
                                disabled
                                class='form-control'>
                                <option v-for='neighborhood in neighborhoods'
                                        :key='neighborhood.id'
                                        :value='{neighborhoodId:neighborhood.id,neighborhoodName:neighborhood.neighborhood}'>
                                    {{ neighborhood.neighborhood }}
                                </option>
                            </select>
                        </div>
                    </div>
                    <div>
                        <label for='address'>Address</label>
                        <textarea v-model='address.address' class='form-control mb-3' id='address' cols='30'
                                  rows='10'></textarea>
                    </div>
                    <button v-if='editAddress' type='button' @click='clickEditAddress' class='btn btn-block button-color'>
                        Save
                    </button>
                    <button v-else type='button' @click='clickNewAddress' class='btn btn-block button-color'>
                        Save
                    </button>


                </form>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    name: 'addressModal',
    props: ['editAddress'],
    data() {
        return {
            address: {
                city: {
                    cityName: null,
                    cityId: null,
                },
                district: {
                    districtName: null,
                    districtId: null,
                },
                neighborhood: {
                    neighborhoodName: null,
                    neighborhoodId: null,
                },
                name: null,
                surname: null,
                phone: null,
                address: null,
                zipCode: '3000',
            },
        }

    },
    created() {
        this.$store.dispatch('initCities')

    },
    mounted() {
        if (this.editAddress) {
            document.getElementById('districtSelect').removeAttribute('disabled')
            document.getElementById('neighborhoodSelect').removeAttribute('disabled')
            this.address = { ...this.editAddress }
            this.$store.dispatch('initCounties', Number(this.address.city.cityId))
            this.$store.dispatch('initNeighborhoods', Number(this.address.district.districtId))
        }
    }
    ,
    methods: {
        clickNewAddress() {
            this.$store.dispatch('addAddress', this.address)
        },
        clickEditAddress() {
            this.address._id = this.editAddress._id
            this.$store.dispatch('editAddress', this.address)
        }

        ,
        closeAddressModal() {
            this.$emit('closeAddressModal')
            document.querySelector('body').style.setProperty('overflow', 'visible')
        }
        ,
        cityChange() {
            this.$store.dispatch('initCounties', Number(this.address.city.cityId))
            document.getElementById('districtSelect').removeAttribute('disabled')
            document.getElementById('neighborhoodSelect').setAttribute('disabled', 'disabled')
            this.address.neighborhood = { neighborhoodId: null, neighborhoodName: null }
        }
        ,
        districtChange() {
            this.$store.dispatch('initNeighborhoods', Number(this.address.district.districtId))
            document.getElementById('neighborhoodSelect').removeAttribute('disabled')
        },
    }
    ,
    computed: {
        ...mapGetters({ cities: 'getCities' }),
        ...mapGetters({ counties: 'getCounties' }),
        ...mapGetters({ neighborhoods: 'getNeighborhoods' }),
    },
    watch: {},
}
</script>

<style scoped>
textarea {
    height: 100px;
}

label {
    font-weight: 700;
    font-size: 12px;
    line-height: 16px;
}
</style>