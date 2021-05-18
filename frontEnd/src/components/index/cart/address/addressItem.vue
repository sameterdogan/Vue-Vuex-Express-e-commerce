<template>
    <div class='address-wrapper'>
        <div class='address-option'>
            <div class="form-check">
                <input class="form-check-input address-radio" @change='changeAddress()' type="radio" :value='address._id' v-model='pickedAddress' name="address" :id="randomRadioId">
                <label class="form-check-label address-radio-label" :for="randomRadioId">
                    <p class='district '>{{address.district.districtName}} </p>
                    /
                    <p class='city'>{{address.city.cityName}} </p>

                </label>
            </div>
        </div>
        <div class='address-info-cart'>
            <span class='name'>{{address.name}} {{address.surname}}</span>
            <span class='phone'>{{address.phone}}</span>
            <span class='neighborhood'>{{address.neighborhood.neighborhoodName}}</span>
            <span class='province-district'>{{address.district.districtName}} / {{address.city.cityName}}</span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'addressItem',
    props:["address"],
    data(){
        return{
            randomRadioId:new Date()*Math.random(),
            pickedAddress:null
        }
    },
    methods:{
        changeAddress(){
            this.$store.dispatch("initAddress",this.pickedAddress)
        }
    }
}
</script>

<style >
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
    font-size: 12px;
    font-weight: 600;
    font-family: 'Source Sans Pro', 'Helvetica Neue', Arial, sans-serif;
    line-height: 16px;
    cursor: pointer;
    font-style: italic;
}
.address-radio-label p{
    display: inline-block;
    text-transform: lowercase;
    margin: 0;
}
.address-radio-label p::first-letter{
    text-transform: capitalize;
}



</style>