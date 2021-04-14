import axios from 'axios'
import { router } from '@/router'

const moduleCategory = {
    state: {
        categories: [],
        category: {},
    },
    mutations: {
        INIT_CATEGORIES(state, categories) {
            state.categories = categories
        },
        INIT_BY_CATEGORY_ID(state, category) {
            state.category = { ...category }
        },
        ADD_CATEGORY(state, category) {
            state.categories.push(category)
        },
        EDIT_CATEGORY(state, category) {
            let index = state.categories.findIndex(c => c._id === category._id)
            if (index > -1) {
                state.categories[index] = category
            }
        },
        DELETE_CATEGORY(state, categoryId) {
            let index = state.categories.findIndex(c => c._id === categoryId)
            if (index > -1) {
                state.categories.splice(index, 1)
            }
        },
    },
    actions: {
        initCategories({ commit }) {
            axios
                .get(`category`)
                .then(res => commit('INIT_CATEGORIES', res.data.categories))
                .catch(err => {
                    commit('INIT_MESSAGE', {
                        message: err.response.data.message,
                        color: 'danger',
                    })
                })
        },
        initByCategoryId({ commit }, categoryId) {
            axios
                .get(`category/${categoryId}`)
                .then(res => commit('INIT_BY_CATEGORY_ID', res.data.category))
                .catch(err => {
                    commit('INIT_MESSAGE', {
                        message: err.response.data.message,
                        color: 'danger',
                    })
                })
        },
        addCategory({ commit }, category) {
            axios
                .post(`category`, { category })
                .then(res => commit('ADD_CATEGORY', res.data.newCategory))
                .catch(err => {
                    commit('INIT_MESSAGE', {
                        message: err.response.data.message,
                        color: 'danger',
                    })
                })
        },
        editCategory({ commit }, category) {
            axios
                .put(`category/${category._id}`, {
                    category: category.category,
                })
                .then(res => {
                    commit('EDIT_CATEGORY', res.data.editCategory)
                    router.push('/admin/categories')
                })
                .catch(err => {
                    commit('INIT_MESSAGE', {
                        message: err.response.data.message,
                        color: 'danger',
                    })
                })
        },
        deleteCategory({ commit }, categoryId) {
            axios
                .delete(`category/${categoryId}`)
                .then(() => commit('DELETE_CATEGORY', categoryId))
                .catch(err => {
                    commit('INIT_MESSAGE', {
                        message: err.response.data.message,
                        color: 'danger',
                    })
                })
        },
    },
    getters: {
        getCategories(state) {
            return state.categories
        },
        getCategory(state) {
            return state.category
        },
    },
}

export default moduleCategory
