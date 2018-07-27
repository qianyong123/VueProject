<template>
    <router-link 
        tag="li"
        :to="{name: 'detail', params: {id: item.id,title:item.name}}">
        <div class="item">
            <div class="item-img">
                <img :src="item.poster.origin">
            </div>
            <div class="item-right">
                <div class="name" :class="types">
                    <p>{{item.name}}</p>
                    <div class="fengshu">
                        <span class="grade" v-if="type==types">{{item.grade}}</span>
                        <i class="fa fa-angle-right"></i>
                    </div>
                    
                </div>
                <p class="jiesao">{{item.intro}}</p>
                <div class="item-bottom">
                    <p class="shangying" v-if="type==types">
                        <span>{{item.cinemaCount}}影院上映</span>
                        <span class="xingqi">{{item.watchCount}}人购票</span>
                    </p>
                    <p class="riqi" v-else>
                        <span class="time">{{item.premiereAt|time}}上映</span>
                        <span>星期{{item.premiereAt|xingqi}}</span>
                    </p>
                </div>
            </div>
        </div>
    </router-link>
        
</template>

<script>
    export default({
        name:"FlimItem",
        props:["item","types"],//获取父元素的自定义属性
        data(){
            return {
                type:"now-playing"
            }
        },
        filters:{
            time(val){
                let date=new Date(val);
                return date.getMonth()+ 1 +"月"+date.getDate()+"日";
            },
            xingqi(val){
                let times=['日','一','二','三','四','五','六'];
                let date=new Date(val);
                return times[date.getDay()];
            }   
        }      
    });
</script>

<style lang="scss" scoped>
    .item{
        width: 100%;
        padding:0.2rem 0;
        overflow: hidden;
        border-bottom: dashed 1px #c9c9c9;
        cursor: pointer;
        .item-img{
            width: 0.6rem;
            height: 0.82rem;
            background: url("/static/img/bcg1.png") no-repeat center center;
            background-size:0.6rem 0.82rem;
            float: left;
            overflow: hidden;
            img{
                width: 0.6rem;
                height: 0.82rem;
                display: block;
            }
        }
        .item-right{
            float: left;
            padding-left: 0.15rem;
            width:1.9rem;
            .name{
                width:1.9rem;
                font-size: 0.16rem;
                height: 0.32rem;
                // line-height: 0.32rem;
                color: #000;
                display: flex;
                justify-content:space-between;
                align-items: center;
                .grade{
                    font-size: 0.16rem;
                    color: #fc7103;
                    padding-right: 0.05rem;
                }
                .fengshu{
                    height: 0.32rem;
                    line-height: 0.32rem;
                     i{
                        float: right;
                        line-height: 0.30rem;
                        color: #c6c6c6;
                        // font-size: 0.16rem;
                    }
                }
            }
            .jiesao{
                height: 0.24rem;
                line-height: 0.24rem;
                color: #8e8e8e;
                font-size: 0.12rem;
                overflow: hidden;

            }
            .item-bottom{
                line-height: 24px;            
                font-size: 12px;
                .shangying{
                    color: #8e8e8e;
                    .xingqi{
                        margin-left: 0.15rem;
                    }
                }
                .riqi{
                     color: #ffb375;
                     .time{
                         padding-right: 0.1rem;
                     }
                }
            }
        }
    }
    
</style>
