import axios from 'axios'
import { router } from '@/router'

const moduleProduct = {
    state: {
        products: [],
        productsByCategory: [],
        newArrivals: [],
        product: {},
        relatedProducts: [],
    },
    mutations: {
        INIT_PRODUCTS(state, products) {
            state.products = products
        },
        INIT_NEW_ARRIVALS(state, newArrivals) {
            state.newArrivals = newArrivals
        },
        INIT_PRODUCTS_BY_CATEGORY(state, productsByCategory) {
            state.productsByCategory = productsByCategory
        },
        INIT_BY_SLUG_PRODUCT(state, product) {
            state.product = { ...product }
        },
        INIT_BY_SLUG_PRODUCT_RELATED_PRODUCTS(state, relatedProducts) {
            state.relatedProducts = relatedProducts
        },
        ADD_PRODUCT(state, product) {
            state.products.push(product)
        },
        EDIT_PRODUCT(state, product) {
            let index = state.products.findIndex(p => p._id === product._id)
            if (index > -1) {
                state.products[index] = product
            }
        },
        DELETE_PRODUCT(state, productId) {
            let index = state.products.findIndex(p => p._id === productId)
            if (index > -1) {
                state.products.splice(index, 1)
            }
        },
    },
    actions: {
        initProducts({ commit }, filterAndSortObject) {
            const filter = JSON.stringify(filterAndSortObject.filter)
            const sort = JSON.stringify(filterAndSortObject.sort)
            axios.get(`product?filter=${filter}&sort=${sort}`).then(res => {
                console.log(res)
                commit('INIT_PRODUCTS', res.data.products)
            })
        },
        initProductsByCategory({ commit }, filterObjectAndCategory) {
            const filter = JSON.stringify(filterObjectAndCategory.filter)
            const sort = JSON.stringify(filterObjectAndCategory.sort)
            const slugCategory = filterObjectAndCategory.slugCategory
            axios
                .get(
                    `product/category/${slugCategory}?filter=${filter}&sort=${sort}`
                )
                .then(res => {
                    console.log(res)
                    commit(
                        'INIT_PRODUCTS_BY_CATEGORY',
                        res.data.productsByCategory
                    )
                })
                .catch(err => {
                    console.log(err.response)
                })
        },
        initNewArrivals({ commit }) {
            axios
                .get('product/new-arrivals')
                .then(res => {
                    commit('INIT_NEW_ARRIVALS', res.data.newArrivalsProducts)
                })
                .catch(err => {
                    console.log(err.response)
                })
        },
        initBySlugProduct({ commit }, slugProduct) {
            axios
                .get(`product/${slugProduct}`)
                .then(res => {
                    console.log(res)
                    commit('INIT_BY_SLUG_PRODUCT', res.data.product)
                    commit(
                        'INIT_BY_SLUG_PRODUCT_RELATED_PRODUCTS',
                        res.data.relatedProducts
                    )
                })
                .catch(err => {
                    commit('INIT_MESSAGE', {
                        message: err.response.data.message,
                        color: 'danger',
                    })
                    commit('INIT_BY_SLUG_PRODUCT', {})
                    console.log(err.response)
                })
        },
        addProduct({ commit }, productForm) {
            axios
                .post('product', productForm, {
                    headers: { 'Content-Type': 'multipart/form-data' },
                })
                .then(res => {
                    commit('ADD_PRODUCT', res.data.newProduct)
                    router.push('/admin')
                })
                .catch(err => {
                    console.log('gekdi')
                    commit('INIT_MESSAGE', {
                        message: err.response.data.message,
                        color: 'danger',
                    })

                    console.log(err.response)
                })
        },
        editProduct({ commit }, product) {
            axios
                .put(`product/${product.productId}`, product.productForm, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                })
                .then(res => {
                    console.log(res)
                    commit('EDIT_PRODUCT', res.data.editProduct)
                    router.push('/admin')
                })
                .catch(err => {
                    console.log('geldi')
                    console.log(err.response)
                })
        },
        deleteProduct({ commit }, productId) {
            axios
                .delete(`product/${productId}`)
                .then(res => {
                    console.log(res)
                    commit('DELETE_PRODUCT', productId)
                })
                .catch(err => {
                    console.log(err.response)
                })
        },
    },
    getters: {
        getProducts(state) {
            return state.products
        },
        getProduct(state) {
            return state.product
        },
        getRelatedProducts(state) {
            console.log(state.relatedProducts)
            return state.relatedProducts
        },
        getNewArrivals(state) {
            return state.newArrivals
        },
        getProductsByCategory(state) {
            console.log('computed tetiklendi')
            return state.productsByCategory
        },
    },
}

export default moduleProduct
