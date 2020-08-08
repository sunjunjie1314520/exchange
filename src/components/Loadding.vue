<template>
    <div class="uni-loadding-wrap">
        <!-- <text class="title" v-if="more">没有更多的内容了</text> -->
        <div class="uni-loadding">
            <!-- <van-loading size=".4rem" /> -->
            <!-- <img src="../static/img/loadding.svg" alt=""> -->
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="margin:auto;display:block;" width="1rem" height="1rem" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
            <defs><clipPath id="ldio-fj1k7u93bmg-cp"><rect x="0" y="0" width="100" height="82.235"></rect></clipPath></defs>
            <path stroke="#fd104a" stroke-width="1" fill="#fd104a" d="M85.529 75.177H14.471c-2.469 0-4.471 2.002-4.471 4.471h80C90 77.179 87.998 75.177 85.529 75.177z"></path>
            <g clip-path="url(#ldio-fj1k7u93bmg-cp)">
            <g transform="translate(0 115.753)">
                <animateTransform attributeName="transform" type="translate" repeatCount="indefinite" dur="0.5555555555555556s" values="0 0;0 150" keyTimes="0;1"></animateTransform>
                <g transform="translate(0 -75)">
                <path fill="#ffb856" d="M50 25c-13.785 0-25 11.215-25 25s11.215 25 25 25s25-11.216 25-25S63.784 25 50 25z M50 70.845 c-11.494 0-20.844-9.351-20.844-20.845S38.506 29.155 50 29.155S70.845 38.506 70.845 50S61.493 70.845 50 70.845z"></path>
                <path fill="#ffd55d" d="M50 29.155c-11.494 0-20.844 9.351-20.844 20.844S38.506 70.845 50 70.845S70.845 61.493 70.845 50S61.493 29.155 50 29.155 z"></path>
                <path fill="#ffff34" d="M48.11 62.796v-1.64c-1.535-0.068-3.041-0.358-4.281-0.765c-1.029-0.337-1.611-1.421-1.342-2.469 l0.043-0.167c0.297-1.158 1.521-1.781 2.653-1.395c1.152 0.392 2.465 0.662 3.855 0.662c2.032 0 3.421-0.783 3.421-2.21 c0-1.354-1.14-2.21-3.778-3.101c-3.814-1.283-6.416-3.066-6.416-6.523c0-3.137 2.211-5.596 6.025-6.345v-1.639 c0-0.965 0.782-1.746 1.746-1.746h0c0.965 0 1.746 0.782 1.746 1.746v1.39c1.275 0.057 2.327 0.226 3.21 0.459 c1.107 0.291 1.782 1.404 1.498 2.513v0c-0.287 1.118-1.44 1.803-2.546 1.473c-0.843-0.251-1.887-0.453-3.16-0.453 c-2.317 0-3.066 0.998-3.066 1.997c0 1.176 1.247 1.924 4.277 3.065c4.241 1.498 5.953 3.458 5.953 6.666 c0 3.173-2.246 5.882-6.345 6.594v1.89c0 0.965-0.782 1.746-1.746 1.746h-0.001C48.892 64.543 48.11 63.761 48.11 62.796z"></path>
                </g>
            </g>
            </g>
            <path stroke="#fd104a" stroke-width="1" fill="#fd104a" d="M14.471 84.823h71.058c2.469 0 4.471-2.002 4.471-4.471v-0.704H10v0.704C10 82.821 12.002 84.823 14.471 84.823z"></path>
            </svg>
            <!-- <span class="p">正在玩命加载中...</span> -->
        </div>
        
    </div>
</template>

<script>
    export default {
        name: 'loadding',
        props: {
            more:{
                type: Boolean,
                default: false
            }
        }
    }
</script>

<style lang="stylus" scoped>
    .uni-loadding-wrap
        float left
        width 100%
        text-align center
        display flex
        justify-content center
        align-items center
        height 100%
        position absolute
        left 0
        right 0
        bottom 0
        top 0
        df 1
        justify-content center
        .title
            color #999
        .uni-loadding
            text-align center
            img
                width 1rem
                height 1rem
            .p
                display block
                font-size .26rem
                color #c2c8cf
                margin-top .1rem
                margin .1rem auto 0
</style>
