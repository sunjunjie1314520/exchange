<template>
    <div ref="priceBox" :id="tableName" class="mui-scroll-wrapper">
        <div class="mui-scroll">
            <v-table
                is-horizontal-resize
                style="width:100%"
                :columns="xList"
                :table-data="yList"
                title-bg-color="#eee"
                even-bg-color="#eee"
                :column-cell-class-name="columnCellClass"
            ></v-table>
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
    updated() {
        // this.mui(".mui-scroll-wrapper").scroll().scrollTo && this.mui(".mui-scroll-wrapper").scroll().scrollTo(0,0,100)
    },
    mounted() {
        const totalH =  (window.screen.height - 206)  + 'px';
        this.$refs.priceBox.style.setProperty(
            'height',
            totalH
        );
        this.mui(".mui-scroll-wrapper").scroll({
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
    }
}
</script>

<style lang="stylus" scoped>
.mui-scroll-wrapper
    top 39px
    z-index 1
</style>
