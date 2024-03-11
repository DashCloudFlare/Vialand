"use strict";(self.webpackChunkvialand=self.webpackChunkvialand||[]).push([[598],{9869:function(r,e,n){n.d(e,{Z:function(){return c}});var t=n(4165),a=n(5861),o=n(9489),i=n(1172);function c(r,e,n){return u.apply(this,arguments)}function u(){return(u=(0,a.Z)((0,t.Z)().mark((function r(e,n,a){var c,u,s,l,f,p,d,m,v;return(0,t.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return u=(0,o.v0)(),r.next=3,null===(c=u.currentUser)||void 0===c?void 0:c.getIdToken();case 3:return s=r.sent,l=new Headers({"Content-Type":"application/json",secret:"h6N&d3ZpiUZ@Mx9sjAF0!"}),s&&l.set("Authorization",s),f={method:e,mode:"cors",headers:l},p=n,a&&("GET"===e?(d=i.stringify(a),p+="?"+d):(f.body=a instanceof FormData?a:JSON.stringify(a),a instanceof FormData&&(f.headers={secret:"h6N&d3ZpiUZ@Mx9sjAF0!"}))),r.next=11,fetch(p,f);case 11:if(!(m=r.sent).ok){r.next=18;break}return r.next=15,m.json();case 15:return r.abrupt("return",r.sent);case 18:return r.prev=18,r.next=21,m.json();case 21:throw v=r.sent,new Error(v.message||m.statusText);case 25:throw r.prev=25,r.t0=r.catch(18),r.t0;case 28:case"end":return r.stop()}}),r,null,[[18,25]])})))).apply(this,arguments)}},1716:function(r,e,n){n.r(e),n.d(e,{deleteImages:function(){return f},deleteMany:function(){return c},deleteVideos:function(){return l},upload:function(){return i},uploadImg:function(){return u},uploadVid:function(){return s}});var t=n(8941),a=n(9869),o=t.Z.common.baseApiUrl+"/upload",i=function(r){var e=new FormData;return e.append("file",r),(0,a.Z)("POST",o,e)},c=function(r){if(r.length)return(0,a.Z)("DELETE",o,{ids:r})},u=function(r){var e=new FormData;return e.append("file",r),(0,a.Z)("POST",o+"/image",e)},s=function(r,e){var n=new FormData;return n.append("file",r),n.append("newsId",e),(0,a.Z)("POST",o+"/video",n)},l=function(r){return(0,a.Z)("DELETE",o+"/videos",{ids:r})},f=function(r){return(0,a.Z)("DELETE",o+"/images",{ids:r})}},7629:function(r,e,n){n.d(e,{PU:function(){return o},ZE:function(){return a},vh:function(){return t}});var t="\u0110\xe3 c\xf3 l\u1ed7i x\u1ea3y ra, vui l\xf2ng th\u1eed l\u1ea1i sau \xedt ph\xfat",a="\u0110\xe3 c\xf3 l\u1ed7i x\u1ea3y ra, vui l\xf2ng li\xean h\u1ec7 qu\u1ea3n tr\u1ecb vi\xean",o="Qu\xe1 tr\xecnh t\u1ea3i l\xean \u0111\xe3 b\u1ecb l\u1ed7i. Qu\xfd kh\xe1ch vui l\xf2ng li\xean h\u1ec7 tr\u1ef1c ti\u1ebfp v\u1edbi s\u1ed1 Hotline 0868113025 (ho\u1eb7c Zalo) \u0111\u1ec3 \u0111\u01b0\u1ee3c x\u1eed l\xfd k\u1ecbp th\u1eddi"},1598:function(r,e,n){n.r(e),n.d(e,{default:function(){return b}});var t=n(1413),a=n(4165),o=n(5861),i=n(9439),c=n(573),u=n(7313),s=n(5627),l=n(7864),f=n(2135),p=n(8512),d=n(1716),m=n(1110),v=n(6404),y=n(7629),g=n(5565),h=n(2440),x=n(6417);function b(){var r=(0,s.cI)({defaultValues:{index:0}}),e=r.register,n=r.handleSubmit,b=r.reset,j=r.formState.errors,k=u.useState(void 0),F=(0,i.Z)(k,2),w=F[0],N=F[1],E=function(){var r=(0,o.Z)((0,a.Z)().mark((function r(e){return(0,a.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,p.Am.promise((0,o.Z)((0,a.Z)().mark((function r(){var n,t,o,i;return(0,a.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n=e.url,t=e.index,r.next=3,d.upload(w);case 3:return o=r.sent,i=o.data,r.next=7,(0,c.ET)((0,c.hJ)(g.db,"banners"),{url:n,index:t,picture:i.id});case 7:b(),N(void 0);case 8:case"end":return r.stop()}}),r)}))),{pending:"\u0110ang t\u1ea1o banner",success:"T\u1ea1o banner th\xe0nh c\xf4ng",error:y.vh});case 2:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}();return(0,x.jsxs)("div",{className:"min-h-screen p-5",children:[(0,x.jsxs)("div",{className:"flex items-center mb-5",children:[(0,x.jsx)("h1",{className:"font-medium text-base md:text-lg",children:"T\u1ea1o banner"}),(0,x.jsx)("div",{className:"flex-grow"}),(0,x.jsx)(f.rU,{to:"/chothue/banner",children:(0,x.jsxs)("button",{className:"btn",children:[(0,x.jsx)(l.CF5,{}),"Tr\u1edf v\u1ec1"]})})]}),(0,x.jsxs)("form",{className:"grid grid-cols-6 gap-3",onSubmit:n(E),children:[(0,x.jsx)(m.cw,{className:"col-span-2 md:col-span-1",htmlFor:"index",label:"Th\u1ee9 t\u1ef1",error:j.index,children:(0,x.jsx)("input",(0,t.Z)((0,t.Z)({},e("index",{required:!0,valueAsNumber:!0})),{},{className:"input",type:"number",step:1,min:0}))}),(0,x.jsx)(m.cw,{className:"col-span-4 md:col-span-5",htmlFor:"url",label:"URL",error:j.url,children:(0,x.jsx)("input",(0,t.Z)((0,t.Z)({},e("url",{required:!0,maxLength:300})),{},{className:"input",type:"text"}))}),(0,x.jsx)(m.cw,{className:"col-span-6 md:col-span-3 lg:col-span-2",htmlFor:"picture",label:"H\xecnh \u1ea3nh",children:(0,x.jsx)(m.Ur,{accepts:h.Gs,limitMb:v.Te,onChange:function(r){var e;return N(null!==(e=r[0])&&void 0!==e?e:void 0)}})}),(0,x.jsx)("div",{className:"col-span-4 col-start-1",children:(0,x.jsx)("button",{className:"btn",type:"submit",children:"T\u1ea1o banner"})})]})]})}},8271:function(r){var e="%[a-f0-9]{2}",n=new RegExp(e,"gi"),t=new RegExp("("+e+")+","gi");function a(r,e){try{return decodeURIComponent(r.join(""))}catch(o){}if(1===r.length)return r;e=e||1;var n=r.slice(0,e),t=r.slice(e);return Array.prototype.concat.call([],a(n),a(t))}function o(r){try{return decodeURIComponent(r)}catch(o){for(var e=r.match(n),t=1;t<e.length;t++)e=(r=a(e,t).join("")).match(n);return r}}r.exports=function(r){if("string"!==typeof r)throw new TypeError("Expected `encodedURI` to be of type `string`, got `"+typeof r+"`");try{return r=r.replace(/\+/g," "),decodeURIComponent(r)}catch(e){return function(r){for(var n={"%FE%FF":"\ufffd\ufffd","%FF%FE":"\ufffd\ufffd"},a=t.exec(r);a;){try{n[a[0]]=decodeURIComponent(a[0])}catch(e){var i=o(a[0]);i!==a[0]&&(n[a[0]]=i)}a=t.exec(r)}n["%C2"]="\ufffd";for(var c=Object.keys(n),u=0;u<c.length;u++){var s=c[u];r=r.replace(new RegExp(s,"g"),n[s])}return r}(r)}}},2214:function(r){r.exports=function(r,e){for(var n={},t=Object.keys(r),a=Array.isArray(e),o=0;o<t.length;o++){var i=t[o],c=r[i];(a?-1!==e.indexOf(i):e(i,c,r))&&(n[i]=c)}return n}},1172:function(r,e,n){var t=n(8416).default,a=n(7424).default,o=n(4704).default,i=n(861).default,c=n(2376),u=n(8271),s=n(4266),l=n(2214),f=Symbol("encodeFragmentIdentifier");function p(r){if("string"!==typeof r||1!==r.length)throw new TypeError("arrayFormatSeparator must be single character string")}function d(r,e){return e.encode?e.strict?c(r):encodeURIComponent(r):r}function m(r,e){return e.decode?u(r):r}function v(r){return Array.isArray(r)?r.sort():"object"===typeof r?v(Object.keys(r)).sort((function(r,e){return Number(r)-Number(e)})).map((function(e){return r[e]})):r}function y(r){var e=r.indexOf("#");return-1!==e&&(r=r.slice(0,e)),r}function g(r){var e=(r=y(r)).indexOf("?");return-1===e?"":r.slice(e+1)}function h(r,e){return e.parseNumbers&&!Number.isNaN(Number(r))&&"string"===typeof r&&""!==r.trim()?r=Number(r):!e.parseBooleans||null===r||"true"!==r.toLowerCase()&&"false"!==r.toLowerCase()||(r="true"===r.toLowerCase()),r}function x(r,e){p((e=Object.assign({decode:!0,sort:!0,arrayFormat:"none",arrayFormatSeparator:",",parseNumbers:!1,parseBooleans:!1},e)).arrayFormatSeparator);var n=function(r){var e;switch(r.arrayFormat){case"index":return function(r,n,t){e=/\[(\d*)\]$/.exec(r),r=r.replace(/\[\d*\]$/,""),e?(void 0===t[r]&&(t[r]={}),t[r][e[1]]=n):t[r]=n};case"bracket":return function(r,n,t){e=/(\[\])$/.exec(r),r=r.replace(/\[\]$/,""),e?void 0!==t[r]?t[r]=[].concat(t[r],n):t[r]=[n]:t[r]=n};case"colon-list-separator":return function(r,n,t){e=/(:list)$/.exec(r),r=r.replace(/:list$/,""),e?void 0!==t[r]?t[r]=[].concat(t[r],n):t[r]=[n]:t[r]=n};case"comma":case"separator":return function(e,n,t){var a="string"===typeof n&&n.includes(r.arrayFormatSeparator),o="string"===typeof n&&!a&&m(n,r).includes(r.arrayFormatSeparator);n=o?m(n,r):n;var i=a||o?n.split(r.arrayFormatSeparator).map((function(e){return m(e,r)})):null===n?n:m(n,r);t[e]=i};case"bracket-separator":return function(e,n,t){var a=/(\[\])$/.test(e);if(e=e.replace(/\[\]$/,""),a){var o=null===n?[]:n.split(r.arrayFormatSeparator).map((function(e){return m(e,r)}));void 0!==t[e]?t[e]=[].concat(t[e],o):t[e]=o}else t[e]=n?m(n,r):n};default:return function(r,e,n){void 0!==n[r]?n[r]=[].concat(n[r],e):n[r]=e}}}(e),t=Object.create(null);if("string"!==typeof r)return t;if(!(r=r.trim().replace(/^[?#&]/,"")))return t;var i,c=o(r.split("&"));try{for(c.s();!(i=c.n()).done;){var u=i.value;if(""!==u){var l=s(e.decode?u.replace(/\+/g," "):u,"="),f=a(l,2),d=f[0],y=f[1];y=void 0===y?null:["comma","separator","bracket-separator"].includes(e.arrayFormat)?y:m(y,e),n(m(d,e),y,t)}}}catch(N){c.e(N)}finally{c.f()}for(var g=0,x=Object.keys(t);g<x.length;g++){var b=x[g],j=t[b];if("object"===typeof j&&null!==j)for(var k=0,F=Object.keys(j);k<F.length;k++){var w=F[k];j[w]=h(j[w],e)}else t[b]=h(j,e)}return!1===e.sort?t:(!0===e.sort?Object.keys(t).sort():Object.keys(t).sort(e.sort)).reduce((function(r,e){var n=t[e];return Boolean(n)&&"object"===typeof n&&!Array.isArray(n)?r[e]=v(n):r[e]=n,r}),Object.create(null))}e.extract=g,e.parse=x,e.stringify=function(r,e){if(!r)return"";p((e=Object.assign({encode:!0,strict:!0,arrayFormat:"none",arrayFormatSeparator:","},e)).arrayFormatSeparator);for(var n=function(n){return e.skipNull&&(null===(t=r[n])||void 0===t)||e.skipEmptyString&&""===r[n];var t},t=function(r){switch(r.arrayFormat){case"index":return function(e){return function(n,t){var a=n.length;return void 0===t||r.skipNull&&null===t||r.skipEmptyString&&""===t?n:[].concat(i(n),null===t?[[d(e,r),"[",a,"]"].join("")]:[[d(e,r),"[",d(a,r),"]=",d(t,r)].join("")])}};case"bracket":return function(e){return function(n,t){return void 0===t||r.skipNull&&null===t||r.skipEmptyString&&""===t?n:[].concat(i(n),null===t?[[d(e,r),"[]"].join("")]:[[d(e,r),"[]=",d(t,r)].join("")])}};case"colon-list-separator":return function(e){return function(n,t){return void 0===t||r.skipNull&&null===t||r.skipEmptyString&&""===t?n:[].concat(i(n),null===t?[[d(e,r),":list="].join("")]:[[d(e,r),":list=",d(t,r)].join("")])}};case"comma":case"separator":case"bracket-separator":var e="bracket-separator"===r.arrayFormat?"[]=":"=";return function(n){return function(t,a){return void 0===a||r.skipNull&&null===a||r.skipEmptyString&&""===a?t:(a=null===a?"":a,0===t.length?[[d(n,r),e,d(a,r)].join("")]:[[t,d(a,r)].join(r.arrayFormatSeparator)])}};default:return function(e){return function(n,t){return void 0===t||r.skipNull&&null===t||r.skipEmptyString&&""===t?n:[].concat(i(n),null===t?[d(e,r)]:[[d(e,r),"=",d(t,r)].join("")])}}}}(e),a={},o=0,c=Object.keys(r);o<c.length;o++){var u=c[o];n(u)||(a[u]=r[u])}var s=Object.keys(a);return!1!==e.sort&&s.sort(e.sort),s.map((function(n){var a=r[n];return void 0===a?"":null===a?d(n,e):Array.isArray(a)?0===a.length&&"bracket-separator"===e.arrayFormat?d(n,e)+"[]":a.reduce(t(n),[]).join("&"):d(n,e)+"="+d(a,e)})).filter((function(r){return r.length>0})).join("&")},e.parseUrl=function(r,e){e=Object.assign({decode:!0},e);var n=s(r,"#"),t=a(n,2),o=t[0],i=t[1];return Object.assign({url:o.split("?")[0]||"",query:x(g(r),e)},e&&e.parseFragmentIdentifier&&i?{fragmentIdentifier:m(i,e)}:{})},e.stringifyUrl=function(r,n){n=Object.assign(t({encode:!0,strict:!0},f,!0),n);var a=y(r.url).split("?")[0]||"",o=e.extract(r.url),i=e.parse(o,{sort:!1}),c=Object.assign(i,r.query),u=e.stringify(c,n);u&&(u="?".concat(u));var s=function(r){var e="",n=r.indexOf("#");return-1!==n&&(e=r.slice(n)),e}(r.url);return r.fragmentIdentifier&&(s="#".concat(n[f]?d(r.fragmentIdentifier,n):r.fragmentIdentifier)),"".concat(a).concat(u).concat(s)},e.pick=function(r,n,a){a=Object.assign(t({parseFragmentIdentifier:!0},f,!1),a);var o=e.parseUrl(r,a),i=o.url,c=o.query,u=o.fragmentIdentifier;return e.stringifyUrl({url:i,query:l(c,n),fragmentIdentifier:u},a)},e.exclude=function(r,n,t){var a=Array.isArray(n)?function(r){return!n.includes(r)}:function(r,e){return!n(r,e)};return e.pick(r,a,t)}},4266:function(r){r.exports=function(r,e){if("string"!==typeof r||"string"!==typeof e)throw new TypeError("Expected the arguments to be of type `string`");if(""===e)return[r];var n=r.indexOf(e);return-1===n?[r]:[r.slice(0,n),r.slice(n+e.length)]}},2376:function(r){r.exports=function(r){return encodeURIComponent(r).replace(/[!'()*]/g,(function(r){return"%".concat(r.charCodeAt(0).toString(16).toUpperCase())}))}}}]);