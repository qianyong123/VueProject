<template>
    <div>
        <ul 
            class="filmbox"
            v-infinite-scroll="loadMore"
			infinite-scroll-disabled="loading"
			infinite-scroll-distance="10"
			infinite-scroll-immediate-check="false">
            <li
                is="flim-item"
                v-for="item in films"
                :key="item.id"
                :item="item"
                :types="types">

            </li>
        </ul>
    </div>
    
</template>

<script>
import FlimItem from "./FlimItem.vue";
 import axios from "axios";
 import {Toast} from "mint-ui";
    export default({
        name:"FlimBox",
        props:["types"],
        components:{
            FlimItem
        },
        data(){
            return {
                films:[],
                page:1,
                count:7,
                loading: false,
                toast:""
            }
        },
        methods:{
            getFilm(){
                   this.toast=Toast({
                    message: 'Loading...',
                    duration: -1,
                    iconClass: 'fa fa-spinner fa-spin'
                });
                let {page,count}=this
                axios.get("/mz/v4/api/film/" + this.types,{
                    params:{
                        page,
                        count
                    }
                }).then(res=>{
                    this.films=this.films.concat(res.data.data.films);
                     console.log(this.films);
                    let {current, total} = res.data.data.page;
                        console.log(current, total);
                   this.toast.close();
                   if(current==total){
                       return;
                   }
                   this.loading =false;
                    this.page++;
                });
            },
            loadMore() {
				this.loading = true;
				this.getFilm();
			}
        },
        watch:{
            types:{
                immediate:true,
                handler(val){
                    this.loading =false;
                    this.page=1;
                    this.films=[];
                    this.getFilm();
                }
            }
        }
    });
</script>

<style lang="scss" scoped>
    .filmbox{
        width: 100%;
    }
</style>
