<template>
    <div class='modal-wrapper'>
        <div class='modal-cart'>
            <div class='row modal-cart-content'>
                <span @click='closeNewAddress' class='float-right close-modal'>&times;</span>
                <form class='new-address-modal-form'>
                    <div class='row'>
                        <div class='col-lg-6 col-md-6 col-sm-12 my-1'>
                            <label for=''>Name</label>
                            <input type='text' v-model='address.name' class='form-control' aria-label='First name'>
                        </div>
                        <div class='col-lg-6 col-md-6 col-sm-12 my-1'>
                            <label for=''>Surname</label>
                            <input type='text' v-model='address.surname' class='form-control' >
                        </div>
                    </div>
                    <div class='row '>
                        <div class='col-lg-6 col-md-6 col-sm-12 my-1'>
                            <label for=''>Phone</label>
                            <input type='tel' v-model='address.phone' class='form-control'>
                        </div>
                        <div class='col-lg-6 col-md-6 col-sm-12 my-1'>
                            <label for=''>City</label>
                            <select @change='cityChange()'
                                    name='city'
                                    class='form-control' id='city'
                                    v-model='address.chosenCity'>
                                <option v-for='city in cities'
                                        :value='{id:city.id,city:city.city}'
                                        :key='city.id'
                                >
                                    {{ city.city }}
                                </option>
                            </select>
                        </div>
                    </div>
                    <div class='row'>
                        <div class='col-lg-6 col-md-6 col-sm-12 my-1'>
                            <label for=''>District</label>
                            <select id='districtSelect'
                                    @change='districtChange()'
                                    disabled
                                    name='district'
                                    class='form-control'
                                    v-model='address.chosenDistrict'>

                                <option v-for='district in counties'
                                        :key='district.id'
                                        :value='{id:district.id,district:district.district}'
                                >
                                    {{ district.district }}
                                </option>
                            </select>
                        </div>
                        <div class='col-lg-6 col-md-6 col-sm-12 my-1'>
                            <label for=''>Neighborhood</label>
                            <select
                                id='neighborhoodSelect'
                                name='neighborhood'
                                v-model='address.chosenNeighborhood'
                                disabled
                                class='form-control'>
                                <option v-for='neighborhood in neighborhoods'
                                        :key='neighborhood.id'
                                        :value='{id:neighborhood.id,neighborhood:neighborhood.neighborhood}'>
                                    {{ neighborhood.neighborhood }}
                                </option>
                            </select>
                        </div>
                    </div>
                    <div>
                        <textarea  v-model='address.textAreaAddress' class='form-control my-3' id='' cols='30' rows='10'></textarea>
                    </div>
                    <button type='button' @click='handleNewAddress' class='btn btn-block button-color'>
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
    name: 'NewAddress',
    data() {
        return {
            address: {
                chosenCity: {
                    city: null,
                    id: null,
                },
                chosenDistrict: {
                    district: null,
                    id: null,
                },
                chosenNeighborhood: {
                    neighborhood: null,
                    id: null,
                },
                name:null,
                surname:null,
                phone:null,
                textAreaAddress:null,
            },
        }

    },
    created() {
        this.$store.dispatch('initCities')
    }
    ,
    methods: {
        handleNewAddress() {
              const newAddress={
                  name:this.address.name,
                  surname:this.address.surname,
                  phone:String(this.address.phone),
                  city:this.address.chosenCity.city,
                  district:this.address.chosenDistrict.district,
                  neighborhood:this.address.chosenNeighborhood.neighborhood,
                  zipCode:"3000",
                  address:this.address.textAreaAddress
              }
           this.$store.dispatch("addAddress",newAddress)
        }
        ,
        closeNewAddress() {
            this.$emit('closeNewAddress')
            document.querySelector('body').style.setProperty('overflow', 'visible')
        }
        ,
        cityChange() {
            this.$store.dispatch('initCounties', Number(this.address.chosenCity.id))
            document.getElementById("districtSelect").removeAttribute("disabled")
            document.getElementById("neighborhoodSelect").setAttribute("disabled","disabled")
            this.address.chosenNeighborhood={id:null,neighborhood: null}
        }
        ,
        districtChange() {
            this.$store.dispatch('initNeighborhoods', Number(this.address.chosenDistrict.id))
            document.getElementById("neighborhoodSelect").removeAttribute("disabled")
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
textarea{
    height: 100px;
}
label{
    font-weight:700 ;
    font-size: 12px;
    line-height: 16px;
}
</style>