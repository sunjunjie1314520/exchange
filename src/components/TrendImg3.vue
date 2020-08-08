<template>
    <div ref="priceBox" :id="tableName" class="mui-scroll-wrapper">
        <div class="mui-scroll">
            <canvas class="my-canvas" :id="tableName + '-canvas'"></canvas>
            <div class="tabs-header">
                <span v-for="(i, index) in xList" :key="index">{{i.title}}</span>
            </div>
            <div class="tabs-item">
                <div v-for="(i, index) in yList" :key="index" class="k-chart-item">
                    <span :data-text="h" v-bind:class="{ active: i.selectCode == h }" v-for="h in i.list" :key="h">{{i.selectCode == h ? '' : h}}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props:['yList', 'xList', 'tableName'],
    data(){
        return {
            
        }
    },
    created(){
        
    },
    watch:{
        yList: {
            deep: true,
            immediate: true,
            handler: function(yList){
                setTimeout(()=>{
                    this.lineStoke();
                }, 10)
            }
        }  
    },
    updated() {
        this.mui(`#${this.tableName}`).scroll().scrollTo && this.mui(`#${this.tableName}`).scroll().scrollTo(0,0,100);
    },

    mounted() {
        // const totalH =  (window.screen.height - 206)  + 'px';
        // this.$refs.priceBox.style.setProperty(
        //     'height',
        //     totalH
        // );
        this.mui(`#${this.tableName}`).scroll({
            scrollY: true, //是否竖向滚动
            scrollX: false, //是否横向滚动
            startX: 0, //初始化时滚动至x
            startY: 0, //初始化时滚动至y
            indicators: true, //是否显示滚动条
            deceleration: 0.0006, //阻尼系数,系数越小滑动越灵敏
            bounce: true //是否启用回弹
        })
    },
    methods: {
        columnCellClass(rowIndex,columnName = "",rowData){
            const { selectCode = "" } = rowData;
            if(selectCode.includes(columnName.slice(4))) {
                return 'column-cell-select';
            }
        },
        lineStoke(){
            var dom = document.querySelector(`#${this.tableName} .mui-scroll`);
            var c = document.getElementById(`${this.tableName}-canvas`);
            var ctx=c.getContext("2d");
            var listDom = document.querySelectorAll('.k-chart-item .active');
            let offsetList = [];
            listDom.forEach(item=>{
                if(item.offsetLeft != 0 && item.offsetTop != 0){
                    let info = {
                        x: item.offsetLeft + item.clientWidth / 2,
                        y: item.offsetTop + item.clientWidth / 2,
                    }
                    offsetList.push(info);
                }
            })
            c.width = dom.clientWidth;
            c.height = dom.clientHeight;
            ctx.strokeStyle = '#f63f3f'
            offsetList.forEach((item, index)=>{
                ctx.lineTo(item.x, item.y);
            })
            ctx.stroke();
        }
    }
}
</script>

<style lang="stylus" scoped>
.my-canvas
    position absolute
    left 0
    top 0
    z-index 1
    pointer-events none
.mui-scroll-wrapper
    position fixed
    top 159px
    z-index 1
    height calc(100% - 202px)
    background-color #ffffff
    color #333
.tabs-header 
    display flex
    text-align center
    height 28px
    line-height 28px
    font-size 14px
    background #eee
    span 
        flex 1
        border-left 1px solid #e6e6e6
        &:nth-of-type(1) 
            flex 0 0 25%
            border-left none
.tabs-item
    .k-chart-item
        display flex
        text-align center
        height 28px
        line-height 28px
        font-size 12px
        &:nth-of-type(even) 
            background #eee
        span 
            flex 1
            border-left 1px solid #e6e6e6
            &:nth-of-type(1) 
                flex 0 0 25%
                border-left none
            &.active
                color #ffffff
                position relative
                &:before 
                    font-size inherit
                    color currentColor
                    text-align center
                    position relative
                    z-index 5
                    content attr(data-text)
                &:after
                    content ""
                    position absolute
                    left 50%
                    top 50%
                    transform translate(-50%,-50%)
                    width 20px
                    height 20px
                    background #f63f3f
                    border-radius 50%
</style>
