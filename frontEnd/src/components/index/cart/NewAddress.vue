<template>
    <div class='modal-wrapper'>
          <div class='modal-cart'>
                 <div class='row modal-cart-content'>
                    <div class='new-address-modal-title-wrapper'>
                        <span class='new-address-modal-title'>  New Address Create</span>
                        <span @click='closeQuickView' class='float-right close-modal'>&times;</span>
                    </div>
                     <form class='new-address-modal-form'>
                         <div class="row">
                             <div class="col">
                                 <input type="text" class="form-control" placeholder="First name" aria-label="First name">
                             </div>
                             <div class="col">
                                 <input type="text" class="form-control" placeholder="Last name">
                             </div>
                         </div>
                         <div class="row my-3">
                             <div class="col">
                                 <input type="tel" class="form-control" placeholder="Phone ">
                             </div>
                             <div class="col">
                                 <select name='povince' class='form-control' id='province'>
                                     <option value='istanbul'>istanbul</option>
                                 </select>
                             </div>
                         </div>
                         <div class="row">
                             <div class='col'>
                                 <select name='district' class='form-control' id='district'>
                                     <option value='Ümraniye'>Ümraniye</option>
                                 </select>
                             </div>
                             <div class='col'>
                                 <select name='neighborhood' class='form-control' id='neighborhood'>
                                     <option value=''>Kazım karabekir mah.</option>
                                 </select>
                             </div>
                         </div>
                         <div>
                             <textarea name='adresss' placeholder='Address' class='form-control my-3' id='' cols='30' rows='10'></textarea>
                         </div>
                         <button type='button' @click='handleNewAddress' class='btn btn-block button-color'>
                             Save
                         </button>
                     </form>
                 </div>
          </div>
    </div>
</template>

<script>
export default {
    name: 'NewAddress',
    methods:{
        handleNewAddress(){
            console.log("clisk")
        },
        closeQuickView() {
            this.$emit('closeNewAddress')
            document.querySelector('body').style.setProperty('overflow', 'visible')
        },
    }
}
</script>

<style scoped>

</style>