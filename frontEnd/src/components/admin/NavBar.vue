<template>
    <div id='NavBar'>
        <nav class='navbar navbar-expand-sm navbar-light bg-light'>
            <div class='container'>
                <router-link
                    tag='a'
                    to='/auth/login'
                    class='navbar-brand'
                >
                    Logo
                </router-link>
                <button class='navbar-toggler ' type='button' data-bs-toggle='collapse' data-bs-target='#adminNavBar'>
                    <span class='navbar-toggler-icon'></span>
                </button>
                <div class='collapse navbar-collapse' id='adminNavBar'>
                    <div class='navbar-nav ml-auto'>
                        <router-link
                            to='/admin'
                            tag='a'
                            class='nav-link'
                        >
                            Products
                        </router-link>
                        <router-link
                            to='/admin/category'
                            tag='a'
                            class='nav-link'
                        >
                            Categories
                        </router-link>
                        <router-link
                            to='/admin/user'
                            tag='a'
                            class='nav-link'
                        >
                            Users
                        </router-link>
                        <router-link
                            to='/admin/order'
                            tag='a'
                            class='nav-link'
                        >
                            Orders
                        </router-link>
                        <button v-if='isLoggedIn' @click='logout' class='btn nav-link'>Logout</button>
                        <span v-if='isLoggedIn' class='nav-link'>Active user  : {{ user.name }}</span>
                    </div>
                </div>
            </div>
        </nav>
    </div>
</template>

<script>

export default {
    name: 'NavBar',
    created() {

    },
    methods: {
        logout() {
            this.$store.dispatch('logout')
            this.$router.push('/auth/login')
        },
    },
    computed: {
        isLoggedIn() {
            return this.$store.getters.authenticated
        },
        user() {
            return this.$store.getters.getUser
        },
    },
}
</script>

<style scoped>

</style>
