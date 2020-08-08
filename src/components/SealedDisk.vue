<template>
    <div class="sealed-disk">
        <div class="box">
            <h2>正在封盘中</h2>
            <p>请稍候...</p>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {

        }
    },
}
</script>

<style lang="stylus" scoped>
    .sealed-disk
        position absolute
        left 0
        right 0
        top 0
        bottom 0
        background rgba(#000, .6)
        display flex
        align-items center
        justify-content center
        z-index 9
        .box
            text-align center
            h2
                color #fff
                font-size .3rem
            p
                color #fff
                font-size .26rem
                margin-top .16rem
</style>
