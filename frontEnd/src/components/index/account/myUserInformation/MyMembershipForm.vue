<template>
    <div>
        <h4 class='my-membership-info'>My Membership Information</h4>
        <form autocomplete='off'>
            <div class='row name-surname'>
                <div class='col-lg-6 col-md-6 col-sm-12 my-1'>
                    <label for='name'>Name</label>
                    <input type='text' id='name' class='form-control' aria-label='First name'>
                </div>
                <div class='col-lg-6 col-md-6 col-sm-12 my-1'>
                    <label for='surname'>Surname</label>
                    <input type='text' id='surname' class='form-control'>
                </div>
            </div>
            <div class='form-group email'>
                <label for='email'>E-Mail</label>
                <input type='email' id='email' class='form-control'>
            </div>
            <div class='form-group phone'>
                <label for='phone'>Phone</label>
                <input type='text' id='phone' class='form-control'>
            </div>
            <div class='form-group phone'>
                <label for='date'>Date Of Birth</label>
                <input type='date' id='date' class='form-control '>
            </div>
            <div class='form-check form-check-inline'>
                <input class='form-check-input' type='radio' name='gender' id='male'>
                <label class='form-check-label' for='male'>
                    Male
                </label>
            </div>
            <div class='form-check form-check-inline'>
                <input class='form-check-input' type='radio' name='gender' id='woman' checked>
                <label class='form-check-label' for='woman'>
                    Woman
                </label>
            </div>
            <button class='btn btn-block form-hover-button '>SAVE</button>
        </form>
    </div>

</template>

<script>
export default {
    name: 'MyMembershipForm',
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


.my-membership-info {
    margin-left: 3px;
    font-size: 16px;
    font-weight: 700;
    line-height: 24px;
    color: #0077C1;
}

</style>