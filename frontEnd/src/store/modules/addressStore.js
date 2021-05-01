import axios from 'axios'

const moduleAddress = {
    state: {
        provinces: null,
        counties: null,
    },
    mutations: {
        INIT_PROVINCES(state, province) {
            state.provinces = province
        },

        INIT_COUNTIES(state, counties) {
            state.counties = counties
        },
    },
    actions: {
        initProvinces({ commit }) {
            axios({ url: '/json/province.json', baseURL: '' })
                .then(res => {
                    console.log(res.data.provinces)
                    commit('INIT_PROVINCES', res.data.provinces)
                }).catch(err => console.log(err.response))
        },
        initCounties({ commit }, provinceId) {
            axios({ url: '/json/district.json', baseURL: '' })
                .then(res => {
                    console.log(res.data.counties)
                    const filterDistrict = res.data.counties.filter(district => district.province_id === provinceId)
                    commit('INIT_COUNTIES', filterDistrict)
                }).catch(err => console.log(err.response))
        },
    },

    getters: {
        getProvinces(state) {
            return state.provinces
        },
        getCounties(state) {
            return state.counties
        },
    },
}

export default moduleAddress
