
export default {
    // 获取当前浏览器环境
    getUserAgent() {
        var env = {}
        env.isAndroid = navigator.userAgent.indexOf('Android') > -1 || navigator.userAgent.indexOf('Linux') > -1; //安卓端
        env.isIOS = !!navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
        return env
    },
    // 获取屏幕像素
    getScreenInfo(){
        var info = {}
        info.width = document.body.clientWidth
        info.height = document.body.clientHeight
        return info
    },
    // 获取节点信息
    getDomInfo(query){
        let info = {}
        const obj = document.querySelector(query).getBoundingClientRect()
        info.width = obj.width
        info.height = obj.height
        info.top = obj.top
        info.bottom = obj.bottom
        info.left = obj.left
        info.right = obj.right
        return info
    },
    // 本地存储
    setLocalStorage(key, content){
        window.localStorage.setItem(key, JSON.stringify(content));
    },
    // 读取存储
    getLocalStorage(key){
        let result = window.localStorage.getItem(key)
        return result ? JSON.parse(result) : false
    },
    // 调整顺序
    sortArray(source, sort) {
        let _sort = []
        if (sort.length === 0) return source
        sort.forEach(item1 => {
            source.forEach(item2 => {
                if (item1 === item2.name) {
                    _sort.push(item2)
                }
            });
        });
        return _sort
    },
    // 对象深层拷贝
    deepClone(obj) {
        var _obj = JSON.stringify(obj),
        objClone = JSON.parse(_obj)
        return objClone
    },
    // 判断对象是否在数组里
    contains(obj, source) {
        var a = false
        source.forEach(item => {
            if(obj===item){
                a = true
            }
        })
        return a
    },
    // 生成随机数
    random_number(len, count) {
        var arr = []
        var original = new Array;
        for (let i = 0; i < count; i++) {
            original[i] = i;
        }
        original.sort(function() {
            return 0.5 - Math.random();
        });
        for (let i = 0; i < len; i++) {
            arr.push(original[i])
        }
        console.log(arr);
        return arr
    },
}