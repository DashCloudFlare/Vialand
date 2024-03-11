"use strict";(self.webpackChunkvialand=self.webpackChunkvialand||[]).push([[600],{9869:function(e,r,t){t.d(r,{Z:function(){return c}});var n=t(4165),a=t(5861),i=t(9489),o=t(1172);function c(e,r,t){return u.apply(this,arguments)}function u(){return(u=(0,a.Z)((0,n.Z)().mark((function e(r,t,a){var c,u,s,l,f,d,p,v,m;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return u=(0,i.v0)(),e.next=3,null===(c=u.currentUser)||void 0===c?void 0:c.getIdToken();case 3:return s=e.sent,l=new Headers({"Content-Type":"application/json",secret:"h6N&d3ZpiUZ@Mx9sjAF0!"}),s&&l.set("Authorization",s),f={method:r,mode:"cors",headers:l},d=t,a&&("GET"===r?(p=o.stringify(a),d+="?"+p):(f.body=a instanceof FormData?a:JSON.stringify(a),a instanceof FormData&&(f.headers={secret:"h6N&d3ZpiUZ@Mx9sjAF0!"}))),e.next=11,fetch(d,f);case 11:if(!(v=e.sent).ok){e.next=18;break}return e.next=15,v.json();case 15:return e.abrupt("return",e.sent);case 18:return e.prev=18,e.next=21,v.json();case 21:throw m=e.sent,new Error(m.message||v.statusText);case 25:throw e.prev=25,e.t0=e.catch(18),e.t0;case 28:case"end":return e.stop()}}),e,null,[[18,25]])})))).apply(this,arguments)}},1716:function(e,r,t){t.r(r),t.d(r,{deleteImages:function(){return f},deleteMany:function(){return c},deleteVideos:function(){return l},upload:function(){return o},uploadImg:function(){return u},uploadVid:function(){return s}});var n=t(8941),a=t(9869),i=n.Z.common.baseApiUrl+"/upload",o=function(e){var r=new FormData;return r.append("file",e),(0,a.Z)("POST",i,r)},c=function(e){if(e.length)return(0,a.Z)("DELETE",i,{ids:e})},u=function(e){var r=new FormData;return r.append("file",e),(0,a.Z)("POST",i+"/image",r)},s=function(e,r){var t=new FormData;return t.append("file",e),t.append("newsId",r),(0,a.Z)("POST",i+"/video",t)},l=function(e){return(0,a.Z)("DELETE",i+"/videos",{ids:e})},f=function(e){return(0,a.Z)("DELETE",i+"/images",{ids:e})}},7629:function(e,r,t){t.d(r,{PU:function(){return i},ZE:function(){return a},vh:function(){return n}});var n="\u0110\xe3 c\xf3 l\u1ed7i x\u1ea3y ra, vui l\xf2ng th\u1eed l\u1ea1i sau \xedt ph\xfat",a="\u0110\xe3 c\xf3 l\u1ed7i x\u1ea3y ra, vui l\xf2ng li\xean h\u1ec7 qu\u1ea3n tr\u1ecb vi\xean",i="Qu\xe1 tr\xecnh t\u1ea3i l\xean \u0111\xe3 b\u1ecb l\u1ed7i. Qu\xfd kh\xe1ch vui l\xf2ng li\xean h\u1ec7 tr\u1ef1c ti\u1ebfp v\u1edbi s\u1ed1 Hotline 0868113025 (ho\u1eb7c Zalo) \u0111\u1ec3 \u0111\u01b0\u1ee3c x\u1eed l\xfd k\u1ecbp th\u1eddi"},6791:function(e,r,t){t.d(r,{r:function(){return u}});var n=t(4165),a=t(5861),i=t(9439),o=t(7313),c=t(9225);function u(e){var r=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],t=(0,o.useState)("idle"),u=(0,i.Z)(t,2),s=u[0],l=u[1],f=(0,o.useState)(null),d=(0,i.Z)(f,2),p=d[0],v=d[1],m=(0,o.useState)(null),x=(0,i.Z)(m,2),h=x[0],g=x[1],y="pending"===s,b="error"===s,j="error"===s||"success"===s,k=(0,o.useCallback)(function(){var r=(0,a.Z)((0,n.Z)().mark((function r(t){var a;return(0,n.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return l("pending"),v(null),g(null),r.prev=3,r.next=6,e();case 6:return a=r.sent,t&&(v(a),l("success")),r.abrupt("return",a);case 11:r.prev=11,r.t0=r.catch(3),t&&(l("error"),g(r.t0));case 14:case"end":return r.stop()}}),r,null,[[3,11]])})));return function(e){return r.apply(this,arguments)}}(),[e]);return(0,c.u)((function(e){r&&k(e())}),[r]),(0,o.useEffect)((function(){return function(){l("idle"),v(null),g(null)}}),[]),{isLoading:y,isError:b,status:s,data:p,error:h,isComplete:j,execute:function(){return k(!0)}}}},9225:function(e,r,t){t.d(r,{u:function(){return a}});var n=t(7313);function a(e,r){var t=(0,n.useRef)(e);t.current=e;var a=(0,n.useRef)(!1);(0,n.useEffect)((function(){return a.current=!0,t.current((function(){return a.current})),function(){a.current=!1}}),r)}},7600:function(e,r,t){t.r(r),t.d(r,{default:function(){return N}});var n=t(4165),a=t(5861),i=t(3433),o=t(9439),c=t(573),u=t(7313),s=t(7864),l=t(2135),f=t(8512),d=t(1716),p=t(7629),v=t(5565),m=t(8469),x=t(3061),h=t(1110),g=t(8941),y=t(6417);function b(e){var r=e.data,t=e.first,n=e.last,a=e.loadingIds,i=void 0===a?[]:a,c=e.onMove,l=void 0===c?function(){}:c,f=e.onRemove,d=void 0===f?function(){}:f,p=u.useState(""),v=(0,o.Z)(p,2),m=v[0],b=v[1];return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsxs)("div",{className:"p-3 flex items-center gap-3 shadow rounded select-none",children:[(0,y.jsxs)("span",{className:"text-xs md:text-base",children:["#",r.index+1]}),(0,y.jsx)("a",{target:"_blank",rel:"noreferrer",className:"text-xs md:text-base text-blue-500 break-all",href:r.url,children:r.url}),(0,y.jsx)("div",{className:"flex-grow"}),i.includes(r.id)?(0,y.jsx)(s.Z7b,{className:"text-xl text-blue-500 animate-spin"}):(0,y.jsxs)("div",{className:"flex items-center gap-2 text-lg md:text-2xl",children:[(0,y.jsx)(s.w8I,{className:"text-lg md:text-xl text-blue-500 hover:text-blue-600 cursor-pointer",onClick:function(){return b(r.picture)},title:"Xem"}),(0,y.jsx)(s.Vs3,{className:(0,x.Z)("cursor-pointer",t?"text-gray-400 pointer-events-none":"text-green-500 hover:text-green-600"),title:"L\xean",onClick:function(){return l("up",r.id)}}),(0,y.jsx)(s.Vs3,{className:(0,x.Z)("rotate-180 cursor-pointer",n?"text-gray-400 pointer-events-none":"text-red-500 hover:text-red-600"),title:"Xu\u1ed1ng",onClick:function(){return l("down",r.id)}}),(0,y.jsx)(s.VPh,{className:"text-lg md:text-xl text-red-500 hover:text-red-600 cursor-pointer",title:"X\xf3a",onClick:function(){return d(r.id)}})]})]}),(0,y.jsx)(h.u_,{title:"H\xecnh \u1ea3nh",closeOnClickOutside:!0,open:!!m,onClose:function(){return b("")},children:(0,y.jsx)("img",{className:"mx-auto",src:"".concat(g.Z.common.baseApiUrl,"/public/").concat(m,".webp"),alt:""})})]})}var j=t(1413),k=t(4925),Z=t(6791),w=["execute"];function N(){var e=function(){var e=(0,Z.r)((function(){return d.apply(this,arguments)}),!1),r=e.execute,t=(0,k.Z)(e,w),i=u.useState(!1),s=(0,o.Z)(i,2),l=s[0],f=s[1];function d(){return(d=(0,a.Z)((0,n.Z)().mark((function e(){var r,t;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r=(0,c.IO)((0,c.hJ)(v.db,"banners"),(0,c.Xo)("index","asc")),t=[],e.next=5,(0,c.PL)(r);case 5:return e.sent.docs.forEach((function(e){t.push((0,j.Z)({id:e.id},e.data()))})),e.abrupt("return",t.sort((function(e,r){return e.index-r.index})));case 10:return e.prev=10,e.t0=e.catch(0),e.abrupt("return",[]);case 13:return e.prev=13,f(!0),e.finish(13);case 16:case"end":return e.stop()}}),e,null,[[0,10,13,16]])})))).apply(this,arguments)}return u.useEffect((function(){!l&&r()}),[l]),(0,j.Z)({},t)}(),r=e.data,t=u.useState([]),x=(0,o.Z)(t,2),h=x[0],g=x[1],N=u.useState([]),E=(0,o.Z)(N,2),F=E[0],O=E[1];u.useEffect((function(){g(r)}),[r]);var S=function(e,r){var t=h?(0,i.Z)(h):[],n=t.findIndex((function(e){return e.id===r}));if(n>-1){var a="up"===e&&0!==n?n-1:"down"===e&&n!==(null===t||void 0===t?void 0:t.length)-1?n:void 0,o=(0,m.iD)(h,a),u=o.arr,s=o.t1,l=o.t2,f=(0,c.JU)(v.db,"banners",s.id),d=(0,c.JU)(v.db,"banners",l.id);O([s.id,l.id]),Promise.all([(0,c.pl)(f,s),(0,c.pl)(d,l)]).then((function(){g(u)})).catch().finally((function(){O([])}))}},I=function(){var e=(0,a.Z)((0,n.Z)().mark((function e(r){var t,a,o;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(O([r]),t=h?(0,i.Z)(h):[],a=t.findIndex((function(e){return e.id===r})),e.prev=3,!(a>-1)){e.next=10;break}return o=(0,c.JU)(v.db,"banners",r),e.next=8,Promise.all([(0,c.oe)(o),d.deleteMany([t[a].picture])]);case 8:t.splice(a,1),f.Am.success("X\xf3a th\xe0nh c\xf4ng");case 10:e.next=15;break;case 12:e.prev=12,e.t0=e.catch(3),f.Am.error(p.vh);case 15:return e.prev=15,g(t),O([]),e.finish(15);case 19:case"end":return e.stop()}}),e,null,[[3,12,15,19]])})));return function(r){return e.apply(this,arguments)}}();return(0,y.jsxs)("div",{className:"min-h-screen p-5",children:[(0,y.jsxs)("div",{className:"flex flex-wrap items-center gap-3 mb-5",children:[(0,y.jsx)("h1",{className:"font-medium text-base md:text-lg",children:"Danh s\xe1ch banner"}),(0,y.jsx)("div",{className:"flex-grow"}),(0,y.jsx)(l.rU,{to:"/chothue/tao-banner",children:(0,y.jsxs)("button",{className:"btn",children:[(0,y.jsx)(s.Lfi,{}),"T\u1ea1o banner"]})})]}),(0,y.jsx)("div",{className:"space-y-5",children:null===h||void 0===h?void 0:h.map((function(e,r){return(0,y.jsx)(b,{data:e,first:0===r,last:r===h.length-1,loadingIds:F,onMove:S,onRemove:I},e.id)}))})]})}},8271:function(e){var r="%[a-f0-9]{2}",t=new RegExp(r,"gi"),n=new RegExp("("+r+")+","gi");function a(e,r){try{return decodeURIComponent(e.join(""))}catch(i){}if(1===e.length)return e;r=r||1;var t=e.slice(0,r),n=e.slice(r);return Array.prototype.concat.call([],a(t),a(n))}function i(e){try{return decodeURIComponent(e)}catch(i){for(var r=e.match(t),n=1;n<r.length;n++)r=(e=a(r,n).join("")).match(t);return e}}e.exports=function(e){if("string"!==typeof e)throw new TypeError("Expected `encodedURI` to be of type `string`, got `"+typeof e+"`");try{return e=e.replace(/\+/g," "),decodeURIComponent(e)}catch(r){return function(e){for(var t={"%FE%FF":"\ufffd\ufffd","%FF%FE":"\ufffd\ufffd"},a=n.exec(e);a;){try{t[a[0]]=decodeURIComponent(a[0])}catch(r){var o=i(a[0]);o!==a[0]&&(t[a[0]]=o)}a=n.exec(e)}t["%C2"]="\ufffd";for(var c=Object.keys(t),u=0;u<c.length;u++){var s=c[u];e=e.replace(new RegExp(s,"g"),t[s])}return e}(e)}}},2214:function(e){e.exports=function(e,r){for(var t={},n=Object.keys(e),a=Array.isArray(r),i=0;i<n.length;i++){var o=n[i],c=e[o];(a?-1!==r.indexOf(o):r(o,c,e))&&(t[o]=c)}return t}},1172:function(e,r,t){var n=t(8416).default,a=t(7424).default,i=t(4704).default,o=t(861).default,c=t(2376),u=t(8271),s=t(4266),l=t(2214),f=Symbol("encodeFragmentIdentifier");function d(e){if("string"!==typeof e||1!==e.length)throw new TypeError("arrayFormatSeparator must be single character string")}function p(e,r){return r.encode?r.strict?c(e):encodeURIComponent(e):e}function v(e,r){return r.decode?u(e):e}function m(e){return Array.isArray(e)?e.sort():"object"===typeof e?m(Object.keys(e)).sort((function(e,r){return Number(e)-Number(r)})).map((function(r){return e[r]})):e}function x(e){var r=e.indexOf("#");return-1!==r&&(e=e.slice(0,r)),e}function h(e){var r=(e=x(e)).indexOf("?");return-1===r?"":e.slice(r+1)}function g(e,r){return r.parseNumbers&&!Number.isNaN(Number(e))&&"string"===typeof e&&""!==e.trim()?e=Number(e):!r.parseBooleans||null===e||"true"!==e.toLowerCase()&&"false"!==e.toLowerCase()||(e="true"===e.toLowerCase()),e}function y(e,r){d((r=Object.assign({decode:!0,sort:!0,arrayFormat:"none",arrayFormatSeparator:",",parseNumbers:!1,parseBooleans:!1},r)).arrayFormatSeparator);var t=function(e){var r;switch(e.arrayFormat){case"index":return function(e,t,n){r=/\[(\d*)\]$/.exec(e),e=e.replace(/\[\d*\]$/,""),r?(void 0===n[e]&&(n[e]={}),n[e][r[1]]=t):n[e]=t};case"bracket":return function(e,t,n){r=/(\[\])$/.exec(e),e=e.replace(/\[\]$/,""),r?void 0!==n[e]?n[e]=[].concat(n[e],t):n[e]=[t]:n[e]=t};case"colon-list-separator":return function(e,t,n){r=/(:list)$/.exec(e),e=e.replace(/:list$/,""),r?void 0!==n[e]?n[e]=[].concat(n[e],t):n[e]=[t]:n[e]=t};case"comma":case"separator":return function(r,t,n){var a="string"===typeof t&&t.includes(e.arrayFormatSeparator),i="string"===typeof t&&!a&&v(t,e).includes(e.arrayFormatSeparator);t=i?v(t,e):t;var o=a||i?t.split(e.arrayFormatSeparator).map((function(r){return v(r,e)})):null===t?t:v(t,e);n[r]=o};case"bracket-separator":return function(r,t,n){var a=/(\[\])$/.test(r);if(r=r.replace(/\[\]$/,""),a){var i=null===t?[]:t.split(e.arrayFormatSeparator).map((function(r){return v(r,e)}));void 0!==n[r]?n[r]=[].concat(n[r],i):n[r]=i}else n[r]=t?v(t,e):t};default:return function(e,r,t){void 0!==t[e]?t[e]=[].concat(t[e],r):t[e]=r}}}(r),n=Object.create(null);if("string"!==typeof e)return n;if(!(e=e.trim().replace(/^[?#&]/,"")))return n;var o,c=i(e.split("&"));try{for(c.s();!(o=c.n()).done;){var u=o.value;if(""!==u){var l=s(r.decode?u.replace(/\+/g," "):u,"="),f=a(l,2),p=f[0],x=f[1];x=void 0===x?null:["comma","separator","bracket-separator"].includes(r.arrayFormat)?x:v(x,r),t(v(p,r),x,n)}}}catch(N){c.e(N)}finally{c.f()}for(var h=0,y=Object.keys(n);h<y.length;h++){var b=y[h],j=n[b];if("object"===typeof j&&null!==j)for(var k=0,Z=Object.keys(j);k<Z.length;k++){var w=Z[k];j[w]=g(j[w],r)}else n[b]=g(j,r)}return!1===r.sort?n:(!0===r.sort?Object.keys(n).sort():Object.keys(n).sort(r.sort)).reduce((function(e,r){var t=n[r];return Boolean(t)&&"object"===typeof t&&!Array.isArray(t)?e[r]=m(t):e[r]=t,e}),Object.create(null))}r.extract=h,r.parse=y,r.stringify=function(e,r){if(!e)return"";d((r=Object.assign({encode:!0,strict:!0,arrayFormat:"none",arrayFormatSeparator:","},r)).arrayFormatSeparator);for(var t=function(t){return r.skipNull&&(null===(n=e[t])||void 0===n)||r.skipEmptyString&&""===e[t];var n},n=function(e){switch(e.arrayFormat){case"index":return function(r){return function(t,n){var a=t.length;return void 0===n||e.skipNull&&null===n||e.skipEmptyString&&""===n?t:[].concat(o(t),null===n?[[p(r,e),"[",a,"]"].join("")]:[[p(r,e),"[",p(a,e),"]=",p(n,e)].join("")])}};case"bracket":return function(r){return function(t,n){return void 0===n||e.skipNull&&null===n||e.skipEmptyString&&""===n?t:[].concat(o(t),null===n?[[p(r,e),"[]"].join("")]:[[p(r,e),"[]=",p(n,e)].join("")])}};case"colon-list-separator":return function(r){return function(t,n){return void 0===n||e.skipNull&&null===n||e.skipEmptyString&&""===n?t:[].concat(o(t),null===n?[[p(r,e),":list="].join("")]:[[p(r,e),":list=",p(n,e)].join("")])}};case"comma":case"separator":case"bracket-separator":var r="bracket-separator"===e.arrayFormat?"[]=":"=";return function(t){return function(n,a){return void 0===a||e.skipNull&&null===a||e.skipEmptyString&&""===a?n:(a=null===a?"":a,0===n.length?[[p(t,e),r,p(a,e)].join("")]:[[n,p(a,e)].join(e.arrayFormatSeparator)])}};default:return function(r){return function(t,n){return void 0===n||e.skipNull&&null===n||e.skipEmptyString&&""===n?t:[].concat(o(t),null===n?[p(r,e)]:[[p(r,e),"=",p(n,e)].join("")])}}}}(r),a={},i=0,c=Object.keys(e);i<c.length;i++){var u=c[i];t(u)||(a[u]=e[u])}var s=Object.keys(a);return!1!==r.sort&&s.sort(r.sort),s.map((function(t){var a=e[t];return void 0===a?"":null===a?p(t,r):Array.isArray(a)?0===a.length&&"bracket-separator"===r.arrayFormat?p(t,r)+"[]":a.reduce(n(t),[]).join("&"):p(t,r)+"="+p(a,r)})).filter((function(e){return e.length>0})).join("&")},r.parseUrl=function(e,r){r=Object.assign({decode:!0},r);var t=s(e,"#"),n=a(t,2),i=n[0],o=n[1];return Object.assign({url:i.split("?")[0]||"",query:y(h(e),r)},r&&r.parseFragmentIdentifier&&o?{fragmentIdentifier:v(o,r)}:{})},r.stringifyUrl=function(e,t){t=Object.assign(n({encode:!0,strict:!0},f,!0),t);var a=x(e.url).split("?")[0]||"",i=r.extract(e.url),o=r.parse(i,{sort:!1}),c=Object.assign(o,e.query),u=r.stringify(c,t);u&&(u="?".concat(u));var s=function(e){var r="",t=e.indexOf("#");return-1!==t&&(r=e.slice(t)),r}(e.url);return e.fragmentIdentifier&&(s="#".concat(t[f]?p(e.fragmentIdentifier,t):e.fragmentIdentifier)),"".concat(a).concat(u).concat(s)},r.pick=function(e,t,a){a=Object.assign(n({parseFragmentIdentifier:!0},f,!1),a);var i=r.parseUrl(e,a),o=i.url,c=i.query,u=i.fragmentIdentifier;return r.stringifyUrl({url:o,query:l(c,t),fragmentIdentifier:u},a)},r.exclude=function(e,t,n){var a=Array.isArray(t)?function(e){return!t.includes(e)}:function(e,r){return!t(e,r)};return r.pick(e,a,n)}},4266:function(e){e.exports=function(e,r){if("string"!==typeof e||"string"!==typeof r)throw new TypeError("Expected the arguments to be of type `string`");if(""===r)return[e];var t=e.indexOf(r);return-1===t?[e]:[e.slice(0,t),e.slice(t+r.length)]}},2376:function(e){e.exports=function(e){return encodeURIComponent(e).replace(/[!'()*]/g,(function(e){return"%".concat(e.charCodeAt(0).toString(16).toUpperCase())}))}}}]);