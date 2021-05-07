import axios from 'axios'

const moduleAddress = {
    state: {
        cities: null,
        counties: null,
        neighborhoods:null,
        addresses:[],
        address:{}
    },
    mutations: {
        INIT_CITIES(state, city) {
            state.cities = city
        },

        INIT_COUNTIES(state, counties) {
            state.counties = counties
        },
        INIT_NEIGHBORHOODS(state,neighborhoods){
            state.neighborhoods=neighborhoods
        },
        INIT_ADDRESSES(state,addresses){
          state.addresses =addresses
        },
        INIT_ADDRESS(state,address){
          state.address=address
        },
        ADD_ADDRESS(state,address){
            state.addresses.push(address)
        }
    },
    actions: {
        initCities({ commit }) {
             axios({ url: '/json/city.json', baseURL: '' })
                .then(res => {
                    console.log(res.data.cities)
                    commit('INIT_CITIES', res.data.cities)
                })
        },
        initCounties({ commit }, cityId) {
             axios({ url: '/json/district.json', baseURL: '' })
                .then(res => {
                    console.log(res.data.counties)
                    const filterDistrict = res.data.counties.filter(district => district.city_id === cityId)
                    commit('INIT_COUNTIES', filterDistrict)
                })
        },
        initNeighborhoods({commit},districtId){
             axios({ url: '/json/neighborhood.json', baseURL: '' })
                .then(res => {
                    console.log(res.data.neighborhoods)
                    const filterNeighborhoods = res.data.neighborhoods.filter(neighborhood => neighborhood.district_id === districtId)
                    console.log(filterNeighborhoods)
                    commit('INIT_NEIGHBORHOODS', filterNeighborhoods)
                })
        },
        initAddresses({commit}){
            axios.get("address")
                .then(res=>{
                    commit("INIT_ADDRESSES",res.data.addresses)
                    console.log(res.data)
                })
        },
        initAddress({commit},addressId){
          axios.get(`address/${addressId}`)
              .then(res=>{
                  commit("INIT_ADDRESS",res.data.address)
                  console.log(res.data)
              })
        },
        addAddress({commit},address){
            axios.post("address/add-address",address)
                .then(res=>{
                    console.log(res.data)
                    commit("ADD_ADDRESS",res.data.addAddress)

                })
        }
    },

    getters: {
        getCities(state) {
            return state.cities
        },
        getCounties(state) {
            return state.counties
        },
        getNeighborhoods(state){
            return state.neighborhoods
        },
        getAddresses(state){
            return state.addresses
        },
        getAddress(state){
            return state.address
        }
    },
}

export default moduleAddress
