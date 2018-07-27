<template>
    <div class="pages datail">
        <div class="datail-img">
            <img :src="films.cover.origin">
        </div>
        <div class="film-title">影片简介</div>      
        <ul class="films">
            <li>
                <span>
                    导&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;演：
                    </span>
                <span>{{films.director}}</span>
            </li>
            <li class="zhuyan">
                <span>主&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;演：</span>
                <span
                v-for="(item,index) in actors"
                :key="index"
                
                >{{item.name}}&nbsp;&nbsp;</span>
            </li>
            <li>
                <span>地区语言：</span>
                <span>{{films.nation}}({{films.language}})</span>
            </li>
            <li>
                <span>类&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;型：</span>
                <span>{{films.category}}</span>
                
            </li>
            <li>
                <span>上映日期</span>
                <span>{{films.premiereAt | riqi}}上映</span>
            </li>
            <li class="jiesao">
                {{films.synopsis}}
            </li>
        </ul>
    </div>
</template>

<script>
import axios from "axios";
    export default({
        name:"dateil",
        data(){
            return{
                films:{},
                actors:[],
                yanyuan:"",
                id:this.$route.params.id 
            }
        },
        methods:{
            getdetail(){
                axios.get("/mz/v4/api/film/"+this.id,{
                    params:{
                        __t:Date.now()
                    }
                }).then(res=>{
                    // console.log(res);
                    this.films=res.data.data.film;
                    this.actors=res.data.data.film.actors;
                    console.log(this.films)
                     console.log(this.actors)
                });
            },
            actor(){
                let yan="";
                this.actors.forEach((data)=>{
                    yan+=data.name
                })
                // this.yanyuan=yan;
                console.log(yan);
            }
        },
        created() {
            this.getdetail();
            this.actor();
        },
        filters:{
            riqi(val){
                let data=new Date(val);
                return data.getMonth()+"月"+data.getDate()+"日"
            }
        }
    });
</script>

<style lang="scss" scoped>
    .datail{
        width:100%;
        .datail-img{
            height: 1.8rem;
            img{
                height:1.8rem;
            }
        }
        .film-title{
                margin: 16px auto;
                border-left: 16px solid RGB(228, 200, 156);
                font-size: 16px;
                padding-left: 4px;
                height: 0.24rem;
                line-height: 0.24rem;
        }
        .films{
            padding-left:0.2rem;
            font-size: 0.12rem;
            li{
                height: 0.18rem;
                line-height: 0.18rem;
                // overflow: hidden;
                margin-bottom: 0.1rem;
                span{
                    display:inline-block;
                } 
                     
            }
            .jiesao{
                padding-right: 0.2rem;
            }
            .zhuyan{
                    overflow: hidden;
                }  
        }
    }
</style>

