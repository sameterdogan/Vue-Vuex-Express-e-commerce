<template>
      <div class='col-4'>
          <div class='card'>
              <div class='card-header'>
                   <span class='address-district'>{{propsAddress.district.districtName}}</span>/<span>{{propsAddress.city.cityName}}</span>
              </div>
              <div class='card-body'>

                  <p class='address-buyer-full-name'>
                      <span class='address-buyer-name'>{{propsAddress.name}}</span>
                      <span class='address-buyer-surname'> {{propsAddress.surname}}</span>
                  </p>
                  <span class='address-address'>
                      {{propsAddress.address}}
                  </span>
                  <p class='address-district-and-city'>
                      <span>{{propsAddress.district.districtName}}</span>/<span>{{propsAddress.city.cityName}}</span>
                  </p>
                   <span class='address-phone'>
                       {{propsAddress.phone}}
                   </span>
              </div>
              <div class='buttons'>
                  <button @click='deleteAddress' class='btn delete-address-button '><i class="bi bi-trash"></i> Delete</button>
                  <button @click='openEditAddressModal' class='btn btn-sm edit-address-button'>Edit Address </button>
              </div>
          </div>
          <component :is='editAddressModal' :editAddress='propsAddress' @closeAddressModal='closeAddressModal' />
      </div>
</template>

<script>
import NewAddress from '@/components/index/cart/address/addressModal'
export default {
    name: 'AccountAddressListItem',
    components: { NewAddress },
    props:["address"],
    data(){
        return{
            propsAddress:JSON.parse(this.address),
            editAddressModal:null
        }
    },
    methods:{
        deleteAddress(){
            this.$store.dispatch("deleteAddress",this.propsAddress._id)
        },
        openEditAddressModal(){
           this.editAddressModal=NewAddress
            document.querySelector('body').style.setProperty('overflow', 'hidden')
        },
        closeAddressModal() {
            this.editAddressModal = null
        },
    },
    watch:{
        address(newAddress){
            this.propsAddress=JSON.parse(newAddress)
        }
    }

}
</script>

<style scoped>
.card{
    line-height: 24px;
}
.card-body{
    position: relative;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 12px;
}
.card-header span{
    font-weight: 700;
    font-size: 14px;
    line-height: 18px;
}
.address-buyer-full-name {
    text-transform: capitalize;
    line-height: 24px;
    font-weight: 700;
    font-size: 12px;
    margin: 0;
}

.address-address{
    text-transform: capitalize;
    line-height: 24px;
    font-size: 12px;
}
.address-district-and-city{
    margin: 0;
}
.buttons{
    display: flex;
    justify-content: space-around;
    padding: 1.5rem 0;
}
.delete-address-button{
   box-shadow: none;
    font-weight: 400;
    font-size: 12px;
    line-height: 18px;
}
.delete-address-button:hover{
    text-decoration: underline;
}
.edit-address-button{
    border: solid #0077C1 1px;
    color: #0077C1;
    font-size: 14px;
    line-height: 18px;
    transition: .5s all;
    padding: 6px 16px;
}
.edit-address-button:hover{
    background-color: #0077C1;
    color: white;

}
</style>