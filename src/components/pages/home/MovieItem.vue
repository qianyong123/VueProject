<template>
    <li class="item">
        <div class="item-img">
            <img :src="move.cover.origin">
        </div>
        <div class="des" :class="type.url_type">
            <div class="left">
                <p class="name">{{move.name}}</p>
                <p class="shangying" v-if="type.url_type=='now-playing'">{{move.cinemaCount}}家电影院上映{{move.watchCount}}人购票</p>
            </div>
            <div class="right">
                <p v-if="type.url_type=='now-playing'" class="pingfeng">{{move.grade}}</p>
                <p class="tiems" v-else>{{move.premiereAt | time}}上映 </p>
            </div>
        </div>
    </li>
</template>

<script>
    export default{
        name: "MovieItem",
        props:["type","move"],
        filters : {
            time(value) {
                let date = new Date(value);
                return date.getMonth() + 1 + "月" + date.getDate() + "日";
            }
        }
	}
</script>

<style lang="scss" scoped>
    .item{
        margin:0 0.17rem 0.17rem 0.17rem;
        background: #f9f9f9; 
        .item-img{
                width: 2.86rem;
                height:1.6rem;
                overflow: hidden;
                background:url("/static/img/bcg1.png") center center;
            img{
                height:1.6rem;
            }
        }
       
        .now-playing{
            width: 2.86rem;
            height:0.5rem;
            margin: 0 auto;
            background-color: #f9f9f9;
            padding-left: 0.28rem;
            padding-top: 0.13rem;
             font-size:0.12rem;
            .left{                        
                float: left;
                .name{
                    font-size: 0.14rem;
                    line-height:0.15rem;
                }
                .shangying{
                    color: #9a9a9a;
                    line-height:0.15rem;
                }
            }
            
            .right{
                float: right;
                line-height: 0.5rem;
                .pingfeng{
                    color: #f78360;
                    font-size:0.18rem;
                    margin-right:0.15rem;
                }
                
            }
        }
        .coming-soon{
                height: 0.35rem;
                padding-left:0.1rem;
                line-height: 0.35rem;  
                font-size: 0.12rem;
                .left{
                    float: left;
                    .name{
                        font-size:0.12rem
                    }
                }
                .right{
                    float: right;
                    .tiems{
                        padding:0;
                        height: 0.35rem;
                        line-height: 0.35rem;
                        font-size: 0.12rem;
                        margin-right: 0.2rem;
                         color: #f78360;
                    } 
                } 
                
                   
            }
         
    }
</style>