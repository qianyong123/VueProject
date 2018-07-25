<template>
    <div class="cuowu">
        <div class="fanhui">
            <img src="/static/img/404.jpg">
            <p class="p1">这个页面,神秘失踪了...</p>
            <p>不如<a href="/home">返回卖座首页吧</a></p>
        </div>
       
    </div>
</template>

<script>
    export default({
        name:"NonFode"
    });
</script>

<style lang="scss" scoped>
    .cuowu{
        // background:url("/static/img/404.jpg") no-repeat center center;
            padding:1rem 0.72rem;
            text-align: center;
        .fanhui{
            
            p{
                font-size: 16px;
                color: #666;
                line-height: 24px;
                margin: 0 0 8px;
            }
            img{
                width: 1.76rem;
            }
        }
    }
</style>

