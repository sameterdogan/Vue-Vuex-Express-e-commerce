<template>
    <div class='container my-4'>
        <nav class='DESKTOP-NAV'>
            <ul class='desktop-navbar'>
                <li class='desktop-navbar-item-wrap'>
                    <router-link
                        :to='{name:"all-products"}'
                        tag='button'
                        class='desktop-navbar-item'
                    >
                        ALL PRODUCTS
                    </router-link>
                </li>
                <li class='desktop-navbar-item-wrap'>
                    <router-link
                        to=''
                        tag='button'
                        class='desktop-navbar-item'
                    >
                        CATEGORIES<i class='bi bi-caret-down-fill'></i>
                    </router-link>
                    <div class='navbar-item-dropdown '>
                        <button v-for='category in categories' :key='category._id'
                                @click='toProductsByCategory(category.slugCategory)'
                                class='dropdown-item-button'>
                            {{ category.category }}
                        </button>
                    </div>
                </li>
                <li class='desktop-navbar-item-wrap'>
                    <router-link
                        to=''
                        tag='button'
                        class='desktop-navbar-item'
                    >
                        NEW ARRIVALS
                    </router-link>
                </li>
                <li class='desktop-navbar-item-wrap'>
                    <router-link
                        to=''
                        tag='button'
                        class='desktop-navbar-item'
                    >
                        TOP SELLERS
                    </router-link>
                </li>
            </ul>
        </nav>
    </div>

</template>

<script>
import { mapGetters } from 'vuex'

export default {
    name: 'NavBar',
    created() {
        this.$store.dispatch('initCategories')

    },
    computed: {
        ...mapGetters({ categories: 'getCategories' })
    },
    methods:{
        toProductsByCategory(slugCategory){

           this.$router.push({name:'products-by-category',params:{slugCategory}})
        }
    }
}
</script>

<style scoped>
.desktop-navbar {
    display: flex;
    list-style-type: none;
    justify-content: space-evenly;
}

.desktop-navbar-item {
    color: black;
    font-weight: 500;
    line-height: 1rem;
    letter-spacing: 2px;
    text-decoration: none;
    background-color: transparent;
    border: none;
}

.desktop-navbar-item-wrap:hover .navbar-item-dropdown {

    opacity: 1;
    visibility: visible;


}

.navbar-item-dropdown {
    z-index: 500;
    border: solid #818182 1px;
    opacity: 0;
    visibility: hidden;
    position: absolute;
    padding: 15px 0;
    transition: opacity .5s;
    background-color: white;
    min-width: 200px;
}

.dropdown-item-button {
    color: black;
    display: block;
    border: none;
    background-color: transparent;
    padding: 10px;
    text-align: left;
    width: 100%;
}

.dropdown-item-button:hover {
    background-color: #F9F9FA;
    transition: all .5s;
    color: #188BD2;
}
@media screen and (max-width: 768px) {
    .DESKTOP-NAV {
        display: none;
    }

}

</style>
