(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7fe46811"],{"06ac":function(s,t,a){var i=a("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var e=i(a("5530")),u={data:function(){return{detail:{},params:{},show:!1,password:""}},created:function(){this.params=this.$route.query},methods:{success:function(){var s=this;if(2==this.$chu.status){this.loading();var t=(0,e.default)((0,e.default)({},this.$user),{},{trade_id:this.$chu.trade_id,order_number:this.$chu.order_number,to_from_id:this.$chu.to_from_id,trade_detail_id:this.$chu.id,status:3,password:this.$md5(this.password)});this.$api.user.trade_status(t).then((function(t){s.$toast(t.msg),s.show=!1,1==t.code?s.$store.commit("User/SET_CURRENT_STATUS",3):s.password=""})).catch((function(t){s.$toast.clear()}))}},orderRecord:function(){var s=this,t=(0,e.default)((0,e.default)({},this.$user),{},{user_id:1});this.$api.user.orderRecord(t).then((function(t){console.log(t),s.detail=t.data[0]}))}}};t.default=u},"467f":function(s,t,a){"use strict";a.d(t,"a",(function(){return i})),a.d(t,"b",(function(){return e}));var i=function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"app"},[a("div",{staticClass:"order-info"},[a("div",{staticClass:"box"},[a("ul",[a("li",[a("span",[s._v("订单时间：")]),a("div",{staticClass:"fr"},[a("p",[s._v(s._s(s.$chu.create_time))])])]),a("li",[a("span",[s._v("订单编号：")]),a("div",{staticClass:"fr"},[a("p",[s._v(s._s(s.$chu.order_number))])])]),a("li",[a("span",[s._v("交易数量：")]),a("div",{staticClass:"fr"},[a("p",[s._v(s._s(s.$chu.number))])])]),a("li",[a("span",[s._v("交易金额：")]),a("div",{staticClass:"fr"},[a("p",[s._v(s._s(s.$chu.amount))])])]),a("li",[a("span",[s._v("订单状态：")]),a("div",{staticClass:"fr"},[a("p",[s._v(s._s(s.mai_status(s.$chu.status)))])])])])]),a("div",{staticClass:"box"},[a("h2",[s._v("买方信息：")]),a("ul",{staticClass:"mt"},[a("li",[a("span",[s._v("买方ID：")]),a("div",{staticClass:"fr"},[a("p",[s._v(s._s(s.$chu.from_id))])])]),a("li",[a("span",[s._v("买方昵称：")]),a("div",{staticClass:"fr"},[a("p",[s._v(s._s(s.$chu.sell_username))])])]),a("li",[a("span",[s._v("买方手机：")]),a("div",{staticClass:"fr"},[a("p",[s._v(s._s(s.$chu.sell_phone))])])])])]),a("div",{staticClass:"clear"}),0!=s.$chu.status||s.$chu.key_src?s._e():a("div",{staticClass:"pict-show"},[a("p",[s._v("等待对方上传凭证")])]),2==s.$chu.status?a("div",{staticClass:"upload-file"},[a("div",{staticClass:"pub-upload"},[a("img",{attrs:{src:"http://api.ohtbmgn.cn/"+s.$chu.key_src,alt:""}})]),a("p",[s._v("买家打款凭证")])]):s._e(),a("div",{staticClass:"pub-button"},[a("button",{on:{click:function(t){2==s.$chu.status&&(s.show=!0)}}},[s._v(s._s(s.mai_status(s.$chu.status)))])])]),s.show?a("div",{staticClass:"alert-show"},[a("div",{staticClass:"layout"},[a("h2",[s._v("交易密码")]),a("div",{staticClass:"box"},[a("input",{directives:[{name:"model",rawName:"v-model",value:s.password,expression:"password"}],attrs:{maxlength:"20",type:"password",placeholder:"请输入交易密码"},domProps:{value:s.password},on:{input:function(t){t.target.composing||(s.password=t.target.value)}}})]),a("div",{staticClass:"btn"},[a("button",{staticClass:"b1",on:{click:function(t){s.show=!1}}},[s._v("取消")]),a("button",{on:{click:s.success}},[s._v("确定")])])])]):s._e()])},e=[]},ad40:function(s,t,a){"use strict";a.r(t);var i=a("467f"),e=a("af6a");for(var u in e)["default"].indexOf(u)<0&&function(s){a.d(t,s,(function(){return e[s]}))}(u);var r=a("2877"),c=Object(r["a"])(e["default"],i["a"],i["b"],!1,null,null,null);t["default"]=c.exports},af6a:function(s,t,a){"use strict";a.r(t);var i=a("06ac"),e=a.n(i);for(var u in i)["default"].indexOf(u)<0&&function(s){a.d(t,s,(function(){return i[s]}))}(u);t["default"]=e.a}}]);
//# sourceMappingURL=chunk-7fe46811.79cad6e8.js.map