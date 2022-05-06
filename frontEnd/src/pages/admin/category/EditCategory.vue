<template>
    <div class='container'>
        <div class='mx-auto w-75'>
            <validation-observer v-slot='{ handleSubmit }'>
                <form @submit.prevent='handleSubmit(editCategory)' class='text-white'>
                    <validation-provider name='category' rules='required|max:15|min:1' v-slot='{ errors }'>
                        <div class='form-group'>
                            <input v-model='category.category'
                                   type='text'
                                   class='form-control'
                                   placeholder='Category name'>
                            <span class='vee-validate-span'>{{ errors[0] }}</span>
                        </div>

                    </validation-provider>
                    <div class='button-container'>
                        <button type='submit' class='btn float-right btn-primary  my-4'>Save</button>
                        <router-link
                            to='/admin/category'
                            tag='button'
                            class='btn float-right btn-danger mx-2 my-4'
                        >
                            Cancel
                        </router-link>
                    </div>
                </form>
            </validation-observer>

        </div>
        <list-category />
    </div>
</template>

<script>
import ListCategory from '@/components/admin/category/listCategories/ListCategory'
import {mapGetters} from  "vuex"

export default {
    name: 'EditCategory',
    components: {
        ListCategory
    },
    created() {
        const categoryId = this.$route.params.categoryId
        this.$store.dispatch('initByCategoryId', categoryId)
    },
    methods: {
         editCategory() {
             this.$store.dispatch('editCategory', this.category)
        }
    }
    ,
    computed:{
        ...mapGetters({category:"getCategory"})
    },
     beforeRouteUpdate(to, from, next) {
         this.$store.dispatch('initByCategoryId', to.params.categoryId)
         next()

    }
}
</script>

<style scoped>

</style>
