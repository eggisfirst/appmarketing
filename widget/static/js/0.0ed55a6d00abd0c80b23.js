webpackJsonp([0],{669:function(n,t,o){n.exports=o.p+"static/img/icon.4aa63db.png"},697:function(n,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{padding:""}},mounted:function(){this.isIPhoneX()},methods:{touchend:function(n){alert("该模块尚未开发")},isIPhoneX:function(){!!navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)&&(812==screen.height&&375==screen.width||896==screen.height&&414==screen.width?this.padding="4.53":console.log("no iphonex"))}}}},708:function(n,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=o(72),A=(o.n(i),o(11)),e=(o.n(A),o(71),o(755)),a=o.n(e),r=o(39),s=o.n(r);t.default={components:{Footer:a.a},data:function(){return{forms:[{color:"#007aff",text:"销售额",iconPosition:"158.4vw -2vw"},{color:"#5856d6",text:"铁三角",iconPosition:"135.4vw -2vw"},{color:"#5ac8fa",text:"品牌",iconPosition:"112.8vw -1.8vw"},{color:"#ff2d55",text:"品类",iconPosition:"90.4vw -1.8vw"},{color:"#ff964b",text:"坪效",iconPosition:"67.4vw -1.8vw"},{color:"#ffcc00",text:"人效",iconPosition:"45vw -2vw"},{color:"#f93580",text:"客户来源",iconPosition:"22vw -2vw"}]}},created:function(){this.checkLogin()},mounted:function(){"app"===s.a.version&&console.log(api.deviceId)},props:["myStyle"],methods:{checkLogin:function(){var n=localStorage.getItem("ajaxData");if(!n)return void this.$router.push({path:"./Login"});var t=JSON.parse(n).timestamp;return t=Date.parse(new Date)-JSON.parse(n).timestamp,(t/=864e5)>10?void this.$router.push({path:"./Login"}):void 0},linkTo:function(n){0==n?this.$router.push({path:"/sales"}):1==n?this.$router.push({path:"/audioTechnica"}):2==n?this.$router.push({path:"/brand?type=brand"}):3==n?this.$router.push({path:"/brand?type=category"}):4==n?this.$router.push({path:"/areaEffectiveness"}):5==n?this.$router.push({path:"/peopleWork"}):6==n&&this.$router.push({path:"/customerSource"})}}}},722:function(n,t,o){t=n.exports=o(167)(),t.push([n.i,"\n.reportForms[data-v-16625084] {\n  font-family: PINGPANG;\n  background: #f8f8f8;\n  position: relative;\n}\n.reportForms .fix[data-v-16625084] {\n    position: absolute;\n    background: #f8f8f8;\n    left: 0;\n    top: -14vw;\n    height: 14.1vw;\n    width: 100vw;\n    z-index: 99;\n}\n.reportForms .search[data-v-16625084] {\n    height: 7.73vw;\n    width: 91.46vw;\n    border-radius: 2.66vw;\n    margin: 3vw auto;\n    background: #e1e1e1;\n    position: relative;\n    margin-top: 8vw;\n}\n.reportForms .search .search-icon[data-v-16625084] {\n      background: url("+o(751)+") no-repeat;\n      background-size: 100% 100%;\n      width: 3.2vw;\n      height: 3.2vw;\n      position: absolute;\n      top: 2.4vw;\n      left: 3vw;\n}\n.reportForms .search input[data-v-16625084] {\n      width: 80vw;\n      padding-left: 7vw;\n      height: 7.73vw;\n      font-size: 3.2vw;\n      color: #8e8e93;\n}\n.reportForms .topList[data-v-16625084] {\n    width: 100vw;\n    height: 26.66vw;\n    border-top: 1px solid #a6a6a6;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-pack: justify;\n        justify-content: space-between;\n    -ms-flex-align: center;\n        align-items: center;\n}\n.reportForms .topList .shopTop[data-v-16625084] {\n      background: url("+o(752)+") no-repeat;\n      background-size: 100% 100%;\n      width: 44vw;\n      height: 21.33vw;\n      margin-left: 4.26vw;\n}\n.reportForms .topList .peopleTop[data-v-16625084] {\n      background: url("+o(750)+") no-repeat;\n      background-size: 100% 100%;\n      width: 44vw;\n      height: 21.33vw;\n      margin-right: 4.26vw;\n}\n.reportForms .forms[data-v-16625084] {\n    width: 100vw;\n    background: #fff;\n    padding-bottom: 30vw;\n}\n.reportForms .forms .title[data-v-16625084] {\n      font-size: 4.8vw;\n      font-weight: bold;\n      color: #363636;\n      margin: 0 auto;\n      text-align: center;\n      line-height: 10.66vw;\n      border-bottom: 4px solid #363636;\n      width: 26.66vw;\n}\n.reportForms .forms ul[data-v-16625084] {\n      width: 87.06vw;\n      margin: 0 auto;\n      padding-top: 10.8vw;\n      border-top: 1px solid #e1e1e1;\n      background: #fff;\n      height: 100vw;\n}\n.reportForms .forms ul li[data-v-16625084] {\n        width: 20vw;\n        height: 26.66vw;\n        float: left;\n        margin-right: 12vw;\n        margin-bottom: 8.1vw;\n}\n.reportForms .forms ul li .icon[data-v-16625084] {\n          width: 20vw;\n          height: 20vw;\n          border-radius: 2.66vw;\n          position: relative;\n}\n.reportForms .forms ul li .icon .icon-forms[data-v-16625084] {\n            background-image: url("+o(669)+");\n            width: 20vw;\n            height: 20vw;\n            border-radius: 2.66vw;\n            background-size: 800%;\n}\n.reportForms .forms ul li p[data-v-16625084] {\n          text-align: center;\n          color: #666;\n          font-size: 4vw;\n}\n.reportForms .forms ul li[data-v-16625084]:nth-child(3n) {\n        margin-right: 0;\n}\n","",{version:3,sources:["/Users/mankuangji/Desktop/web/marketing/src/pages/ReportForms.vue"],names:[],mappings:";AACA;EACE,sBAAsB;EACtB,oBAAoB;EACpB,mBAAmB;CACpB;AACD;IACI,mBAAmB;IACnB,oBAAoB;IACpB,QAAQ;IACR,WAAW;IACX,eAAe;IACf,aAAa;IACb,YAAY;CACf;AACD;IACI,eAAe;IACf,eAAe;IACf,sBAAsB;IACtB,iBAAiB;IACjB,oBAAoB;IACpB,mBAAmB;IACnB,gBAAgB;CACnB;AACD;MACM,oDAAqD;MACrD,2BAA2B;MAC3B,aAAa;MACb,cAAc;MACd,mBAAmB;MACnB,WAAW;MACX,UAAU;CACf;AACD;MACM,YAAY;MACZ,kBAAkB;MAClB,eAAe;MACf,iBAAiB;MACjB,eAAe;CACpB;AACD;IACI,aAAa;IACb,gBAAgB;IAChB,8BAA8B;IAC9B,qBAAqB;IACrB,cAAc;IACd,uBAAuB;QACnB,+BAA+B;IACnC,uBAAuB;QACnB,oBAAoB;CAC3B;AACD;MACM,oDAAsD;MACtD,2BAA2B;MAC3B,YAAY;MACZ,gBAAgB;MAChB,oBAAoB;CACzB;AACD;MACM,oDAAwD;MACxD,2BAA2B;MAC3B,YAAY;MACZ,gBAAgB;MAChB,qBAAqB;CAC1B;AACD;IACI,aAAa;IACb,iBAAiB;IACjB,qBAAqB;CACxB;AACD;MACM,iBAAiB;MACjB,kBAAkB;MAClB,eAAe;MACf,eAAe;MACf,mBAAmB;MACnB,qBAAqB;MACrB,iCAAiC;MACjC,eAAe;CACpB;AACD;MACM,eAAe;MACf,eAAe;MACf,oBAAoB;MACpB,8BAA8B;MAC9B,iBAAiB;MACjB,cAAc;CACnB;AACD;QACQ,YAAY;QACZ,gBAAgB;QAChB,YAAY;QACZ,mBAAmB;QACnB,qBAAqB;CAC5B;AACD;UACU,YAAY;UACZ,aAAa;UACb,sBAAsB;UACtB,mBAAmB;CAC5B;AACD;YACY,gDAA+C;YAC/C,YAAY;YACZ,aAAa;YACb,sBAAsB;YACtB,sBAAsB;CACjC;AACD;UACU,mBAAmB;UACnB,YAAY;UACZ,eAAe;CACxB;AACD;QACQ,gBAAgB;CACvB",file:"ReportForms.vue",sourcesContent:["\n.reportForms[data-v-16625084] {\n  font-family: PINGPANG;\n  background: #f8f8f8;\n  position: relative;\n}\n.reportForms .fix[data-v-16625084] {\n    position: absolute;\n    background: #f8f8f8;\n    left: 0;\n    top: -14vw;\n    height: 14.1vw;\n    width: 100vw;\n    z-index: 99;\n}\n.reportForms .search[data-v-16625084] {\n    height: 7.73vw;\n    width: 91.46vw;\n    border-radius: 2.66vw;\n    margin: 3vw auto;\n    background: #e1e1e1;\n    position: relative;\n    margin-top: 8vw;\n}\n.reportForms .search .search-icon[data-v-16625084] {\n      background: url(../assets/imgs/search.png) no-repeat;\n      background-size: 100% 100%;\n      width: 3.2vw;\n      height: 3.2vw;\n      position: absolute;\n      top: 2.4vw;\n      left: 3vw;\n}\n.reportForms .search input[data-v-16625084] {\n      width: 80vw;\n      padding-left: 7vw;\n      height: 7.73vw;\n      font-size: 3.2vw;\n      color: #8e8e93;\n}\n.reportForms .topList[data-v-16625084] {\n    width: 100vw;\n    height: 26.66vw;\n    border-top: 1px solid #a6a6a6;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-pack: justify;\n        justify-content: space-between;\n    -ms-flex-align: center;\n        align-items: center;\n}\n.reportForms .topList .shopTop[data-v-16625084] {\n      background: url(../assets/imgs/shopTop.png) no-repeat;\n      background-size: 100% 100%;\n      width: 44vw;\n      height: 21.33vw;\n      margin-left: 4.26vw;\n}\n.reportForms .topList .peopleTop[data-v-16625084] {\n      background: url(../assets/imgs/peopleTop.png) no-repeat;\n      background-size: 100% 100%;\n      width: 44vw;\n      height: 21.33vw;\n      margin-right: 4.26vw;\n}\n.reportForms .forms[data-v-16625084] {\n    width: 100vw;\n    background: #fff;\n    padding-bottom: 30vw;\n}\n.reportForms .forms .title[data-v-16625084] {\n      font-size: 4.8vw;\n      font-weight: bold;\n      color: #363636;\n      margin: 0 auto;\n      text-align: center;\n      line-height: 10.66vw;\n      border-bottom: 4px solid #363636;\n      width: 26.66vw;\n}\n.reportForms .forms ul[data-v-16625084] {\n      width: 87.06vw;\n      margin: 0 auto;\n      padding-top: 10.8vw;\n      border-top: 1px solid #e1e1e1;\n      background: #fff;\n      height: 100vw;\n}\n.reportForms .forms ul li[data-v-16625084] {\n        width: 20vw;\n        height: 26.66vw;\n        float: left;\n        margin-right: 12vw;\n        margin-bottom: 8.1vw;\n}\n.reportForms .forms ul li .icon[data-v-16625084] {\n          width: 20vw;\n          height: 20vw;\n          border-radius: 2.66vw;\n          position: relative;\n}\n.reportForms .forms ul li .icon .icon-forms[data-v-16625084] {\n            background-image: url(../assets/imgs/icon.png);\n            width: 20vw;\n            height: 20vw;\n            border-radius: 2.66vw;\n            background-size: 800%;\n}\n.reportForms .forms ul li p[data-v-16625084] {\n          text-align: center;\n          color: #666;\n          font-size: 4vw;\n}\n.reportForms .forms ul li[data-v-16625084]:nth-child(3n) {\n        margin-right: 0;\n}\n"],sourceRoot:""}])},726:function(n,t,o){t=n.exports=o(167)(),t.push([n.i,"\n.footer[data-v-334d2b22] {\n  width: 100vw;\n  position: fixed;\n  background: #f8f8f8;\n  bottom: 0;\n}\n.footer ul[data-v-334d2b22] {\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-pack: distribute;\n        justify-content: space-around;\n    padding-bottom: 1vw;\n}\n.footer ul li[data-v-334d2b22] {\n      margin-top: 2vw;\n}\n.footer ul li .iconHome[data-v-334d2b22] {\n        width: 6.6vw;\n        height: 6.6vw;\n        margin-bottom: 1.33vw;\n        background: url("+o(669)+");\n        background-size: 2100%;\n        background-position: -7.6vw -20.6vw;\n}\n.footer ul li .iconChar[data-v-334d2b22] {\n        width: 6.6vw;\n        height: 6.6vw;\n        margin-bottom: 1.33vw;\n        background: url("+o(669)+");\n        background-size: 2100%;\n        background-position: -21.6vw -20.6vw;\n}\n.footer ul li .iconSalary[data-v-334d2b22] {\n        width: 6.6vw;\n        height: 6.6vw;\n        margin-bottom: 1.33vw;\n        background: url("+o(669)+");\n        background-size: 2100%;\n        background-position: -35.6vw -20.6vw;\n}\n.footer ul li .iconMsg[data-v-334d2b22] {\n        width: 6.6vw;\n        height: 6.6vw;\n        margin-bottom: 1.33vw;\n        background: url("+o(669)+");\n        background-size: 2100%;\n        background-position: -49.6vw -20.6vw;\n}\n.footer ul li .iconPerson[data-v-334d2b22] {\n        width: 6.6vw;\n        height: 6.6vw;\n        margin-bottom: 1.33vw;\n        background: url("+o(669)+");\n        background-size: 2100%;\n        background-position: -63.6vw -20.6vw;\n}\n.footer ul li p[data-v-334d2b22] {\n        color: #8e8e93;\n        font-size: 2.4vw;\n        text-align: center;\n}\n.footer ul li .router-link-exact-active .iconHome[data-v-334d2b22] {\n        width: 6.6vw;\n        height: 6.6vw;\n        margin-bottom: 1.33vw;\n        background: url("+o(669)+");\n        background-size: 2100%;\n        background-position: -.4vw -20.6vw;\n}\n.footer ul li .router-link-exact-active .iconChar[data-v-334d2b22] {\n        width: 6.6vw;\n        height: 6.6vw;\n        margin-bottom: 1.33vw;\n        background: url("+o(669)+");\n        background-size: 2100%;\n        background-position: -14.2vw -20.6vw;\n}\n.footer ul li .router-link-exact-active .iconCharP[data-v-334d2b22] {\n        color: #007aff;\n        font-size: 2.4vw;\n        text-align: center;\n}\n.footer ul li .router-link-exact-active .iconSalary[data-v-334d2b22] {\n        width: 6.6vw;\n        height: 6.6vw;\n        margin-bottom: 1.33vw;\n        background: url("+o(669)+");\n        background-size: 2100%;\n        background-position: -28.6vw -20.6vw;\n}\n.footer ul li .router-link-exact-active .iconMsg[data-v-334d2b22] {\n        width: 6.6vw;\n        height: 6.6vw;\n        margin-bottom: 1.33vw;\n        background: url("+o(669)+");\n        background-size: 2100%;\n        background-position: -42.6vw -20.6vw;\n}\n.footer ul li .router-link-exact-active .iconPerson[data-v-334d2b22] {\n        width: 6.6vw;\n        height: 6.6vw;\n        margin-bottom: 1.33vw;\n        background: url("+o(669)+");\n        background-size: 2100%;\n        background-position: -52.6vw -20.6vw;\n}\n","",{version:3,sources:["/Users/mankuangji/Desktop/web/marketing/src/components/Footer.vue"],names:[],mappings:";AACA;EACE,aAAa;EACb,gBAAgB;EAChB,oBAAoB;EACpB,UAAU;CACX;AACD;IACI,qBAAqB;IACrB,cAAc;IACd,0BAA0B;QACtB,8BAA8B;IAClC,oBAAoB;CACvB;AACD;MACM,gBAAgB;CACrB;AACD;QACQ,aAAa;QACb,cAAc;QACd,sBAAsB;QACtB,0CAAyC;QACzC,uBAAuB;QACvB,oCAAoC;CAC3C;AACD;QACQ,aAAa;QACb,cAAc;QACd,sBAAsB;QACtB,0CAAyC;QACzC,uBAAuB;QACvB,qCAAqC;CAC5C;AACD;QACQ,aAAa;QACb,cAAc;QACd,sBAAsB;QACtB,0CAAyC;QACzC,uBAAuB;QACvB,qCAAqC;CAC5C;AACD;QACQ,aAAa;QACb,cAAc;QACd,sBAAsB;QACtB,0CAAyC;QACzC,uBAAuB;QACvB,qCAAqC;CAC5C;AACD;QACQ,aAAa;QACb,cAAc;QACd,sBAAsB;QACtB,0CAAyC;QACzC,uBAAuB;QACvB,qCAAqC;CAC5C;AACD;QACQ,eAAe;QACf,iBAAiB;QACjB,mBAAmB;CAC1B;AACD;QACQ,aAAa;QACb,cAAc;QACd,sBAAsB;QACtB,0CAAyC;QACzC,uBAAuB;QACvB,mCAAmC;CAC1C;AACD;QACQ,aAAa;QACb,cAAc;QACd,sBAAsB;QACtB,0CAAyC;QACzC,uBAAuB;QACvB,qCAAqC;CAC5C;AACD;QACQ,eAAe;QACf,iBAAiB;QACjB,mBAAmB;CAC1B;AACD;QACQ,aAAa;QACb,cAAc;QACd,sBAAsB;QACtB,0CAAyC;QACzC,uBAAuB;QACvB,qCAAqC;CAC5C;AACD;QACQ,aAAa;QACb,cAAc;QACd,sBAAsB;QACtB,0CAAyC;QACzC,uBAAuB;QACvB,qCAAqC;CAC5C;AACD;QACQ,aAAa;QACb,cAAc;QACd,sBAAsB;QACtB,0CAAyC;QACzC,uBAAuB;QACvB,qCAAqC;CAC5C",file:"Footer.vue",sourcesContent:["\n.footer[data-v-334d2b22] {\n  width: 100vw;\n  position: fixed;\n  background: #f8f8f8;\n  bottom: 0;\n}\n.footer ul[data-v-334d2b22] {\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-pack: distribute;\n        justify-content: space-around;\n    padding-bottom: 1vw;\n}\n.footer ul li[data-v-334d2b22] {\n      margin-top: 2vw;\n}\n.footer ul li .iconHome[data-v-334d2b22] {\n        width: 6.6vw;\n        height: 6.6vw;\n        margin-bottom: 1.33vw;\n        background: url(../assets/imgs/icon.png);\n        background-size: 2100%;\n        background-position: -7.6vw -20.6vw;\n}\n.footer ul li .iconChar[data-v-334d2b22] {\n        width: 6.6vw;\n        height: 6.6vw;\n        margin-bottom: 1.33vw;\n        background: url(../assets/imgs/icon.png);\n        background-size: 2100%;\n        background-position: -21.6vw -20.6vw;\n}\n.footer ul li .iconSalary[data-v-334d2b22] {\n        width: 6.6vw;\n        height: 6.6vw;\n        margin-bottom: 1.33vw;\n        background: url(../assets/imgs/icon.png);\n        background-size: 2100%;\n        background-position: -35.6vw -20.6vw;\n}\n.footer ul li .iconMsg[data-v-334d2b22] {\n        width: 6.6vw;\n        height: 6.6vw;\n        margin-bottom: 1.33vw;\n        background: url(../assets/imgs/icon.png);\n        background-size: 2100%;\n        background-position: -49.6vw -20.6vw;\n}\n.footer ul li .iconPerson[data-v-334d2b22] {\n        width: 6.6vw;\n        height: 6.6vw;\n        margin-bottom: 1.33vw;\n        background: url(../assets/imgs/icon.png);\n        background-size: 2100%;\n        background-position: -63.6vw -20.6vw;\n}\n.footer ul li p[data-v-334d2b22] {\n        color: #8e8e93;\n        font-size: 2.4vw;\n        text-align: center;\n}\n.footer ul li .router-link-exact-active .iconHome[data-v-334d2b22] {\n        width: 6.6vw;\n        height: 6.6vw;\n        margin-bottom: 1.33vw;\n        background: url(../assets/imgs/icon.png);\n        background-size: 2100%;\n        background-position: -.4vw -20.6vw;\n}\n.footer ul li .router-link-exact-active .iconChar[data-v-334d2b22] {\n        width: 6.6vw;\n        height: 6.6vw;\n        margin-bottom: 1.33vw;\n        background: url(../assets/imgs/icon.png);\n        background-size: 2100%;\n        background-position: -14.2vw -20.6vw;\n}\n.footer ul li .router-link-exact-active .iconCharP[data-v-334d2b22] {\n        color: #007aff;\n        font-size: 2.4vw;\n        text-align: center;\n}\n.footer ul li .router-link-exact-active .iconSalary[data-v-334d2b22] {\n        width: 6.6vw;\n        height: 6.6vw;\n        margin-bottom: 1.33vw;\n        background: url(../assets/imgs/icon.png);\n        background-size: 2100%;\n        background-position: -28.6vw -20.6vw;\n}\n.footer ul li .router-link-exact-active .iconMsg[data-v-334d2b22] {\n        width: 6.6vw;\n        height: 6.6vw;\n        margin-bottom: 1.33vw;\n        background: url(../assets/imgs/icon.png);\n        background-size: 2100%;\n        background-position: -42.6vw -20.6vw;\n}\n.footer ul li .router-link-exact-active .iconPerson[data-v-334d2b22] {\n        width: 6.6vw;\n        height: 6.6vw;\n        margin-bottom: 1.33vw;\n        background: url(../assets/imgs/icon.png);\n        background-size: 2100%;\n        background-position: -52.6vw -20.6vw;\n}\n"],sourceRoot:""}])},737:function(n,t,o){var i=o(722);"string"==typeof i&&(i=[[n.i,i,""]]),i.locals&&(n.exports=i.locals);o(168)("34a63e10",i,!0)},741:function(n,t,o){var i=o(726);"string"==typeof i&&(i=[[n.i,i,""]]),i.locals&&(n.exports=i.locals);o(168)("8626f704",i,!0)},750:function(n,t,o){n.exports=o.p+"static/img/peopleTop.91ab68e.png"},751:function(n,t){n.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAABS2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDIgNzkuMTYwOTI0LCAyMDE3LzA3LzEzLTAxOjA2OjM5ICAgICAgICAiPgogPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIi8+CiA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgo8P3hwYWNrZXQgZW5kPSJyIj8+nhxg7wAAAaBJREFUSImtlc1xwjAQhT/cAExuOsFMCgh04A6gA+CaE3RAB/YlB044HYQO3AHQAZz2xtgVJAevYuGRiCF+M5rZ2b8nrbSr3na7xYMBMNMVA33Vl0AOfOkqRMQX/4vIo1sBZ2AHTJ3kqDxV21l9HyLIgEQTXYA1MAF6uiaqu6hPYozJ2hJkwFzlNTACUuDo+BxVN1IfgPk9EkuwcpIvNclfSNXXknjLFVFd6MbZeXA3HmTUJ9kYYwY+ghl1zdvs/AYiklLfySxEwDPJHdhYL0Gscv4PAhsbNw0R9Ts/No1tISI2tt+0+RqtU0RU7Q8wfjaJMcbGlk1bxJ36PQAbmzcNEdXQghZz5Q5s7FfTYAlKYPgMiXbwUHN4CQrqTk6AxQP53zUGYCMihY8Aqkb5VHlHu5OsgA+VrwRGjPtMFw5JQj3v3dc1pv4v7M6vwAuQh2aRiwXV8LJ3kgAH4FvXQXW25mvgFTgBbz4SX6PZeb8E9ty+7VJ1S/VJte5xiKQX+JNbw/7JmjRXkhMQi0jR2agInaTTWeQhyTofdg7JHjj/ABIJgGAJSKD+AAAAAElFTkSuQmCC"},752:function(n,t,o){n.exports=o.p+"static/img/shopTop.4b73eb6.png"},755:function(n,t,o){o(741);var i=o(70)(o(697),o(767),"data-v-334d2b22",null);n.exports=i.exports},762:function(n,t){n.exports={render:function(){var n=this,t=n.$createElement,o=n._self._c||t;return o("div",{staticClass:"reportForms",style:{overflow:""+n.myStyle.formOverFlow}},[o("div",{class:""+n.myStyle.loginFix}),n._v(" "),n._m(0),n._v(" "),n._m(1),n._v(" "),o("div",{staticClass:"forms"},[o("div",{staticClass:"title"},[n._v("报表模块")]),n._v(" "),o("ul",n._l(n.forms,function(t,i){return o("li",{key:i,class:""+i,on:{touchend:function(t){n.linkTo(i)}}},[o("div",{staticClass:"icon",style:{background:t.color}},[o("div",{staticClass:"icon-forms",style:{"background-position":""+t.iconPosition}})]),n._v(" "),o("p",[n._v(n._s(t.text))])])}))]),n._v(" "),o("Footer")],1)},staticRenderFns:[function(){var n=this,t=n.$createElement,o=n._self._c||t;return o("div",{staticClass:"search"},[o("div",{staticClass:"search-icon"}),n._v(" "),o("input",{attrs:{type:"text",placeholder:"请输入门店、职员、品牌、产品等关键字"}})])},function(){var n=this,t=n.$createElement,o=n._self._c||t;return o("div",{staticClass:"topList"},[o("div",{staticClass:"shopTop"}),n._v(" "),o("div",{staticClass:"peopleTop"})])}]}},767:function(n,t){n.exports={render:function(){var n=this,t=n.$createElement,o=n._self._c||t;return o("div",{staticClass:"footer",style:{"padding-bottom":n.padding+"vw"}},[o("ul",[o("li",{attrs:{id:"1"},on:{touchend:n.touchend}},[o("div",{staticClass:"iconHome"}),n._v(" "),o("p",{staticClass:"iconCharP"},[n._v("首页")])]),n._v(" "),o("li",{attrs:{id:"2"}},[o("router-link",{attrs:{to:"/ReportForms"}},[o("div",{staticClass:"iconChar"}),n._v(" "),o("p",{staticClass:"iconCharP"},[n._v("报表")])])],1),n._v(" "),o("li",{attrs:{id:"3"},on:{touchend:n.touchend}},[o("div",{staticClass:"iconSalary"}),n._v(" "),o("p",{staticClass:"iconCharP"},[n._v("财务")])]),n._v(" "),o("li",{attrs:{id:"4"},on:{touchend:n.touchend}},[o("div",{staticClass:"iconMsg"}),n._v(" "),o("p",{staticClass:"iconCharP"},[n._v("消息")])]),n._v(" "),o("li",{attrs:{id:"5"},on:{touchend:n.touchend}},[o("div",{staticClass:"iconPerson"}),n._v(" "),o("p",{staticClass:"iconCharP"},[n._v("个人")])])])])},staticRenderFns:[]}},83:function(n,t,o){o(737);var i=o(70)(o(708),o(762),"data-v-16625084",null);n.exports=i.exports}});