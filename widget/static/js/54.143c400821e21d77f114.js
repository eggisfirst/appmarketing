webpackJsonp([54],{1089:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:["collection"],data:function(){return{ImgUrl:"./static/images/collect.png",text:"加入收藏"}},watch:{collection:function(){this.collection?(this.ImgUrl="./static/images/collected.png",this.text="已收藏"):(this.ImgUrl="./static/images/collect.png",this.text="加入收藏")}}}},1137:function(n,t,e){t=n.exports=e(222)(),t.push([n.i,"\n.collect[data-v-5fabbdba] {\n  width: 20.33vw;\n  height: 8vw;\n  border: 2px solid #ffba00;\n  border-radius: 1.06vw;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: center;\n      justify-content: center;\n}\n.collect img[data-v-5fabbdba] {\n    width: 4.26vw;\n    height: 4.26vw;\n    padding-top: 1.6vw;\n}\n.collect span[data-v-5fabbdba] {\n    color: #ffba00;\n    font-size: 3.2vw;\n    padding-left: 1.6vw;\n    line-height: 8vw;\n}\n","",{version:3,sources:["E:/project/marketing/src/components/msManage/eggCollectBtn.vue"],names:[],mappings:";AACA;EACE,eAAe;EACf,YAAY;EACZ,0BAA0B;EAC1B,sBAAsB;EACtB,qBAAqB;EACrB,cAAc;EACd,sBAAsB;MAClB,wBAAwB;CAC7B;AACD;IACI,cAAc;IACd,eAAe;IACf,mBAAmB;CACtB;AACD;IACI,eAAe;IACf,iBAAiB;IACjB,oBAAoB;IACpB,iBAAiB;CACpB",file:"eggCollectBtn.vue",sourcesContent:["\n.collect[data-v-5fabbdba] {\n  width: 20.33vw;\n  height: 8vw;\n  border: 2px solid #ffba00;\n  border-radius: 1.06vw;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: center;\n      justify-content: center;\n}\n.collect img[data-v-5fabbdba] {\n    width: 4.26vw;\n    height: 4.26vw;\n    padding-top: 1.6vw;\n}\n.collect span[data-v-5fabbdba] {\n    color: #ffba00;\n    font-size: 3.2vw;\n    padding-left: 1.6vw;\n    line-height: 8vw;\n}\n"],sourceRoot:""}])},1171:function(n,t,e){var o=e(1137);"string"==typeof o&&(o=[[n.i,o,""]]),o.locals&&(n.exports=o.locals);e(223)("07ff6337",o,!0)},1202:function(n,t,e){e(1171);var o=e(90)(e(1089),e(1247),"data-v-5fabbdba",null);n.exports=o.exports},1247:function(n,t){n.exports={render:function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"collect"},[e("img",{attrs:{src:n.ImgUrl,alt:""}}),n._v(" "),e("span",[n._v(n._s(n.text))])])},staticRenderFns:[]}},1378:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=e(298),i=e.n(o),a=e(391),c=(e.n(a),e(92)),r=(e.n(c),e(316)),A=e.n(r),l=e(1202),s=e.n(l),d=e(49),g=new c.IndexModel;t.default={components:{banner:A.a,eggCollectBtn:s.a},data:function(){return{questionData:{},collection:!1,questionId:"",myhtml:"",top:"",account:""}},computed:i()({},e.i(d.mapState)({})),created:function(){this.account=this._localAjax().account,this.questionId=this.$route.query.id,this.getQuestionDetail(this.questionId),this.isIPhoneX()},methods:{getQuestionDetail:function(n){var t=this;g.questionDetail(n,this.account).then(function(n){if(n.data){if(t.questionData=n.data,n.data.remark){var o=n.data.remark;t.myhtml=e.i(a.changeImgStyle)(e.i(a.b64DecodeUnicode)(o)),t.myhtml=e.i(a.changeVedioStyle)(t.myhtml)}t.collection=n.data.collect}})},collect:function(){var n=this.questionId;g.collect(2,n,this.account).then(function(n){console.log("collect")})},cancelCollect:function(){var n=this.questionId;g.remove(2,n,this.account).then(function(n){console.log("canclecollect")})},changeCollectBtn:function(){this.collection=!this.collection,this.collection?this.collect():this.cancelCollect()},isIPhoneX:function(){var n=this.phoneSize();this.top="iphonex"===n?"11vw":"6vw"}}}},1504:function(n,t,e){t=n.exports=e(222)(),t.push([n.i,"\n.question[data-v-b99ba084] {\n  position: relative;\n}\n.question .collectBtn[data-v-b99ba084] {\n    position: fixed;\n    top: 6vw;\n    right: 4.26vw;\n    z-index: 99;\n}\n.question .content[data-v-b99ba084] {\n    word-wrap: break-word !important;\n    padding-top: 16vw;\n    background: #fff;\n    box-shadow: 0px 2px 6px 0px rgba(136, 136, 136, 0.2);\n}\n.question .content .title[data-v-b99ba084] {\n      border-bottom: 1px solid #e1e1e1;\n      padding-right: 4.25vw;\n      margin-left: 4.25vw;\n      box-sizing: border-box;\n}\n.question .content .title h1[data-v-b99ba084] {\n        white-space: pre-wrap;\n        color: #363636;\n        font-size: 5.33vw;\n        padding-top: 3vw;\n        padding-bottom: 2vw;\n        width: 76%;\n        text-align: center;\n        width: 55vw;\n        margin: 0 auto;\n        font-weight: bold;\n}\n.question .content p[data-v-b99ba084] {\n      white-space: pre-wrap;\n      padding: 0 4.25vw;\n      color: #666;\n      padding-top: 2vw;\n      padding-bottom: 4vw;\n}\n","",{version:3,sources:["E:/project/marketing/src/pages/msManage/questionDetail.vue"],names:[],mappings:";AACA;EACE,mBAAmB;CACpB;AACD;IACI,gBAAgB;IAChB,SAAS;IACT,cAAc;IACd,YAAY;CACf;AACD;IACI,iCAAiC;IACjC,kBAAkB;IAClB,iBAAiB;IACjB,qDAAqD;CACxD;AACD;MACM,iCAAiC;MACjC,sBAAsB;MACtB,oBAAoB;MACpB,uBAAuB;CAC5B;AACD;QACQ,sBAAsB;QACtB,eAAe;QACf,kBAAkB;QAClB,iBAAiB;QACjB,oBAAoB;QACpB,WAAW;QACX,mBAAmB;QACnB,YAAY;QACZ,eAAe;QACf,kBAAkB;CACzB;AACD;MACM,sBAAsB;MACtB,kBAAkB;MAClB,YAAY;MACZ,iBAAiB;MACjB,oBAAoB;CACzB",file:"questionDetail.vue",sourcesContent:["\n.question[data-v-b99ba084] {\n  position: relative;\n}\n.question .collectBtn[data-v-b99ba084] {\n    position: fixed;\n    top: 6vw;\n    right: 4.26vw;\n    z-index: 99;\n}\n.question .content[data-v-b99ba084] {\n    word-wrap: break-word !important;\n    padding-top: 16vw;\n    background: #fff;\n    box-shadow: 0px 2px 6px 0px rgba(136, 136, 136, 0.2);\n}\n.question .content .title[data-v-b99ba084] {\n      border-bottom: 1px solid #e1e1e1;\n      padding-right: 4.25vw;\n      margin-left: 4.25vw;\n      box-sizing: border-box;\n}\n.question .content .title h1[data-v-b99ba084] {\n        white-space: pre-wrap;\n        color: #363636;\n        font-size: 5.33vw;\n        padding-top: 3vw;\n        padding-bottom: 2vw;\n        width: 76%;\n        text-align: center;\n        width: 55vw;\n        margin: 0 auto;\n        font-weight: bold;\n}\n.question .content p[data-v-b99ba084] {\n      white-space: pre-wrap;\n      padding: 0 4.25vw;\n      color: #666;\n      padding-top: 2vw;\n      padding-bottom: 4vw;\n}\n"],sourceRoot:""}])},1633:function(n,t,e){var o=e(1504);"string"==typeof o&&(o=[[n.i,o,""]]),o.locals&&(n.exports=o.locals);e(223)("63549e77",o,!0)},1873:function(n,t){n.exports={render:function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"question"},[e("banner",{attrs:{title:"常见问题"}}),n._v(" "),e("eggCollectBtn",{staticClass:"collectBtn",style:{top:n.top},attrs:{collection:n.collection},nativeOn:{touchend:function(t){return n.changeCollectBtn(t)}}}),n._v(" "),e("div",{staticClass:"content"},[e("div",{staticClass:"title"},[e("h1",[n._v(n._s(n.questionData.title))])]),n._v(" "),e("p",{domProps:{innerHTML:n._s(n.myhtml)}})])],1)},staticRenderFns:[]}},280:function(n,t,e){e(1633);var o=e(90)(e(1378),e(1873),"data-v-b99ba084",null);n.exports=o.exports},298:function(n,t,e){"use strict";t.__esModule=!0;var o=e(93),i=function(n){return n&&n.__esModule?n:{default:n}}(o);t.default=i.default||function(n){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=e[o])}return n}},310:function(n,t){n.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAkCAYAAACJ8xqgAAABS2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDIgNzkuMTYwOTI0LCAyMDE3LzA3LzEzLTAxOjA2OjM5ICAgICAgICAiPgogPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIi8+CiA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgo8P3hwYWNrZXQgZW5kPSJyIj8+nhxg7wAAAfJJREFUSIml1k2IjVEcx/HPYIMSslATymZIU966iMaUlWNBqUlKsxALbJBS1hYTC0UpC1mQxdiQnsnGW8gw2EzZKKGZmiQriQ2Lc69ux7lz7/Pc/+qe7zn3+5zT8zy//9NTq9V0WZdxov77/LwuZTcw3DQ+143wFg6msKrwDvZn+NEqwvvYk+GHQgg3ywofYTDDh0IIo5Q78hMMZPi+EMLdxqAT4Vw8x5bMXAghjDWDdsIFeIYNmbldeJjC2YSL8RJ9Cf+DbRjP/amVcCleY3XCf2M7JlrtIidcXr/6yoT/RA2TrWQwJxmvwLuM7Ds2t5OlO1yDF1iSrJmp7+xzO1mzcB1eiXe1uabqsulOZMQj94s3IJV9FB+XjmUN4RjmJ/xB/UJfy8gawt4Mn8SPsrKG8GSGn8aVqsJLOJuZO45rVYQwgjOZ+SNizJcWwkUcy6wZxu0qQriKw5l1B8SkLi2E6zLNR4z9ooqQeMShDN8ttoHSQhjF3gwfFNtBNvpmE8I9MZnTGhBf1/QNayskxvzODF+P8aIoFpYVwlNsFeO/ufrxpiiKf5HXqZCY4jX8SngfJoqiWAY9Fb6+1orNa1HCp7CjzA4b9R6b8C3hvXhcRQgfxPCdSfiqqkL4go341MTedvvBOS326VPiE3ChS9//9RdWbVrN+RusKgAAAABJRU5ErkJggg=="},316:function(n,t,e){e(319);var o=e(90)(e(317),e(320),"data-v-2a50e813",null);n.exports=o.exports},317:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=e(12);e.n(o),e(50);t.default={name:"routerLink",props:["title","MoreBtn"],data:function(){return{fix:"",top:""}},mounted:function(){this.isIPhoneX()},methods:{cilck:function(){this.$router.back(-1)},isIPhoneX:function(n){!!navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)&&(812==screen.height&&375==screen.width||896==screen.height&&414==screen.width)&&(this.fix="fix",this.top="6")}}}},318:function(n,t,e){t=n.exports=e(222)(),t.push([n.i,"\n.banner[data-v-2a50e813] {\n  font-weight: 600;\n  z-index: 99;\n  height: 16.466vw;\n  width: 100vw;\n  box-sizing: border-box;\n  display: -ms-flexbox;\n  display: flex;\n  position: fixed;\n  top: 0;\n  left: 0;\n  -ms-flex-align: center;\n      align-items: center;\n  border-bottom: 1px solid #ccc;\n  background: #f8f8f8;\n  padding-top: 5vw;\n}\n.banner .fix[data-v-2a50e813] {\n    position: absolute;\n    background: #f8f8f8;\n    left: 0;\n    top: -6vw;\n    height: 7vw;\n    width: 100%;\n    z-index: 99;\n}\n.banner .icon-back[data-v-2a50e813] {\n    width: 8vw;\n    height: 6.66vw;\n    padding-left: 4.266vw;\n}\n.banner .icon-back .icon[data-v-2a50e813] {\n      background: url("+e(310)+") no-repeat center;\n      background-size: 100%;\n      width: 2.66vw;\n      height: 4.66vw;\n      margin-top: 1vw;\n}\n.banner span[data-v-2a50e813] {\n    width: 100%;\n    text-align: center;\n    padding-right: 10.4vw;\n    font-size: 5.06vw;\n    letter-spacing: -1px;\n    color: #363636;\n}\n.banner button[data-v-2a50e813] {\n    position: absolute;\n    right: 0;\n    font-size: 14px;\n    line-height: 11vw;\n    padding: 0 5vw;\n    text-align: right;\n    color: #007aff;\n    font-weight: bold;\n    z-index: 1000;\n}\n","",{version:3,sources:["E:/project/marketing/src/components/banner.vue"],names:[],mappings:";AACA;EACE,iBAAiB;EACjB,YAAY;EACZ,iBAAiB;EACjB,aAAa;EACb,uBAAuB;EACvB,qBAAqB;EACrB,cAAc;EACd,gBAAgB;EAChB,OAAO;EACP,QAAQ;EACR,uBAAuB;MACnB,oBAAoB;EACxB,8BAA8B;EAC9B,oBAAoB;EACpB,iBAAiB;CAClB;AACD;IACI,mBAAmB;IACnB,oBAAoB;IACpB,QAAQ;IACR,UAAU;IACV,YAAY;IACZ,YAAY;IACZ,YAAY;CACf;AACD;IACI,WAAW;IACX,eAAe;IACf,sBAAsB;CACzB;AACD;MACM,2DAA0D;MAC1D,sBAAsB;MACtB,cAAc;MACd,eAAe;MACf,gBAAgB;CACrB;AACD;IACI,YAAY;IACZ,mBAAmB;IACnB,sBAAsB;IACtB,kBAAkB;IAClB,qBAAqB;IACrB,eAAe;CAClB;AACD;IACI,mBAAmB;IACnB,SAAS;IACT,gBAAgB;IAChB,kBAAkB;IAClB,eAAe;IACf,kBAAkB;IAClB,eAAe;IACf,kBAAkB;IAClB,cAAc;CACjB",file:"banner.vue",sourcesContent:["\n.banner[data-v-2a50e813] {\n  font-weight: 600;\n  z-index: 99;\n  height: 16.466vw;\n  width: 100vw;\n  box-sizing: border-box;\n  display: -ms-flexbox;\n  display: flex;\n  position: fixed;\n  top: 0;\n  left: 0;\n  -ms-flex-align: center;\n      align-items: center;\n  border-bottom: 1px solid #ccc;\n  background: #f8f8f8;\n  padding-top: 5vw;\n}\n.banner .fix[data-v-2a50e813] {\n    position: absolute;\n    background: #f8f8f8;\n    left: 0;\n    top: -6vw;\n    height: 7vw;\n    width: 100%;\n    z-index: 99;\n}\n.banner .icon-back[data-v-2a50e813] {\n    width: 8vw;\n    height: 6.66vw;\n    padding-left: 4.266vw;\n}\n.banner .icon-back .icon[data-v-2a50e813] {\n      background: url(../assets/imgs/back.png) no-repeat center;\n      background-size: 100%;\n      width: 2.66vw;\n      height: 4.66vw;\n      margin-top: 1vw;\n}\n.banner span[data-v-2a50e813] {\n    width: 100%;\n    text-align: center;\n    padding-right: 10.4vw;\n    font-size: 5.06vw;\n    letter-spacing: -1px;\n    color: #363636;\n}\n.banner button[data-v-2a50e813] {\n    position: absolute;\n    right: 0;\n    font-size: 14px;\n    line-height: 11vw;\n    padding: 0 5vw;\n    text-align: right;\n    color: #007aff;\n    font-weight: bold;\n    z-index: 1000;\n}\n"],sourceRoot:""}])},319:function(n,t,e){var o=e(318);"string"==typeof o&&(o=[[n.i,o,""]]),o.locals&&(n.exports=o.locals);e(223)("34a363a4",o,!0)},320:function(n,t){n.exports={render:function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"banner",style:{"margin-top":n.top+"vw"}},[e("div",{class:""+n.fix}),n._v(" "),e("div",{staticClass:"icon-back",on:{click:n.cilck}},[e("div",{staticClass:"icon"})]),n._v(" "),e("span",[n._v(n._s(n.title))]),n._v(" "),n._t("default")],2)},staticRenderFns:[]}},391:function(n,t,e){"use strict";function o(n){return n&&n.__esModule?n:{default:n}}function i(n,t){if(n.length){var e=[];if(""===t)e=[];else for(var o=0;o<n.length;o++)null!=n[o].title.match(t)&&e.push(n[o]);return e}}function a(n,t){return n.map(function(e,o){if(t&&t.length>0){var i=new RegExp(t,"g"),a='<span style="color: #ff2d55">'+t+"</span>";n[o].title=e.title.replace(i,a)}}),n}function c(n,t){var e=window.localStorage,o=(0,B.default)(n);e.setItem(t,o)}function r(n){var t=window.localStorage;return JSON.parse(t.getItem(n))}function A(n,t,e){n.push({path:t,query:e})}function l(n,t){var e=[],o=0;for(var i in n)n[i]!=t&&(e.push(n[i]),e[o++]=n[i]);return e}function s(n,t){var e=[],o=0;for(var i in n)n[i]!=t&&(e.push(n[i]),e[o++]=n[i]);return e.length==n.length&&(e=[].concat((0,h.default)(e),[t])),e}function d(n){return decodeURIComponent(atob(n).split("").map(function(n){return"%"+("00"+n.charCodeAt(0).toString(16)).slice(-2)}).join(""))}function g(n){return n.replace(/<img[^>]*>/gi,function(n,t){var n=n.replace(/title=\"(.*)\"/gi,'style="width: 100%;height:auto"');return n})}function u(n){return n.replace(/<img[^>]*>/gi,function(n,t){var n=n.replace(/title=\"(.*)\"/gi,'style="width: 100%;height:auto;"');return n})}function p(n){return n.replace(/<embed[^>]*>/gi,function(n,t){var e=n.split(" ")[1].split("=")[1],n="<video src="+e+' style="width: 100%;height:auto" controls></video>';return n})}function f(n,t){var e=JSON.parse(localStorage.getItem("ajaxData")),o=e.account,i=(document.body.clientWidth,document.body.offsetHeight,document.createElement("canvas")),a=new Image;a.src="./static/images/logo.png",a.onload=function(){i.width=200,i.height=200;var e=i.getContext("2d");if(e.font="14px Vedana",e.fillStyle="#ccc",e.globalAlpha=.4,e.save(),e.translate(-120,50),e.rotate(-45*Math.PI/180),e.drawImage(a,0,185,14,15),e.fillText(o,15,200),e.restore(),e.translate(-18,80),e.rotate(-45*Math.PI/180),e.drawImage(a,100,85,14,15),e.fillText(o,115,100),e.save(),1==t)document.querySelector(n).style.backgroundImage="url("+i.toDataURL("image/png")+")",document.querySelector(n).style.backgroundPosition="left top",document.querySelector(n).style.backgroundRepeat="repeat";else for(var c=document.querySelectorAll(n),r=0;r<c.length;r++)c[r].style.backgroundImage="url("+i.toDataURL("image/png")+")",c[r].style.backgroundPosition="left top",c[r].style.backgroundRepeat="repeat"}}Object.defineProperty(t,"__esModule",{value:!0}),t.waterMark=t.changeVedioStyle=t.changeGalleryStyle=t.changeImgStyle=t.b64DecodeUnicode=t.addItem=t.removeItem=t.skipNewPage=t.getLocalStorage=t.setLocalStorage=t.changeColor=t.fuzzyQuery=void 0;var v=e(29),h=o(v),C=e(52),B=o(C);t.fuzzyQuery=i,t.changeColor=a,t.setLocalStorage=c,t.getLocalStorage=r,t.skipNewPage=A,t.removeItem=l,t.addItem=s,t.b64DecodeUnicode=d,t.changeImgStyle=g,t.changeGalleryStyle=u,t.changeVedioStyle=p,t.waterMark=f}});