<template>
    <div class='container'>
        <div class='row'>
            <div class='col-lg-3 col-md-12 col-sm-3'>
                <side-bar />
            </div>
            <div class='col-lg-9 col-md-12 col-sm-9'>
                <div class='row user-account-info'>
                    <h1>My User Information</h1>
                </div>
                <div class='row forms-wrapper'>
                    <div class='col-6 my-membership-col'>
                        <MyMembershipForm />
                    </div>
                    <div class='col-6 reset-password-col'>
                        <reset-password-form />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import MyMembershipForm from '@/components/index/account/myUserInformation/MyMembershipForm'
import ResetPasswordForm from '@/components/index/account/myUserInformation/ResetPasswordForm'
import SideBar from '@/components/index/account/Sidebar'

export default {
    name: 'MyUserInformation',
    components: { SideBar, ResetPasswordForm, MyMembershipForm },
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

.user-account-info {
    border: solid 1px #e6e6e6;
    padding: 1rem 1.5rem;
    margin-bottom: 2rem;
    border-radius: .5rem;

}

.user-account-info h1 {
    font-size: 18px;
    font-weight: 600;
    color: #2a2a2a;
    margin-top: 8px;
}

.my-membership-col {
    padding: 2rem 1.5rem;
    border: solid 1px #e6e6e6;
    border-radius: 6px 0 0 6px;
}

.reset-password-col {
    padding: 2rem 1.5rem;
    border: solid 1px #e6e6e6;
    border-radius: 0 6px 6px 0;
}


</style>