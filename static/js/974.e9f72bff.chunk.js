"use strict";(self.webpackChunkvialand=self.webpackChunkvialand||[]).push([[974],{7629:function(r,e,t){t.d(e,{PU:function(){return a},vh:function(){return n}});var n="\u0110\xe3 c\xf3 l\u1ed7i x\u1ea3y ra, vui l\xf2ng th\u1eed l\u1ea1i sau \xedt ph\xfat",a="Qu\xe1 tr\xecnh t\u1ea3i l\xean \u0111\xe3 b\u1ecb l\u1ed7i. Qu\xfd kh\xe1ch vui l\xf2ng li\xean h\u1ec7 tr\u1ef1c ti\u1ebfp v\u1edbi s\u1ed1 Hotline 0868113025 (ho\u1eb7c Zalo) \u0111\u1ec3 \u0111\u01b0\u1ee3c x\u1eed l\xfd k\u1ecbp th\u1eddi"},6791:function(r,e,t){t.d(e,{r:function(){return i}});var n=t(4165),a=t(5861),u=t(9439),c=t(7313),o=t(9225);function i(r){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],t=(0,c.useState)("idle"),i=(0,u.Z)(t,2),s=i[0],l=i[1],f=(0,c.useState)(null),p=(0,u.Z)(f,2),d=p[0],v=p[1],m=(0,c.useState)(null),h=(0,u.Z)(m,2),g=h[0],y=h[1],x="pending"===s,b="error"===s,k="error"===s||"success"===s,j=(0,c.useCallback)(function(){var e=(0,a.Z)((0,n.Z)().mark((function e(t){var a;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return l("pending"),v(null),y(null),e.prev=3,e.next=6,r();case 6:return a=e.sent,t&&(v(a),l("success")),e.abrupt("return",a);case 11:e.prev=11,e.t0=e.catch(3),t&&(l("error"),y(e.t0));case 14:case"end":return e.stop()}}),e,null,[[3,11]])})));return function(r){return e.apply(this,arguments)}}(),[r]);return(0,o.u)((function(r){e&&j(r())}),[e]),(0,c.useEffect)((function(){return function(){l("idle"),v(null),y(null)}}),[]),{isLoading:x,isError:b,status:s,data:d,error:g,isComplete:k,execute:function(){return j(!0)}}}},3737:function(r,e,t){t.d(e,{M:function(){return u}});var n=t(9439),a=t(7313);function u(r){var e=r.ref,t=r.offset,u=void 0===t?50:t,c=r.loading,o=r.canLoadMore,i=r.fetchFn,s=(0,a.useState)(!1),l=(0,n.Z)(s,2),f=l[0],p=l[1];(0,a.useEffect)((function(){if(null!==e&&void 0!==e&&e.current){var r=function(r){var e=r.target,t=e.getBoundingClientRect().height;e.scrollTop+t>=e.scrollHeight-u?p(!0):p(!1)};return null===e||void 0===e||e.current.addEventListener("scroll",r),function(){var t;null===e||void 0===e||null===(t=e.current)||void 0===t||t.removeEventListener("scroll",r)}}if(document){var t=function(r){var e=r.currentTarget,t=e.getElementById("footer"),n=e.scrollingElement,a=n.scrollHeight,c=n.scrollTop,o=n.clientHeight;Math.abs(a-o-c)<t.getBoundingClientRect().height+u?p(!0):p(!1)};return document.addEventListener("scroll",t),function(){document.removeEventListener("scroll",t)}}}),[]),(0,a.useEffect)((function(){f&&!c&&o&&(null===i||void 0===i||i())}),[f])}},9225:function(r,e,t){t.d(e,{u:function(){return a}});var n=t(7313);function a(r,e){var t=(0,n.useRef)(r);t.current=r;var a=(0,n.useRef)(!1);(0,n.useEffect)((function(){return a.current=!0,t.current((function(){return a.current})),function(){a.current=!1}}),e)}},8468:function(r,e,t){t.d(e,{K:function(){return c}});var n=t(1172),a=t(7313),u=t(8467);function c(r){var e=(0,u.TH)(),t=e.pathname,c=e.search,o=(0,u.s0)(),i=(0,a.useMemo)((function(){return n.parse(c)}),[c]),s=(0,a.useCallback)((function(r){o(t+"?"+n.stringify(r,{skipEmptyString:!0,skipNull:!0}),{replace:!0})}),[t,o]);return(0,a.useEffect)((function(){r&&s(r)}),[]),[i,s]}},3974:function(r,e,t){t.r(e),t.d(e,{default:function(){return N}});var n=t(9439),a=t(3061),u=t(7313),c=t(4511),o=t(7864),i=t(8512),s=t(4800),l=t(8468),f=t(3433),p=t(4165),d=t(1413),v=t(5861),m=t(4925),h=t(573),g=t(6404),y=t(7629),x=t(5884),b=t(6791),k=t(3737),j=t(5565),w=["execute"];var Z=t(6417),E=(0,u.memo)((function(r){var e=r.user,t=r.data,n=void 0===t?[]:t,a=r.pushNews;return(0,Z.jsx)(Z.Fragment,{children:n.map((function(r){return(0,Z.jsx)(s.eu,{data:r,user:e,onPushNews:a},r.id)}))})}));function N(r){var e=r.readOnly,t=void 0!==e&&e,N=r.user,F=(0,c.$)().t,S=(0,u.useRef)(null),O=(0,u.useRef)(null),C=(0,l.K)(),I=(0,n.Z)(C,2),A=I[0],R=I[1],U=function(r,e,t){var a=(0,x.P)().refetchProfile,o=(0,c.$)().t,s=(0,u.useState)(!1),l=(0,n.Z)(s,2),Z=l[0],E=l[1],N=(0,u.useState)([]),F=(0,n.Z)(N,2),S=F[0],O=F[1],C=(0,u.useState)(void 0),I=(0,n.Z)(C,2),A=I[0],R=I[1],U=(0,b.r)((function(){return _.apply(this,arguments)}),!1),L=U.execute,$=(0,m.Z)(U,w);function T(){return(T=(0,v.Z)((0,p.Z)().mark((function r(){var e;return(0,p.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,L();case 3:(e=r.sent)&&O((function(r){return[].concat((0,f.Z)(r),(0,f.Z)(e))})),r.next=9;break;case 7:r.prev=7,r.t0=r.catch(0);case 9:case"end":return r.stop()}}),r,null,[[0,7]])})))).apply(this,arguments)}function _(){return(_=(0,v.Z)((0,p.Z)().mark((function r(){var n,a,u,c,o;return(0,p.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,n=[],e&&n.push((0,h.ar)("contactNumber","==",e)),A&&n.push((0,h.TQ)(A)),t||n.push((0,h.ar)("published","==",!0),(0,h.b9)(10)),a=h.IO.apply(void 0,[(0,h.hJ)(j.db,"properties"),(0,h.Xo)("createdAt","desc")].concat(n)),u=[],r.next=9,(0,h.PL)(a);case 9:return c=r.sent,o=c.docs[c.docs.length-1],c.forEach((function(r){u.push((0,d.Z)({id:r.id},r.data()))})),R(o),E(!1),r.abrupt("return",u);case 17:r.prev=17,r.t0=r.catch(0);case 19:case"end":return r.stop()}}),r,null,[[0,17]])})))).apply(this,arguments)}(0,k.M)({ref:r,canLoadMore:!!A,loading:$.isLoading,fetchFn:function(){return T.apply(this,arguments)}});var B=function(){var r=(0,v.Z)((0,p.Z)().mark((function r(e,n){var u,c,s,l,f,m,x;return(0,p.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(!t){r.next=29;break}return u=(0,h.JU)(j.db,"profiles",t.uid),r.next=4,(0,h.QT)(u);case 4:if((c=r.sent).exists()){r.next=9;break}return i.Am.error(y.PU),n(),r.abrupt("return");case 9:if(s=c.data(),!((l=s.coins)<g.z1)){r.next=14;break}return i.Am.error(o("not_enough_money_please_deposit_more")),n(),r.abrupt("return");case 14:if(f=S.slice(),!((m=f.findIndex((function(r){return r.id===e.id})))>-1)){r.next=29;break}return f[m]=(0,d.Z)((0,d.Z)({},f[m]),{},{createdAt:h.EK.now().seconds}),r.prev=18,x=(0,h.JU)(j.db,"properties",e.id),r.next=22,(0,h.i3)(j.db,function(){var r=(0,v.Z)((0,p.Z)().mark((function r(e){return(0,p.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:e.set(x,f[m]),e.set(u,{coins:l-g.z1});case 2:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}());case 22:return r.next=24,a();case 24:i.Am.success(o("push_news_successfully")),O(f);case 26:return r.prev=26,n(),r.finish(26);case 29:case"end":return r.stop()}}),r,null,[[18,,26,29]])})));return function(e,t){return r.apply(this,arguments)}}(),M=(0,u.useCallback)((function(){O([]),R(void 0),E(!0)}),[]);return(0,u.useEffect)((function(){M()}),[e]),(0,u.useEffect)((function(){function r(){return(r=(0,v.Z)((0,p.Z)().mark((function r(){var e;return(0,p.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,L();case 2:e=r.sent,O(null!==e&&void 0!==e?e:[]);case 4:case"end":return r.stop()}}),r)})))).apply(this,arguments)}Z&&function(){r.apply(this,arguments)}()}),[Z]),(0,d.Z)((0,d.Z)({},$),{},{data:S,clear:M,pushNews:B})}(S,A.phoneNumber,N),L=U.data,$=U.isLoading,T=U.pushNews;return(0,Z.jsxs)("div",{className:(0,a.Z)("h-full flex items-center flex-col",!t&&"p-2 md:p-5"),children:[!t&&(0,Z.jsxs)("div",{className:"flex gap-2 mb-3",children:[(0,Z.jsx)("input",{ref:O,defaultValue:A.phoneNumber,placeholder:"0911xxxxxx",className:"input",type:"text",maxLength:12}),(0,Z.jsxs)("button",{className:"btn",type:"button",onClick:function(){if(O.current){var r=O.current.value;r&&r.match(/^[0-9]*$/)?R({phoneNumber:r.trim()}):i.Am.warn("".concat(F("invalid_phone_number")))}},children:[(0,Z.jsx)(o.RB5,{}),F("search")]})]}),!$&&!(null!==L&&void 0!==L&&L.length)&&(0,Z.jsx)(s.x4,{title:"Kh\xf4ng c\xf3 th\xf4ng tin"}),(0,Z.jsxs)("div",{className:"max-w-[1000px] w-full flex-1 overflow-y-auto",ref:S,children:[(0,Z.jsx)(E,{data:L,user:N,pushNews:T}),$&&(0,Z.jsx)(s.x4,{title:(0,Z.jsxs)("div",{className:"flex items-center gap-2",children:[(0,Z.jsx)(o.Z7b,{className:"animate-spin"})," ",F("searching")]})})]})]})}},8271:function(r){var e="%[a-f0-9]{2}",t=new RegExp(e,"gi"),n=new RegExp("("+e+")+","gi");function a(r,e){try{return decodeURIComponent(r.join(""))}catch(u){}if(1===r.length)return r;e=e||1;var t=r.slice(0,e),n=r.slice(e);return Array.prototype.concat.call([],a(t),a(n))}function u(r){try{return decodeURIComponent(r)}catch(u){for(var e=r.match(t),n=1;n<e.length;n++)e=(r=a(e,n).join("")).match(t);return r}}r.exports=function(r){if("string"!==typeof r)throw new TypeError("Expected `encodedURI` to be of type `string`, got `"+typeof r+"`");try{return r=r.replace(/\+/g," "),decodeURIComponent(r)}catch(e){return function(r){for(var t={"%FE%FF":"\ufffd\ufffd","%FF%FE":"\ufffd\ufffd"},a=n.exec(r);a;){try{t[a[0]]=decodeURIComponent(a[0])}catch(e){var c=u(a[0]);c!==a[0]&&(t[a[0]]=c)}a=n.exec(r)}t["%C2"]="\ufffd";for(var o=Object.keys(t),i=0;i<o.length;i++){var s=o[i];r=r.replace(new RegExp(s,"g"),t[s])}return r}(r)}}},2214:function(r){r.exports=function(r,e){for(var t={},n=Object.keys(r),a=Array.isArray(e),u=0;u<n.length;u++){var c=n[u],o=r[c];(a?-1!==e.indexOf(c):e(c,o,r))&&(t[c]=o)}return t}},1172:function(r,e,t){var n=t(8416).default,a=t(7424).default,u=t(4704).default,c=t(861).default,o=t(2376),i=t(8271),s=t(4266),l=t(2214),f=Symbol("encodeFragmentIdentifier");function p(r){if("string"!==typeof r||1!==r.length)throw new TypeError("arrayFormatSeparator must be single character string")}function d(r,e){return e.encode?e.strict?o(r):encodeURIComponent(r):r}function v(r,e){return e.decode?i(r):r}function m(r){return Array.isArray(r)?r.sort():"object"===typeof r?m(Object.keys(r)).sort((function(r,e){return Number(r)-Number(e)})).map((function(e){return r[e]})):r}function h(r){var e=r.indexOf("#");return-1!==e&&(r=r.slice(0,e)),r}function g(r){var e=(r=h(r)).indexOf("?");return-1===e?"":r.slice(e+1)}function y(r,e){return e.parseNumbers&&!Number.isNaN(Number(r))&&"string"===typeof r&&""!==r.trim()?r=Number(r):!e.parseBooleans||null===r||"true"!==r.toLowerCase()&&"false"!==r.toLowerCase()||(r="true"===r.toLowerCase()),r}function x(r,e){p((e=Object.assign({decode:!0,sort:!0,arrayFormat:"none",arrayFormatSeparator:",",parseNumbers:!1,parseBooleans:!1},e)).arrayFormatSeparator);var t=function(r){var e;switch(r.arrayFormat){case"index":return function(r,t,n){e=/\[(\d*)\]$/.exec(r),r=r.replace(/\[\d*\]$/,""),e?(void 0===n[r]&&(n[r]={}),n[r][e[1]]=t):n[r]=t};case"bracket":return function(r,t,n){e=/(\[\])$/.exec(r),r=r.replace(/\[\]$/,""),e?void 0!==n[r]?n[r]=[].concat(n[r],t):n[r]=[t]:n[r]=t};case"colon-list-separator":return function(r,t,n){e=/(:list)$/.exec(r),r=r.replace(/:list$/,""),e?void 0!==n[r]?n[r]=[].concat(n[r],t):n[r]=[t]:n[r]=t};case"comma":case"separator":return function(e,t,n){var a="string"===typeof t&&t.includes(r.arrayFormatSeparator),u="string"===typeof t&&!a&&v(t,r).includes(r.arrayFormatSeparator);t=u?v(t,r):t;var c=a||u?t.split(r.arrayFormatSeparator).map((function(e){return v(e,r)})):null===t?t:v(t,r);n[e]=c};case"bracket-separator":return function(e,t,n){var a=/(\[\])$/.test(e);if(e=e.replace(/\[\]$/,""),a){var u=null===t?[]:t.split(r.arrayFormatSeparator).map((function(e){return v(e,r)}));void 0!==n[e]?n[e]=[].concat(n[e],u):n[e]=u}else n[e]=t?v(t,r):t};default:return function(r,e,t){void 0!==t[r]?t[r]=[].concat(t[r],e):t[r]=e}}}(e),n=Object.create(null);if("string"!==typeof r)return n;if(!(r=r.trim().replace(/^[?#&]/,"")))return n;var c,o=u(r.split("&"));try{for(o.s();!(c=o.n()).done;){var i=c.value;if(""!==i){var l=s(e.decode?i.replace(/\+/g," "):i,"="),f=a(l,2),d=f[0],h=f[1];h=void 0===h?null:["comma","separator","bracket-separator"].includes(e.arrayFormat)?h:v(h,e),t(v(d,e),h,n)}}}catch(E){o.e(E)}finally{o.f()}for(var g=0,x=Object.keys(n);g<x.length;g++){var b=x[g],k=n[b];if("object"===typeof k&&null!==k)for(var j=0,w=Object.keys(k);j<w.length;j++){var Z=w[j];k[Z]=y(k[Z],e)}else n[b]=y(k,e)}return!1===e.sort?n:(!0===e.sort?Object.keys(n).sort():Object.keys(n).sort(e.sort)).reduce((function(r,e){var t=n[e];return Boolean(t)&&"object"===typeof t&&!Array.isArray(t)?r[e]=m(t):r[e]=t,r}),Object.create(null))}e.extract=g,e.parse=x,e.stringify=function(r,e){if(!r)return"";p((e=Object.assign({encode:!0,strict:!0,arrayFormat:"none",arrayFormatSeparator:","},e)).arrayFormatSeparator);for(var t=function(t){return e.skipNull&&(null===(n=r[t])||void 0===n)||e.skipEmptyString&&""===r[t];var n},n=function(r){switch(r.arrayFormat){case"index":return function(e){return function(t,n){var a=t.length;return void 0===n||r.skipNull&&null===n||r.skipEmptyString&&""===n?t:[].concat(c(t),null===n?[[d(e,r),"[",a,"]"].join("")]:[[d(e,r),"[",d(a,r),"]=",d(n,r)].join("")])}};case"bracket":return function(e){return function(t,n){return void 0===n||r.skipNull&&null===n||r.skipEmptyString&&""===n?t:[].concat(c(t),null===n?[[d(e,r),"[]"].join("")]:[[d(e,r),"[]=",d(n,r)].join("")])}};case"colon-list-separator":return function(e){return function(t,n){return void 0===n||r.skipNull&&null===n||r.skipEmptyString&&""===n?t:[].concat(c(t),null===n?[[d(e,r),":list="].join("")]:[[d(e,r),":list=",d(n,r)].join("")])}};case"comma":case"separator":case"bracket-separator":var e="bracket-separator"===r.arrayFormat?"[]=":"=";return function(t){return function(n,a){return void 0===a||r.skipNull&&null===a||r.skipEmptyString&&""===a?n:(a=null===a?"":a,0===n.length?[[d(t,r),e,d(a,r)].join("")]:[[n,d(a,r)].join(r.arrayFormatSeparator)])}};default:return function(e){return function(t,n){return void 0===n||r.skipNull&&null===n||r.skipEmptyString&&""===n?t:[].concat(c(t),null===n?[d(e,r)]:[[d(e,r),"=",d(n,r)].join("")])}}}}(e),a={},u=0,o=Object.keys(r);u<o.length;u++){var i=o[u];t(i)||(a[i]=r[i])}var s=Object.keys(a);return!1!==e.sort&&s.sort(e.sort),s.map((function(t){var a=r[t];return void 0===a?"":null===a?d(t,e):Array.isArray(a)?0===a.length&&"bracket-separator"===e.arrayFormat?d(t,e)+"[]":a.reduce(n(t),[]).join("&"):d(t,e)+"="+d(a,e)})).filter((function(r){return r.length>0})).join("&")},e.parseUrl=function(r,e){e=Object.assign({decode:!0},e);var t=s(r,"#"),n=a(t,2),u=n[0],c=n[1];return Object.assign({url:u.split("?")[0]||"",query:x(g(r),e)},e&&e.parseFragmentIdentifier&&c?{fragmentIdentifier:v(c,e)}:{})},e.stringifyUrl=function(r,t){t=Object.assign(n({encode:!0,strict:!0},f,!0),t);var a=h(r.url).split("?")[0]||"",u=e.extract(r.url),c=e.parse(u,{sort:!1}),o=Object.assign(c,r.query),i=e.stringify(o,t);i&&(i="?".concat(i));var s=function(r){var e="",t=r.indexOf("#");return-1!==t&&(e=r.slice(t)),e}(r.url);return r.fragmentIdentifier&&(s="#".concat(t[f]?d(r.fragmentIdentifier,t):r.fragmentIdentifier)),"".concat(a).concat(i).concat(s)},e.pick=function(r,t,a){a=Object.assign(n({parseFragmentIdentifier:!0},f,!1),a);var u=e.parseUrl(r,a),c=u.url,o=u.query,i=u.fragmentIdentifier;return e.stringifyUrl({url:c,query:l(o,t),fragmentIdentifier:i},a)},e.exclude=function(r,t,n){var a=Array.isArray(t)?function(r){return!t.includes(r)}:function(r,e){return!t(r,e)};return e.pick(r,a,n)}},4266:function(r){r.exports=function(r,e){if("string"!==typeof r||"string"!==typeof e)throw new TypeError("Expected the arguments to be of type `string`");if(""===e)return[r];var t=r.indexOf(e);return-1===t?[r]:[r.slice(0,t),r.slice(t+e.length)]}},2376:function(r){r.exports=function(r){return encodeURIComponent(r).replace(/[!'()*]/g,(function(r){return"%".concat(r.charCodeAt(0).toString(16).toUpperCase())}))}}}]);