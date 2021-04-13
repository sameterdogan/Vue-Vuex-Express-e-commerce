<template>
      <div class='container'>
            <validation-observer v-slot='{ handleSubmit }'>
                  <form ref='editProductForm' @submit.prevent='handleSubmit(editProduct)'
                        class='w-75 mx-auto my-5 text-white '>
                        <validation-provider name='Product' rules='required|max:50|min:2' v-slot='{ errors }'>
                              <div class='form-group'>
                                    <label for='name'>Product name</label>
                                    <input v-model='product.name' type='text' name='name' class='form-control' id='name'
                                           placeholder='Product name'>
                                    <span class='vee-validate-span'>{{ errors[0] }}</span>
                              </div>
                        </validation-provider>
                        <validation-provider name='Description' rules='required|min:50' v-slot='{ errors }'>
                              <div class='form-group'>
                                    <label for='description'>Product description</label>
                                    <textarea v-model='product.description' class='form-control' name='description'
                                              id='description' cols='10' rows='10' placeholder='Product description'>
          </textarea>
                                    <span class='vee-validate-span'>{{ errors[0] }}</span>
                              </div>
                        </validation-provider>
                        <div class='row price-stock'>
                              <div class='col-lg-6 col-sm-12'>
                                    <validation-provider name='Price' rules='required|min_value:2' v-slot='{ errors }'>
                                          <div class='form-group'>
                                                <label for='price'>Price</label>
                                                <input autocomplete='off' v-model='product.price' class='form-control'
                                                       id='price' name='price' type='text' placeholder='Product price'>
                                                <span class='vee-validate-span'>{{ errors[0] }}</span>
                                          </div>
                                    </validation-provider>

                              </div>
                              <div class='col-lg-6 col-sm-12'>
                                    <validation-provider name='Stock' rules='required|min_value:2' v-slot='{ errors }'>
                                          <div class='form-group'>
                                                <label for='stock'>Stock</label>
                                                <input v-model='product.stock' class='form-control' id='stock'
                                                       name='stock' type='text' placeholder='Product stock'>
                                                <span class='vee-validate-span'>{{ errors[0] }}</span>
                                          </div>
                                    </validation-provider>
                              </div>
                        </div>
                        <validation-provider name='Category' rules='required' v-slot='{ errors }'>
                              <div class='form-group'>
                                    <label for='category'>Category</label>
                                  {{product}}
                                    <select v-model='product.category' class='form-control' name='category'
                                            id='category'>
                                          <option disabled value=''>Choose Category</option>
                                          <option v-for='category in categories' :value='category._id'
                                                  :key='category._id'>{{ category.category }}
                                          </option>
                                    </select>
                                    <span class='vee-validate-span'>{{ errors[0] }}</span>
                              </div>
                        </validation-provider>
                        <div class='row color-gender'>
                              <div class='col-lg-6 col-sm-12'>
                                    <validation-provider name='Color' rules='required' v-slot='{ errors }'>
                                          <div class='form-group'>
                                                <label for='color'>Color</label>
                                                <select v-model='product.color' class='form-control' id='color'
                                                        name='color'>
                                                      <option disabled value=''>Choose color</option>
                                                      <option value='Black'>Black</option>
                                                      <option value='White'>White</option>
                                                      <option value='Brown'>Brown</option>
                                                </select>
                                                <span class='vee-validate-span'>{{ errors[0] }}</span>
                                          </div>
                                    </validation-provider>
                              </div>
                              <div class='col-lg-6 col-sm-12'>
                                    <validation-provider name='gender' rules='required' v-slot='{ errors }'>
                                          <div class='form-group'>
                                                <label for='gender'>Gender</label>
                                                <select v-model='product.gender' class='form-control' id='gender'
                                                        name='gender'>
                                                      <option disabled value=''>Choose Gender</option>
                                                      <option value='Female'>Female</option>
                                                      <option value='Male'>Male</option>
                                                      <option value='Other'>Other</option>
                                                </select>
                                          </div>
                                          <span class='vee-validate-span'>{{ errors[0] }}</span>
                                    </validation-provider>
                              </div>
                        </div>
                        <div class='form-group'>
                              <label for='image'>Product image</label>
                              <img ref='productImage' src='' class='img-fluid' alt=''>
                        </div>
                        <validation-provider name='Image' rules='' v-slot='{ errors }'>
                              <div class='form-group'>
                                    <input @change='getFile' id='image' name='image'
                                           type='file' multiple>
                                    <span class='vee-validate-span'>{{ errors[0] }}</span>
                              </div>
                        </validation-provider>
                        <div class='button-container float-right'>
                              <router-link
                                    to='/admin'
                                    tag='button'
                                    class='btn btn-danger '
                              >
                                    Cancel
                              </router-link>
                              <button type='submit' class='btn btn-primary mx-2'>Update</button>
                        </div>

                  </form>
            </validation-observer>
      </div>
</template>

<script>
import {mapGetters} from     "vuex"
export default {
      name: 'EditProduct',
      data: () => {
            return {

            }
      },
       created() {
            this.$store.dispatch('initBySlugProduct', this.$route.params.slugProduct)
            this.$store.dispatch('initCategories')

      },
      computed:{
       ...mapGetters({product:"getProduct",categories:"getCategories"})
      },
      methods: {
            getFile(event) {
                  console.log(this.product.image)
                  let reader = new FileReader()
                  reader.onload = (event) => {
                        this.$refs.productImage.src = event.target.result
                  }
                  reader.readAsDataURL(event.target.files[0])
            },
            editProduct() {
                  const productForm = new FormData(this.$refs.editProductForm)
                  const productId = this.product._id
                  this.$store.dispatch('editProduct', { productForm,productId })
            },
      },
}
</script>

<style scoped>

</style>
