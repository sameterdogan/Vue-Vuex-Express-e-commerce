<template>
    <div class='address-wrapper'>
        <div class='address-option'>
            <div class="form-check">
                <input class="form-check-input address-radio" type="radio" name="address" id="address-radio">
                <label class="form-check-label address-radio-label" for="address-radio">
                    Ümraniye/İstanbul
                </label>
            </div>
        </div>
        <div class='address-info-cart'>

            <span class='name'>Samet Erdoğan</span>
            <span class='phone'>535 971 0150</span>
            <span class='neighborhood'>Kazım Karabeki...</span>
            <span class='province-district'>Ümraniye/İstanbul</span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'addressItem',
}
</script>

<style scoped>
.address-info-cart{
    position: relative;
    width: 176px;
    height: 112px;
    border: 1px solid #ebebea;
    display: flex;
    flex-direction: column;
    padding: 10px 5px 10px 10px;
}
.address-info-cart span{
    margin: .3rem;
    font-size:12px;
    line-height: 13px;
}
.address-option{

}
.address-wrapper{
    width: 180px;
    height: 150px;
    margin: 0 1rem;
}
.address-radio-label{
    color: #0177C1;
    font-size: 13px;
}
</style>