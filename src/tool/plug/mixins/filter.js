import dayjs from 'dayjs'

function Double(val) {
    return val < 10 ? '0' + val : val + ''
}

export default function FilterStore(Vue) {
    
    // 小于10
    Vue.filter('Double', data => {
        return data < 10 ? '0' + data : '' + data
    })
    // 银行卡号
    Vue.filter('number', function(data) {
        var str = data
        var s1 = str.substring(0, 6)
        var s2 = str.substring(str.length - 3, str.length)
        return s1 + '****' + s2
    })
    // 手机号隐藏
    Vue.filter('mobile', function(data) {
        var str = data
        var s1 = str.substring(0, 3)
        var s2 = str.substring(str.length - 4, str.length)
        return s1 + '****' + s2
    })
    // 资金记录 类型
    Vue.filter('zijin_type', data => {
        switch (data) {
            case 11:
                return '投注/投注扣款'
            case 17:
                return '彩票返水'
            case 27:
                return '余额转开元'
            case 12:
                return '派奖/投注派奖'
            default:
                return data
        }
    })
    // 时间戳 转 时间
    Vue.filter('timer', data => dayjs(data).format('YYYY-MM-DD HH:mm:ss'))

    // 期号
    Vue.filter('lotteryNumber', (data, length) => {
        // 202005220609
        if(!data) return '000'

        var len = data.length
        var str = data.substring(len - length, len)
        
        return str
    })
    // 倒计时
    Vue.filter('CountDown', (data) => {
        if (data >= 0) {
            var h = Double(Math.floor(data / 60 / 60))

            var m = Double(Math.floor(data / 60))

            var s = Double(data % 60)

            var time = ''.concat(h, ':', m, ':', s);
            return time
        }else{
            return '00:00:00'
        }
    })
    // 保存小数
    Vue.filter('toFixed', (data, digit, intercept=false) => {
        let arr = data.toString().split('.')
        if(arr.length == 1){
            return arr[0]
        }else{
            if (intercept) {
                return arr[0].concat('.', arr[1].substring(0, digit))
            }
            return data.toFixed(digit)
        }
    })
    // 金额格式化显示
    Vue.filter('moneyFixed', (data, digit) => {
        if(data){
            return data.toFixed(digit);
        }else{
            return '0.00';
        }
    })
    // 彩种详情
    Vue.filter('DetailName', (data) => {
        switch (data) {
            case 1:
                return '分分时时彩'
            case 2:
                return '极速PK10'
            case 3:
                return '两分时时彩'
            case 4:
                return '三分时时彩'
            case 5:
                return '五分时时彩'
            case 7:
                return '五分六合彩'
            case 13:
                return '重庆时时彩'
            case 14:
                return '天津时时彩'
            case 15:
                return '新疆时时彩'
            case 16:
                return '快乐时时彩'
            case 18:
                return '安微快三'
            case 29:
                return '北京28'
            default:
                return data
        }
    })
    
}