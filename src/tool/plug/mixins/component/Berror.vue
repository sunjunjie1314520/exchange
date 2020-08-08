<template>
    <div class="v-error">
        <span>{{message || '此次请求出了个差错'}}</span>
    </div>
</template>

<script>
    export default {
        name: 'b-error',
        props: {
            message: {
                type: String,
                default: ''
            }
        },
        data(){
            return {

            }
        },
        methods: {

        },

    }
</script>

<style lang="stylus" scoped>
    .v-error
        position absolute
        left 0
        top 0
        bottom 0
        right 0
        display flex
        align-items center
        justify-content center
        span
            color #fff
</style>