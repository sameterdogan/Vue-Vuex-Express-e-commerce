<template>
    <div class='address card'>
        <div class='card-header'>
            <h4 class='card-header-text'>
                Delivery Information
            </h4>

        </div>
        <div class='card-body address-content'>
            <p class='address-full-name'>
                <span> {{address.name}}</span> <span>{{address.surname}}</span>
            </p>
            <span>
               {{address.address}}
            </span>

            <span>
                {{address.district.districtName}}/{{address.city.cityName}}
            </span>


        </div>
    </div>
</template>

<script>
export default {
    name: 'addressInfo',
    props:["address"],
    created() {
        console.log(this.address)
    }
}
</script>

<style scoped>
.address-content {
    display: flex;
    flex-direction: column;


}

.address-content span {
    line-height: 24px;
    margin: .2rem 0;
    font-size: 13px;
    font-weight: 600;
}
.address-full-name span{
    text-transform: capitalize;
}

.card {
    min-height: 250px;
}

.card-header-text {
    font-weight: 600;
    font-size: 14px;
    color: #333333;
}
</style>