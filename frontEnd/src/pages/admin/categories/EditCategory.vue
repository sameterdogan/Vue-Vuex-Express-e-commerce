<template>
      <div class='container'>
            <div class='mx-auto w-75'>
                  <validation-observer v-slot='{ handleSubmit }'>
                        <form @submit.prevent='handleSubmit(editCategory)'>
                              <validation-provider name='category' rules='required|max:15|min:3' v-slot='{ errors }'>
                                    <div class='form-group'>
                                          <input v-model='category.category'
                                                 type='text'
                                                 class='form-control'
                                                 placeholder='Kategori adı girin.'>
                                          <span class='vee-validate-span'>{{ errors[0] }}</span>
                                    </div>

                              </validation-provider>
                              <div class='button-container'>
                                    <button type='submit' class='btn float-right btn-primary  my-4'>Save</button>
                                    <router-link
                                          to='/admin/categories'
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

export default {
      name: 'EditCategory',
      components: {
            ListCategory,
      },
      data() {
            return {
                  category: {
                        _id: '',
                        category: '',
                  },
            }
      },
      async created() {
            try {
                  let categoryId = this.$route.params.categoryId
                  await this.$store.dispatch('getByCategoryId', categoryId)
                  this.category = { ...this.$store.getters.getCategory }
            } catch (err) {
                  console.log(err)
            }

      },
      methods: {
            async editCategory() {
                  try {
                        await this.$store.dispatch('editCategory', this.category)
                         this.$router.push('/admin/categories')
                  } catch (err) {
                        console.log(err.response)
                  }
            },
      }
      ,
      async beforeRouteUpdate(to, from, next) {
            try {
                  console.log('gedk')
                  await this.$store.dispatch('getByCategoryId', to.params.categoryId)
                  this.category = { ...this.$store.getters.getCategory }
                  next()
            } catch (err) {
                  console.log(err)
            }

      },
}
</script>

<style scoped>

</style>
