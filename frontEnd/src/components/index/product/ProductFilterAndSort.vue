<template>
    <div class=''>
        <form ref='filterAndSortOptionsForm'>
            <ul class='filter-options'>
                <li class='first-wrapper mr-2  d-sm-flex'>
                    <div class='form-group mr-2 color'>
                        <select v-model='filter.color'
                                class='btn btn-sm btn-light' name='color'>
                            <option value='' selected> Color</option>
                            <option v-for='color in colors' :key='color' :value='color'>{{ color }}
                            </option>
                        </select>
                    </div>
                    <div class='form-group gender'>
                        <select v-model='filter.gender'
                                class='btn btn-sm btn-light' name='gender'>
                            <option value='' selected> Gender</option>
                            <option value='Male'>Male</option>
                            <option value='Female'>Female</option>
                            <option value='Other'>Other</option>
                        </select>
                    </div>
                </li>
                <li class='second-wrapper d-sm-flex'>

                    <div class='form-group mr-2 price'>
                        <select @change='priceParsing($event)'
                                class='btn btn-sm btn-light' name='price'>
                            <option value='0-500000' selected>Price range</option>
                            <option value='20-49'>$20 - $49</option>
                            <option value='50-99'> $50 - $99</option>
                            <option value='100-200'> $100 - $199</option>
                            <option value='200-5000'> $200 and more</option>
                        </select>
                    </div>
                    <div class='form-group sort'>
                        <select @change='sortParsing($event)' class='btn btn-sm btn-light' name='sortBy'>
                            <option value='' disabled selected>Sort By</option>
                            <option value='price-asc'>Price: Low To High</option>
                            <option value='price-desc'>Price: High To Low</option>
                            <option value='createdAt-desc'>Newest</option>
                            <option value='name-desc'>Name</option>
                        </select>
                    </div>
                </li>
            </ul>

            <button @click='ApplyFilter' type='button' class='btn btn-dark btn-sm mb-3  '> Apply Filter</button>
        </form>

    </div>
</template>

<script>
export default {
    name: 'ProductFilterAndSort',
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
        priceParsing(event) {
            const [low, high] = event.target.value.split('-')
            this.filter.price.$gte = Number(low)
            this.filter.price.$lte = Number(high)
        },
        sortParsing(event) {
            const [groupBy, sortBy] = event.target.value.split('-')
            this.sort.sortBy = sortBy
            this.sort.groupBy = groupBy
        },
        ApplyFilter() {
            this.$store.commit('PRODUCTS_CHANGE_PAGINATION', 0)
            this.$store.commit('PRODUCTS_CHANGE_SORT', this.sort)
            this.$store.commit('PRODUCTS_CHANGE_FILTER', this.filter)
            if (this.$route.name === 'all-products') {
                this.$store.commit('CLEAR_PRODUCTS_ARRAY')
                this.$store.dispatch('initProducts')
            } else if (this.$route.name === 'products-by-category') {
                this.$store.commit('CLEAR_PRODUCTS_BY_CATEGORY_ARRAY')
                this.$store.dispatch('initProductsByCategory', this.$route.params.slugCategory)
            }
        },
    }
    ,
    watch: {
        $route() {
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
        }
        ,
    }
    ,
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

select {
    width: 180px;
}

@media screen and (max-width: 768px) {
    select {
        width: 160px;
    }
}

@media screen and (max-width: 426px) {
    select {
        width: 140px;
    }
}

</style>
