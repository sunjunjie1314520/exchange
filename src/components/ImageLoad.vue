<template>
    <div class="loadding">
        <img v-if="url" :src="url" alt="">
        <div v-else class="svg">
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="margin:auto;background:#fff;display:block;" width="200px" height="200px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
                <g transform="rotate(0)"><circle cx="73.801" cy="68.263" fill="#e15b64" r="3" transform="rotate(333.323 50.0001 50)">
                <animateTransform attributeName="transform" type="rotate" calcMode="spline" values="0 50 50;360 50 50" times="0;1" keySplines="0.5 0 0.5 1" repeatCount="indefinite" dur="1.4925373134328357s" begin="0s"></animateTransform>
                </circle><circle cx="68.263" cy="73.801" fill="#f47e60" r="3" transform="rotate(343.411 50 50)">
                <animateTransform attributeName="transform" type="rotate" calcMode="spline" values="0 50 50;360 50 50" times="0;1" keySplines="0.5 0 0.5 1" repeatCount="indefinite" dur="1.4925373134328357s" begin="-0.062s"></animateTransform>
                </circle><circle cx="61.481" cy="77.716" fill="#f8b26a" r="3" transform="rotate(350.955 50.0001 50.0001)">
                <animateTransform attributeName="transform" type="rotate" calcMode="spline" values="0 50 50;360 50 50" times="0;1" keySplines="0.5 0 0.5 1" repeatCount="indefinite" dur="1.4925373134328357s" begin="-0.125s"></animateTransform>
                </circle><circle cx="53.916" cy="79.743" fill="#abbd81" r="3" transform="rotate(355.998 49.9998 49.9999)">
                <animateTransform attributeName="transform" type="rotate" calcMode="spline" values="0 50 50;360 50 50" times="0;1" keySplines="0.5 0 0.5 1" repeatCount="indefinite" dur="1.4925373134328357s" begin="-0.187s"></animateTransform>
                </circle><circle cx="46.084" cy="79.743" fill="#849b87" r="3" transform="rotate(358.965 49.9994 49.9994)">
                <animateTransform attributeName="transform" type="rotate" calcMode="spline" values="0 50 50;360 50 50" times="0;1" keySplines="0.5 0 0.5 1" repeatCount="indefinite" dur="1.4925373134328357s" begin="-0.25s"></animateTransform>
                </circle><circle cx="38.519" cy="77.716" fill="#6492ac" r="3" transform="rotate(359.992 50.0697 50.0696)">
                <animateTransform attributeName="transform" type="rotate" calcMode="spline" values="0 50 50;360 50 50" times="0;1" keySplines="0.5 0 0.5 1" repeatCount="indefinite" dur="1.4925373134328357s" begin="-0.312s"></animateTransform>
                </circle><circle cx="31.737" cy="73.801" fill="#637cb5" r="3" transform="rotate(0.726935 50 50)">
                <animateTransform attributeName="transform" type="rotate" calcMode="spline" values="0 50 50;360 50 50" times="0;1" keySplines="0.5 0 0.5 1" repeatCount="indefinite" dur="1.4925373134328357s" begin="-0.375s"></animateTransform>
                </circle><circle cx="26.199" cy="68.263" fill="#6a63b6" r="3" transform="rotate(3.28763 50 50)">
                <animateTransform attributeName="transform" type="rotate" calcMode="spline" values="0 50 50;360 50 50" times="0;1" keySplines="0.5 0 0.5 1" repeatCount="indefinite" dur="1.4925373134328357s" begin="-0.437s"></animateTransform>
                </circle><animateTransform attributeName="transform" type="rotate" calcMode="spline" values="0 50 50;0 50 50" times="0;1" keySplines="0.5 0 0.5 1" repeatCount="indefinite" dur="1.4925373134328357s"></animateTransform>
                </g>
            </svg>
        </div>
    </div>
</template>

<script>
    export default {
        props:['url'],
        data(){
            return {

            }
        }
    }
</script>

<style lang="stylus">
    .loadding
        min-height 50px
        img
            animation flipInX 1s ease
            vertical-align top
    .svg
        width 60px
        height 60px
        margin 0 auto
        svg
            width 100%
            height 100%
</style>