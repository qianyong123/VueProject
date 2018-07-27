<template>
    <div class="flim-list">
        <div 
            v-for="lis in list"
            :key="lis.id"
            class="flim-nav"
            :class="{active:types==lis.type}"
            @click="$emit('change',lis.type)"
        >{{lis.title}}</div>
    </div> 

</template>

<script>
    export default({
        name:"FlimNav",
        props:["types"],
        data(){
            return {
                list:[
                    {id:1,type:"now-playing",title:"正在热映"},
                    {id:2,type:"coming-soon",title:"即将上映"}
                ],
                
            }
        }
        
    });
</script>
<style lang="scss" scoped>
    .router-link-active{
        color: red;
    }
        .flim-list{
            height:0.46rem;
            margin: 0 auto;
            border-bottom: solid #fe6e00 0.01rem;
         .flim-nav{
                float: left;
                width:50%;
                height:0.46rem;
                text-align: center;
                line-height: 0.46rem;
                color: #6a6a6a;
                cursor: pointer;
            }
            .active{
                border-bottom: solid #fe6e00 0.03rem;
                color:#fe6e00;
             }
        }
    
    
    
   
</style>


