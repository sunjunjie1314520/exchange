(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-8de73596"],{"54ec":function(t,e,n){"use strict";n.r(e);var a=n("b7fd"),i=n("5ef0");for(var r in i)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(r);var s=n("2877"),u=Object(s["a"])(i["default"],a["a"],a["b"],!1,null,null,null);e["default"]=u.exports},"5ef0":function(t,e,n){"use strict";n.r(e);var a=n("7b90"),i=n.n(a);for(var r in a)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(r);e["default"]=i.a},"7b90":function(t,e,n){var a=n("4ea4");n("b680"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=a(n("5530")),r={name:"Sell",data:function(){return{current:0,formData:{number:1,from_id:""}}},created:function(){this.current=this.min,this.formData.from_id=this.$user.user_id},computed:{price:function(){var t=this.formData.number*this.current.toFixed(2);return t.toFixed(2)},min:function(){return 1*this.$trade.sys_amount-1*this.$trade.sys_amount/100*5},max:function(){return 1*this.$trade.sys_amount+1*this.$trade.sys_amount/100*5},bai:function(){try{return 1-this.$trade.data[1].amount/this.$trade.data[1].volume/this.current}catch(t){return 0}}},watch:{},methods:{submitFun:function(){var t=this;this.loading("正在创建");var e=(0,i.default)((0,i.default)((0,i.default)({},this.formData),this.$user),{},{float_range:this.current.toFixed(2)});this.$api.user.order_order(e).then((function(e){t.$toast(e.msg),setTimeout((function(){t.$router.back()}),1600)}))},addHandle:function(){this.current<this.max&&(this.current+=.01)},jianHandle:function(){this.current>this.min&&(this.current=this.current-.01)}}};e.default=r},b7fd:function(t,e,n){"use strict";n.d(e,"a",(function(){return a})),n.d(e,"b",(function(){return i}));var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"app"},[n("div",{staticClass:"sell-page"},[n("h2",[t._v("单价￥"+t._s(t._f("moneyFixed")(t.min,2))+" - "+t._s(t._f("moneyFixed")(t.max,2)))]),n("ul",[n("li",[n("div",{staticClass:"fl"},[n("span",{staticClass:"add i1",on:{click:t.jianHandle}})]),n("div",{staticClass:"box1"},[n("p",[t._v(t._s(t._f("moneyFixed")(t.current,2))+"(昨日均价"+t._s(t._f("moneyFixed")(t.bai,3))+"% )")])]),n("div",{staticClass:"fl ml32"},[n("span",{staticClass:"add i2",on:{click:t.addHandle}})])]),n("li",[n("span",[t._v("数量")]),n("div",{staticClass:"box1"},[n("b-input",{attrs:{maxLength:5,maxNumber:5e4,placeholder:"请输入交易数量"},model:{value:t.formData.number,callback:function(e){t.$set(t.formData,"number",e)},expression:"formData.number"}})],1)]),n("li",[n("span",[t._v("总价")]),n("div",{staticClass:"box1"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.price,expression:"price"}],attrs:{readonly:"",type:"text",placeholder:"总价"},domProps:{value:t.price},on:{input:function(e){e.target.composing||(t.price=e.target.value)}}})])])]),t._m(0),n("div",{staticClass:"pub-button"},[n("button",{on:{click:t.submitFun}},[t._v("确认")])])])])},i=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"tips"},[n("div",{staticClass:"box"},[n("h4",[t._v("温馨提示:")]),n("p",[t._v("1.交易开放时间为08:00-22:00")]),n("p",[t._v("2.您发布的订单无匹配7天后过期!")])])])}]}}]);
//# sourceMappingURL=chunk-8de73596.581990c6.js.map