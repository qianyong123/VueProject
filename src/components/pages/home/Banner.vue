<template>
    <div class="swiper-container banner">
    <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="imgs in banners" :key="imgs.id">
            <img :src="imgs.imageUrl">
        </div>
    </div>
</div>
</template>

<script>
    import axios from "axios";//引入axios跟ajax一样
    import Swiper from "swiper";//引入轮播图插件
    import "swiper/dist/css/swiper.min.css";

    export default{
        name:"Banner",
        data(){
            return{
                banners:[]
            }
        },
        methods:{
           axiosGet(){
               axios.get("/mz/v4/api/billboard/home",{
                   params:{                    
                       __t:Date.now()
                   }
               }).then(res=>{
                //    console.log(res.data.data);
                //    console.log(res.data.data.billboards);
                   this.banners=res.data.data.billboards
               });
           }
        },
        created() {
            this.axiosGet();
        },
        updated() {
            var swiper=new Swiper(".swiper-container",{
                loop : true,
				autoplay : true
            });
            
        },
    }
</script>

<style lang="scss" scoped>
    .banner{
        position: relative;
        display: block;
        overflow: hidden;
        width:3.2rem;
        margin-bottom:0.17rem;
        background: url("/static/img/bcg1.png") no-repeat center center;
        background-size:3.2rem 1.8rem;
        img{
            width:3.2rem;
        }
    }
</style>

