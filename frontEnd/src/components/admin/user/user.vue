<template>
    <tr>
        <td>{{user.name}}</td>
        <td>{{user.email}}</td>
        <td>{{user.role}}</td>
        <td v-if='user.role==="user"'>
            <button @click='makeAdmin' class='btn btn-sm btn-outline-light make-admin'>Make Admin</button>
        </td>
        <td v-else >
            <button @click='makeUser' class='btn btn-sm btn-outline-light make-user'>Make User</button>
        </td>
    </tr>
</template>

<script>
export default {
    name: 'user',
    props:["user"],
    methods:{
        makeAdmin(){
            this.$store.dispatch("makeAdmin",this.user._id)
        },
        makeUser(){
            this.$store.dispatch("makeUser",this.user._id)
        }
    }
}
</script>

<style scoped>

</style>