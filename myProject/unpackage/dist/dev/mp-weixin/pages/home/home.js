(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/home/home"],{858:function(n,t,e){"use strict";(function(n,t){var r=e(4);e(26);r(e(25));var u=r(e(859));n.__webpack_require_UNI_MP_PLUGIN__=e,t(u.default)}).call(this,e(1)["default"],e(2)["createPage"])},859:function(n,t,e){"use strict";e.r(t);var r=e(860),u=e(862);for(var a in u)["default"].indexOf(a)<0&&function(n){e.d(t,n,(function(){return u[n]}))}(a);e(865);var i,o=e(32),c=Object(o["default"])(u["default"],r["render"],r["staticRenderFns"],!1,null,null,null,!1,r["components"],i);c.options.__file="pages/home/home.vue",t["default"]=c.exports},860:function(n,t,e){"use strict";e.r(t);var r=e(861);e.d(t,"render",(function(){return r["render"]})),e.d(t,"staticRenderFns",(function(){return r["staticRenderFns"]})),e.d(t,"recyclableRender",(function(){return r["recyclableRender"]})),e.d(t,"components",(function(){return r["components"]}))},861:function(n,t,e){"use strict";var r;e.r(t),e.d(t,"render",(function(){return u})),e.d(t,"staticRenderFns",(function(){return i})),e.d(t,"recyclableRender",(function(){return a})),e.d(t,"components",(function(){return r}));var u=function(){var n=this,t=n.$createElement;n._self._c},a=!1,i=[];u._withStripped=!0},862:function(n,t,e){"use strict";e.r(t);var r=e(863),u=e.n(r);for(var a in r)["default"].indexOf(a)<0&&function(n){e.d(t,n,(function(){return r[n]}))}(a);t["default"]=u.a},863:function(n,t,e){"use strict";(function(n){var r=e(4);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u=r(e(48)),a=r(e(50)),i=e(864),o={data:function(){return{bannerList:[],noticeList:[],productList:[],indicatorDots:!0,autoplay:!0,interval:2e3,duration:500,shopId:1}},methods:{bannerData:function(){var n=this;return(0,a.default)(u.default.mark((function t(){var e,r;return u.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e=n,t.next=3,(0,i.banner)();case 3:r=t.sent,e.bannerList=r;case 5:case"end":return t.stop()}}),t)})))()},goToDetail:function(t){n.navigateTo({url:"/pages/details/details?id=".concat(t.prodId)})}},onLoad:function(){var n=this;this.bannerData(),(0,i.notice)().then((function(t){n.noticeList=t.records})),(0,i.product)().then((function(t){n.productList=t}))}};t.default=o}).call(this,e(2)["default"])},865:function(n,t,e){"use strict";e.r(t);var r=e(866),u=e.n(r);for(var a in r)["default"].indexOf(a)<0&&function(n){e.d(t,n,(function(){return r[n]}))}(a);t["default"]=u.a},866:function(n,t,e){}},[[858,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/home/home.js.map