<template>
    <h1>product</h1>
    <div class="container">
        <div v-for="product in state" :key="product.id" class="card">
            <router-link class="container" :to="{name:'Detail',params:{id_product:product.id} }">
                <h4>{{product.nama}}</h4>
            </router-link>
        </div>
    </div>
</template>
<script>
import { onMounted, reactive } from "vue";
import { product } from '@/assets/product';
export default {
    setup(props,context) {
        const state = reactive(product["product"]);
        onMounted(()=>{
            context.emit("id-menu",4);
        });
        return{
            state,
        }
    },
}
</script>

<style>
.card{
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    margin: 10px;
    min-width: 200px;
    cursor:pointer;
}
.card:hover{
    box-shadow:0 8px 16px 0 rgba(0,0,0,0.2);
}
.container{
    padding:2px 16px;
}
</style>