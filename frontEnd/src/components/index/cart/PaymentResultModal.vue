<template>
    <div class='modal-wrapper'>
        <div class='modal-cart'>
            <div class='row modal-cart-content'>
                <span @click='closePaymentResult' class='float-right close-modal'>&times;</span>
                <div v-if='paymentResult.status==="success"' class='success-payment-result'>
                    <i class='bi bi-bag-check-fill success-payment-icon'></i>
                    <h1  class='success-payment-title'>Thanks</h1>
                    <p class='success-payment-text'>Payment transaction has been completed successfully.</p>
                </div>
                <div v-else class='error-payment-result'>
                    <i class='bi bi-bag-x-fill error-payment-icon'></i>
                    <h1 class='error-payment-title'>Christ no !</h1>
                    <p class='error-payment-text'> {{paymentResult.errorMessage}}</p>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'PaymentResultModal',
    props: ['paymentResult'],
    methods: {
        closePaymentResult() {
             this.$emit("closePaymentResult")
        },
    },
}
</script>

<style scoped>

.success-payment-result,.error-payment-result{
    text-align: center;
    margin: .2rem auto;
}
.success-payment-icon{
    font-size: 6rem;
    color: #28a745;
}
.error-payment-icon{
    font-size: 6rem;
    color: red;
}
.success-payment-text,.error-payment-text{
    margin-top: 1rem;
}

</style>