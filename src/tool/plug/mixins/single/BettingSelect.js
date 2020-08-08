
const mixin = {
    methods: {
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
        h1(status, id) {
            const _this = this;
            let curr = [];
            this.OddsList.forEach((one, index) => {
                one.list.forEach(item => {
                    _this.caseMethod(item, status, id);
                });
                let data = this.$assist.deepClone(one.list.filter(item => item.select))
                console.log(data);
                data.forEach(item => {
                    var name = item.name;
                    if(this.mode_config_result.title === '龙虎'){
                        name = name.substring(0, 1);
                    }
                    item.name = one.name +'-' + name;
                });;
                curr[index] = data;
            });
            var arr = [];
            for (var i = 0; i < curr.length; i++){
                for (var j = 0; j < curr[i].length; j++){
                    arr.push(curr[i][j])
                }
            }
            this.mixin_generator(arr);
        },
        h2(status, id, content) {
            const _this = this
            var curr = []
            let data = this.OddsList[_this.active]['list'][0]['list']
            data.forEach((one, index) => {
                one.list.forEach((two, index1) => {
                    switch (status) {
                        case 0:
                            // 删除全部
                            _this.$set(two, 'select', false)
                            break;
                        case 1:
                            // 删除单个
                            if(two.select){
                                var a = content.split('-')
                                var b = a[1].split(',')
                                if (two.name == b[0] && index == 0) {
                                    _this.$set(two, 'select', false)
                                }
                            }
                            break;
                        default:
                            break;
                    }
                })
                let res = one.list.filter(two => two.select)
                curr[index] = res
            });
            var arr = this.statis(curr)
            this.mixin_generator(arr)
        },
        h3(status, id, content) {
            const _this = this
            var curr = []
            this.OddsList.forEach((item, index) => {
                item.list.forEach((item1, index1) => {
                    switch (status) {
                        case 0:
                            _this.$set(item1, 'select', false)
                            break;
                        case 1:
                            if (item1.select) {
                                var a = content.split(' ')
                                var b = a[0].split('-')
                                if (item1.name == b[1] && index == this.line[0]) {
                                    console.log(1);
                                    _this.$set(item1, 'select', false)
                                }
                            }
                            break;
                        default:
                            break;
                    }
                })
                
                var data = item.list.filter(item => item.select)
                
                if(data.length > 0){
                    curr[index] = data
                }
            })
            curr = curr.filter(item => item)

            if (curr.length < this.max){
                this.line.splice(0, 1)
            }

            console.log(curr);
            

            var arr = this.statis(curr)

            this.mixin_generator(arr)
        },
        h4(status, id, content) {
            this.odds[this.active] = 0
            var arr = []
            var curr = this.OddsList[this.active]
            curr['arr'].forEach(item => {
                switch (status) {
                    case 0:
                        // 全部清除
                        this.$set(item, 'select', false)
                        break;
                    case 1:
                        // 全部清除
                        this.$set(item, 'select', false)
                        break;
                    default:
                        break;
                }
            })
            var all = curr['arr'].filter(item => item.select)
            if (all.length >= this.min && all.length <= this.max) {
                var str = []
                all.forEach(item => {
                    str.push(item.name)
                })
                var handle = curr['list'][all.length - this.min]
                this.odds[this.active] = handle.odds
                var obj = {
                    name: ''.concat(curr.name, '-', str.join(',')),
                    playTypeId: handle.playTypeId,
                    id: handle.id,
                    odds: handle.odds,
                }
                arr.push(obj)
            }
            this.mixin_generator(arr)
        },
        h5(status, id, content){
            this.OddsList.forEach(item => {
                this.caseMethod(item, status, id)
            });
            let all = this.OddsList.filter(item => item.select)
            this.mixin_generator(all, true)
        }
    }
}

export default mixin