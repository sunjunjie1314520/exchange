<template>
    <input :value="value" @blur="defaultValue" type="tel" :placeholder="placeholder" @input="updateVal($event.target.value, $event)">
</template>

<script>
    export default {
        model: {
            prop: 'value',
            event: 'input'
        },
        props: {
            placeholder: {
                type: String,
                default: '',
            },
            value: {
                default:''
            },
            maxLength: {
                type: Number,
                default: 30,
            },
            minNumber: {
                type: Number,
                default: 1,
            },
            maxNumber: {
                type: Number,
            },
            auto: {
                type: Boolean,
                default: true,
            }
        },
        name: 'b-input',
        data(){
            return {

            }
        },
        methods: {
            updateVal(value, e){
                var reg = /^\d$/
                let arr = value.split('')
                var filter = []

                if (arr[0] === '0'){
                    console.log('第一个数字不能为0');
                }else{
                    arr.forEach((item, index) => {
                    if (reg.test(item)) {
                            filter.push(item)
                        }
                    })
                }
                var str = filter.join('')
                if (str.length > this.maxLength){
                    str = str.substring(0, this.maxLength)
                }
                
                if(str > this.maxNumber && this.maxNumber){
                    str = this.maxNumber
                    this.$emit('maxMessage', str);
                }
                e.target.value = str
                this.$emit('input', str);
            },
            defaultValue(){
                var money = this.value * 1
                if(money == 0 && this.auto){
                    this.$emit('input', this.minNumber);
                }
            }
        }
    }
</script>

<style>

</style>