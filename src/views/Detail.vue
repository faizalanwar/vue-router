<template>
    <h1>Nama Product : {{detail.nama}}</h1>
    <p>Harga Product : {{detail.harga}}</p>
</template>

<script>
import {product} from '@/assets/product'
export default {
    props:[
        "id_product"
    ],
    setup(props){
        const detail = product["product"].find(function(item){
            return item.id=props.id_product;
        });
        return{
            detail
        }
    }
}
</script>