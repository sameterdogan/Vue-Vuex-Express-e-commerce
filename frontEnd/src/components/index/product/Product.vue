<template>

  <div class='col-3'>
        <div class='card'>
              <div class='card-img-top'>
                    <img :src="`http://localhost:5000/assets/images/productImages/${product.image}`" class='img-fluid' alt=''>
              </div>
              <div class='card-body text-center'>
                    <p class='product-name-wrapper'>
                          <router-link
                                :to="{name:'product-details',params:{slugProduct:product.slugProduct}}"
                                tag='a'
                                class='product-name'
                          >
                                {{product.name}}
                          </router-link>
                    </p>

                    <p class='product-price'> <b>${{product.price}}</b></p>
                    <button class='add-to-cart-button btn btn-sm btn-block'> ADD TO CART</button>
                    {{product.slugProduct}}
              </div>
        </div>
  </div>

</template>

<script>
export default {
      name: "Product",
      props:["product"]

}
</script>

<style scoped>
.product-name-wrapper{
      line-height: 21px;
      height: 41px;
      overflow: hidden;
}
.product-name{
      color: black;
      text-transform: uppercase;

}

.product-price{
 margin-bottom:22px ;
}
.card{
      border: none !important;
}
.add-to-cart-button{
      background-color: #0177C1;
      color: #ffffff;
      font-size: 10px !important;
      font-family: inherit !important;
      height: 25px;
}

</style>
