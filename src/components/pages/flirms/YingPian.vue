<template>
    <div  class="pages yingyuan">
        <flim-nav :types="types" @change="change"></flim-nav>
        <flim-box :types="types"></flim-box>
    </div>
</template>

<script>
    import FlimNav from "./FlimNav.vue";
    import FlimBox from "./FlimBox.vue";
    export default({
        name:"YingPian",
        components:{
            FlimNav,
            FlimBox
        },
         data(){
            return {              
                types:"now-playing"
            }
        },
        methods:{
           change(type){
               this.types=type;
               console.log(type);
           }
        },

    });

</script>

<style lang="scss" scoped>
    .yingyuan{
        width: 100%;
        padding:0 0.15rem;
        margin-top: 0.5rem;
        background-color: #f9f9f9;
        
    }
</style>

