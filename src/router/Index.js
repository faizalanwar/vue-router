import {  createWebHistory , createRouter } from "vue-router" ;
import Home from "@/views/Home"
import Contact from "@/views/Contact"
import About from "@/views/About"
import Product from "@/views/Product"
import Detail from "@/views/Detail"
const routes =[
    {
        path :"/",
        name:"Home",
        component:Home
    },
    {
        path :"/contact",
        name:"Contact",
        component:Contact
    },
    {
        path :"/about",
        name:"About",
        component:About
    },
    {
        path :"/product",
        name:"Product",
        component:Product
    },
    {
        path :"/detail/:id_product",
        name:"Detail",
        component:Detail,
        props:true,
    },
]
const router = createRouter({
    history :createWebHistory(),
    routes
})

export default router;