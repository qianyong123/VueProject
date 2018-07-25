<template>
    <div class="home pages">
        <banner></banner>
        <movie-box  

            v-for="type in types"
            :key="type.id"
            :type="type"
        >
            
        </movie-box>
    </div>  
</template>


<script>
    import banner from "./Banner.vue";
    import MovieBox from "./MovieBox.vue"
    export default{
        name:"Home",
        components:{
            banner,
            MovieBox
        },
        data(){
            return {
                types : [
					{id: 1, url_type: "now-playing", count: 5, title:"热映"},
					{id: 2, url_type: "coming-soon", count: 3, title:"即将上映"}
				]
            }
        }
    };
</script>

<style scopeds>

</style>
