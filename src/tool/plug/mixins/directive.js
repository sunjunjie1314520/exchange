

export default function directive(Vue) {
    // 金额数字限制
    Vue.directive('money', {
        bind: function(el, binding, vnode) {
           
            // console.log(el);
            // console.log(binding);
            // console.log(vnode);
            
            var maxLength = binding.value
            // var min = binding.modifiers.min || false
            var str = el.value
            var reg = /^\d$/
            el.oninput = function(e) {
                var len = el.value.length
                if (e.inputType == 'deleteContentBackward') {
                    str = str.substring(0, str.length - 1)
                }
                if (e.data && e.data.length === 1 && len <= maxLength && e.data != '.') {                    
                    if (reg.test(e.data)) {
                        str += e.data
                        if (len == 1) {
                            if (e.data == '0') {
                                str = ''
                            }
                        }
                    }else{
                        console.error('error number');
                    }
                }
                el.value = str
            }
            el.onpaste = function(e) {
                return false;
            }
            el.onbeforepaste = function(e) {
                return false;
            }
        },
        inserted: function(el, binding, vnode) {
            // console.log('inserted');
        },
        update: function(el, binding, vnode) {
            // console.log('update');
        },
        componentUpdated: function(el, binding, vnode) {
            // console.log('componentUpdated');
        }
    })

    Vue.directive('test', {
        bind: function(el, binding, vnode) {
            console.log(el);
        }
    })
}