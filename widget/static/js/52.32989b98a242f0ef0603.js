webpackJsonp([52],{1014:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:["collection"],data:function(){return{ImgUrl:"./static/images/collect.png",text:"加入收藏"}},watch:{collection:function(){this.collection?(this.ImgUrl="./static/images/collected.png",this.text="已收藏"):(this.ImgUrl="./static/images/collect.png",this.text="加入收藏")}}}},1068:function(n,t,e){t=n.exports=e(221)(),t.push([n.i,"\n.collect[data-v-5fabbdba] {\n  width: 20.33vw;\n  height: 8vw;\n  border: 2px solid #ffba00;\n  border-radius: 1.06vw;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: center;\n      justify-content: center;\n}\n.collect img[data-v-5fabbdba] {\n    width: 4.26vw;\n    height: 4.26vw;\n    padding-top: 1.6vw;\n}\n.collect span[data-v-5fabbdba] {\n    color: #ffba00;\n    font-size: 3.2vw;\n    padding-left: 1.6vw;\n    line-height: 8vw;\n}\n","",{version:3,sources:["/Users/w/Desktop/web/marketing/src/components/msManage/eggCollectBtn.vue"],names:[],mappings:";AACA;EACE,eAAe;EACf,YAAY;EACZ,0BAA0B;EAC1B,sBAAsB;EACtB,qBAAqB;EACrB,cAAc;EACd,sBAAsB;MAClB,wBAAwB;CAC7B;AACD;IACI,cAAc;IACd,eAAe;IACf,mBAAmB;CACtB;AACD;IACI,eAAe;IACf,iBAAiB;IACjB,oBAAoB;IACpB,iBAAiB;CACpB",file:"eggCollectBtn.vue",sourcesContent:["\n.collect[data-v-5fabbdba] {\n  width: 20.33vw;\n  height: 8vw;\n  border: 2px solid #ffba00;\n  border-radius: 1.06vw;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: center;\n      justify-content: center;\n}\n.collect img[data-v-5fabbdba] {\n    width: 4.26vw;\n    height: 4.26vw;\n    padding-top: 1.6vw;\n}\n.collect span[data-v-5fabbdba] {\n    color: #ffba00;\n    font-size: 3.2vw;\n    padding-left: 1.6vw;\n    line-height: 8vw;\n}\n"],sourceRoot:""}])},1106:function(n,t,e){var i=e(1068);"string"==typeof i&&(i=[[n.i,i,""]]),i.locals&&(n.exports=i.locals);e(222)("07ff6337",i,!0)},1169:function(n,t,e){e(1106);var i=e(86)(e(1014),e(1217),"data-v-5fabbdba",null);n.exports=i.exports},1217:function(n,t){n.exports={render:function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"collect"},[e("img",{attrs:{src:n.ImgUrl,alt:""}}),n._v(" "),e("span",[n._v(n._s(n.text))])])},staticRenderFns:[]}},1360:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=e(296),o=e.n(i),a=e(817),c=(e.n(a),e(89)),A=(e.n(c),e(313)),r=e.n(A),s=e(1169),l=e.n(s),d=e(47),u=new c.IndexModel;t.default={components:{banner:r.a,eggCollectBtn:l.a},data:function(){return{questionData:{},collection:!1,questionId:"",myhtml:"",top:"",account:""}},computed:o()({},e.i(d.mapState)({})),created:function(){this.account=this._localAjax().account,this.questionId=this.$route.query.id,this.getQuestionDetail(this.questionId),this.isIPhoneX()},methods:{getQuestionDetail:function(n){var t=this;u.questionDetail(n,this.account).then(function(n){if(n.data){if(t.questionData=n.data,n.data.remark){var i=n.data.remark;t.myhtml=e.i(a.changeImgStyle)(e.i(a.b64DecodeUnicode)(i)),t.myhtml=e.i(a.changeVedioStyle)(t.myhtml)}t.collection=n.data.collect}})},collect:function(){var n=this.questionId;u.collect(2,n,this.account).then(function(n){console.log("collect")})},cancelCollect:function(){var n=this.questionId;u.remove(2,n,this.account).then(function(n){console.log("canclecollect")})},changeCollectBtn:function(){this.collection=!this.collection,this.collection?this.collect():this.cancelCollect()},isIPhoneX:function(){var n=this.phoneSize();this.top="iphonex"===n?"11vw":"6vw"}}}},1493:function(n,t,e){t=n.exports=e(221)(),t.push([n.i,"\n.question[data-v-b99ba084] {\n  position: relative;\n}\n.question .collectBtn[data-v-b99ba084] {\n    position: fixed;\n    top: 6vw;\n    right: 4.26vw;\n    z-index: 99;\n}\n.question .content[data-v-b99ba084] {\n    word-wrap: break-word !important;\n    padding-top: 16vw;\n    background: #fff;\n    box-shadow: 0px 2px 6px 0px rgba(136, 136, 136, 0.2);\n}\n.question .content .title[data-v-b99ba084] {\n      border-bottom: 1px solid #e1e1e1;\n      padding-right: 4.25vw;\n      margin-left: 4.25vw;\n      box-sizing: border-box;\n}\n.question .content .title h1[data-v-b99ba084] {\n        white-space: pre-wrap;\n        color: #363636;\n        font-size: 4.8vw;\n        padding-top: 3vw;\n        padding-bottom: 3vw;\n        width: 76%;\n        text-align: center;\n        width: 55vw;\n        margin: 0 auto;\n}\n.question .content p[data-v-b99ba084] {\n      white-space: pre-wrap;\n      padding: 0 4.25vw;\n      color: #666;\n      padding-top: 2vw;\n      padding-bottom: 4vw;\n}\n","",{version:3,sources:["/Users/w/Desktop/web/marketing/src/pages/msManage/questionDetail.vue"],names:[],mappings:";AACA;EACE,mBAAmB;CACpB;AACD;IACI,gBAAgB;IAChB,SAAS;IACT,cAAc;IACd,YAAY;CACf;AACD;IACI,iCAAiC;IACjC,kBAAkB;IAClB,iBAAiB;IACjB,qDAAqD;CACxD;AACD;MACM,iCAAiC;MACjC,sBAAsB;MACtB,oBAAoB;MACpB,uBAAuB;CAC5B;AACD;QACQ,sBAAsB;QACtB,eAAe;QACf,iBAAiB;QACjB,iBAAiB;QACjB,oBAAoB;QACpB,WAAW;QACX,mBAAmB;QACnB,YAAY;QACZ,eAAe;CACtB;AACD;MACM,sBAAsB;MACtB,kBAAkB;MAClB,YAAY;MACZ,iBAAiB;MACjB,oBAAoB;CACzB",file:"questionDetail.vue",sourcesContent:["\n.question[data-v-b99ba084] {\n  position: relative;\n}\n.question .collectBtn[data-v-b99ba084] {\n    position: fixed;\n    top: 6vw;\n    right: 4.26vw;\n    z-index: 99;\n}\n.question .content[data-v-b99ba084] {\n    word-wrap: break-word !important;\n    padding-top: 16vw;\n    background: #fff;\n    box-shadow: 0px 2px 6px 0px rgba(136, 136, 136, 0.2);\n}\n.question .content .title[data-v-b99ba084] {\n      border-bottom: 1px solid #e1e1e1;\n      padding-right: 4.25vw;\n      margin-left: 4.25vw;\n      box-sizing: border-box;\n}\n.question .content .title h1[data-v-b99ba084] {\n        white-space: pre-wrap;\n        color: #363636;\n        font-size: 4.8vw;\n        padding-top: 3vw;\n        padding-bottom: 3vw;\n        width: 76%;\n        text-align: center;\n        width: 55vw;\n        margin: 0 auto;\n}\n.question .content p[data-v-b99ba084] {\n      white-space: pre-wrap;\n      padding: 0 4.25vw;\n      color: #666;\n      padding-top: 2vw;\n      padding-bottom: 4vw;\n}\n"],sourceRoot:""}])},1632:function(n,t,e){var i=e(1493);"string"==typeof i&&(i=[[n.i,i,""]]),i.locals&&(n.exports=i.locals);e(222)("63549e77",i,!0)},1895:function(n,t){n.exports={render:function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"question"},[e("banner",{attrs:{title:"常见问题"}}),n._v(" "),e("eggCollectBtn",{staticClass:"collectBtn",style:{top:n.top},attrs:{collection:n.collection},nativeOn:{touchend:function(t){return n.changeCollectBtn(t)}}}),n._v(" "),e("div",{staticClass:"content"},[e("div",{staticClass:"title"},[e("h1",[n._v(n._s(n.questionData.title))])]),n._v(" "),e("p",{domProps:{innerHTML:n._s(n.myhtml)}})])],1)},staticRenderFns:[]}},277:function(n,t,e){e(1632);var i=e(86)(e(1360),e(1895),"data-v-b99ba084",null);n.exports=i.exports},296:function(n,t,e){"use strict";t.__esModule=!0;var i=e(90),o=function(n){return n&&n.__esModule?n:{default:n}}(i);t.default=o.default||function(n){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(n[i]=e[i])}return n}},308:function(n,t){n.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAkCAYAAACJ8xqgAAABS2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDIgNzkuMTYwOTI0LCAyMDE3LzA3LzEzLTAxOjA2OjM5ICAgICAgICAiPgogPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIi8+CiA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgo8P3hwYWNrZXQgZW5kPSJyIj8+nhxg7wAAAfJJREFUSIml1k2IjVEcx/HPYIMSslATymZIU966iMaUlWNBqUlKsxALbJBS1hYTC0UpC1mQxdiQnsnGW8gw2EzZKKGZmiQriQ2Lc69ux7lz7/Pc/+qe7zn3+5zT8zy//9NTq9V0WZdxov77/LwuZTcw3DQ+143wFg6msKrwDvZn+NEqwvvYk+GHQgg3ywofYTDDh0IIo5Q78hMMZPi+EMLdxqAT4Vw8x5bMXAghjDWDdsIFeIYNmbldeJjC2YSL8RJ9Cf+DbRjP/amVcCleY3XCf2M7JlrtIidcXr/6yoT/RA2TrWQwJxmvwLuM7Ds2t5OlO1yDF1iSrJmp7+xzO1mzcB1eiXe1uabqsulOZMQj94s3IJV9FB+XjmUN4RjmJ/xB/UJfy8gawt4Mn8SPsrKG8GSGn8aVqsJLOJuZO45rVYQwgjOZ+SNizJcWwkUcy6wZxu0qQriKw5l1B8SkLi2E6zLNR4z9ooqQeMShDN8ttoHSQhjF3gwfFNtBNvpmE8I9MZnTGhBf1/QNayskxvzODF+P8aIoFpYVwlNsFeO/ufrxpiiKf5HXqZCY4jX8SngfJoqiWAY9Fb6+1orNa1HCp7CjzA4b9R6b8C3hvXhcRQgfxPCdSfiqqkL4go341MTedvvBOS326VPiE3ChS9//9RdWbVrN+RusKgAAAABJRU5ErkJggg=="},313:function(n,t,e){e(316);var i=e(86)(e(314),e(317),"data-v-2a50e813",null);n.exports=i.exports},314:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=e(12);e.n(i),e(87);t.default={name:"routerLink",props:["title"],data:function(){return{fix:"",top:""}},mounted:function(){this.isIPhoneX()},methods:{cilck:function(){this.$router.back(-1)},isIPhoneX:function(n){!!navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)&&(812==screen.height&&375==screen.width||896==screen.height&&414==screen.width)&&(this.fix="fix",this.top="6")}}}},315:function(n,t,e){t=n.exports=e(221)(),t.push([n.i,"\n.banner[data-v-2a50e813] {\n  font-weight: 600;\n  z-index: 99;\n  height: 16.466vw;\n  width: 100vw;\n  box-sizing: border-box;\n  display: -ms-flexbox;\n  display: flex;\n  position: fixed;\n  top: 0;\n  left: 0;\n  -ms-flex-align: center;\n      align-items: center;\n  border-bottom: 1px solid #ccc;\n  background: #f8f8f8;\n  padding-top: 5vw;\n}\n.banner .fix[data-v-2a50e813] {\n    position: absolute;\n    background: #f8f8f8;\n    left: 0;\n    top: -6vw;\n    height: 7vw;\n    width: 100%;\n    z-index: 99;\n}\n.banner .icon-back[data-v-2a50e813] {\n    width: 8vw;\n    height: 6.66vw;\n    padding-left: 4.266vw;\n}\n.banner .icon-back .icon[data-v-2a50e813] {\n      background: url("+e(308)+") no-repeat center;\n      background-size: 100%;\n      width: 2.66vw;\n      height: 4.66vw;\n      margin-top: 1vw;\n}\n.banner span[data-v-2a50e813] {\n    width: 100%;\n    text-align: center;\n    padding-right: 10.4vw;\n    font-size: 5.06vw;\n    letter-spacing: -1px;\n    color: #363636;\n}\n.banner button[data-v-2a50e813] {\n    position: absolute;\n    right: 0;\n    font-size: 14px;\n    line-height: 11vw;\n    padding: 0 5vw;\n    text-align: right;\n    color: #007aff;\n    font-weight: bold;\n    z-index: 1000;\n}\n","",{version:3,sources:["/Users/w/Desktop/web/marketing/src/components/banner.vue"],names:[],mappings:";AACA;EACE,iBAAiB;EACjB,YAAY;EACZ,iBAAiB;EACjB,aAAa;EACb,uBAAuB;EACvB,qBAAqB;EACrB,cAAc;EACd,gBAAgB;EAChB,OAAO;EACP,QAAQ;EACR,uBAAuB;MACnB,oBAAoB;EACxB,8BAA8B;EAC9B,oBAAoB;EACpB,iBAAiB;CAClB;AACD;IACI,mBAAmB;IACnB,oBAAoB;IACpB,QAAQ;IACR,UAAU;IACV,YAAY;IACZ,YAAY;IACZ,YAAY;CACf;AACD;IACI,WAAW;IACX,eAAe;IACf,sBAAsB;CACzB;AACD;MACM,2DAA0D;MAC1D,sBAAsB;MACtB,cAAc;MACd,eAAe;MACf,gBAAgB;CACrB;AACD;IACI,YAAY;IACZ,mBAAmB;IACnB,sBAAsB;IACtB,kBAAkB;IAClB,qBAAqB;IACrB,eAAe;CAClB;AACD;IACI,mBAAmB;IACnB,SAAS;IACT,gBAAgB;IAChB,kBAAkB;IAClB,eAAe;IACf,kBAAkB;IAClB,eAAe;IACf,kBAAkB;IAClB,cAAc;CACjB",file:"banner.vue",sourcesContent:["\n.banner[data-v-2a50e813] {\n  font-weight: 600;\n  z-index: 99;\n  height: 16.466vw;\n  width: 100vw;\n  box-sizing: border-box;\n  display: -ms-flexbox;\n  display: flex;\n  position: fixed;\n  top: 0;\n  left: 0;\n  -ms-flex-align: center;\n      align-items: center;\n  border-bottom: 1px solid #ccc;\n  background: #f8f8f8;\n  padding-top: 5vw;\n}\n.banner .fix[data-v-2a50e813] {\n    position: absolute;\n    background: #f8f8f8;\n    left: 0;\n    top: -6vw;\n    height: 7vw;\n    width: 100%;\n    z-index: 99;\n}\n.banner .icon-back[data-v-2a50e813] {\n    width: 8vw;\n    height: 6.66vw;\n    padding-left: 4.266vw;\n}\n.banner .icon-back .icon[data-v-2a50e813] {\n      background: url(../assets/imgs/back.png) no-repeat center;\n      background-size: 100%;\n      width: 2.66vw;\n      height: 4.66vw;\n      margin-top: 1vw;\n}\n.banner span[data-v-2a50e813] {\n    width: 100%;\n    text-align: center;\n    padding-right: 10.4vw;\n    font-size: 5.06vw;\n    letter-spacing: -1px;\n    color: #363636;\n}\n.banner button[data-v-2a50e813] {\n    position: absolute;\n    right: 0;\n    font-size: 14px;\n    line-height: 11vw;\n    padding: 0 5vw;\n    text-align: right;\n    color: #007aff;\n    font-weight: bold;\n    z-index: 1000;\n}\n"],sourceRoot:""}])},316:function(n,t,e){var i=e(315);"string"==typeof i&&(i=[[n.i,i,""]]),i.locals&&(n.exports=i.locals);e(222)("34a363a4",i,!0)},317:function(n,t){n.exports={render:function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"banner",style:{"margin-top":n.top+"vw"}},[e("div",{class:""+n.fix}),n._v(" "),e("div",{staticClass:"icon-back",on:{click:n.cilck}},[e("div",{staticClass:"icon"})]),n._v(" "),e("span",[n._v(n._s(n.title))]),n._v(" "),n._t("default")],2)},staticRenderFns:[]}},817:function(n,t,e){"use strict";function i(n){return n&&n.__esModule?n:{default:n}}function o(n,t){if(n.length){var e=[];if(""===t)e=[];else for(var i=0;i<n.length;i++)null!=n[i].title.match(t)&&e.push(n[i]);return e}}function a(n,t){return n.map(function(e,i){if(t&&t.length>0){var o=new RegExp(t,"g"),a='<span style="color: #ff2d55">'+t+"</span>";n[i].title=e.title.replace(o,a)}}),n}function c(n,t){var e=window.localStorage,i=(0,C.default)(n);e.setItem(t,i)}function A(n){var t=window.localStorage;return JSON.parse(t.getItem(n))}function r(n,t,e){n.push({path:t,query:e})}function s(n,t){var e=[],i=0;for(var o in n)n[o]!=t&&(e.push(n[o]),e[i++]=n[o]);return e}function l(n,t){var e=[],i=0;for(var o in n)n[o]!=t&&(e.push(n[o]),e[i++]=n[o]);return e.length==n.length&&(e=[].concat((0,v.default)(e),[t])),e}function d(n){return decodeURIComponent(atob(n).split("").map(function(n){return"%"+("00"+n.charCodeAt(0).toString(16)).slice(-2)}).join(""))}function u(n){return n.replace(/<img[^>]*>/gi,function(n,t){var n=n.replace(/title=\"(.*)\"/gi,'style="width: 100%;height:auto"');return n})}function p(n){return n.replace(/<img[^>]*>/gi,function(n,t){var n=n.replace(/title=\"(.*)\"/gi,'style="width: 100%;height:auto"');return n})}function g(n){return n.replace(/<embed[^>]*>/gi,function(n,t){var n=n.replace(/width=\"(.*)\"/gi,'autostart=false wmode="transparent"  loop="false" menu="false" allowscriptaccess="never" allowfullscreen="true" style="width: 100%;height:auto"');return n})}Object.defineProperty(t,"__esModule",{value:!0}),t.changeVedioStyle=t.changeGalleryStyle=t.changeImgStyle=t.b64DecodeUnicode=t.addItem=t.removeItem=t.skipNewPage=t.getLocalStorage=t.setLocalStorage=t.changeColor=t.fuzzyQuery=void 0;var f=e(28),v=i(f),h=e(49),C=i(h);t.fuzzyQuery=o,t.changeColor=a,t.setLocalStorage=c,t.getLocalStorage=A,t.skipNewPage=r,t.removeItem=s,t.addItem=l,t.b64DecodeUnicode=d,t.changeImgStyle=u,t.changeGalleryStyle=p,t.changeVedioStyle=g}});