webpackJsonp([27],{105:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(11),a=(n.n(r),n(40),n(108)),o=n.n(a);t.default={name:"app",props:["title"],store:o.a,data:function(){return{height:window.innerHeight,padding:"",myStyle:[{fgPwdTop:""},{loginFix:""},{formOverFlow:""}]}},mounted:function(){this.isIPhoneX()},methods:{onSwipeRight:function(){this.$router.go(-1)},onSwipeLeft:function(){},isIPhoneX:function(e){navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)?812==screen.height&&375==screen.width||896==screen.height&&414==screen.width?(this.padding="5.86",this.height=window.innerHeight-44,this.myStyle.fgPwdTop="-6",this.myStyle.loginFix="fix",this.myStyle.formOverFlow=""):(this.padding="",this.myStyle.formOverFlow="hidden"):this.myStyle.formOverFlow="hidden"}}}},106:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=n(77),o=r(a),i=n(51),u=r(i),s=n(128),l=r(s),c=n(79),f=r(c),d=n(75),m=r(d),p=n(74),h=function(){function e(){(0,u.default)(this,e),this.port="https://agency.derucci.com/",this.path=this.port+"v1/app/report/",this.v2path=this.port+"v2/app/",this.apipath=this.port+"v1/api/public/",this.version="web"}return(0,l.default)(e,[{key:"sortYears",value:function(e){if(e.series&&e.series[0]&&e.series[0].name<e.series[1].name){var t=e.series[0];e.series[0]=e.series[1],e.series[1]=t}}},{key:"compare",value:function(e){return function(t,n){var r=[t[e],n[e]],a=r[0],o=r[1];return a<o?-1:a>o?1:0}}},{key:"sortArrs",value:function(e){var t=[e.series,[],e.yAxisData,e.idsData],n=t[0],r=t[1],a=t[2],o=t[3];if(n)for(var i=0;i<n.length;i++)r[i]=n[i].data;for(var u=0;u<r[0].length;u++)for(var s=0;s<r[0].length-u;s++)if(parseInt(r[0][s])>parseInt(r[0][s+1])){for(var l=[[],a[s]],c=l[0],f=l[1],d=0;d<n.length;d++)c[d]=r[d][s],r[d][s]=r[d][s+1],r[d][s+1]=c[d];if(a[s]=a[s+1],a[s+1]=f,o){var m=o[s];o[s]=o[s+1],o[s+1]=m}}for(var p=0;p<r[1].length;p++)for(var h=0;h<r[1].length-p;h++)if(parseInt(r[1][h])>parseInt(r[1][h+1])){for(var v=[[],a[h]],g=v[0],y=v[1],S=0;S<n.length;S++)g[S]=r[S][h],r[S][h]=r[S][h+1],r[S][h+1]=g[S];if(a[h]=a[h+1],a[h+1]=y,o){var b=o[h];o[h]=o[h+1],o[h+1]=b}}}},{key:"getSign",value:function(e,t){e=function(e){var t={},n=[];for(var r in e)n.push(r);n=n.sort();for(var a in n)t[n[a]]=e[n[a]];return t}(e);var n="";for(var r in e)(e[r]||0===e[r]||"0"===e[r])&&(n=""===n?r+"="+e[r]:n+"&"+r+"="+e[r]);return f.default.hex(n+t)}},{key:"getAjax",value:function(e,t,n,r,a){var i=this,u=this;return new o.default(function(o,s){var l="post"==a?"post":"get",c="";c="v2"===r?""+i.v2path+t:"v3"===r?""+i.apipath+t:""+i.path+t;var f=i.getSign(n,e.ajaxData.token);i.loading("open");var d=setTimeout(function(){u.loading("close"),clearTimeout(d)},1e4);(0,m.default)({method:l,url:c,headers:{token:e.ajaxData.token,UUID:e.ajaxData.uuid,sign:f},params:n}).then(function(e){u.loading("close"),o(e.data?e.data:!1)})})}},{key:"loading",value:function(e){if("open"===e){p.Indicator.open({text:"数据请求中...",spinnerType:"fading-circle"});setTimeout(function(){p.Indicator.close()},5e3)}else p.Indicator.close()}},{key:"tip",value:function(e){(0,p.Toast)({message:e,position:"center",duration:2e3})}},{key:"indexTime",value:function(e,t){e||(e=new Date);var n=e.toLocaleDateString().split("/");if(parseInt(n[0])<parseInt(n[2])){var r=n[0];n[0]=n[1],n[1]=r,n.reverse()}return n="day"===t?n.slice(0,3):n.slice(0,2),n[1]<10&&(n[1]="0"+n[1]),n.join("-")}},{key:"getLocalTime",value:function(e){var t=localStorage.getItem(e+"Time");return t||this.indexTime()}},{key:"indexTimeB",value:function(e){if(e){e=e.toLocaleDateString().split("/");var t,n,r,a,o,i=[];return e.forEach(function(a,o){a>1e3&&(t=e[o],0==o?(n=e[o+1],n<10&&(n="0"+n),r=e[o+2],r<10&&(r="0"+r),i.push(t,n,r)):(n=e[o-2],r=e[o-1],r<10&&(r="0"+r),n<10&&(n="0"+n),i.push(t,n,r)))}),a=t+"年"+n+"月"+r+"日",o=i.join("-"),[a,o]}}},{key:"btnList",value:function(e,t){return e.map(function(e,n){return{name:e,status:n===t}})}},{key:"changeBtnStatus",value:function(e,t){e.forEach(function(e,n){e.status=t===n})}},{key:"getUniqueData",value:function(e){if(e){for(var t=[],n={},r=0;r<e.length;r++)n[e[r].customerId]||(t.push(e[r]),n[e[r].customerId]=!0);return t}}},{key:"getNewArr",value:function(e,t,n,r){for(var a=n.length,o=[],i=[],u=[],s=[],l=0;l<a;l++)0==e[l]&&0==t[l]||(r&&s.push(r[l]),o.push(n[l]),i.push(e[l]),u.push(t[l]));return[o,i,u,s]}},{key:"getCustomerNewArr",value:function(e,t,n,r,a){for(var o=a.length,i=[],u=[],s=[],l=[],c=[],f=0;f<o;f++)0==e[f]&&0==t[f]&&0==n[f]&&0==r[f]||(c.push(r[f]),i.push(a[f]),u.push(e[f]),s.push(t[f]),l.push(n[f]));return[i,u,s,l,c]}},{key:"compareTimeStamp",value:function(e,t){return new Date(e).getTime()<new Date(t).getTime()}}]),e}();t.default=h},107:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}var a=n(11),o=r(a),i=n(70),u=r(i),s=n(18),l=r(s),c=n(67),f=(r(c),n(71)),d=r(f);n(69);var m=n(68);o.default.use(d.default,{name:"v-touch"}),d.default.config.swipe={threshold:100,direction:"horizontal"},"app"===l.default.version?window.apiready=function(){new o.default({el:"#app",router:m.router,template:"<App/>",components:{App:u.default}})}:new o.default({el:"#app",router:m.router,template:"<App/>",components:{App:u.default}})},108:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=n(78),o=r(a),i=n(11),u=r(i),s=n(40),l=r(s),c=n(109),f=r(c),d=n(117),m=r(d),p=n(115),h=r(p),v=n(114),g=r(v),y=n(110),S=r(y),b=n(85),T=r(b),w=n(112),E=r(w),D=n(111),M=r(D),O=n(118),_=r(O),x=n(120),L=r(x),A=n(116),C=r(A),I=n(113),P=r(I),j=n(119),k=r(j),F=n(121),$=r(F);u.default.use(l.default),t.default=new l.default.Store({modules:(0,o.default)({common:f.default,customer:m.default,select:h.default,rightContainer:g.default,dealCustomerList:S.default,dealOrderInfoDetails:T.default,orderInfoDetails:E.default,customerHeader:_.default,followTrackDetails:M.default,tabStatus:C.default,orderList:P.default,serachResult:L.default,customerScroll:k.default,personMsg:$.default},"select",h.default)})},109:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r={},a={},o={},i={};t.default={state:r,getters:i,actions:o,mutations:a}},110:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r={dealCustomerList:[],dealLength:0},a={setDealCustomerList:function(e,t){return e.dealCustomerList=t},setDealLength:function(e,t){return e.dealLength=t}},o={},i={};t.default={state:r,getters:i,actions:o,mutations:a}},111:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r={followTrackDetails:[]},a={setFollowTrackDetails:function(e,t){return e.followTrackDetails=t}},o={},i={};t.default={state:r,getters:i,actions:o,mutations:a}},112:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r={orderInfoDetails:[]},a={setOrderInfoDetails:function(e,t){return e.orderInfoDetails=t}},o={},i={};t.default={state:r,getters:i,actions:o,mutations:a}},113:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r={orderList:""},a={setOrderList:function(e,t){return e.orderList=t}},o={},i={};t.default={state:r,getters:i,actions:o,mutations:a}},114:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r={rightContainerStatus:"hideRightContainer",rightTimeSelect:!1,rightHeadTitle:"",customerTime:{stratTime:"",endTime:""},isSelectStatus:!1,dealTime:{stratTime:"",endTime:""}},a={setRightContainerStatus:function(e,t){return e.rightContainerStatus=t},setRightTimeSelect:function(e,t){return e.rightTimeSelect=t},setRightHeadTitle:function(e,t){return e.rightHeadTitle=t},setCustomerTime:function(e,t){return e.customerTime=t},setIsSelectStatus:function(e,t){return e.isSelectStatus=t},setDealTime:function(e,t){return e.dealTime=t}},o={},i={};t.default={state:r,getters:i,actions:o,mutations:a}},115:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r={citySelect:"",startTimeSelect:null,endTimeSelect:null,sexVal:"",areaVal:"",enterStoreVal:"",sourceVal:"",leaveStoreVal:""},a={setCitySelect:function(e,t){return e.citySelect=t},setStartTimeSelect:function(e,t){return e.startTimeSelect=t},setEndTimeSelect:function(e,t){return e.endTimeSelect=t},setSexVal:function(e,t){return e.sexVal=t},setAreaVal:function(e,t){return e.areaVal=t},setEnterStoreVal:function(e,t){return e.enterStoreVal=t},setSourceVal:function(e,t){return e.sourceVal=t},setLeaveStoreVal:function(e,t){return e.leaveStoreVal=t}},o={},i={};t.default={state:r,getters:i,actions:o,mutations:a}},116:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(18),a=function(e){return e&&e.__esModule?e:{default:e}}(r),o={tabStatus:a.default.btnList(["订单信息","需求信息"],0),customerTabStatus:a.default.btnList(["客户描述","新增需求","需求信息"],0)},i={setTabStatus:function(e,t){return e.tabStatus=t},setCustomerTabStatus:function(e,t){return e.customerTabStatus=t}},u={},s={};t.default={state:o,getters:s,actions:u,mutations:i}},117:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r={customerList:[],customerAjaxParams:{page:1,limit:50,u:"",i:"",uo:1,io:1,key:"",startTime:"",endTime:"",tut:0,tenantId:"",account:""},newCustomerInfo:{},customerDemand:{},customerInfoBtns:[],allLoaded:!1},a={setCustomerList:function(e,t){return e.customerList=t},setCustomerAjaxParams:function(e,t){return e.customerAjaxParams=t},setNewCustomerInfo:function(e,t){return e.newCustomerInfo=t},setCustomerDemand:function(e,t){return e.customerDemand=t},setCustomerInfoBtns:function(e,t){return e.customerInfoBtns=t},setAllLoaded:function(e,t){return e.allLoaded=t}},o={},i={};t.default={state:r,getters:i,actions:o,mutations:a}},118:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(18),a=function(e){return e&&e.__esModule?e:{default:e}}(r),o={headerStatus:a.default.btnList(["我的客户","订单查询","成交客户"],0),searchKey:""},i={setHeaderStatus:function(e,t){return e.headerStatus=t},setSearchKey:function(e,t){return e.searchKey=t}},u={},s={};t.default={state:o,getters:s,actions:u,mutations:i}},119:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r={customerScroll:0,orderScroll:0,dealScroll:0},a={setCustomerScroll:function(e,t){return e.customerScroll=t},setOrderScroll:function(e,t){return e.orderScroll=t},setDealScroll:function(e,t){return e.dealScroll=t}};t.default={state:r,mutations:a}},120:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r={dealList:[],orderList:[],myCusList:[]},a={setDealList:function(e,t){return e.dealList=t},setOrderList:function(e,t){return e.orderList=t},setMyCusList:function(e,t){return e.myCusList=t}},o={},i={};t.default={state:r,getters:i,actions:o,mutations:a}},121:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r={personMsg:{}},a={setPersonMsg:function(e,t){return e.personMsg=t}},o={},i={};t.default={state:r,getters:i,actions:o,mutations:a}},170:function(e,t){},176:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{style:{"min-height":e.height+"px",background:"#fff","padding-top":e.padding+"vw"},attrs:{id:"app"}},[n("v-touch",{style:{"min-height":e.height+"px"},attrs:{tag:"div"},on:{swiperight:e.onSwipeRight,swipeleft:e.onSwipeLeft}},[n("keep-alive",[e.$route.meta.keepAlive?n("router-view",{attrs:{myStyle:e.myStyle}}):e._e()],1),e._v(" "),e.$route.meta.keepAlive?e._e():n("router-view",{attrs:{myStyle:e.myStyle}})],1)],1)},staticRenderFns:[]}},18:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=n(124),o=r(a),i=n(51),u=r(i),s=n(130),l=r(s),c=n(129),f=r(c),d=n(106),m=r(d),p=function(e){function t(){(0,u.default)(this,t);var e=(0,l.default)(this,(t.__proto__||(0,o.default)(t)).call(this));return e.key=!0,e.customerAjaxParams=function(e){return{page:1,limit:50,u:"",i:"",uo:1,io:1,key:"",startTime:"",endTime:"",tut:0,tenantId:e}},e.chartsBotTit=function(e){return e.yAxisData[0]+"           "+e.yAxisData[1]+"        "+e.yAxisData[2]},e}return(0,f.default)(t,e),t}(m.default);t.default=new p},67:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}var a=n(27),o=r(a),i=n(122),u=r(i);!function(e){function t(e,t,n,r){return"function"==typeof t&&(r=n,n=t,t=void 0),"function"!=typeof n&&(r=n,n=void 0),{url:e,data:t,fnSuc:n,dataType:r}}var n={},r=/android/gi.test(navigator.appVersion),a=function(){var t=e.localStorage;return r&&(t=os.localStorage()),t};n.trim=function(e){return String.prototype.trim?null==e?"":String.prototype.trim.call(e):e.replace(/(^\s*)|(\s*$)/g,"")},n.trimAll=function(e){return e.replace(/\s*/g,"")},n.isElement=function(e){return!(!e||1!=e.nodeType)},n.isArray=function(e){return Array.isArray?Array.isArray(e):e instanceof Array},n.isEmptyObject=function(e){return"{}"===(0,u.default)(e)},n.addEvt=function(e,t,r,a){if(!n.isElement(e))return void console.warn("$api.addEvt Function need el param, el param must be DOM Element");a=a||!1,e.addEventListener&&e.addEventListener(t,r,a)},n.rmEvt=function(e,t,r,a){if(!n.isElement(e))return void console.warn("$api.rmEvt Function need el param, el param must be DOM Element");a=a||!1,e.removeEventListener&&e.removeEventListener(t,r,a)},n.one=function(e,t,r,a){if(!n.isElement(e))return void console.warn("$api.one Function need el param, el param must be DOM Element");a=a||!1;var o=this,i=function n(){r&&r(),o.rmEvt(e,t,n,a)};o.addEvt(e,t,i,a)},n.dom=function(e,t){if(1===arguments.length&&"string"==typeof arguments[0]){if(document.querySelector)return document.querySelector(arguments[0])}else if(2===arguments.length&&e.querySelector)return e.querySelector(t)},n.domAll=function(e,t){if(1===arguments.length&&"string"==typeof arguments[0]){if(document.querySelectorAll)return document.querySelectorAll(arguments[0])}else if(2===arguments.length&&e.querySelectorAll)return e.querySelectorAll(t)},n.byId=function(e){return document.getElementById(e)},n.first=function(e,t){return 1===arguments.length?n.isElement(e)?e.children[0]:void console.warn("$api.first Function need el param, el param must be DOM Element"):2===arguments.length?this.dom(e,t+":first-child"):void 0},n.last=function(e,t){if(1===arguments.length){if(!n.isElement(e))return void console.warn("$api.last Function need el param, el param must be DOM Element");var r=e.children;return r[r.length-1]}if(2===arguments.length)return this.dom(e,t+":last-child")},n.eq=function(e,t){return this.dom(e,":nth-child("+t+")")},n.not=function(e,t){return this.domAll(e,":not("+t+")")},n.prev=function(e){if(!n.isElement(e))return void console.warn("$api.prev Function need el param, el param must be DOM Element");var t=e.previousSibling;return t.nodeType&&3===t.nodeType?t=t.previousSibling:void 0},n.next=function(e){if(!n.isElement(e))return void console.warn("$api.next Function need el param, el param must be DOM Element");var t=e.nextSibling;return t.nodeType&&3===t.nodeType?t=t.nextSibling:void 0},n.closest=function(e,t){if(!n.isElement(e))return void console.warn("$api.closest Function need el param, el param must be DOM Element");var r,a,o=function(e,t){var n=0,r=e.length;for(n;n<r;n++)if(e[n].isSameNode(t))return e[n];return!1};return function e(t,i){for(r=n.domAll(t.parentNode,i),a=o(r,t);!a;){if(null!=(t=t.parentNode)&&t.nodeType==t.DOCUMENT_NODE)return!1;e(t,i)}return a}(e,t)},n.contains=function(e,t){var n=!1;if(t===e)return n=!0;do{if((t=t.parentNode)===e)return n=!0}while(t===document.body||t===document.documentElement);return n},n.remove=function(e){e&&e.parentNode&&e.parentNode.removeChild(e)},n.attr=function(e,t,r){return n.isElement(e)?2==arguments.length?e.getAttribute(t):3==arguments.length?(e.setAttribute(t,r),e):void 0:void console.warn("$api.attr Function need el param, el param must be DOM Element")},n.removeAttr=function(e,t){if(!n.isElement(e))return void console.warn("$api.removeAttr Function need el param, el param must be DOM Element");2===arguments.length&&e.removeAttribute(t)},n.hasCls=function(e,t){return n.isElement(e)?e.className.indexOf(t)>-1:void console.warn("$api.hasCls Function need el param, el param must be DOM Element")},n.addCls=function(e,t){if(!n.isElement(e))return void console.warn("$api.addCls Function need el param, el param must be DOM Element");if("classList"in e)e.classList.add(t);else{var r=e.className,a=r+" "+t;e.className=a}return e},n.removeCls=function(e,t){if(!n.isElement(e))return void console.warn("$api.removeCls Function need el param, el param must be DOM Element");if("classList"in e)e.classList.remove(t);else{var r=e.className,a=r.replace(t,"");e.className=a}return e},n.toggleCls=function(e,t){return n.isElement(e)?("classList"in e?e.classList.toggle(t):n.hasCls(e,t)?n.removeCls(e,t):n.addCls(e,t),e):void console.warn("$api.toggleCls Function need el param, el param must be DOM Element")},n.val=function(e,t){if(!n.isElement(e))return void console.warn("$api.val Function need el param, el param must be DOM Element");if(1===arguments.length)switch(e.tagName){case"SELECT":return e.options[e.selectedIndex].value;case"INPUT":case"TEXTAREA":return e.value}if(2===arguments.length)switch(e.tagName){case"SELECT":return e.options[e.selectedIndex].value=t,e;case"INPUT":case"TEXTAREA":return e.value=t,e}},n.prepend=function(e,t){return n.isElement(e)?(e.insertAdjacentHTML("afterbegin",t),e):void console.warn("$api.prepend Function need el param, el param must be DOM Element")},n.append=function(e,t){return n.isElement(e)?(e.insertAdjacentHTML("beforeend",t),e):void console.warn("$api.append Function need el param, el param must be DOM Element")},n.before=function(e,t){return n.isElement(e)?(e.insertAdjacentHTML("beforebegin",t),e):void console.warn("$api.before Function need el param, el param must be DOM Element")},n.after=function(e,t){return n.isElement(e)?(e.insertAdjacentHTML("afterend",t),e):void console.warn("$api.after Function need el param, el param must be DOM Element")},n.html=function(e,t){return n.isElement(e)?1===arguments.length?e.innerHTML:2===arguments.length?(e.innerHTML=t,e):void 0:void console.warn("$api.html Function need el param, el param must be DOM Element")},n.text=function(e,t){return n.isElement(e)?1===arguments.length?e.textContent:2===arguments.length?(e.textContent=t,e):void 0:void console.warn("$api.text Function need el param, el param must be DOM Element")},n.offset=function(e){if(!n.isElement(e))return void console.warn("$api.offset Function need el param, el param must be DOM Element");var t=Math.max(document.documentElement.scrollLeft,document.body.scrollLeft),r=Math.max(document.documentElement.scrollTop,document.body.scrollTop),a=e.getBoundingClientRect();return{l:a.left+t,t:a.top+r,w:e.offsetWidth,h:e.offsetHeight}},n.css=function(e,t){if(!n.isElement(e))return void console.warn("$api.css Function need el param, el param must be DOM Element");"string"==typeof t&&t.indexOf(":")>0&&e.style&&(e.style.cssText+=";"+t)},n.cssVal=function(t,r){if(!n.isElement(t))return void console.warn("$api.cssVal Function need el param, el param must be DOM Element");if(2===arguments.length){return e.getComputedStyle(t,null).getPropertyValue(r)}},n.jsonToStr=function(e){if("object"===(void 0===e?"undefined":(0,o.default)(e)))return JSON&&(0,u.default)(e)},n.strToJson=function(e){if("string"==typeof e)return JSON&&JSON.parse(e)},n.setStorage=function(e,t){if(2===arguments.length){var n=t;"object"==(void 0===n?"undefined":(0,o.default)(n))?(n=(0,u.default)(n),n="obj-"+n):n="str-"+n;var r=a();r&&r.setItem(e,n)}},n.getStorage=function(e){var t=a();if(t){var n=t.getItem(e);if(!n)return;if(0===n.indexOf("obj-"))return n=n.slice(4),JSON.parse(n);if(0===n.indexOf("str-"))return n.slice(4)}},n.rmStorage=function(e){var t=a();t&&e&&t.removeItem(e)},n.clearStorage=function(){var e=a();e&&e.clear()},n.fixIos7Bar=function(e){return n.fixStatusBar(e)},n.fixStatusBar=function(e){return n.isElement(e)?(e.style.paddingTop=api.safeArea.top+"px",e.offsetHeight):(console.warn("$api.fixStatusBar Function need el param, el param must be DOM Element"),0)},n.fixTabBar=function(e){return n.isElement(e)?(e.style.paddingBottom=api.safeArea.bottom+"px",e.offsetHeight):(console.warn("$api.fixTabBar Function need el param, el param must be DOM Element"),0)},n.toast=function(e,t,n){var r={},a=function(e,t){api.showProgress(e),setTimeout(function(){api.hideProgress()},t)};if(1===arguments.length){var n=n||500;"number"==typeof e?n=e:r.title=e+"",a(r,n)}else if(2===arguments.length){var n=n||500,t=t;if("number"==typeof t){var o=t;n=o,t=null}e&&(r.title=e),t&&(r.text=t),a(r,n)}e&&(r.title=e),t&&(r.text=t),n=n||500,a(r,n)},n.post=function(){var e=t.apply(null,arguments),n={},r=e.fnSuc;if(e.url&&(n.url=e.url),e.data&&(n.data=e.data),e.dataType){var a=e.dataType.toLowerCase();"text"!=a&&"json"!=a||(n.dataType=a)}else n.dataType="json";n.method="post",api.ajax(n,function(e,t){e&&r&&r(e)})},n.get=function(){var e=t.apply(null,arguments),n={},r=e.fnSuc;if(e.url&&(n.url=e.url),e.dataType){var a=e.dataType.toLowerCase();"text"!=a&&"json"!=a||(n.dataType=a)}else n.dataType="text";n.method="get",api.ajax(n,function(e,t){e&&r&&r(e)})},e.$api=n}(window)},68:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.router=void 0;var a=n(11),o=r(a),i=n(73),u=r(i);o.default.use(u.default);t.router=new u.default({routes:[{path:"/",name:"ReportForms",component:function(e){return n.e(25).then(function(){var t=[n(183)];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"/Login",name:"Login",component:function(e){return n.e(17).then(function(){var t=[n(205)];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"/brand",name:"Brand",component:function(e){return n.e(0).then(function(){var t=[n(188)];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"/sales",name:"Sales",component:function(e){return n.e(2).then(function(){var t=[n(193)];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"/areaStoreSales",name:"/AreaStoreSales",component:function(e){return n.e(8).then(function(){var t=[n(191)];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"/storeSales",name:"StoreSales",component:function(e){return n.e(7).then(function(){var t=[n(194)];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"/personalSales",name:"/PersonalSales",component:function(e){return n.e(6).then(function(){var t=[n(192)];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"/audioTechnica",name:"/AudioTechnica",component:function(e){return n.e(1).then(function(){var t=[n(186)];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"/personal",name:"/Personal",component:function(e){return n.e(9).then(function(){var t=[n(187)];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"/areaEffectiveness",name:"/AreaEffectiveness",component:function(e){return n.e(5).then(function(){var t=[n(185)];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"/peopleWork",name:"/PeopleWork",component:function(e){return n.e(3).then(function(){var t=[n(190)];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"/customerSource",name:"/CustomerSource",component:function(e){return n.e(4).then(function(){var t=[n(189)];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"/customer",name:"/Customer",component:function(e){return n.e(12).then(function(){var t=[n(199)];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"/customerInfo/:id",name:"/CustomerInfo",component:function(e){return n.e(11).then(function(){var t=[n(196)];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"/newCustomerInfo/:id",name:"/NewCustomerInfo",component:function(e){return n.e(10).then(function(){var t=[n(201)];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"/newCustomer",name:"NewCustomer",component:function(e){return n.e(13).then(function(){var t=[n(200)];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"/dealDetails",name:"/dealDetails",component:function(e){return n.e(16).then(function(){var t=[n(197)];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"/trackDetails",name:"/trackDetails",component:function(e){return n.e(23).then(function(){var t=[n(204)];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"/newTrack",name:"/newTrack",component:function(e){return n.e(14).then(function(){var t=[n(202)];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"/changeDemand",name:"/changeDemand",component:function(e){return n.e(15).then(function(){var t=[n(195)];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"/enquiryInfo",name:"/enquiryInfo",component:function(e){return n.e(20).then(function(){var t=[n(198)];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"/searchResult",name:"/searchResult",component:function(e){return n.e(24).then(function(){var t=[n(203)];e.apply(null,t)}.bind(this)).catch(n.oe)},meta:{isUseCache:!1,keepAlive:!0}},{path:"/personalMsg",name:"/Personal",component:function(e){return n.e(21).then(function(){var t=[n(182)];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"/dailyPaper",name:"/dailyPaper",component:function(e){return n.e(18).then(function(){var t=[n(181)];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"/ForgetPwd",name:"/ForgetPwd",component:function(e){return n.e(19).then(function(){var t=[n(180)];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"/ResetPwd",name:"/ResetPwd",component:function(e){return n.e(22).then(function(){var t=[n(184)];e.apply(null,t)}.bind(this)).catch(n.oe)}}],scrollBehavior:function(e,t,n){return n||(t.meta.keepAlive&&(t.meta.savedPosition=document.body.scrollTop),{x:0,y:e.meta.savedPosition||0})}})},69:function(e,t){},70:function(e,t,n){n(170);var r=n(72)(n(105),n(176),null,null);e.exports=r.exports},85:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r={dealOrderInfoDetails:{demandList:[]}},a={setDealOrderInfoDetails:function(e,t){return e.dealOrderInfoDetails=t}},o={},i={};t.default={state:r,getters:i,actions:o,mutations:a}}},[107]);