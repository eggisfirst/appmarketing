webpackJsonp([58],{1317:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=t(296),s=t.n(i),A=t(12),o=t.n(A),a=t(313),r=t.n(a),l=t(88),c=(t.n(l),t(47));o.a.component(l.Actionsheet.name,l.Actionsheet),e.default={data:function(){var n=this;return{title:"",actions:[{name:"要删除这张图片吗",method:n.question},{name:"删除",method:n.del}],sheetVisible:!1,index:1,startX:0,len:0,swipe:0,deviceW:0,path:""}},components:{mybanner:r.a},created:function(){},computed:s()({},t.i(c.mapState)({picVal:function(n){return n.picVal},filesList:function(n){return n.Files}})),mounted:function(){this.deviceW=document.body.clientWidth,this.len=this.picVal.length,this.title=this.index+"/"+this.len,console.log(33344,this.picVal),console.log(33344,this.filesList)},methods:s()({},t.i(c.mapMutations)(["delFiles","delPicVal","setFiles","setPicVal"]),{openAction:function(){this.sheetVisible=!0},question:function(){this.sheetVisible=!0},del:function(){if(this.picVal.length>0){var n=this.picVal,e=this.filesList;n.splice(this.index-1,1),e.splice(this.index-1,1),this.setPicVal(n),this.setFiles(e),console.log(this.picVal),console.log(this.filesList),this.index>1&&(this.index--,this.swipe=this.swipe-this.deviceW),this.len=this.picVal.length,this.len>0?this.title=this.index+"/"+this.len:(this.$router.back(-1),this.title="0/"+this.len),this.$refs.preview.style.transition="transform .5s",this.$refs.preview.style.transform="translateX(-"+this.swipe+"px)",this.sheetVisible=!1}},start:function(n,e){n=n||event,n.preventDefault(),1==n.changedTouches.length&&(this.startX=n.changedTouches[0].clientX)},move:function(n,e){if(n=n||event,n.preventDefault(),1==n.changedTouches.length){this.$refs.preview.style.transition="none";var t=n.changedTouches[0].clientX-this.startX;this.record}},end:function(n,e){if(n=n||event,n.preventDefault(),1==n.changedTouches.length){var t=n.changedTouches[0].clientX-this.startX;t<0&&Math.abs(t)>50&&(this.index<this.picVal.length&&(this.swipe=this.swipe+this.deviceW,this.index++),this.title=this.index+"/"+this.len,this.$refs.preview.style.transition="transform .5s",this.$refs.preview.style.transform="translateX(-"+this.swipe+"px)"),t>0&&Math.abs(t)>50&&(this.index>1&&(this.swipe=this.swipe-this.deviceW,this.index--),this.title=this.index+"/"+this.len,this.$refs.preview.style.transition="transform .5s",this.$refs.preview.style.transform="translateX(-"+this.swipe+"px)")}}}),destroyed:function(){if(this.picVal.length>0){var n=this.picVal;window.picVal=n}}}},1409:function(n,e,t){e=n.exports=t(221)(),e.push([n.i,"\n#previewBox {\n  width: 100vw;\n  height: 100vh;\n  overflow: hidden;\n}\n#previewBox .banner span {\n    padding-right: 0;\n}\n#previewBox .swipe {\n    transform: translateX(0);\n}\n#previewBox .trash {\n    width: 5.066vw;\n    margin-right: 4.266vw;\n}\n#previewBox .preview {\n    width: 300%;\n    height: 100vh;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-direction: row;\n        flex-direction: row;\n    -ms-flex-align: center;\n        align-items: center;\n}\n#previewBox .preview li {\n      width: 100vw;\n      height: 100vh;\n      display: -ms-flexbox;\n      display: flex;\n      -ms-flex-direction: row;\n          flex-direction: row;\n      -ms-flex-align: center;\n          align-items: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n}\n#previewBox .preview li img {\n        width: 100vw;\n}\n#previewBox #ss .mint-actionsheet-list .mint-actionsheet-listitem:first-child {\n    color: #909090;\n}\n#previewBox #ss .mint-actionsheet-list .mint-actionsheet-listitem:last-child {\n    color: #DB6971;\n}\n","",{version:3,sources:["/Users/w/Desktop/web/marketing/src/pages/Personal/imgPreview.vue"],names:[],mappings:";AACA;EACE,aAAa;EACb,cAAc;EACd,iBAAiB;CAClB;AACD;IACI,iBAAiB;CACpB;AACD;IACI,yBAAyB;CAC5B;AACD;IACI,eAAe;IACf,sBAAsB;CACzB;AACD;IACI,YAAY;IACZ,cAAc;IACd,qBAAqB;IACrB,cAAc;IACd,wBAAwB;QACpB,oBAAoB;IACxB,uBAAuB;QACnB,oBAAoB;CAC3B;AACD;MACM,aAAa;MACb,cAAc;MACd,qBAAqB;MACrB,cAAc;MACd,wBAAwB;UACpB,oBAAoB;MACxB,uBAAuB;UACnB,oBAAoB;MACxB,sBAAsB;UAClB,wBAAwB;CACjC;AACD;QACQ,aAAa;CACpB;AACD;IACI,eAAe;CAClB;AACD;IACI,eAAe;CAClB",file:"imgPreview.vue",sourcesContent:["\n#previewBox {\n  width: 100vw;\n  height: 100vh;\n  overflow: hidden;\n}\n#previewBox .banner span {\n    padding-right: 0;\n}\n#previewBox .swipe {\n    transform: translateX(0);\n}\n#previewBox .trash {\n    width: 5.066vw;\n    margin-right: 4.266vw;\n}\n#previewBox .preview {\n    width: 300%;\n    height: 100vh;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-direction: row;\n        flex-direction: row;\n    -ms-flex-align: center;\n        align-items: center;\n}\n#previewBox .preview li {\n      width: 100vw;\n      height: 100vh;\n      display: -ms-flexbox;\n      display: flex;\n      -ms-flex-direction: row;\n          flex-direction: row;\n      -ms-flex-align: center;\n          align-items: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n}\n#previewBox .preview li img {\n        width: 100vw;\n}\n#previewBox #ss .mint-actionsheet-list .mint-actionsheet-listitem:first-child {\n    color: #909090;\n}\n#previewBox #ss .mint-actionsheet-list .mint-actionsheet-listitem:last-child {\n    color: #DB6971;\n}\n"],sourceRoot:""}])},1548:function(n,e,t){var i=t(1409);"string"==typeof i&&(i=[[n.i,i,""]]),i.locals&&(n.exports=i.locals);t(222)("706c41d4",i,!0)},1682:function(n,e){n.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAmCAYAAACoPemuAAADLUlEQVRYR+2YSWgUQRSG/9dDiERy8WYURAUXlLj0dHdCjip60biAuG+IBxFR9GLUk9tF0YN4EFQS94P7ye0YknqVdomoUVARXG5egmII008KpkNl0h0kMxkRpm/Vr+t/X73XVfWqCEU89fX1Y6urq48S0SRbRkQ+9/X1Heru7v45UnkaaUfTz/O8i0S0NUlDRC5prbeNVL8oMN/3NYBsivMuZvb+CVgQBI9FZGGScyJ6opRaVDIwz/M2ENFOAGMA5FKEJW+bBaA25ZteAK8BZACkZcbYfovIOa31FVtnSAff943Tsj/MPIjlvwL7BcBErVyRM8EhZq4ZNpVNTU11/f39fcz8Y5h/o1SpFt/3x1VVVVW3t7d/GxYsNrquW1NbWxuViiBJp7e31wnD0GRoyJM4WzzPW0pEd8qQThKRFVrrB4VkaWAriejWaEYr1haRVVrr238F1tDQsCyKonvlAHMcp7mzs/N+MWBmsf0AYFoK8Mf8+ykp9vcApuYX3IFPigITkW9RFC0Iw7DH87wlRGRGWGUBtDLzFtP2fb8VwCbL1g9gKTM/dF13huM4T4moLrYXBUZER5VSh2Mxz/MeEdHAPpjL5erCMPxu7K7rjs9kMvbUf8TMi+O+QRAcEZFDJQETkf1a61OxWEJUpjDzp3zEJgOI02petTHzZmtQ+4joZEnAABxk5uOW+HUiWhO3oyia0dXV9c60s9nsdMdxeqxZd0NrvdYaVAuAYxWwSsQKFtjKPxZPisS9MmFLqkSsEjERqSyw5mqgsiUNqu0KlwsialFKnbA24qsA1v3NJg7gGjOvt8qeAyIyUBAUW4/tVUqdscDaAGyM25lMZmJHR8dX025sbJyQy+W+WCO9zMwDhWMQBHtE5HSpqosLzLzdAnsGYJ7lfC4zv8zXY3MAvLBsz5l5vlUyDbq6KipiACIi2i0iBsikcNeg3ANviWiHeSci5wHMLLCfNSnNX1mZyDsjilgQBM0icrdAfFSaRLRcKTXkRJZ2rlxNRDdHhaRAVETWaK2H+EoEy2azsx3HeVUOMCKapZR6U+gr9arT9/3lBcewknMSUWtSGo2jP4dTxkWy4Z3CAAAAAElFTkSuQmCC"},1811:function(n,e,t){n.exports={render:function(){var n=this,e=n.$createElement,i=n._self._c||e;return i("div",{attrs:{id:"previewBox"}},[i("mybanner",{staticStyle:{border:"none",background:"#fff"},attrs:{title:n.title}},[i("img",{directives:[{name:"show",rawName:"v-show",value:n.picVal.length>0,expression:"picVal.length>0"}],staticClass:"trash",attrs:{src:t(1682),alt:""},on:{click:n.openAction}})]),n._v(" "),i("ul",{ref:"preview",staticClass:"preview"},n._l(n.picVal,function(e,t){return i("li",{key:t,on:{touchstart:function(e){return n.start(e)},touchmove:function(e){return n.move(e)},touchend:function(e){return n.end(e)}}},[i("img",{attrs:{src:e.url,alt:""}})])}),0),n._v(" "),i("mt-actionsheet",{attrs:{actions:n.actions,id:"ss"},model:{value:n.sheetVisible,callback:function(e){n.sheetVisible=e},expression:"sheetVisible"}})],1)},staticRenderFns:[]}},237:function(n,e,t){t(1548);var i=t(86)(t(1317),t(1811),null,null);n.exports=i.exports},296:function(n,e,t){"use strict";e.__esModule=!0;var i=t(90),s=function(n){return n&&n.__esModule?n:{default:n}}(i);e.default=s.default||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(n[i]=t[i])}return n}},308:function(n,e){n.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAkCAYAAACJ8xqgAAABS2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDIgNzkuMTYwOTI0LCAyMDE3LzA3LzEzLTAxOjA2OjM5ICAgICAgICAiPgogPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIi8+CiA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgo8P3hwYWNrZXQgZW5kPSJyIj8+nhxg7wAAAfJJREFUSIml1k2IjVEcx/HPYIMSslATymZIU966iMaUlWNBqUlKsxALbJBS1hYTC0UpC1mQxdiQnsnGW8gw2EzZKKGZmiQriQ2Lc69ux7lz7/Pc/+qe7zn3+5zT8zy//9NTq9V0WZdxov77/LwuZTcw3DQ+143wFg6msKrwDvZn+NEqwvvYk+GHQgg3ywofYTDDh0IIo5Q78hMMZPi+EMLdxqAT4Vw8x5bMXAghjDWDdsIFeIYNmbldeJjC2YSL8RJ9Cf+DbRjP/amVcCleY3XCf2M7JlrtIidcXr/6yoT/RA2TrWQwJxmvwLuM7Ds2t5OlO1yDF1iSrJmp7+xzO1mzcB1eiXe1uabqsulOZMQj94s3IJV9FB+XjmUN4RjmJ/xB/UJfy8gawt4Mn8SPsrKG8GSGn8aVqsJLOJuZO45rVYQwgjOZ+SNizJcWwkUcy6wZxu0qQriKw5l1B8SkLi2E6zLNR4z9ooqQeMShDN8ttoHSQhjF3gwfFNtBNvpmE8I9MZnTGhBf1/QNayskxvzODF+P8aIoFpYVwlNsFeO/ufrxpiiKf5HXqZCY4jX8SngfJoqiWAY9Fb6+1orNa1HCp7CjzA4b9R6b8C3hvXhcRQgfxPCdSfiqqkL4go341MTedvvBOS326VPiE3ChS9//9RdWbVrN+RusKgAAAABJRU5ErkJggg=="},313:function(n,e,t){t(316);var i=t(86)(t(314),t(317),"data-v-2a50e813",null);n.exports=i.exports},314:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=t(12);t.n(i),t(87);e.default={name:"routerLink",props:["title"],data:function(){return{fix:"",top:""}},mounted:function(){this.isIPhoneX()},methods:{cilck:function(){this.$router.back(-1)},isIPhoneX:function(n){!!navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)&&(812==screen.height&&375==screen.width||896==screen.height&&414==screen.width)&&(this.fix="fix",this.top="6")}}}},315:function(n,e,t){e=n.exports=t(221)(),e.push([n.i,"\n.banner[data-v-2a50e813] {\n  font-weight: 600;\n  z-index: 99;\n  height: 16.466vw;\n  width: 100vw;\n  box-sizing: border-box;\n  display: -ms-flexbox;\n  display: flex;\n  position: fixed;\n  top: 0;\n  left: 0;\n  -ms-flex-align: center;\n      align-items: center;\n  border-bottom: 1px solid #ccc;\n  background: #f8f8f8;\n  padding-top: 5vw;\n}\n.banner .fix[data-v-2a50e813] {\n    position: absolute;\n    background: #f8f8f8;\n    left: 0;\n    top: -6vw;\n    height: 7vw;\n    width: 100%;\n    z-index: 99;\n}\n.banner .icon-back[data-v-2a50e813] {\n    width: 8vw;\n    height: 6.66vw;\n    padding-left: 4.266vw;\n}\n.banner .icon-back .icon[data-v-2a50e813] {\n      background: url("+t(308)+") no-repeat center;\n      background-size: 100%;\n      width: 2.66vw;\n      height: 4.66vw;\n      margin-top: 1vw;\n}\n.banner span[data-v-2a50e813] {\n    width: 100%;\n    text-align: center;\n    padding-right: 10.4vw;\n    font-size: 5.06vw;\n    letter-spacing: -1px;\n    color: #363636;\n}\n.banner button[data-v-2a50e813] {\n    position: absolute;\n    right: 0;\n    font-size: 14px;\n    line-height: 11vw;\n    padding: 0 5vw;\n    text-align: right;\n    color: #007aff;\n    font-weight: bold;\n    z-index: 1000;\n}\n","",{version:3,sources:["/Users/w/Desktop/web/marketing/src/components/banner.vue"],names:[],mappings:";AACA;EACE,iBAAiB;EACjB,YAAY;EACZ,iBAAiB;EACjB,aAAa;EACb,uBAAuB;EACvB,qBAAqB;EACrB,cAAc;EACd,gBAAgB;EAChB,OAAO;EACP,QAAQ;EACR,uBAAuB;MACnB,oBAAoB;EACxB,8BAA8B;EAC9B,oBAAoB;EACpB,iBAAiB;CAClB;AACD;IACI,mBAAmB;IACnB,oBAAoB;IACpB,QAAQ;IACR,UAAU;IACV,YAAY;IACZ,YAAY;IACZ,YAAY;CACf;AACD;IACI,WAAW;IACX,eAAe;IACf,sBAAsB;CACzB;AACD;MACM,2DAA0D;MAC1D,sBAAsB;MACtB,cAAc;MACd,eAAe;MACf,gBAAgB;CACrB;AACD;IACI,YAAY;IACZ,mBAAmB;IACnB,sBAAsB;IACtB,kBAAkB;IAClB,qBAAqB;IACrB,eAAe;CAClB;AACD;IACI,mBAAmB;IACnB,SAAS;IACT,gBAAgB;IAChB,kBAAkB;IAClB,eAAe;IACf,kBAAkB;IAClB,eAAe;IACf,kBAAkB;IAClB,cAAc;CACjB",file:"banner.vue",sourcesContent:["\n.banner[data-v-2a50e813] {\n  font-weight: 600;\n  z-index: 99;\n  height: 16.466vw;\n  width: 100vw;\n  box-sizing: border-box;\n  display: -ms-flexbox;\n  display: flex;\n  position: fixed;\n  top: 0;\n  left: 0;\n  -ms-flex-align: center;\n      align-items: center;\n  border-bottom: 1px solid #ccc;\n  background: #f8f8f8;\n  padding-top: 5vw;\n}\n.banner .fix[data-v-2a50e813] {\n    position: absolute;\n    background: #f8f8f8;\n    left: 0;\n    top: -6vw;\n    height: 7vw;\n    width: 100%;\n    z-index: 99;\n}\n.banner .icon-back[data-v-2a50e813] {\n    width: 8vw;\n    height: 6.66vw;\n    padding-left: 4.266vw;\n}\n.banner .icon-back .icon[data-v-2a50e813] {\n      background: url(../assets/imgs/back.png) no-repeat center;\n      background-size: 100%;\n      width: 2.66vw;\n      height: 4.66vw;\n      margin-top: 1vw;\n}\n.banner span[data-v-2a50e813] {\n    width: 100%;\n    text-align: center;\n    padding-right: 10.4vw;\n    font-size: 5.06vw;\n    letter-spacing: -1px;\n    color: #363636;\n}\n.banner button[data-v-2a50e813] {\n    position: absolute;\n    right: 0;\n    font-size: 14px;\n    line-height: 11vw;\n    padding: 0 5vw;\n    text-align: right;\n    color: #007aff;\n    font-weight: bold;\n    z-index: 1000;\n}\n"],sourceRoot:""}])},316:function(n,e,t){var i=t(315);"string"==typeof i&&(i=[[n.i,i,""]]),i.locals&&(n.exports=i.locals);t(222)("34a363a4",i,!0)},317:function(n,e){n.exports={render:function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{staticClass:"banner",style:{"margin-top":n.top+"vw"}},[t("div",{class:""+n.fix}),n._v(" "),t("div",{staticClass:"icon-back",on:{click:n.cilck}},[t("div",{staticClass:"icon"})]),n._v(" "),t("span",[n._v(n._s(n.title))]),n._v(" "),n._t("default")],2)},staticRenderFns:[]}}});