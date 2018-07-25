import Vue from "vue";
import VueRouter from "vue-router"

Vue.use(VueRouter);

import Home from "../components/pages/home/Home.vue";
import NotFound from "../components/common/NotFound.vue";
import YingPian from "../components/pages/flirms/YingPian.vue";

const router=new VueRouter({
    routes:[
        {path:"",redirect:"/home"},
        {path:"/home",component:Home},
        {path:"/yingpian",component:YingPian},
        {path:"/404",component:NotFound},
        {path:"**",redirect:"/404"}
    ]
});

export default router;