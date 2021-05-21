<template>
    <div>
        <table class='table table-dark table-striped text-center'>
            <thead>
            <tr>
                <th scope='col'> Name</th>
                <th scope='col'> E-mail</th>
                <th scope='col'> Role</th>
                <th scope='col'>Process</th>
            </tr>
            </thead>
            <tbody>
               <user v-for='user in users' :key='user._id' :user='user' />
            </tbody>
        </table>
    </div>
</template>

<script>
import User from '@/components/admin/user/user'
import { mapGetters } from 'vuex'

export default {
    name: 'listUser',
    components: { User },
    created() {
        this.$store.dispatch('initAllUsers')
    },
    computed: {
        ...mapGetters({ users: 'getAllUsers' }),
    },
}
</script>

<style scoped>

</style>