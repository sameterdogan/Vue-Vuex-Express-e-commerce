<template>
  <div class="container">
    <div class="SITE-HEADER">

      <div class="header-logo">
        <img src="@/assets/logo.png" class="" alt="">
      </div>
      <div class="header-options">
        <button >
            <router-link
                tag='i'
                class='bi bi-person-fill header-icons'
                :to="{name:'account'}"
            ></router-link>
        </button>
        <button>
            <router-link
            tag='i'
            class='bi bi-cart-fill header-icons'
            :to="{name:'cart-details'}"

            ></router-link>
            <span class='badge badge-warning cart-count'> {{ cartCount }} </span>
        </button>
        <button >
          <i class="bi bi-list header-icons header-list-icon"></i>
        </button>


      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: "Header",
    computed:{
      ...mapGetters({cartCount:"getCartCount"}),
    }
}
</script>

<style scoped>
.SITE-HEADER{
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 2rem 1rem;
}
.header-logo img{
  width: 170px;
  height: 120px;
    object-fit: contain;
}
.header-options{
  display: flex;

}
.header-options button{
  border: none;
  background-color: transparent;
}
.header-icons{
  color:#0177C1 ;
  font-size: 1.5rem;

}
.header-list-icon{
  display: none;
}
.badge {
    padding-left: 9px;
    padding-right: 9px;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 9px;
}

.cart-count {
    font-size: 12px;
    background: black;
    color: #fff;
    padding: 0 5px;
    vertical-align: top;
    margin-left: -10px;
}
@media screen and (max-width: 768px) {


    .header-list-icon {
        display: block !important;
    }

}

</style>
