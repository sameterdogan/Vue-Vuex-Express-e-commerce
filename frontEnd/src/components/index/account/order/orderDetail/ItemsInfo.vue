<template>
    <div class='card'>
        <div class='card-header'>
            <h4 class='card-header-text'>
                Items Information
            </h4>
        </div>
        <div class='card-body'>
            <div class='row my-3 item' v-for='item in items' :key='item._id'>
                <div class='col-lg-2 col-sm-12 text-center'>
                    <router-link
                        :to="{name:'product-details',params:{slugProduct:item.slugProduct}}"
                        class='img-fluid item-image'
                        tag='img'
                        :src='`http://localhost:5000/assets/images/productImages/${item.image}`'
                    ></router-link>

                </div>
                <div class='col-lg-3 col-sm-12'>
                    <router-link
                        :to="{name:'product-details',params:{slugProduct:item.slugProduct}}"
                        class='item-name'
                        tag='a'
                    >
                        {{ item.name }}
                    </router-link>
                </div>
                <div class='col-lg-3 col-sm-12'>
                   Price: <span class='item-price'>$ {{item.price}}</span>
                </div>
                <div class='col-lg-4 col-sm-12'>
                    Amount: {{item.quantity}}

                </div>
            </div>




        </div>
    </div>

</template>

<script>
export default {
    name: 'ItemsInfo',
    props:["items"],
    created() {
        console.log(this.items)
    }
}
</script>

<style scoped>
.card{
    border: none;
}
.card-header-text{
    font-weight: 600;
    font-size: 14px;
    color: #333333;
}
.item{
    display: flex;
    align-items: center;
    border-bottom: solid 1px #e6e6e6;
    padding-bottom: 1rem;
}
.item-name{
    font-weight: 600;
    font-size: 14px;
    color: #333333;
}
.item-image{
    width: 100px;
    height: 100px;
    cursor: pointer;
    object-fit: contain;
}
.item-price{
    color:#0077C1 ;
    font-weight: 600;
    font-size: 14px;
}

</style>