

const mixins = {
    props: ['mainId', 'receive_OddsList'],
    data(){
        return {
            OddsList: []
        }
    },
    watch: {
        // 投注后全部清空
        action(value) {
            if (value) {
                this[this.method](0)
                this.$store.commit('Betting/CLEAR_ACTION', false)
            }
        },
        // 单个删除
        oddsId(payload) {
            if (payload) {
                console.log(this.$assist.deepClone(payload));
                this[this.method](1, payload.id, payload.betContent)
                this.$store.commit('Betting/CLEAR_ODDS_ID', false)
            }
        },
    },
    created() {
        var data = this.$assist.deepClone(this.receive_OddsList)
        if (data.length == 1) {
            this.OddsList = data[0].list
        } else {
            this.OddsList = this.$assist.sortArray(data, this.rule || [])
        }
    },
    methods: {
        // 选择处理1
        mixin_select(index, index1) {
            var curr
            curr = this.OddsList[index]['list'][index1]
            this.$set(curr, 'select', !curr.select)
            this[this.method]()
        },
        // 选择处理2
        mixin_select1(index, index1, index2){
            // console.log(this.OddsList[index]['list'][0]['list'][index1]['list'][index2]);
            let curr
            curr = this.OddsList[index]['list'][0]['list'][index1]['list'][index2]
            this.$set(curr, 'select', !curr.select)
            this[this.method]()
        },
        // 选择处理3
        mixin_select2(index, index1) {
            const _this = this
            var count = []

            var title = _this.OddsList[index]['name']
            _this.OddsList[index]['list'].forEach((item1, dex) => {
                if (index1 == dex) {
                    var is = _this.$assist.contains(index, _this.line)
                    if (_this.line.length >= _this.max && !is) {
                        this.$toast('不满足规则!')
                    } else {
                        _this.$set(item1, 'select', !item1.select)
                        _this.$set(item1, 'title', title)
                        _this[_this.method]()
                    }
                }
            })
            this.line = []
            _this.OddsList.forEach((item, dex) => {
                var data = item.list.filter(item => item.select)
                if (data.length > 0) {
                    count.push(dex)
                }
            })
            _this.line = count
        },
        // 选择处理4
        mixin_select3(index, index1) {
            var main = this.OddsList[index]['arr']
            var count = main.filter(item => item.select).length
            var curr = main[index1]

            if (this.count >= this.max && !curr.select) {
                this.$toast('不满足规则!')
            }else{
                this.$set(curr, 'select', !curr.select)
                this[this.method]()
            }
            count = main.filter(item => item.select).length
            this.count = count
        },
        // 选择处理5
        mixin_select4(index) {
            var curr
            curr = this.OddsList[index]
            this.$set(curr, 'select', !curr.select)
            this[this.method]()
        },
        // id: 0全部清除 1单个删除
        caseMethod(item, status, id) {
            const _this = this
            switch (status) {
                case 0:
                    _this.$set(item, 'select', false)
                    break;
                case 1:
                    if (item.id == id) {
                        _this.$set(item, 'select', false)
                    }
                    break;
                default:
                    break;
            }
        },
        // 注单基础参数
        mixin_params() {
            return {
                betMoney: this.perMoney,
                lotteryTypeId: this.playGroupId,
                betNum: this.Opentime.lotteryNumber,
            }
        },
        // 注单生成器1
        mixin_generator(arrList, have_title=false) {
            console.log(arrList, have_title);
            let select = [];
            let get_title = this.mode_config_result.fields ? `${this.mode_config_result.fields[1]}-` : `${this.mode_config_result.title}-`;
            let title = have_title ? get_title : '';
            arrList.forEach(item => {
                let obj = {
                    ...this.mixin_params(),
                    betContent: title.concat(item.name),
                    playTypeId: item.playTypeId,
                    oddsId: item.id,
                    betPl1: item.odds * 1,

                    betPl2: '',
                    betPl3: '',
                    returnScale: 0,
                }
                select.push(obj);
            });
            this.mixin_post(select);
        },
        // 注单生成器2
        mixin_generator2(arrList) {
            console.log(arrList);
            let select = []
            arrList.forEach(two => {
                let title = two.parentName + '-'
                let obj = {
                    ...this.mixin_params(),
                    betContent: title.concat(two.name),
                    playTypeId: two.playTypeId,
                    oddsId: two.id,
                    betPl1: two.odds * 1,

                    betPl2: '',
                    betPl3: '',
                    returnScale: 0,
                    playName: two.parentName
                }
                select.push(obj)
            });
            this.mixin_post(select)
        },
        // 提交
        mixin_post(select) {
            this.$store.commit('Betting/SET_SSC_BET_LIST', select)
        },
        
    }
}

export default mixins