<template>
    <div ref="priceBox" class="mui-scroll-wrapper">
        <div class="mui-scroll">
            <div class="price-item" v-for="item in dataSource" :key="item.openTime">
                <img class="price-icon"  v-bind:src="currentTags.icon" alt="logo" />
                <div style="width: 100%">
                    <p class="price-type">{{currentTags.name}}<span class="price-time">{{item.lotteryNumber | lotteryNumber(4)}}期{{item.openTime}}</span></p>
                    <span v-bind:style="colorHanlde1(code)" v-for="(code,  i) in item.openCode.split(',')" :key="i" class="price-code">{{code}}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props:['dataSource', 'currentTags'],
    data(){
        return {

        }
    },
    computed: {
       // 六合彩颜色处理
        colorHanlde1: function(){ 
            return (number) => {
                var red = '01-02-07-08-12-13-18-19-23-24-29-30-34-35-40-45-46'.split('-')
                var blue = '03-04-09-10-14-15-20-25-26-31-36-37-41-42-47-48'.split('-')
                var green = '05-06-11-16-17-21-22-27-28-32-33-38-39-43-44-49'.split('-')
                var color = '';
                if(this.$assist.contains(number, red)){
                    color = ' background: #cd3641'
                }else if (this.$assist.contains(number, blue)){
                    color = ' background: #64b5f6'
                }else if (this.$assist.contains(number, green)){
                    color = 'background: #66bb6a'
                }else {
                    color = ' background: #4e4e4e'
                }
                return color
            }
        }
    },
    updated() {
        this.mui(".mui-scroll-wrapper").scroll().scrollTo(0,0,100)
    },
    mounted() {
        // const totalH =  (window.screen.height - 170)  + 'px';
        // this.$refs.priceBox.style.setProperty(
        //     'height',
        //     totalH
        // );
        this.mui(".mui-scroll-wrapper").scroll({
            scrollY: true, //是否竖向滚动
            scrollX: false, //是否横向滚动
            startX: 0, //初始化时滚动至x
            startY: 0, //初始化时滚动至y
            indicators: true, //是否显示滚动条
            deceleration: 0.0006, //阻尼系数,系数越小滑动越灵敏
            bounce: true //是否启用回弹
        })
    }
}
</script>

<style lang="stylus" scoped>
.mui-scroll-wrapper
    position fixed
    top 118px
    z-index 1
    height calc(100% - 163px)
    .mui-scroll
        .price-item 
            display flex
            align-items center
            border-bottom  1px dotted #5f3838
            height 60px
            .price-icon
                margin 0 10px
                width 40px
                height 40px
                border-radius 100%
            .price-type
                color #ffffff
                font-size 8px
                .price-time 
                    float right
                    margin-right 10px
                    color #f83162
            .price-code
                display inline-block
                font-size 6px
                width 18px
                height 18px
                margin-top 10px
                margin-right 6px
                text-align center
                line-height 18px
                color #ffffff
</style>
