<template>
    <header>
        <div class="header-nav">
             <!-- 头部 -->
            <div class="header-left">
                <div class="title-icon" @click="show=!show">
                    <i class="fa fa-navicon"></i>
                </div>
                <div class="title-name">
                    卖座电影
                </div>
            </div>
            <div class="header-right">
                <div class="user">
                    <i class="fa fa-user-o"></i>
                </div>
                <div class="city">
                    <span @click="shouwei">成都</span>
                    <i  class="fa fa-angle-down"></i>
                </div>
            
            </div>
        </div>
       
       <!-- 导航 --> 
            <nav-list  @close="show=false" :show="show"></nav-list>

    </header>
</template>

<script>
    import NavList from "./NavList.vue";
    import "animate.css";
    // import bus from "../../../js/bus.js";
    import router from "../../../router/index.js"

    export default{
        name:"Header",
        data(){
            return {
                show:false,
            }
        },
       components:{
           NavList
       },
       methods:{
           closeList(){
               this.show=false;
           },
           shouwei(){
               this.$router.push("/add");
           }
       },
       created() {
        //    bus.$on("close",this.closeList);
                router.beforeEach((to,from,next)=>{
                this.closeList();
                next();
                console.log(name);
            });
       },
    };
</script>

<style scopeds lang="scss">
        
    .header-nav{
        width:100%;
        height:0.5rem;
        background: #282828;
        position: fixed;
        z-index:500;
        top: 0;
        left: 0;
        color: #ffffff;
        overflow: hidden;
        line-height: 0.5rem;
       
    }
    .header-left{
        float: left;
        .title-icon{
            width:0.48rem;
            height:0.5rem;
            line-height: 0.5rem;
            font-size: 0.16rem;
            color: #999;
            text-align: center;
            float: left;
            border-right: 1px solid #333;
        }
        .title-name{
             color: #ffffff;
             width: 1.5rem;
             height: 0.5rem;
             font-size: 0.14rem;
             padding:0 0.16rem;
             float: left;
             line-height: 0.5rem;
        }
    }
    .header-right{
        float: right;
        height: 0.5rem;
        width: 1.06rem;
        color: #999;
        .city{
            height: 0.5rem;
            line-height: 0.5rem;
            float:right;
            padding:0 0.06rem;
            span{
                font-size: 0.14rem;
                
                //  padding:0 0.08rem;
            }
            i{
                width:0.12rem;
                height: 0.12rem;
            }
        }
        .user{
            float: right;
            width: 0.48rem;
            line-height: 0.5rem;
            text-align: center;
            font-size: 0.16rem;
        }
    }
</style>