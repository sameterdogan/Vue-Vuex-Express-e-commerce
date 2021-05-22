import axios from 'axios'
import { router } from '@/router'

const moduleProduct = {
    state: {
        allProducts:[],
        products: [],
        productsByCategory: [],
        newArrivals: [],
        relatedProducts: [],
        product: {},
        quickViewProduct: {},
        queryProps:{
            sort:{},
            filter:{},
            pagination:{start:0,limit:3}
        }
    },
    mutations: {
        INIT_ALL_PRODUCTS(state,allProducts){
            state.allProducts=allProducts
        },
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
        INIT_QUICK_VIEW_PRODUCT(state, quickViewProduct) {
            state.quickViewProduct = quickViewProduct
        }
        ,
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
        CHANGE_SORT(state,sort){
            state.queryProps.sort=sort
        },
        CHANGE_FILTER(state,filter){
            state.queryProps.filter=filter
        },
        CHANGE_PAGINATION(state,pagination){
            state.queryProps.pagination=pagination
        }
    },
    actions: {
        initAllProducts({commit}){
            axios.get("product/allProducts")
                .then(res=>{
                    commit("INIT_ALL_PRODUCTS",res.data.allProducts)
                })
        }
        ,
        initProducts({ commit,state }) {
            const filter = JSON.stringify(state.queryProps.filter)
            const sort = JSON.stringify(state.queryProps.sort)
            const pagination=JSON.stringify(state.queryProps.pagination)
            console.log(filter)
            console.log(sort)
            axios.get(`product?filter=${filter}&sort=${sort}&paginationProps=${pagination}`).then(res => {
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
                    `product/category/${slugCategory}?filter=${filter}&sort=${sort}`,
                )
                .then(res => {
                    console.log(res)
                    commit(
                        'INIT_PRODUCTS_BY_CATEGORY',
                        res.data.productsByCategory,
                    )
                })
        },
        initNewArrivals({ commit }) {
            axios
                .get('product/new-arrivals')
                .then(res => {
                    commit('INIT_NEW_ARRIVALS', res.data.newArrivalsProducts)
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
                        res.data.relatedProducts,
                    )
                })
                .catch(() => {
                    commit('INIT_BY_SLUG_PRODUCT', {})
                })
        },
        initQuickViewProduct({ commit }, productId) {
              axios.get(`product/quick-view/${productId}`)
                  .then(res=>{
                      commit("INIT_QUICK_VIEW_PRODUCT",res.data.quickView)
                  })
        }
        ,
        addProduct({ commit }, productForm) {
            axios
                .post('product', productForm, {
                    headers: { 'Content-Type': 'multipart/form-data' },
                })
                .then(res => {
                    commit('ADD_PRODUCT', res.data.newProduct)
                    router.push('/admin')
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
        },
        deleteProduct({ commit }, productId) {
            axios
                .delete(`product/${productId}`)
                .then(res => {
                    console.log(res)
                    commit('DELETE_PRODUCT', productId)
                })
        },
    },
    getters: {
        getAllProducts(state){
          return state.allProducts
        },
        getProducts(state) {
            return state.products
        },
        getProduct(state) {
            return state.product
        },
        getRelatedProducts(state) {
            return state.relatedProducts
        },
        getNewArrivals(state) {
            return state.newArrivals
        },
        getProductsByCategory(state) {
            return state.productsByCategory
        },
        getQuickViewProduct(state){
            return state.quickViewProduct
        },
        getPagination(state){
            return state.queryProps.pagination
        }
    },
}

export default moduleProduct
