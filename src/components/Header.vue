<template>
    <div class="header-wrap">
        <div class="header">
            <div v-if="back" class="fl" @click="$router.back(-1)">
                <span></span>
            </div>
            <slot v-else name="left"></slot>

            <h2 v-if="title">{{title}}</h2>
            <h2 v-else><slot></slot></h2>
            <div class="fr">
                <slot name="right"></slot>
            </div>
        </div>
        <div class="header-null"></div>
    </div>
</template>

<script>
    export default {
        props:['title', 'back'],
        data(){
            return {

            }
        }
    }
</script>

<style lang="stylus" scoped>
    .header-wrap
        float left
        width 100%
        position relative
        
</style>