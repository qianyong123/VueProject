<template>
    <div class="nav-list">
        <transition 
            enter-active-class="animated findeIn"
            leave-active-class="animated findeOut">
            <div class="mask" @click="$emit('close')" v-if="show"></div>
        </transition>
        <transition
            enter-active-class="animated slideInLeft"
			leave-active-class="animated slideOutLeft">
            <nav class="left-nav" v-if="show">
                <ul>
                    <li 
                    v-for="item in navs"
                    :key="item.id"
                    >{{item.title}}<i class="fa fa-angle-right"></i></li>
                </ul>
            </nav>  
        </transition>
          
    </div>
</template>


<script>

   export default {
        name : "NavList",
        props:["show"],
		data() {
			return {
				navs : [
                    {id : 1, title: "首页"},
                    {id : 2, title: "影片"},
                    {id : 3, title: "影院"},
                    {id : 4, title: "商城"},
                    {id : 5, title: "我的"},
                    {id : 6, title: "买卡座"},

                ]
               
			}
		}
	};
</script>

<style scopeds lang="scss">
    .findeOut {
        animation-duration: 0.2s;
    }
    .slideOutLeft{
        animation-duration: 0.3s;
    }
    .nav-list{
        position: fixed;
        top:0;
        left: 0;
        right: 0;
        color: #9a9a9a;
        z-index: 490;
        // width:100%;
        // height:100%;
        .mask{
            // width:100%;
            height:100vh;
            position:absolute;
            top: 0.5rem;
            left: 0;
            right: 0;
            background:rgba(0,0,0,0.5);
          
        }
            .left-nav{
                width: 2.1rem;
                height: 100vh;
                // height:5.18rem;
                border-top: 1px solid #333;
                background: #282828;
                position: absolute;
                top:0.5rem;
                left: 0;
             
                li{
                    width: 2.1rem;
                    height:0.5rem;
                    line-height: 0.5rem;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    padding: 0 0.16rem;
                    border-bottom: 1px dotted #333;
                    font-size: 0.14rem;
                    i{
                         color: #666;
                    }
                }
            }
        
    }
</style>