<template>
    <div>
        <div class="pages-tables " id="pages-tables">
            <div class="waterMask" id="watermark"></div>
            <div v-bind:class="tableName" class="rolling-table meal-table" ref="tableBox" :style="{height: maxHeight + 'px'}">
                <table class="table" id="table" cellpadding="0" cellspacing="0" ref="rollingTable">
                    <tr v-for="(x,i) in xList" :key="i">
                        <th class="rows " v-html="l.name" :class="{'cross': index == 0 && i == 0}" v-for="(l,index) in x" :key="index" :colspan="l.colspan" :rowspan="l.rowspan"></th>
                    </tr>
                    <tr v-for="(l,i) in yList" :key="i + 'a'">
                        <template v-for="(x) in xField">
                            <td v-for="(ll, yKey) in l" v-show="x === yKey" :class="{'cols': l.selectCode ==  yList[i][yKey]}">
                                {{ yList[i][yKey]}}
                            </td>
                        </template>
                    </tr>
                    <tr></tr>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
import { createIScroller, refreshScroller } from "@/tool/utils/iscroll";
export default {
    props:['xList', 'xField', 'yList', 'tableName'],
    data(){
        return {
            maxHeight:'100%',
            scroll: {
                scroller: null
            },
        }
    },
    updated() {
        this.maxHeight = window.screen.height - 230
        this.scroll.scroller = createIScroller(`.${this.tableName}`);
    },
    mounted() {
        this.maxHeight = window.screen.height - 230
        this.scroll.scroller = createIScroller(`.${this.tableName}`);
    }
}
</script>

<style lang="stylus" scoped>


</style>
