<template>
    <div id='Login'>
        <div class='row'>
            <div class='col-lg-8 loginImage'>

            </div>

            <div class='col-lg-4 my-auto mx-auto p-5 text-center '>
                <i class='bi bi-emoji-sunglasses'></i>
                <form @submit.prevent='handleLogin' class='mt-5'>
                    <div class='form-group'>
                        <input type='text'
                               v-model='user.email'
                               name='email'
                               class='form-control'
                               placeholder='Email'>
                    </div>
                    <div class='form-group'>
                        <input type='password'
                               v-model='user.password'
                               name='password'
                               class='form-control'
                               placeholder='Password'>
                    </div>
                    <div class='text-center'>
                        <button type='submit' class='btn rounded-pill pr-5 pl-5  btn-success'>Sign in</button>
                    </div>

                    <div class='mt-4 text-center'>
                        <span class='orText bg-white'> Or </span>
                        <hr class='position-relative'>
                        <router-link
                            to='/auth/register'
                            tag='a'
                            class='text-success'
                        >
                            Create Account
                        </router-link>
                    </div>
                </form>
            </div>
        </div>


    </div>
</template>

<script>


export default {
    name: 'Login',
    data() {
        return {
            user: {
                email: '',
                password: '',
            },
        }
    },
    methods: {
        handleLogin() {
            this.$store.dispatch('login', this.user)
        },
    },
}
</script>

<style scoped>
.row {
    height: 100vh;
    width: 100%;
    margin: 0;
}

.loginImage {
    background-image: url("../../assets/andreas-haslinger-WnBij2jMOzw-unsplash (1).jpg");
    background-size: cover;
    background-position: bottom;
}

hr {
    position: absolute;
    bottom: 23px;
    z-index: -1;
}

.orText {
    padding: 0 20px;
    background-color: white;
}

.bi-emoji-sunglasses {
    font-size: 4rem;
}
</style>
