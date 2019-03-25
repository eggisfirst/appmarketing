webpackJsonp([39],{1334:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"recommend",domProps:{innerHTML:t._s(t.myhtml)}})},staticRenderFns:[]}},205:function(t,e,a){var r=a(78)(a(985),a(1334),null,null);t.exports=r.exports},345:function(t,e,a){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0}),e.IndexModel=void 0;var n=a(85),u=r(n),o=a(45),i=r(o),c=a(83),l=r(c),s=a(87),d=r(s),p=a(86),g=r(p),f=a(420),v=function(t){function e(){return(0,i.default)(this,e),(0,d.default)(this,(e.__proto__||(0,u.default)(e)).apply(this,arguments))}return(0,g.default)(e,t),(0,l.default)(e,[{key:"getCategory1List",value:function(){return this.getData({url:"/api/train/repository/v1/category",params:{}})}},{key:"getArticleSearch",value:function(t,e){return this.getData({url:"/api/train/repository/v1/getRepositoryByKey",params:{key:t,account:e,classify:1}})}},{key:"getCategories",value:function(t){return this.getData({url:"/api/train/repository/v1/getCategoryList",params:{id:t}})}},{key:"getArticles",value:function(t){return this.getData({url:"/api/train/repository/v1/queryByCategoryId",params:t})}},{key:"getArticleDetail",value:function(t,e){return this.getData({url:"/api/train/repository/v1/get",params:{id:t,account:e}})}},{key:"collect",value:function(t,e,a){return this.getData({url:"/api/user/collect/v1/collect",params:{type:t,id:e,account:a}})}},{key:"remove",value:function(t,e,a){return this.getData({url:"/api/user/collect/v1/cancelCollect",params:{type:t,id:e,account:a}})}},{key:"getQuestionSearch",value:function(t,e){return this.getData({url:"/api/question/repository/v1//getQuestionList",params:{key:t,account:e,page:1,limit:200}})}},{key:"getQuestionCategoryList",value:function(){return this.getData({url:"/api/question/repository/v1/getCategoryList"})}},{key:"questionList",value:function(t,e,a){return this.getData({url:"/api/question/repository/v1//getQuestionList",params:{categoryId:t,page:e,limit:a}})}},{key:"questionDetail",value:function(t,e){return this.getData({url:"/api/question/repository/v1/get",params:{id:t,account:e}})}},{key:"getBrand",value:function(t){return this.getData({url:"/api/product/v1/brand",params:{account:t}})}},{key:"MusiCategory",value:function(){return this.getData({url:"/api/product/v1/category"})}},{key:"brandCategory",value:function(t){return this.getData({url:"/api/product/v1/product/category",params:{brand:t}})}},{key:"getAdvert",value:function(t){return this.getData({url:"/api/product/v1/advert",params:{brand:t}})}},{key:"brandIntroduce",value:function(t){return this.getData({url:"/api/product/v1/introduce",params:{brand:t}})}},{key:"getProductList",value:function(t,e){return this.getData({url:"/api/product/v1/product/list",params:{key:t,account:e}})}},{key:"fliterList",value:function(t){return this.getData({url:"/api/product/v1/product/list",params:t})}},{key:"galleryCollect",value:function(t){return this.getData({url:"/api/user/collect/v1/collect",params:t})}},{key:"galleryCancelCollect",value:function(t){return this.getData({url:"/api/user/collect/v1/cancelCollect",params:t})}},{key:"productList",value:function(t,e){return this.getData({url:"/api/product/v1/product/details",params:{productId:t,account:e}})}},{key:"getCollect",value:function(t){return this.getData({url:"/api/user/collect/v1/getcollect",params:t})}}]),e}(f.Request);e.IndexModel=v},420:function(t,e,a){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0}),e.Request=void 0;var n=a(84),u=r(n),o=a(45),i=r(o),c=a(83),l=r(c),s=a(81),d=r(s),p=function(){function t(){(0,i.default)(this,t)}return(0,l.default)(t,[{key:"getData",value:function(t){var e=t.url,a=t.params,r=t.method,n=void 0===r?"GET":r;return new u.default(function(t,r){(0,d.default)({url:"http://10.11.8.229"+e,params:a,method:n}).then(function(e){t(e.data)}).catch(function(t){r(t)})})}},{key:"getPostData",value:function(t){var e=t.url,a=t.data;return new u.default(function(t,r){(0,d.default)({method:"post",url:"http://10.11.8.229"+e,params:a}).then(function(e){t(e)}).catch(function(t){r(t)})})}}]),t}();e.Request=p},765:function(t,e,a){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}function n(t,e){if(t.length){var a=[];if(""===e)a=[];else for(var r=0;r<t.length;r++)null!=t[r].title.match(e)&&a.push(t[r]);return a}}function u(t,e){return t.map(function(a,r){if(e&&e.length>0){var n=new RegExp(e,"g"),u='<span style="color: #ff2d55">'+e+"</span>";t[r].title=a.title.replace(n,u)}}),t}function o(t,e){var a=window.localStorage,r=(0,h.default)(t);a.setItem(e,r)}function i(t){var e=window.localStorage;return JSON.parse(e.getItem(t))}function c(t,e,a){t.push({path:e,query:a})}function l(t,e){var a=[],r=0;for(var n in t)t[n]!=e&&(a.push(t[n]),a[r++]=t[n]);return a}function s(t,e){var a=[],r=0;for(var n in t)t[n]!=e&&(a.push(t[n]),a[r++]=t[n]);return a.length==t.length&&(a=[].concat((0,v.default)(a),[e])),a}function d(t){return decodeURIComponent(atob(t).split("").map(function(t){return"%"+("00"+t.charCodeAt(0).toString(16)).slice(-2)}).join(""))}function p(t){return t.replace(/<img[^>]*>/gi,function(t,e){var t=t.replace(/alt=\"(.*)\"/gi,'style="width: 100%;height:auto"');return t})}function g(t){return t.replace(/<img[^>]*>/gi,function(t,e){var t=t.replace(/title=\"(.*)\"/gi,'style="width: 100%;height:auto"');return t})}Object.defineProperty(e,"__esModule",{value:!0}),e.changeGalleryStyle=e.changeImgStyle=e.b64DecodeUnicode=e.addItem=e.removeItem=e.skipNewPage=e.getLocalStorage=e.setLocalStorage=e.changeColor=e.fuzzyQuery=void 0;var f=a(46),v=r(f),y=a(88),h=r(y);e.fuzzyQuery=n,e.changeColor=u,e.setLocalStorage=o,e.getLocalStorage=i,e.skipNewPage=c,e.removeItem=l,e.addItem=s,e.b64DecodeUnicode=d,e.changeImgStyle=p,e.changeGalleryStyle=g},985:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=a(345),n=(a.n(r),a(765)),u=(a.n(n),new r.IndexModel);e.default={data:function(){return{myhtml:""}},created:function(){this.getContent()},methods:{getContent:function(){var t=this,e=this.$route.query.brand;u.brandIntroduce(e).then(function(e){var r=e.data.introduce;t.myhtml=a.i(n.changeImgStyle)(a.i(n.b64DecodeUnicode)(r))})}}}}});