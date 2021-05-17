<template>
    <div>
        <h4 class='reset-password-info'>Reset Password</h4>
        <form>
            <div class='form-group email'>
                <label for='currentPassword'>Current Password</label>
                <input type='password' id='currentPassword' class='form-control'>
            </div>
            <div class='form-group email'>
                <label for='newPassword'>New Password</label>
                <input type='password' id='newPassword' class='form-control'>
            </div>
            <div class='form-group email'>
                <label for='rePassword'>Re Password </label>
                <input type='password' id='rePassword' class='form-control'>
            </div>
            <button class='btn btn-block form-hover-button'>UPDATE</button>
        </form>
    </div>
</template>

<script>
export default {
    name: 'ResetPasswordForm',
}
</script>

<style scoped>
input {
    border: solid 1px #e6e6e6;
    box-shadow: none !important;
}

input:focus {
    box-shadow: 0 2px 2px -2px gray !important;
    border: solid 1px #e6e6e6;
}

label {
    color: #333;
    font-weight: 600;
    font-size: 14px;
}

.user-account-info h1 {
    font-size: 18px;
    font-weight: 600;
    color: #2a2a2a;
    margin-top: 8px;
}


.reset-password-info {
    margin-left: 3px;
    font-size: 16px;
    font-weight: 700;
    line-height: 24px;
    color: #0077C1;
}
</style>