<template>
  <div class="container">
    <div class="SITE-HEADER">

      <div class="header-logo">
        <img src="@/assets/logo.png" class="" alt="">
      </div>
      <div class="header-options">
        <button >
          <i class="bi bi-person-fill header-icons"></i>
        </button>
        <button>
            <router-link
            tag='i'
            class='bi bi-cart-fill header-icons'
            :to="{name:'cart-details'}"

            ></router-link>
        </button>
        <button >
          <i class="bi bi-list header-icons list-icon"></i>
        </button>


      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header"
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
  width: 80px;
  height: 80px;
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
.list-icon{
  display: none;
}


</style>
