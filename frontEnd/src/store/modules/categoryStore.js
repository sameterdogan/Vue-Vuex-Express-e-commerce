import axios from "axios"

const moduleCategory = {
    state: {
        categories: [],
        category: {},
    },
    mutations: {
        initCategories(state, categories) {
            state.categories = categories
        },
        initByCategoryId(state, category) {
            state.category = { ...category }
        },
        addCategory(state, category) {
            state.categories.push(category)
        },
        editCategory(state, category) {
            let index = state.categories.findIndex(c => c._id == category._id)
            if (index > -1) {
                state.categories[index] = category
            }
        },
        deleteCategory(state, categoryId) {
            let index = state.categories.findIndex(c => c._id == categoryId)
            if (index > -1) {
                state.categories.splice(index, 1)
            }
        },
    },
    actions: {
        async initCategories(context) {
            const res = await axios.get(`category`)
            console.log(res)
            context.commit("initCategories", res.data.categories)
            return res
        },
        async getByCategoryId(context, categoryId) {
            const res = await axios.get(`category/${categoryId}`)
            console.log(res.data.category)
            context.commit("initByCategoryId", res.data.category)
            return res
        },
        async addCategory(context, category) {
            const res = await axios.post(`category`, { category })

            console.log(res)
            context.commit("addCategory", res.data.newCategory)
            return res
        },
        async editCategory(context, category) {
            console.log(category)
            const res = await axios.put(`category/${category._id}`, {
                category: category.category,
            })
            console.log(res)
            context.commit("editCategory", res.data.editCategory)
            return res
        },
        async deleteCategory(context, categoryId) {
            const res = await axios.delete(`category/${categoryId}`)
            console.log(res)
            context.commit("deleteCategory", categoryId)
            return res
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
