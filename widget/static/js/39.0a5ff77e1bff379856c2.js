webpackJsonp([39],{1279:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var A=e(12);e.n(A),e(49);t.default={data:function(){return{height:"",marginTop:"",ajaxData:{}}},created:function(){var n=localStorage.getItem("ajaxData");this.ajaxData=JSON.parse(n)},mounted:function(){this.isIPhoneX()},methods:{isIPhoneX:function(){var n=this.phoneSize();"iphonex"===n?(this.height="54.4",this.marginTop="-5.86"):this.height="49.26"},go:function(){this.$router.push({path:"/personalData"})}}}},1327:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var A=e(296),a=e.n(A),i=e(12),o=(e.n(i),e(49),e(48)),r=e(788),s=e.n(r),c=e(810),l=e.n(c),g=e(1742),d=e.n(g),C=e(90);e.n(C),new C.IndexModel;t.default={name:"personMsg",components:{Footer:l.a,Header:d.a,btn:s.a},data:function(){return{text:"退出账号",ListItem:["我的收藏","意见反馈","账户安全","关于我们"],key:!0}},created:function(){this.checkLogin(),localStorage.removeItem("limit"),localStorage.removeItem("selectLimit"),this.setCustomerScroll(0),this.setOrderScroll(0),this.setDealScroll(0),this.$store.commit("setIsSelectStatus",!1)},mounted:function(){console.log("个人中心页面：",this.$root.token)},methods:a()({},e.i(o.mapMutations)(["setCustomerScroll","setOrderScroll","setDealScroll","setIsSelectStatus"]),{setTime:function(){var n=this;this.key=!1;var t=0,e=JSON.parse(localStorage.getItem("loginData")).expires_in,A=setInterval(function(){t++,console.log(123,t),t===e&&(clearInterval(A),n.key=!0)},1e3)},checkLogin:function(){var n=localStorage.getItem("ajaxData");if(!n)return void this.$router.replace({path:"./Login"});var t=JSON.parse(n).timestamp;return t=Date.parse(new Date)-JSON.parse(n).timestamp,(t/=864e5)>10?void this.$router.replace({path:"./Login"}):void 0},routeTo:function(n){switch(n){case 0:this.$router.push({path:"/collectList"});break;case 1:this.$router.push({path:"/feedback"});break;case 2:console.log("账户安全");break;case 3:this.$router.push({path:"/aboutUs"});break;case 4:console.log("4");break;default:return}},quit:function(){localStorage.clear(),this.$router.push({path:"/login"})}})}},1445:function(n,t,e){t=n.exports=e(221)(),t.push([n.i,"\n.personalMsg[data-v-5a76c302] {\n  background: #f8f8f8;\n  min-height: 100vh;\n}\n.personalMsg .fix[data-v-5a76c302] {\n    width: 100%;\n    height: 6vw;\n    background: #e1e1e1;\n    position: absolute;\n    left: 0;\n    top: -6vw;\n}\n.personalMsg ul[data-v-5a76c302] {\n    padding-left: 4.13vw;\n    font-size: 4vw;\n    color: #363636;\n    margin-bottom: 8.13vw;\n    background: #fff;\n    border-bottom: 1px solid #CCC;\n}\n.personalMsg ul li[data-v-5a76c302] {\n      border-bottom: 1px solid #e1e1e1;\n      height: 12vw;\n      display: -ms-flexbox;\n      display: flex;\n      -ms-flex-align: center;\n          align-items: center;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n}\n.personalMsg ul li .version[data-v-5a76c302] {\n        -ms-flex: 1;\n            flex: 1;\n        display: -ms-flexbox;\n        display: flex;\n        -ms-flex-direction: row;\n            flex-direction: row;\n        -ms-flex-align: center;\n            align-items: center;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n}\n.personalMsg ul li .icon-right[data-v-5a76c302] {\n        padding: 0 4.53vw;\n}\n.personalMsg ul li .icon-right img[data-v-5a76c302] {\n          width: 1.86vw;\n          height: 3.06vw;\n}\n.personalMsg ul li[data-v-5a76c302]:last-child {\n      border: none;\n}\n","",{version:3,sources:["/Users/w/Desktop/web/marketing/src/pages/Personal/personalMsg.vue"],names:[],mappings:";AACA;EACE,oBAAoB;EACpB,kBAAkB;CACnB;AACD;IACI,YAAY;IACZ,YAAY;IACZ,oBAAoB;IACpB,mBAAmB;IACnB,QAAQ;IACR,UAAU;CACb;AACD;IACI,qBAAqB;IACrB,eAAe;IACf,eAAe;IACf,sBAAsB;IACtB,iBAAiB;IACjB,8BAA8B;CACjC;AACD;MACM,iCAAiC;MACjC,aAAa;MACb,qBAAqB;MACrB,cAAc;MACd,uBAAuB;UACnB,oBAAoB;MACxB,uBAAuB;UACnB,+BAA+B;CACxC;AACD;QACQ,YAAY;YACR,QAAQ;QACZ,qBAAqB;QACrB,cAAc;QACd,wBAAwB;YACpB,oBAAoB;QACxB,uBAAuB;YACnB,oBAAoB;QACxB,uBAAuB;YACnB,+BAA+B;CAC1C;AACD;QACQ,kBAAkB;CACzB;AACD;UACU,cAAc;UACd,eAAe;CACxB;AACD;MACM,aAAa;CAClB",file:"personalMsg.vue",sourcesContent:["\n.personalMsg[data-v-5a76c302] {\n  background: #f8f8f8;\n  min-height: 100vh;\n}\n.personalMsg .fix[data-v-5a76c302] {\n    width: 100%;\n    height: 6vw;\n    background: #e1e1e1;\n    position: absolute;\n    left: 0;\n    top: -6vw;\n}\n.personalMsg ul[data-v-5a76c302] {\n    padding-left: 4.13vw;\n    font-size: 4vw;\n    color: #363636;\n    margin-bottom: 8.13vw;\n    background: #fff;\n    border-bottom: 1px solid #CCC;\n}\n.personalMsg ul li[data-v-5a76c302] {\n      border-bottom: 1px solid #e1e1e1;\n      height: 12vw;\n      display: -ms-flexbox;\n      display: flex;\n      -ms-flex-align: center;\n          align-items: center;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n}\n.personalMsg ul li .version[data-v-5a76c302] {\n        -ms-flex: 1;\n            flex: 1;\n        display: -ms-flexbox;\n        display: flex;\n        -ms-flex-direction: row;\n            flex-direction: row;\n        -ms-flex-align: center;\n            align-items: center;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n}\n.personalMsg ul li .icon-right[data-v-5a76c302] {\n        padding: 0 4.53vw;\n}\n.personalMsg ul li .icon-right img[data-v-5a76c302] {\n          width: 1.86vw;\n          height: 3.06vw;\n}\n.personalMsg ul li[data-v-5a76c302]:last-child {\n      border: none;\n}\n"],sourceRoot:""}])},1484:function(n,t,e){t=n.exports=e(221)(),t.push([n.i,"\n.header[data-v-a75df336] {\n  width: 100vw;\n  height: 46.26vw;\n  background: url("+e(1685)+") no-repeat center;\n  background-size: 100% 100%;\n  position: relative;\n}\n.header .compile[data-v-a75df336] {\n    color: #fff;\n    font-size: 4vw;\n    padding: 5vw;\n    position: absolute;\n    right: -0.6vw;\n    top: 7.13vw;\n}\n.header .personalMsg[data-v-a75df336] {\n    position: absolute;\n    top: 20.53vw;\n    left: 6.93vw;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-align: center;\n        align-items: center;\n    color: #fff;\n    font-size: 4.266vw;\n}\n.header .personalMsg .via[data-v-a75df336] {\n      background: url("+e(1684)+") no-repeat center;\n      background-size: 100% 100%;\n      width: 16vw;\n      height: 16vw;\n}\n.header .personalMsg .personal-content[data-v-a75df336] {\n      margin-left: 5.6vw;\n}\n.header .personalMsg .personal-content .phoneNumber[data-v-a75df336] {\n        display: -ms-flexbox;\n        display: flex;\n}\n.header .personalMsg .personal-content .phoneNumber .phone-icon[data-v-a75df336] {\n          padding-left: 2vw;\n          padding-right: 4vw;\n}\n.header .personalMsg .personal-content .phoneNumber .phone-icon img[data-v-a75df336] {\n            width: 3.06vw;\n            height: 3.06vw;\n}\n","",{version:3,sources:["/Users/w/Desktop/web/marketing/src/components/personal/header.vue"],names:[],mappings:";AACA;EACE,aAAa;EACb,gBAAgB;EAChB,2DAAgE;EAChE,2BAA2B;EAC3B,mBAAmB;CACpB;AACD;IACI,YAAY;IACZ,eAAe;IACf,aAAa;IACb,mBAAmB;IACnB,cAAc;IACd,YAAY;CACf;AACD;IACI,mBAAmB;IACnB,aAAa;IACb,aAAa;IACb,qBAAqB;IACrB,cAAc;IACd,uBAAuB;QACnB,oBAAoB;IACxB,YAAY;IACZ,mBAAmB;CACtB;AACD;MACM,2DAA8D;MAC9D,2BAA2B;MAC3B,YAAY;MACZ,aAAa;CAClB;AACD;MACM,mBAAmB;CACxB;AACD;QACQ,qBAAqB;QACrB,cAAc;CACrB;AACD;UACU,kBAAkB;UAClB,mBAAmB;CAC5B;AACD;YACY,cAAc;YACd,eAAe;CAC1B",file:"header.vue",sourcesContent:['\n.header[data-v-a75df336] {\n  width: 100vw;\n  height: 46.26vw;\n  background: url("../../assets/imgs/viaBg.png") no-repeat center;\n  background-size: 100% 100%;\n  position: relative;\n}\n.header .compile[data-v-a75df336] {\n    color: #fff;\n    font-size: 4vw;\n    padding: 5vw;\n    position: absolute;\n    right: -0.6vw;\n    top: 7.13vw;\n}\n.header .personalMsg[data-v-a75df336] {\n    position: absolute;\n    top: 20.53vw;\n    left: 6.93vw;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-align: center;\n        align-items: center;\n    color: #fff;\n    font-size: 4.266vw;\n}\n.header .personalMsg .via[data-v-a75df336] {\n      background: url("../../assets/imgs/via.png") no-repeat center;\n      background-size: 100% 100%;\n      width: 16vw;\n      height: 16vw;\n}\n.header .personalMsg .personal-content[data-v-a75df336] {\n      margin-left: 5.6vw;\n}\n.header .personalMsg .personal-content .phoneNumber[data-v-a75df336] {\n        display: -ms-flexbox;\n        display: flex;\n}\n.header .personalMsg .personal-content .phoneNumber .phone-icon[data-v-a75df336] {\n          padding-left: 2vw;\n          padding-right: 4vw;\n}\n.header .personalMsg .personal-content .phoneNumber .phone-icon img[data-v-a75df336] {\n            width: 3.06vw;\n            height: 3.06vw;\n}\n'],sourceRoot:""}])},1583:function(n,t,e){var A=e(1445);"string"==typeof A&&(A=[[n.i,A,""]]),A.locals&&(n.exports=A.locals);e(222)("1ebdee92",A,!0)},1622:function(n,t,e){var A=e(1484);"string"==typeof A&&(A=[[n.i,A,""]]),A.locals&&(n.exports=A.locals);e(222)("e34812d2",A,!0)},1684:function(n,t,e){n.exports=e.p+"static/img/via.7a654e0.png"},1685:function(n,t,e){n.exports=e.p+"static/img/viaBg.5a9c851.png"},1742:function(n,t,e){e(1622);var A=e(88)(e(1279),e(1884),"data-v-a75df336",null);n.exports=A.exports},1845:function(n,t,e){n.exports={render:function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"personalMsg"},[e("Header"),n._v(" "),e("ul",n._l(n.ListItem,function(t,A){return e("li",{key:A,on:{click:function(t){return n.routeTo(A)}}},[3!==A?e("span",[n._v(n._s(t))]):e("div",{staticClass:"version"},[e("span",[n._v(n._s(t))]),e("span",{staticStyle:{color:"#666"}},[n._v("版本 1.0.1")])]),n._v(" "),n._m(0,!0)])}),0),n._v(" "),e("btn",{attrs:{text:n.text},nativeOn:{click:function(t){return n.quit()}}}),n._v(" "),e("Footer")],1)},staticRenderFns:[function(){var n=this,t=n.$createElement,A=n._self._c||t;return A("div",{staticClass:"icon-right"},[A("img",{attrs:{src:e(334),alt:""}})])}]}},1884:function(n,t,e){n.exports={render:function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"header",style:{height:n.height+"vw",marginTop:n.marginTop+"vw"}},[e("div",{staticClass:"compile"},[n._v("编辑")]),n._v(" "),e("div",{staticClass:"personalMsg"},[e("div",{staticClass:"via",on:{click:n.go}}),n._v(" "),e("div",{staticClass:"personal-content"},[e("div",{staticClass:"name"},[e("span",[n._v(n._s("导购员张三"))]),n._v(" "),e("span",[n._v("|")]),n._v(" "),e("span",[n._v(n._s(0===n.ajaxData.sex?"未知":1===n.ajaxData.sex?"男":"女"))])]),n._v(" "),e("div",{staticClass:"phoneNumber"},[e("span",[n._v(n._s("******"+n.ajaxData.phone.slice(6,11)))]),n._v(" "),n._m(0)])])])])},staticRenderFns:[function(){var n=this,t=n.$createElement,A=n._self._c||t;return A("div",{staticClass:"phone-icon"},[A("a",{attrs:{href:"tel:1599999999"}},[A("img",{attrs:{src:e(722),alt:"电话"}})])])}]}},244:function(n,t,e){e(1583);var A=e(88)(e(1327),e(1845),"data-v-5a76c302",null);n.exports=A.exports},296:function(n,t,e){"use strict";t.__esModule=!0;var A=e(91),a=function(n){return n&&n.__esModule?n:{default:n}}(A);t.default=a.default||function(n){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var A in e)Object.prototype.hasOwnProperty.call(e,A)&&(n[A]=e[A])}return n}},334:function(n,t){n.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAXCAYAAAA7kX6CAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQyIDc5LjE2MDkyNCwgMjAxNy8wNy8xMy0wMTowNjozOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo2NTk5MDI1RUVBMTUxMUU4QUQxODhGREY4MkJCMkEwRSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo2NTk5MDI1RkVBMTUxMUU4QUQxODhGREY4MkJCMkEwRSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjY1OTkwMjVDRUExNTExRThBRDE4OEZERjgyQkIyQTBFIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjY1OTkwMjVERUExNTExRThBRDE4OEZERjgyQkIyQTBFIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+iA07CgAAAVRJREFUeNpi3Lp1ayUDA4MAEH9jgAA2ID7i5eW1nQEPYAHi/0Bchi6xbds2JaDm+7g0MgElO4B0Ixa53fhsZPz//z/MBpBCFzT55UCDo7DaiMR2A+KXaPKRQAPT8NoItVUbSF3Bok4LaPN1XDYyACWvAqkELBqPAA1lxakRqnkhkJqHJiwExPvwaoRqTgZSx9GEbYC2NuDVCAXeQPwdTaweqNkVI3CwJAITIHUaTRiUwtTx2Qhy8hkghR4dXEB8Ga9GmN+wiG3GqxHoVFByjEMT3gF0SRwTHk3BQKocTfgxyAc4AweoSR1I3cBinjTQtmdYowOoiQdIncCiyR2mCVc8boNmbGSQCdS0C2fKAdo2DUjZommaD9Q0A19+jAdSC9DkLwA1GeLMj0BNWlg0fQZiO5xFB1CTOZC+ikXOCWjbZ3yFFShlrAfiD0jia6HJDScACDAA6ixxzcqoUmAAAAAASUVORK5CYII="},346:function(n,t,e){n.exports=e.p+"static/img/icon.4aa63db.png"},722:function(n,t){n.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAABS2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDIgNzkuMTYwOTI0LCAyMDE3LzA3LzEzLTAxOjA2OjM5ICAgICAgICAiPgogPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIi8+CiA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgo8P3hwYWNrZXQgZW5kPSJyIj8+nhxg7wAAAW9JREFUSImt1DFoFEEUxvHfRRBsgihqZRuxi1ooFicIKc4uiGKTVkVQsD0Ld8RgY6GgRQQtJRCIByGFCHaGsxFstBIto6CNggjiszl0WXK7m9v9YBjm+x7zh8eb6USEkc7gFvbjGgZqKKVUmk+N9otYxzEcxGPsqgOo0hSOYqng78FiW4D+mOw6ZtoAHCnJ77UB2FGS9zDfFPCjoqbXFLBRUbPZFPCkJP+MB00BQ7wck9/Gl6YAuDom/9jk8jzgna3fQx+dNgBwB88L+Uk8bQsA5/Cp4F3Aw7YA3zGHbwX/yqSQTu67zmsWr7Gz4C9jAb9H5wO4jGm8Simt1gVAFy+2gAzxCLtxA3tz2QoWU0pv/zkRUbZORcTP2L7uRsS+LMsqASLieER8nQCyGRHny1qU12E8w6E6xTn9Kk7ROL3HCaxtE/ChTouK62ZE/KnZpt4kABExGxGDissvZVlWOqZ11MVZnPZ/nIe4n1J6A38BdueMJT6psIMAAAAASUVORK5CYII="},781:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{}},props:["text"]}},783:function(n,t,e){t=n.exports=e(221)(),t.push([n.i,'\n.btn[data-v-9e3659d8] {\n  width: 84.26vw;\n  height: 13.066vw;\n  background-color: #007AFF;\n  border-radius: 0.53vw;\n  font-family: "MicrosoftYaHei";\n  font-size: 4.8vw;\n  letter-spacing: 0.66vw;\n  color: #eff9fd;\n  text-align: center;\n  line-height: 13.066vw;\n  margin: auto;\n}\n',"",{version:3,sources:["/Users/w/Desktop/web/marketing/src/components/personal/Btn.vue"],names:[],mappings:";AACA;EACE,eAAe;EACf,iBAAiB;EACjB,0BAA0B;EAC1B,sBAAsB;EACtB,8BAA8B;EAC9B,iBAAiB;EACjB,uBAAuB;EACvB,eAAe;EACf,mBAAmB;EACnB,sBAAsB;EACtB,aAAa;CACd",file:"Btn.vue",sourcesContent:['\n.btn[data-v-9e3659d8] {\n  width: 84.26vw;\n  height: 13.066vw;\n  background-color: #007AFF;\n  border-radius: 0.53vw;\n  font-family: "MicrosoftYaHei";\n  font-size: 4.8vw;\n  letter-spacing: 0.66vw;\n  color: #eff9fd;\n  text-align: center;\n  line-height: 13.066vw;\n  margin: auto;\n}\n'],sourceRoot:""}])},785:function(n,t,e){var A=e(783);"string"==typeof A&&(A=[[n.i,A,""]]),A.locals&&(n.exports=A.locals);e(222)("405ae146",A,!0)},788:function(n,t,e){e(785);var A=e(88)(e(781),e(790),"data-v-9e3659d8",null);n.exports=A.exports},790:function(n,t){n.exports={render:function(){var n=this,t=n.$createElement;return(n._self._c||t)("div",{staticClass:"btn"},[n._v("\n  "+n._s(n.text)+"\n")])},staticRenderFns:[]}},791:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var A=e(296),a=e.n(A),i=e(12),o=(e.n(i),e(49),e(48));t.default={data:function(){return{padding:"",status:!1}},computed:a()({},e.i(o.mapState)({chartActive:function(n){return n.personMsg.chartActive}})),mounted:function(){this.isIPhoneX()},created:function(){this.isDeal()},methods:a()({},e.i(o.mapMutations)(["setChartActive"]),{changeActive:function(){this.setChartActive(!0)},isDeal:function(){"boss"===this._localAjax().typename?this.status=!0:this.status=!1},touchend:function(n){alert("该模块尚未开发")},isIPhoneX:function(){"iphonex"===this.phoneSize()&&(this.padding="4.53")}})}},795:function(n,t,e){t=n.exports=e(221)(),t.push([n.i,"\n.footer[data-v-334d2b22] {\n  width: 100vw;\n  position: fixed;\n  background: #f8f8f8;\n  bottom: 0;\n}\n.footer .charActive[data-v-334d2b22] {\n    width: 6.6vw;\n    height: 6.6vw;\n    margin-bottom: 1.33vw;\n    background: url("+e(346)+");\n    background-size: 2100%;\n    background-position: -14.2vw -20.8vw;\n}\n.footer .charPActive[data-v-334d2b22] {\n    color: #007aff;\n    font-size: 2.4vw;\n    text-align: center;\n}\n.footer ul[data-v-334d2b22] {\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-pack: distribute;\n        justify-content: space-around;\n    padding-bottom: 1vw;\n}\n.footer ul li[data-v-334d2b22] {\n      margin-top: 2vw;\n}\n.footer ul li .iconHome[data-v-334d2b22] {\n        width: 6.6vw;\n        height: 6.6vw;\n        margin-bottom: 1.33vw;\n        background: url("+e(346)+");\n        background-size: 2100%;\n        background-position: -7.6vw -20.8vw;\n}\n.footer ul li .iconChar[data-v-334d2b22] {\n        width: 6.6vw;\n        height: 6.6vw;\n        margin-bottom: 1.33vw;\n        background: url("+e(346)+");\n        background-size: 2100%;\n        background-position: -21.4vw -20.8vw;\n}\n.footer ul li .iconSalary[data-v-334d2b22] {\n        width: 6.6vw;\n        height: 6.6vw;\n        margin-bottom: 1.33vw;\n        background: url("+e(805)+") no-repeat center;\n        background-size: 100% 100%;\n}\n.footer ul li .iconMsg[data-v-334d2b22] {\n        width: 6.6vw;\n        height: 6.6vw;\n        margin-bottom: 1.33vw;\n        background: url("+e(808)+") no-repeat center;\n        background-size: 100% 100%;\n}\n.footer ul li .iconPerson[data-v-334d2b22] {\n        width: 6.6vw;\n        height: 6.6vw;\n        margin-bottom: 1.33vw;\n        background: url("+e(346)+");\n        background-size: 2100%;\n        background-position: -49.7vw -20.8vw;\n}\n.footer ul li p[data-v-334d2b22] {\n        color: #8e8e93;\n        font-size: 2.4vw;\n        text-align: center;\n}\n.footer ul li .router-link-exact-active .iconHome[data-v-334d2b22] {\n        width: 6.6vw;\n        height: 6.6vw;\n        margin-bottom: 1.33vw;\n        background: url("+e(346)+");\n        background-size: 2100%;\n        background-position: -0.4vw -20.8vw;\n}\n.footer ul li .router-link-exact-active .iconChar[data-v-334d2b22] {\n        width: 6.6vw;\n        height: 6.6vw;\n        margin-bottom: 1.33vw;\n        background: url("+e(346)+");\n        background-size: 2100%;\n        background-position: -14.2vw -20.8vw;\n}\n.footer ul li .router-link-exact-active .iconCharP[data-v-334d2b22] {\n        color: #007aff;\n        font-size: 2.4vw;\n        text-align: center;\n}\n.footer ul li .router-link-exact-active .iconSalary[data-v-334d2b22] {\n        width: 6.6vw;\n        height: 6.6vw;\n        margin-bottom: 1.33vw;\n        background: url("+e(806)+") no-repeat center;\n        background-size: 100% 100%;\n}\n.footer ul li .router-link-exact-active .iconMsg[data-v-334d2b22] {\n        width: 6.6vw;\n        height: 6.6vw;\n        margin-bottom: 1.33vw;\n        background: url("+e(809)+") no-repeat center;\n        background-size: 100% 100%;\n}\n.footer ul li .router-link-exact-active .iconPerson[data-v-334d2b22] {\n        width: 6.6vw;\n        height: 6.6vw;\n        margin-bottom: 1.33vw;\n        background: url("+e(346)+");\n        background-size: 2100%;\n        background-position: -42.6vw -20.8vw;\n}\n","",{version:3,sources:["/Users/w/Desktop/web/marketing/src/components/Footer.vue"],names:[],mappings:";AACA;EACE,aAAa;EACb,gBAAgB;EAChB,oBAAoB;EACpB,UAAU;CACX;AACD;IACI,aAAa;IACb,cAAc;IACd,sBAAsB;IACtB,0CAA8C;IAC9C,uBAAuB;IACvB,qCAAqC;CACxC;AACD;IACI,eAAe;IACf,iBAAiB;IACjB,mBAAmB;CACtB;AACD;IACI,qBAAqB;IACrB,cAAc;IACd,0BAA0B;QACtB,8BAA8B;IAClC,oBAAoB;CACvB;AACD;MACM,gBAAgB;CACrB;AACD;QACQ,aAAa;QACb,cAAc;QACd,sBAAsB;QACtB,0CAA8C;QAC9C,uBAAuB;QACvB,oCAAoC;CAC3C;AACD;QACQ,aAAa;QACb,cAAc;QACd,sBAAsB;QACtB,0CAA8C;QAC9C,uBAAuB;QACvB,qCAAqC;CAC5C;AACD;QACQ,aAAa;QACb,cAAc;QACd,sBAAsB;QACtB,2DAA8D;QAC9D,2BAA2B;CAClC;AACD;QACQ,aAAa;QACb,cAAc;QACd,sBAAsB;QACtB,2DAA4D;QAC5D,2BAA2B;CAClC;AACD;QACQ,aAAa;QACb,cAAc;QACd,sBAAsB;QACtB,0CAA8C;QAC9C,uBAAuB;QACvB,qCAAqC;CAC5C;AACD;QACQ,eAAe;QACf,iBAAiB;QACjB,mBAAmB;CAC1B;AACD;QACQ,aAAa;QACb,cAAc;QACd,sBAAsB;QACtB,0CAA8C;QAC9C,uBAAuB;QACvB,oCAAoC;CAC3C;AACD;QACQ,aAAa;QACb,cAAc;QACd,sBAAsB;QACtB,0CAA8C;QAC9C,uBAAuB;QACvB,qCAAqC;CAC5C;AACD;QACQ,eAAe;QACf,iBAAiB;QACjB,mBAAmB;CAC1B;AACD;QACQ,aAAa;QACb,cAAc;QACd,sBAAsB;QACtB,2DAA+D;QAC/D,2BAA2B;CAClC;AACD;QACQ,aAAa;QACb,cAAc;QACd,sBAAsB;QACtB,2DAA0D;QAC1D,2BAA2B;CAClC;AACD;QACQ,aAAa;QACb,cAAc;QACd,sBAAsB;QACtB,2CAA8C;QAC9C,uBAAuB;QACvB,qCAAqC;CAC5C",file:"Footer.vue",sourcesContent:["\n.footer[data-v-334d2b22] {\n  width: 100vw;\n  position: fixed;\n  background: #f8f8f8;\n  bottom: 0;\n}\n.footer .charActive[data-v-334d2b22] {\n    width: 6.6vw;\n    height: 6.6vw;\n    margin-bottom: 1.33vw;\n    background: url(../../static/images/icon.png);\n    background-size: 2100%;\n    background-position: -14.2vw -20.8vw;\n}\n.footer .charPActive[data-v-334d2b22] {\n    color: #007aff;\n    font-size: 2.4vw;\n    text-align: center;\n}\n.footer ul[data-v-334d2b22] {\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-pack: distribute;\n        justify-content: space-around;\n    padding-bottom: 1vw;\n}\n.footer ul li[data-v-334d2b22] {\n      margin-top: 2vw;\n}\n.footer ul li .iconHome[data-v-334d2b22] {\n        width: 6.6vw;\n        height: 6.6vw;\n        margin-bottom: 1.33vw;\n        background: url(../../static/images/icon.png);\n        background-size: 2100%;\n        background-position: -7.6vw -20.8vw;\n}\n.footer ul li .iconChar[data-v-334d2b22] {\n        width: 6.6vw;\n        height: 6.6vw;\n        margin-bottom: 1.33vw;\n        background: url(../../static/images/icon.png);\n        background-size: 2100%;\n        background-position: -21.4vw -20.8vw;\n}\n.footer ul li .iconSalary[data-v-334d2b22] {\n        width: 6.6vw;\n        height: 6.6vw;\n        margin-bottom: 1.33vw;\n        background: url(../assets/imgs/customer.png) no-repeat center;\n        background-size: 100% 100%;\n}\n.footer ul li .iconMsg[data-v-334d2b22] {\n        width: 6.6vw;\n        height: 6.6vw;\n        margin-bottom: 1.33vw;\n        background: url(../assets/imgs/unwork.png) no-repeat center;\n        background-size: 100% 100%;\n}\n.footer ul li .iconPerson[data-v-334d2b22] {\n        width: 6.6vw;\n        height: 6.6vw;\n        margin-bottom: 1.33vw;\n        background: url(../../static/images/icon.png);\n        background-size: 2100%;\n        background-position: -49.7vw -20.8vw;\n}\n.footer ul li p[data-v-334d2b22] {\n        color: #8e8e93;\n        font-size: 2.4vw;\n        text-align: center;\n}\n.footer ul li .router-link-exact-active .iconHome[data-v-334d2b22] {\n        width: 6.6vw;\n        height: 6.6vw;\n        margin-bottom: 1.33vw;\n        background: url(../../static/images/icon.png);\n        background-size: 2100%;\n        background-position: -0.4vw -20.8vw;\n}\n.footer ul li .router-link-exact-active .iconChar[data-v-334d2b22] {\n        width: 6.6vw;\n        height: 6.6vw;\n        margin-bottom: 1.33vw;\n        background: url(../../static/images/icon.png);\n        background-size: 2100%;\n        background-position: -14.2vw -20.8vw;\n}\n.footer ul li .router-link-exact-active .iconCharP[data-v-334d2b22] {\n        color: #007aff;\n        font-size: 2.4vw;\n        text-align: center;\n}\n.footer ul li .router-link-exact-active .iconSalary[data-v-334d2b22] {\n        width: 6.6vw;\n        height: 6.6vw;\n        margin-bottom: 1.33vw;\n        background: url(../assets/imgs/customer1.png) no-repeat center;\n        background-size: 100% 100%;\n}\n.footer ul li .router-link-exact-active .iconMsg[data-v-334d2b22] {\n        width: 6.6vw;\n        height: 6.6vw;\n        margin-bottom: 1.33vw;\n        background: url(../assets/imgs/work.png) no-repeat center;\n        background-size: 100% 100%;\n}\n.footer ul li .router-link-exact-active .iconPerson[data-v-334d2b22] {\n        width: 6.6vw;\n        height: 6.6vw;\n        margin-bottom: 1.33vw;\n        background: url(../../static/images/icon.png);\n        background-size: 2100%;\n        background-position: -42.6vw -20.8vw;\n}\n"],sourceRoot:""}])},799:function(n,t,e){var A=e(795);"string"==typeof A&&(A=[[n.i,A,""]]),A.locals&&(n.exports=A.locals);e(222)("8626f704",A,!0)},805:function(n,t){n.exports="data:image/png;base64,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"},806:function(n,t){n.exports="data:image/png;base64,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"},808:function(n,t){n.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAABS2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDIgNzkuMTYwOTI0LCAyMDE3LzA3LzEzLTAxOjA2OjM5ICAgICAgICAiPgogPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIi8+CiA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgo8P3hwYWNrZXQgZW5kPSJyIj8+nhxg7wAAAt9JREFUaIHt2kGoVFUcx/HPuw4GErQQgoQSalGoZQtJkRduxEWiKIgIGRTkUlRwUe1FRJNoIYKBSiiagpSiPmyhBuGjWTwRxVxIuHYWWkSKz1qceTRznHn33XNH78zjfWEW/8P//P+/H3PuvWfOXKYJQ/V6vcz8N7AdqzEfLxWc/wh/4Dy+wb1UIWWMrMFxvJxaIOIvfIyfUiZniU0/xGm9M6FZ61SzdmFSjGQ4gNkpDXOY3axdWFctodkwFkVj3+MQ/i5Yaw624JOWsUXNHleLFEox8n4U/47PMJ5QC37FB3g76lHISMrSejWKx6Sb0Jw7ltMjlxQjszoIKUtcI+6RS7y0XsE6LMPcLnPejeJh/FC0ccTSKF6Ht7rkNjCKM3gwMdj6HPkU+3Q30G80sBNH+H9pbcNhg2OCoPWwoN1QvV5fiOsS1mWfMI7FNeHriU38iNtdJq4QrqEJbuFsSTFrsKAlvoYrXXLfwVoMNeNZ2FnDyihxN76apOlu7UbG8MUUBXfjde1GLuPLSfJ3ade4MsO8KOlkTtPHUfw0J38qxLffuEdMfJecl3n2WZIn7JcovpaTPxVGc3rExBqzlC3Kz9gsrNNRHEyoEXNQ+C2zBOeaPQqRYgSONT+9Yhz7yxToZGSB57NFT+UO/sxL6mTkRO+1lKIh3PJvTpaU+gvxRTIXO/KSBsEI3M9L6LS0HurN1rxXjGJPXlInI8O40XM5z5lBWVq5zBjpN2aM9BszRvqNDE+isaLHnn1Bhkst8W3crUhLKWrYgM+FA+Xv8G+lihKpCUvp26qFlGVaXezTghkj/caEkWGskn6qUjkZ9goHYiPK/89RGRm2tsTrhZcABo4M/0Rjy6sQUpD3ovhBDb9pP5HfLxw+9OtW5U18HY3Vaziq3chrBu9aOZoJ75OMVK2kBCM4lglH9BtxoVo9SVwUtD+deI48FF5V2iRs6xsVCZsKDUHjJnwkaJ8+/Adf/n4yuhlvMAAAAABJRU5ErkJggg=="},809:function(n,t){n.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAABS2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDIgNzkuMTYwOTI0LCAyMDE3LzA3LzEzLTAxOjA2OjM5ICAgICAgICAiPgogPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIi8+CiA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgo8P3hwYWNrZXQgZW5kPSJyIj8+nhxg7wAAA1dJREFUaIHtmltIFFEYx387Tmaut7U0E1MzqQdXi4opwnqykCIwiZCiG9RLEfXgYy89dyF6sKBAJSqoIOihkt4SgijCMrAgL2V0Udb7quVle5hVZ8+uTnNG2VH8vX0f53zf/797ds6Z2YEFgkvTNDvzs4HzwF4gB1hqcf4foA14ClwDvskKsWNkH3APSJAtIDAAHAaeyExWJJvuAB4xeyYI1noYrG0ZGSMKUAXEyjQ0ITZY27IuVaJZMeAVcneAW8CgxVrxwCngiCHnDfZ4aaWQjJGNQvwZOAGMSdQCeAVowHqhhyUjMksrXYgbkDdBcG6DSQ9TZIzERBBiF7GG2MMUcWklA2XANmD5NHMKhbgYeGC1scBWIS4D1k4z1ge8Bh4DvRNJ4z5yHLjM9Aachg+oBGpgammdA6qZPyZA11qNrh2XpmkFwHsk1qVDGAM2qOhfT4iJ7rSdDLtzI85K7H5HQu/HyXjIvYaeNKnNeJKUznqW+Vsn44FkL/2eTRHHxvnb8HTWA4GJVAxQqQIlxoE/co/xPf/0tE1Xf6kKMTKYuI72/DOSFnRih3+HGOn3bKZ9Bg1ZzTfIbK0xpkoUINOY6Vq5a8am44pwoXPJHtemCAg1wnoIdKWXiKlMBXEvMRHWnxK6sQ8kiacV6/iFGmKPMMI1mliPQF+qRrP3Ip7OegaSC+jIKrdaIoyOrHJcgb+4+5roWVFMX6r1WwuZsxa+jFJ8GaUyUyMScCn8yj5kq0aYkTh/C67xEVtFZ5NhdzZjMfGm48KM5DdemBNBsowuSaZpy02G3HkzjrN/yZlj1JFeMr7eNx3neCMAo7EppmPCltaY6g67rkcTf5KXnzlHTce5NE0LCLkioHFOVM0ehcAHY8I5H71NFo04jUUjTmPRiNNQgFEhZ/WxpyNQgBeG+BPQEiUttlCBA8BJ9AfKtzHc1c8nVPSldD3aQuyyoH7sC4JFI05jwkgxsBvJpypOQAEuAfVAHfb/54gaCnDWEO9Hfwlg3qEAw0JuezSEWKRIiHtV4A2hT+Svov/n4NSjSh5wRci9VYFaQo2sYv79VmoV9PdJ6qKtxAZ1wF0FGAcOAs+iq0eK5+jaxyf2kT70V5Uq0I/1vigJ+x986BorgD3o2hcO/wDGAaqo6LSohgAAAABJRU5ErkJggg=="},810:function(n,t,e){e(799);var A=e(88)(e(791),e(813),"data-v-334d2b22",null);n.exports=A.exports},813:function(n,t){n.exports={render:function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"footer",style:{"padding-bottom":n.padding+"vw"}},[e("ul",[e("li",{attrs:{id:"1"}},[e("router-link",{attrs:{to:"/home",replace:""},nativeOn:{click:function(t){return n.changeActive(t)}}},[e("div",{staticClass:"iconHome"}),n._v(" "),e("p",{staticClass:"iconCharP"},[n._v("首页")])])],1),n._v(" "),n.status?e("li",{attrs:{id:"2"}},[e("router-link",{attrs:{to:"/ReportForms",replace:""},nativeOn:{click:function(t){return n.changeActive(t)}}},[e("div",{staticClass:"iconChar"}),n._v(" "),e("p",{staticClass:"iconCharP"},[n._v("报表")])])],1):e("li",{attrs:{id:"3"}},[e("router-link",{attrs:{to:"/Customer",replace:""},nativeOn:{click:function(t){return n.changeActive(t)}}},[e("div",{staticClass:"iconSalary"}),n._v(" "),e("p",{staticClass:"iconCharP"},[n._v("客户")])])],1),n._v(" "),e("li",{attrs:{id:"4"}},[e("router-link",{attrs:{to:"/",replace:""},nativeOn:{click:function(t){return n.changeActive(t)}}},[e("div",{staticClass:"iconMsg"}),n._v(" "),e("p",{staticClass:"iconCharP"},[n._v("工作")])])],1),n._v(" "),e("li",{attrs:{id:"5"}},[e("router-link",{attrs:{to:"/personalCenter",replace:""},nativeOn:{click:function(t){return n.changeActive(t)}}},[e("div",{staticClass:"iconPerson"}),n._v(" "),e("p",{staticClass:"iconCharP"},[n._v("个人")])])],1)])])},staticRenderFns:[]}}});