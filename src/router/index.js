import Vue from "vue";
import VueRouter from "vue-router"

Vue.use(VueRouter);

import Home from "../components/pages/home/Home.vue";//主页内容
import NotFound from "../components/common/NotFound.vue";//没找到路由
import YingPian from "../components/pages/flirms/YingPian.vue";//影院内容
import userwoguo from "../components/pages/flirms/woguo.vue";
import bus from "../js/bus.js";//总线
import Deta from "../components/pages/detail/detail.vue"

const router=new VueRouter({
    routes:[
        {
            path:"",
            redirect:"/home"
        },
        {
            path:"/home",
            component:Home},
        {
            path:"/yingpian",
            component:YingPian,
            children:[
                {
                    path:"woguo/:id",
                    component:userwoguo
                }
            ]
        },
        {
            path: "/detail/:id",
			name: "detail",
			component: Deta,
			props: true
            
        },
        {
            path:"/404",
            component:NotFound
        },
        {
            path:"**",
            redirect:"/404"
        }
    ]
});

    // router.beforeEach((to,from,next)=>{
    //     bus.$emit('close');
    //     next();
    // });
export default router;