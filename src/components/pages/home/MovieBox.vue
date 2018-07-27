<template>
    <div>
        <div class="border-jishang" v-if="type.url_type=='coming-soon'">
           <div class="jishang">即将上映</div>
        </div>
        <ul>
            <li 
            is="movie-item"
            v-for="move in moves"
            :key="move.id"
            :move="move"
            :type="type"
            >

            </li>
        </ul>
        <router-link 
         tag="div"
         class="more-button"
         to="/yingpian"
        >更多{{type.title}}电影</router-link>
        <!-- <div class="more-button">更多{{type.title}}电影</div> -->
    </div>
</template>

<script>
    import MovieItem from "./MovieItem.vue";
    import axios from "axios";

    export default{
        name:"MovieBox",
        props:["type"],
        components:{
            MovieItem
        },
        data(){
            return {
                moves:[],
                page:1
            }
        },
        methods:{
            getMoves(){
                axios.get("/mz/v4/api/film/"+this.type.url_type,{
                    params:{
                        count:this.type.count,
                        page:this.page,
                        __t:Date.now()
                    }
                }).then(res=>{
                    this.moves=res.data.data.films
                    // console.log(res.data.data.films)
                }).catch(data=>{
                    console.log(data);
                });
            }
        },
        created() {
            this.getMoves();
        },
    }
</script>

<style lang="scss" scoped>
    .more-button{
        width: 160px;
        height: 30px;
        border: 1px solid #aaa;
        border-radius: 15px;
        margin: 10px auto 30px;
        text-align: center;
        line-height: 30px;
        font-size: 12px;
        color: #616161;
        cursor: pointer;
    }
    .border-jishang{
        position: relative;
        margin-top: 30px;
        margin-bottom: 30px;
        border-bottom: 1px solid #a8a8a8;
        .jishang{
            width: 0.65rem;
            height: 0.2rem;
            margin: 0 auto;
            margin-bottom: -0.1rem;
            border-radius:0.05rem;
            font-size: 0.12rem;
            line-height: 0.2rem;
            text-align: center;
            color: #eee;
            background-color: #a7a7a7;
        }
    }
</style>

