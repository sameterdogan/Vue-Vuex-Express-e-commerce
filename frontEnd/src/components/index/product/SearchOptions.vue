<template>
      <div class=''>
            <form ref='filterAndSortOptionsForm'>
                  <ul class='filter-options'>
                        <li class='ml-auto'>
                              <div class='form-group'>
                                    <select v-model='filter.color'
                                            class='btn btn-sm btn-light' name='color'>
                                          <option value='' selected> Color</option>
                                          <option v-for='color in colors' :key='color' :value='color'>{{ color }}
                                          </option>
                                    </select>
                              </div>
                        </li>
                        <li>
                              <div class='form-group'>
                                    <select v-model='filter.gender'
                                            class='btn btn-sm btn-light' name='gender'>
                                          <option value='' selected> Gender</option>
                                          <option value='Male'>Male</option>
                                          <option value='Female'>Female</option>
                                          <option value='Other'>Other</option>
                                    </select>
                              </div>
                        </li>
                        <li>
                              <div class='form-group'>
                                    <select @change='dataParsing($event)'
                                            class='btn btn-sm btn-light' name='price'>
                                          <option value='0-500000' selected>Price range</option>
                                          <option value='20-49'>$20 - $49</option>
                                          <option value='50-99'> $50 - $99</option>
                                          <option value='100-200'> $100 - $199</option>
                                          <option value='200-5000'> $200 and more</option>
                                    </select>
                              </div>
                        </li>
                        <li class=''>
                              <div class='form-group'>
                                    <select @change='dataParsing($event)' class='btn btn-sm btn-light' name='sortBy'>
                                          <option value='' disabled selected>Sort By</option>
                                          <option value='price-asc'>Price: Low To High</option>
                                          <option value='price-desc'>Price: High To Low</option>
                                          <option value='createdAt-desc'>Newest</option>
                                          <option value='name-desc'>Name</option>
                                    </select>
                              </div>
                        </li>
                        <li>
                              <button @click='ApplyFilter' type='button' class='btn btn-dark btn-sm '> Apply filter</button>
                        </li>

                  </ul>
            </form>

      </div>
</template>

<script>
export default {
      name: 'SearchOptions',
      data() {
            return {
                  colors: ['Black', 'Brown', 'White'],
                  filter: {
                        color: '',
                        gender: '',
                        price: {
                              $gte: 0,
                              $lte: 5000,
                        },

                  },
                  sort: {
                        groupBy: '',
                        sortBy: '',
                  },
            }
      },
      methods: {
            dataParsing(event) {
                  if (event.target.name === 'price') {
                        console.log('geldi')
                        const [low, high] = event.target.value.split('-')
                        this.filter.price.$gte = Number(low)
                        this.filter.price.$lte = Number(high)
                  }
                  if (event.target.name === 'sortBy') {
                        const [groupBy, sortBy] = event.target.value.split('-')
                        this.sort.sortBy = sortBy
                        this.sort.groupBy = groupBy
                  }
            },
            ApplyFilter() {
                  this.$root.$emit('filterOptions', { filter: this.filter, sort: this.sort })
            },
      },
      watch: {
            $route() {
                  console.log(this.$refs.filterAndSortOptionsForm)
                  this.$refs.filterAndSortOptionsForm.reset()
                  this.filter = {
                        color: '',
                        gender: '',
                        price: {
                              $gte: 0,
                              $lte: 5000,
                        },
                  }
                  this.sort = {
                        groupBy: '',
                        sortBy: '',
                  }
            },
      },
}
</script>


<style scoped>
.filter-options {
      display: flex;
      list-style-type: none;
      padding: 0;
}

.filter-options li {
      margin-right: 20px;
}


</style>
